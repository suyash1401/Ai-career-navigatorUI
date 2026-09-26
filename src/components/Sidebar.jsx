import React from 'react';
import { 
  LayoutDashboard, User, Code2, Compass, GitFork, 
  Map, Network, Sparkles, Award, BarChart3, Settings, 
  GitCompare, Workflow, ChevronRight
} from 'lucide-react';

export const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, section: 'core' },
  { id: 'profile', label: 'My Profile', icon: User, section: 'core' },
  { id: 'skills', label: 'Skills Visualization', icon: Code2, section: 'core' },
  { id: 'explorer', label: 'Career Explorer', icon: Compass, section: 'core', badge: '10 Roles' },
  { id: 'skill-gap', label: 'Skill Gap Analysis', icon: GitCompare, section: 'analytics' },
  { id: 'roadmap', label: 'Career Roadmap', icon: Map, section: 'analytics' },
  { id: 'recommendations', label: 'AI Recommendations', icon: Sparkles, section: 'analytics', badge: 'AI Fit' },
  { id: 'assessment', label: 'Skill Assessment', icon: Award, section: 'analytics' },
  { id: 'mapping', label: 'Canonical Mapping', icon: Workflow, section: 'research', badge: 'Research' },
  { id: 'network', label: 'Skill Network', icon: Network, section: 'research', badge: 'Interactive' },
  { id: 'architecture', label: 'Research Pipeline', icon: GitFork, section: 'research' },
  { id: 'research', label: 'Dataset Insights', icon: BarChart3, section: 'research' },
  { id: 'settings', label: 'Settings', icon: Settings, section: 'system' }
];

export const Sidebar = ({ currentPage, onNavigate, isCollapsed, toggleCollapse }) => {
  const coreItems = navigationItems.filter(item => item.section === 'core');
  const analyticsItems = navigationItems.filter(item => item.section === 'analytics');
  const researchItems = navigationItems.filter(item => item.section === 'research');
  const systemItems = navigationItems.filter(item => item.section === 'system');

  const renderNavGroup = (title, items) => (
    <div style={{ marginBottom: '18px' }}>
      {!isCollapsed && (
        <div style={{
          fontSize: '0.68rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: 'var(--text-muted)',
          padding: '0 12px 6px 12px'
        }}>
          {title}
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: isCollapsed ? 'center' : 'space-between',
                padding: isCollapsed ? '10px' : '9px 12px',
                borderRadius: '8px',
                background: isActive 
                  ? 'linear-gradient(90deg, rgba(6, 182, 212, 0.16) 0%, rgba(59, 130, 246, 0.08) 100%)' 
                  : 'transparent',
                border: '1px solid',
                borderColor: isActive ? 'rgba(6, 182, 212, 0.4)' : 'transparent',
                color: isActive ? '#fff' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.2s',
                textDecoration: 'none',
                width: '100%',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                  e.currentTarget.style.color = '#fff';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }
              }}
              title={isCollapsed ? item.label : undefined}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Icon 
                  size={18} 
                  style={{
                    color: isActive ? 'var(--accent-cyan)' : 'inherit',
                    flexShrink: 0
                  }} 
                />
                {!isCollapsed && (
                  <span style={{ fontSize: '0.86rem', fontWeight: isActive ? 600 : 500 }}>
                    {item.label}
                  </span>
                )}
              </div>

              {!isCollapsed && item.badge && (
                <span style={{
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  padding: '1px 6px',
                  borderRadius: '4px',
                  background: item.section === 'research' 
                    ? 'rgba(168, 85, 247, 0.18)' 
                    : 'rgba(6, 182, 212, 0.15)',
                  color: item.section === 'research' 
                    ? 'var(--accent-purple)' 
                    : 'var(--accent-cyan)',
                  border: '1px solid',
                  borderColor: item.section === 'research' 
                    ? 'rgba(168, 85, 247, 0.3)' 
                    : 'rgba(6, 182, 212, 0.3)'
                }}>
                  {item.badge}
                </span>
              )}

              {isActive && (
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: '15%',
                  bottom: '15%',
                  width: '3px',
                  borderRadius: '0 4px 4px 0',
                  background: 'var(--accent-cyan)',
                  boxShadow: '0 0 8px var(--accent-cyan)'
                }} />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <aside style={{
      width: isCollapsed ? '68px' : '255px',
      background: 'rgba(11, 16, 28, 0.95)',
      backdropFilter: 'blur(16px)',
      borderRight: '1px solid var(--border-subtle)',
      height: 'calc(100vh - 68px)',
      position: 'sticky',
      top: '68px',
      overflowY: 'auto',
      padding: isCollapsed ? '16px 8px' : '18px 14px',
      transition: 'width 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      zIndex: 800
    }}>
      <div>
        {renderNavGroup('Student Workspace', coreItems)}
        {renderNavGroup('Skill Intelligence', analyticsItems)}
        {renderNavGroup('MCA Research Foundation', researchItems)}
        {renderNavGroup('Preferences', systemItems)}
      </div>

      {/* Research Project Status Footnote */}
      {!isCollapsed && (
        <div style={{
          padding: '12px',
          borderRadius: '10px',
          background: 'rgba(6, 182, 212, 0.05)',
          border: '1px solid rgba(6, 182, 212, 0.2)',
          marginTop: '10px'
        }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)', display: 'inline-block' }} />
            O*NET & ESCO INTEGRATION
          </div>
          <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px', lineHeight: 1.3 }}>
            Canonical ontology prototype evaluating semantic equivalence in technical skill taxonomies.
          </p>
        </div>
      )}
    </aside>
  );
};
