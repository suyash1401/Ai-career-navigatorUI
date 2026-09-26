import React, { useState } from 'react';
import { 
  Compass, Filter, Search, Sparkles, TrendingUp, 
  Layers, ArrowUpDown, ChevronRight
} from 'lucide-react';
import { CareerCard } from '../components/CareerCard';
import { ResearchBadge } from '../components/ResearchBadge';
import { initialCareers, careerCategories } from '../data/careers';

export const CareerExplorer = ({ onSelectCareer, onNavigate, onViewSkillGap }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [minMatch, setMinMatch] = useState(0);

  // Filter careers
  const filteredCareers = initialCareers.filter(career => {
    const matchCat = selectedCategory === "All" || career.category === selectedCategory;
    const matchQuery = career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       career.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
                       career.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    const matchScoreFilter = career.matchScore >= minMatch;
    return matchCat && matchQuery && matchScoreFilter;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', fontWeight: 700 }}>
              Occupational Taxonomy Explorer
            </span>
            <ResearchBadge type="onet" text="O*NET-SOC 2019 Standard" size="sm" />
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            Career Explorer
          </h2>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Standardized technical professions indexed against academic computer applications competencies.
          </p>
        </div>

        {/* Quick Filter Counters */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <div style={{
            padding: '10px 16px',
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid var(--border-subtle)',
            fontSize: '0.8rem',
            textAlign: 'center'
          }}>
            <div style={{ color: 'var(--text-muted)' }}>Indexed Occupations</div>
            <strong style={{ fontSize: '1.1rem', color: '#fff' }}>10 Profiles</strong>
          </div>

          <div style={{
            padding: '10px 16px',
            borderRadius: '10px',
            background: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            fontSize: '0.8rem',
            textAlign: 'center'
          }}>
            <div style={{ color: 'var(--accent-emerald)' }}>Top Match</div>
            <strong style={{ fontSize: '1.1rem', color: '#fff' }}>87% Software Dev</strong>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '14px',
        padding: '14px 18px',
        borderRadius: '12px',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid var(--border-subtle)'
      }}>
        {/* Category Pills */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {careerCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`btn btn-sm ${selectedCategory === cat ? 'btn-primary' : 'btn-ghost'}`}
              style={{
                padding: '5px 12px',
                fontSize: '0.78rem',
                border: selectedCategory === cat ? '1px solid var(--accent-cyan)' : '1px solid transparent'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search & Match Threshold Controls */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {/* Match Score Threshold */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', color: 'var(--text-muted)' }}>
            <span>Min Match:</span>
            <select
              value={minMatch}
              onChange={(e) => setMinMatch(Number(e.target.value))}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                color: '#fff',
                padding: '5px 8px',
                borderRadius: '6px',
                fontSize: '0.76rem',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value={0} style={{ background: '#0b1324' }}>All Matches</option>
              <option value={70} style={{ background: '#0b1324' }}>≥ 70% Strong</option>
              <option value={80} style={{ background: '#0b1324' }}>≥ 80% Optimal</option>
            </select>
          </div>

          <div style={{ position: 'relative', width: '220px' }}>
            <Search size={14} style={{ position: 'absolute', left: '10px', top: '10px', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search careers or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="glass-input"
              style={{ padding: '6px 10px 6px 30px', fontSize: '0.8rem' }}
            />
          </div>
        </div>
      </div>

      {/* Grid of Career Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '20px'
      }}>
        {filteredCareers.map((career) => (
          <CareerCard
            key={career.id}
            career={career}
            onSelect={(id) => {
              onSelectCareer(id);
              onNavigate('career-detail');
            }}
            onViewSkillGap={(id) => {
              if (onViewSkillGap) {
                onViewSkillGap(id);
              } else {
                onSelectCareer(id);
                onNavigate('skill-gap');
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};
