import React from 'react';
import { AlertCircle, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';

export const SkillGapChart = ({ requiredSkills = [] }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {requiredSkills.map((item, idx) => {
        const gap = Math.max(0, item.required - item.current);
        const isMatched = item.current >= item.required;
        const gapColor = gap > 20 ? 'var(--accent-rose)' : gap > 10 ? 'var(--accent-amber)' : 'var(--accent-cyan)';

        return (
          <div
            key={idx}
            style={{
              padding: '12px 14px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-subtle)',
              transition: 'background 0.2s'
            }}
          >
            {/* Header: Skill Name, Criticality Badge & Scores */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#fff' }}>
                  {item.name}
                </span>
                <span style={{
                  fontSize: '0.68rem',
                  padding: '1px 6px',
                  borderRadius: '4px',
                  fontWeight: 600,
                  background: item.criticality === 'Critical' 
                    ? 'rgba(244, 63, 94, 0.15)' 
                    : item.criticality === 'Essential' 
                    ? 'rgba(6, 182, 212, 0.15)' 
                    : 'rgba(255, 255, 255, 0.08)',
                  color: item.criticality === 'Critical' 
                    ? 'var(--accent-rose)' 
                    : item.criticality === 'Essential' 
                    ? 'var(--accent-cyan)' 
                    : 'var(--text-muted)'
                }}>
                  {item.criticality}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.78rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>
                  Current: <strong style={{ color: 'var(--accent-cyan)' }}>{item.current}%</strong>
                </span>
                <span style={{ color: 'var(--text-muted)' }}>
                  Required: <strong style={{ color: '#fff' }}>{item.required}%</strong>
                </span>
                {isMatched ? (
                  <span style={{ color: 'var(--accent-emerald)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '2px' }}>
                    <CheckCircle size={13} /> Aligned
                  </span>
                ) : (
                  <span style={{ color: gapColor, fontWeight: 700 }}>
                    Gap: -{gap}%
                  </span>
                )}
              </div>
            </div>

            {/* Overlapping Comparison Bar */}
            <div style={{
              width: '100%',
              height: '10px',
              borderRadius: '999px',
              background: 'rgba(255, 255, 255, 0.08)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Target / Required marker indicator */}
              <div style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                width: `${item.required}%`,
                background: 'rgba(255, 255, 255, 0.12)',
                borderRadius: '999px'
              }} />

              {/* Student Current Progress */}
              <div style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                width: `${item.current}%`,
                background: isMatched ? 'var(--grad-emerald-cyan)' : 'var(--grad-cyan-blue)',
                borderRadius: '999px',
                zIndex: 2,
                boxShadow: isMatched ? '0 0 10px rgba(16, 185, 129, 0.4)' : '0 0 10px rgba(6, 182, 212, 0.4)'
              }} />

              {/* Skill Gap Highlight if needed */}
              {!isMatched && (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: `${item.current}%`,
                  width: `${gap}%`,
                  background: gapColor,
                  opacity: 0.7,
                  borderRadius: '0 999px 999px 0',
                  zIndex: 1
                }} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
