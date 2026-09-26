import React from 'react';
import { Workflow, Layers, Database, Globe, Info, Sparkles } from 'lucide-react';
import { SkillMapping } from '../components/SkillMapping';
import { ResearchBadge } from '../components/ResearchBadge';

export const CanonicalMappingPage = ({ onSelectCareer }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--accent-purple)', fontWeight: 700 }}>
              MCA Research Contribution
            </span>
            <ResearchBadge type="current" text="Semantic Normalization Layer" size="sm" />
          </div>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            Skill Knowledge Mapping
          </h2>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Harmonizing semantic variance across U.S. O*NET descriptors and European ESCO competencies.
          </p>
        </div>

        <div style={{
          padding: '8px 14px',
          borderRadius: '8px',
          background: 'rgba(139, 92, 246, 0.1)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          fontSize: '0.78rem',
          color: 'var(--accent-purple)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <Sparkles size={14} />
          <span>1,840 Canonical Entities Indexed</span>
        </div>
      </div>

      {/* Render the full interactive SkillMapping component */}
      <SkillMapping onSelectCareer={onSelectCareer} />
    </div>
  );
};
