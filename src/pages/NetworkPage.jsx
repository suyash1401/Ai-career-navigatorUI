import React from 'react';
import { Network, Sparkles, Filter, Layers } from 'lucide-react';
import { CareerNetwork } from '../components/CareerNetwork';
import { ResearchBadge } from '../components/ResearchBadge';

export const NetworkPage = ({ onSelectCareer }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', fontWeight: 700 }}>
              Bipartite Occupational Graph
            </span>
            <ResearchBadge type="completed" text="Graph Visualization Engine" size="sm" />
          </div>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            Occupation-Skill-Technology Network
          </h2>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Interactive topology tracing relationships between technologies, canonical skills, and target professions.
          </p>
        </div>

        <div style={{
          padding: '8px 14px',
          borderRadius: '8px',
          background: 'rgba(6, 182, 212, 0.1)',
          border: '1px solid rgba(6, 182, 212, 0.3)',
          fontSize: '0.78rem',
          color: 'var(--accent-cyan)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <Sparkles size={14} />
          <span>Interactive Edge Physics</span>
        </div>
      </div>

      {/* Render the full interactive CareerNetwork component */}
      <CareerNetwork onSelectCareer={onSelectCareer} />
    </div>
  );
};
