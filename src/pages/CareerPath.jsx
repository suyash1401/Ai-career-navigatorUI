import React, { useState } from 'react';
import { 
  Map, Compass, Sparkles, CheckCircle2, ChevronRight, 
  Layers, ExternalLink, Filter
} from 'lucide-react';
import { Roadmap } from '../components/Roadmap';
import { ResearchBadge } from '../components/ResearchBadge';
import { initialCareers } from '../data/careers';

export const CareerPath = ({ selectedCareerId = "CAR-01", onSelectCareer }) => {
  const [activeCareerId, setActiveCareerId] = useState(selectedCareerId);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Header and Career Selector */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', fontWeight: 700 }}>
              Topological Learning Pathway Engine
            </span>
            <ResearchBadge type="planned" text="Adaptive Prerequisite Sorter" size="sm" />
          </div>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            Career Pathways & Learning Roadmap
          </h2>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Sequential 7-stage competency roadmap transitioning from foundational skills to production readiness.
          </p>
        </div>

        {/* Role Selector */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid var(--border-subtle)',
          padding: '8px 14px',
          borderRadius: '10px'
        }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Target Pathway:</span>
          <select
            value={activeCareerId}
            onChange={(e) => {
              setActiveCareerId(e.target.value);
              if (onSelectCareer) onSelectCareer(e.target.value);
            }}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: '0.88rem',
              fontWeight: 700,
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            {initialCareers.map(c => (
              <option key={c.id} value={c.id} style={{ background: '#0b1324', color: '#fff' }}>
                {c.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* High-Level Methodology Sequence */}
      <div style={{
        padding: '16px 20px',
        borderRadius: '12px',
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        fontSize: '0.78rem',
        color: 'var(--text-secondary)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>Research Progression Logic:</span>
          <span>Current Skills</span>
          <span>→</span>
          <span style={{ color: 'var(--accent-amber)' }}>Skill Gap Identification</span>
          <span>→</span>
          <span>Core Skill Development</span>
          <span>→</span>
          <span>Advanced Skills</span>
          <span>→</span>
          <span style={{ color: 'var(--accent-purple)' }}>Capstone Projects</span>
          <span>→</span>
          <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>Target Career Readiness</span>
        </div>
      </div>

      {/* Render Roadmap Component */}
      <Roadmap careerId={activeCareerId} />
    </div>
  );
};
