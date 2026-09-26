import React from 'react';
import { ArrowUpRight, TrendingUp, Sparkles, ChevronRight, Check } from 'lucide-react';
import { ResearchBadge } from './ResearchBadge';

export const CareerCard = ({ career, onSelect, onViewSkillGap }) => {
  const getMatchColor = (score) => {
    if (score >= 80) return "var(--accent-emerald)";
    if (score >= 70) return "var(--accent-cyan)";
    if (score >= 60) return "var(--accent-amber)";
    return "var(--accent-rose)";
  };

  const matchColor = getMatchColor(career.matchScore);

  return (
    <div
      className="glass-card glass-card-interactive"
      style={{
        padding: '22px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative'
      }}
      onClick={() => onSelect(career.id)}
    >
      <div>
        {/* Top Header: Category & O*NET Badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <span style={{
            fontSize: '0.74rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            color: 'var(--accent-cyan)',
            background: 'rgba(6, 182, 212, 0.1)',
            padding: '3px 8px',
            borderRadius: '4px'
          }}>
            {career.category}
          </span>

          <ResearchBadge type="onet" text={career.oNetCode} size="sm" />
        </div>

        {/* Title & Match Score */}
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '8px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.01em' }}>
            {career.title}
          </h3>
          <div style={{
            fontSize: '1.35rem',
            fontWeight: 800,
            color: matchColor,
            display: 'flex',
            alignItems: 'baseline',
            gap: '2px'
          }}>
            {career.matchScore}<span style={{ fontSize: '0.85rem' }}>%</span>
          </div>
        </div>

        {/* Demand & Match Meter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
          <TrendingUp size={13} style={{ color: 'var(--accent-emerald)' }} />
          <span>{career.demand}</span>
        </div>

        {/* Short description */}
        <p style={{
          fontSize: '0.82rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.45,
          marginBottom: '16px',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {career.shortDescription}
        </p>

        {/* Technology Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
          {career.tags.map((tag, idx) => (
            <span
              key={idx}
              style={{
                fontSize: '0.72rem',
                padding: '2px 7px',
                borderRadius: '4px',
                background: 'rgba(255, 255, 255, 0.05)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Required Skills Match Preview */}
      <div>
        <div style={{
          padding: '10px 12px',
          borderRadius: '8px',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid var(--border-subtle)',
          marginBottom: '14px'
        }}>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
            CORE SKILL ALIGNMENT:
          </div>
          <div style={{ fontSize: '0.78rem', color: '#fff', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {career.requiredSkills.slice(0, 4).map((s, idx) => (
              <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                <Check size={11} style={{ color: s.gap <= 5 ? 'var(--accent-emerald)' : 'var(--accent-amber)' }} />
                <span>{s.name}</span>
                {idx < 3 && <span style={{ color: 'var(--text-muted)' }}>•</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(career.id);
            }}
            className="btn btn-secondary btn-sm"
            style={{ flex: 1, fontSize: '0.78rem' }}
          >
            <span>Requirements</span>
            <ChevronRight size={14} />
          </button>

          {onViewSkillGap && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onViewSkillGap(career.id);
              }}
              className="btn btn-ghost btn-sm"
              style={{ fontSize: '0.78rem', color: 'var(--accent-cyan)' }}
              title="Jump to Skill Gap Analysis"
            >
              <span>Gap</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
