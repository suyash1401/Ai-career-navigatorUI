import React, { useState, useRef, useEffect } from 'react';
import { 
  Compass, Search, Bell, Sparkles, ChevronDown, CheckCircle2, 
  ExternalLink, Layers, GraduationCap, X, SlidersHorizontal, BookOpen
} from 'lucide-react';
import { initialCareers } from '../data/careers';
import { initialSkills } from '../data/skills';

export const Navbar = ({ 
  currentPage, 
  onNavigate, 
  student, 
  onSelectCareer, 
  toggleSidebar, 
  isSidebarOpen 
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const searchRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter careers and skills for search
  const filteredCareers = searchQuery.trim()
    ? initialCareers.filter(c => 
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 4)
    : [];

  const filteredSkills = searchQuery.trim()
    ? initialSkills.filter(s => 
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 4)
    : [];

  const notifications = [
    { id: 1, title: "O*NET 28.0 Taxonomy Synced", time: "10 mins ago", type: "system", read: false },
    { id: 2, title: "Diagnostic Assessment Completed", time: "2 hours ago", type: "assessment", read: false },
    { id: 3, title: "New Canonical Normalization Cluster (CANON-05)", time: "1 day ago", type: "research", read: true }
  ];

  return (
    <header style={{
      height: '68px',
      background: 'rgba(9, 13, 22, 0.88)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      position: 'sticky',
      top: 0,
      zIndex: 900
    }}>
      {/* Left Brand Identity */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button
          onClick={toggleSidebar}
          className="btn btn-ghost btn-sm"
          style={{ display: 'flex', padding: '8px', color: 'var(--text-secondary)' }}
          title="Toggle Navigation Menu"
        >
          <SlidersHorizontal size={18} />
        </button>

        <div 
          onClick={() => onNavigate('landing')}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
        >
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(6, 182, 212, 0.4)'
          }}>
            <Compass size={22} color="#030712" strokeWidth={2.4} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.02em', color: '#fff' }}>
                AI Career Navigator
              </span>
              <span style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                padding: '2px 6px',
                borderRadius: '4px',
                background: 'rgba(6, 182, 212, 0.15)',
                color: 'var(--accent-cyan)',
                border: '1px solid rgba(6, 182, 212, 0.3)'
              }}>
                MCA RESEARCH
              </span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              Occupational Skill Intelligence & Canonical Normalization
            </div>
          </div>
        </div>
      </div>

      {/* Middle Global Search */}
      <div ref={searchRef} style={{ position: 'relative', width: '360px', maxWidth: '100%' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '10px',
          padding: '6px 14px',
          gap: '10px',
          transition: 'all 0.2s'
        }}>
          <Search size={16} style={{ color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search careers, skills, or taxonomies..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsSearchOpen(true);
            }}
            onFocus={() => setIsSearchOpen(true)}
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#fff',
              fontSize: '0.85rem',
              width: '100%'
            }}
          />
          {searchQuery && (
            <button 
              onClick={() => { setSearchQuery(""); setIsSearchOpen(false); }}
              style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Search Results Autocomplete Dropdown */}
        {isSearchOpen && searchQuery.trim() && (
          <div style={{
            position: 'absolute',
            top: '44px',
            left: 0,
            right: 0,
            background: '#0e172a',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '10px',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.7)',
            padding: '10px',
            zIndex: 950,
            maxHeight: '340px',
            overflowY: 'auto'
          }}>
            {filteredCareers.length === 0 && filteredSkills.length === 0 ? (
              <div style={{ padding: '12px', fontSize: '0.82rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                No matching career or skill records found for "{searchQuery}"
              </div>
            ) : (
              <>
                {filteredCareers.length > 0 && (
                  <div style={{ marginBottom: '8px' }}>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', fontWeight: 700, padding: '4px 8px' }}>
                      Careers ({filteredCareers.length})
                    </div>
                    {filteredCareers.map(career => (
                      <div
                        key={career.id}
                        onClick={() => {
                          onSelectCareer(career.id);
                          onNavigate('career-detail');
                          setIsSearchOpen(false);
                          setSearchQuery("");
                        }}
                        style={{
                          padding: '8px 10px',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          background: 'transparent',
                          transition: 'background 0.15s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      >
                        <div>
                          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>{career.title}</div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>O*NET {career.oNetCode} • {career.category}</div>
                        </div>
                        <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>
                          {career.matchScore}% Match
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {filteredSkills.length > 0 && (
                  <div>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--accent-purple)', fontWeight: 700, padding: '4px 8px' }}>
                      Technical Skills ({filteredSkills.length})
                    </div>
                    {filteredSkills.map(skill => (
                      <div
                        key={skill.id}
                        onClick={() => {
                          onNavigate('skills');
                          setIsSearchOpen(false);
                          setSearchQuery("");
                        }}
                        style={{
                          padding: '8px 10px',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          background: 'transparent',
                          transition: 'background 0.15s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      >
                        <div>
                          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>{skill.name}</div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{skill.category} • Canonical: {skill.canonicalName.slice(0, 26)}...</div>
                        </div>
                        <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--accent-cyan)' }}>
                          {skill.proficiency}% Level
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>

      {/* Right Controls: Notifications, View Switcher & Student Profile */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        {/* Landing Page Quick Toggle */}
        <button
          onClick={() => onNavigate(currentPage === 'landing' ? 'dashboard' : 'landing')}
          className="btn btn-secondary btn-sm"
          style={{ fontSize: '0.8rem', padding: '6px 12px' }}
        >
          {currentPage === 'landing' ? (
            <>
              <Layers size={14} className="text-cyan-400" />
              <span>Open Student Dashboard</span>
            </>
          ) : (
            <>
              <BookOpen size={14} className="text-purple-400" />
              <span>Project Landing</span>
            </>
          )}
        </button>

        {/* Notifications Icon & Popover */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            className="btn btn-ghost"
            style={{ position: 'relative', padding: '8px', borderRadius: '8px' }}
            title="Notifications"
          >
            <Bell size={18} style={{ color: 'var(--text-secondary)' }} />
            <span style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--accent-cyan)',
              boxShadow: '0 0 8px var(--accent-cyan)'
            }} />
          </button>

          {isNotificationOpen && (
            <div style={{
              position: 'absolute',
              right: 0,
              top: '46px',
              width: '300px',
              background: '#0d1527',
              border: '1px solid var(--border-medium)',
              borderRadius: '12px',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.7)',
              padding: '12px',
              zIndex: 960
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', paddingBottom: '6px', borderBottom: '1px solid var(--border-subtle)' }}>
                <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#fff' }}>Research Notifications</span>
                <span style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)' }}>2 Unread</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {notifications.map(n => (
                  <div key={n.id} style={{
                    padding: '8px',
                    borderRadius: '6px',
                    background: n.read ? 'rgba(255, 255, 255, 0.02)' : 'rgba(6, 182, 212, 0.08)',
                    border: '1px solid',
                    borderColor: n.read ? 'transparent' : 'rgba(6, 182, 212, 0.2)'
                  }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#fff' }}>{n.title}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px' }}>{n.time}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Student Profile Quick Capsule */}
        <div 
          onClick={() => onNavigate('profile')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '5px 10px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '24px',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.4)'}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
        >
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
            color: '#030712',
            fontWeight: 800,
            fontSize: '0.78rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {student.avatar || "SK"}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
              {student.name}
            </span>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
              MCA Candidate • 82% Ready
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
