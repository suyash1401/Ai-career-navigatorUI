import React, { useState } from 'react';
import { 
  Sparkles, CheckCircle2, ArrowRight, ChevronDown, ChevronUp, 
  Compass, GitCompare, Info, TrendingUp, ShieldAlert, Award
} from 'lucide-react';
import { initialRecommendations } from '../data/recommendations';
import { ResearchBadge } from '../components/ResearchBadge';

export const Recommendations = ({ onSelectCareer, onNavigateToSkillGap, onNavigateToRoadmap }) => {
  const [expandedId, setExpandedId] = useState("CAR-01"); // Default open top match

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--accent-purple)', fontWeight: 700 }}>
              Explainable AI Inference Model
            </span>
            <ResearchBadge type="planned" text="Cosine Vector + Rule Constraints" size="sm" />
          </div>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            AI Career Recommendations
          </h2>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Transparent occupational recommendations with explicit rationale and priority upskilling vectors.
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
          <span>Explainable Reasoning Active</span>
        </div>
      </div>

      {/* Recommendations List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        {initialRecommendations.map((rec) => {
          const isExpanded = expandedId === rec.careerId;

          return (
            <div
              key={rec.careerId}
              className={`glass-card ${isExpanded ? 'animate-pulse-cyan' : ''}`}
              style={{
                borderRadius: '14px',
                border: isExpanded ? '1.5px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                overflow: 'hidden',
                transition: 'all 0.25s'
              }}
            >
              {/* Card Header Banner */}
              <div
                onClick={() => toggleExpand(rec.careerId)}
                style={{
                  padding: '20px 24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  background: isExpanded ? 'rgba(6, 182, 212, 0.05)' : 'transparent'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: rec.projectedFitRank === 1 ? 'linear-gradient(135deg, #06b6d4, #3b82f6)' : 'rgba(255, 255, 255, 0.06)',
                    color: rec.projectedFitRank === 1 ? '#030712' : '#fff',
                    fontWeight: 900,
                    fontSize: '1.1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    #{rec.projectedFitRank}
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff' }}>
                        {rec.title}
                      </h3>
                      <ResearchBadge type="onet" text={rec.oNetCode} size="sm" />
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      {rec.category} • {rec.confidenceTier}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--accent-emerald)', lineHeight: 1 }}>
                      {rec.matchPercentage}%
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      Skill Alignment
                    </div>
                  </div>

                  <button
                    className="btn btn-ghost btn-sm"
                    style={{ padding: '6px', color: 'var(--text-muted)' }}
                  >
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
              </div>

              {/* Matching & Missing Skills Preview */}
              <div style={{
                padding: '0 24px 18px 24px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '16px',
                fontSize: '0.82rem'
              }}>
                {/* Matching Skills (Green checks) */}
                <div style={{ padding: '12px 14px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--accent-emerald)', fontWeight: 700, marginBottom: '6px' }}>
                    Matching Skills Satisfied
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {rec.matchingSkills.map((ms, idx) => (
                      <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#fff', fontSize: '0.78rem', background: 'rgba(0, 0, 0, 0.2)', padding: '3px 8px', borderRadius: '4px' }}>
                        <CheckCircle2 size={12} className="text-emerald-400" />
                        <span>{ms.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Missing Skills (Amber arrows) */}
                <div style={{ padding: '12px 14px', borderRadius: '8px', background: 'rgba(245, 158, 11, 0.05)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--accent-amber)', fontWeight: 700, marginBottom: '6px' }}>
                    Skill Gaps to Close
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {rec.missingSkills.map((mis, idx) => (
                      <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#fff', fontSize: '0.78rem', background: 'rgba(0, 0, 0, 0.2)', padding: '3px 8px', borderRadius: '4px' }}>
                        <span style={{ color: 'var(--accent-amber)', fontWeight: 700 }}>→</span>
                        <span>{mis.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Expandable Section 15: "Why this career?" Explainability */}
              {isExpanded && (
                <div style={{
                  padding: '20px 24px',
                  borderTop: '1px solid var(--border-subtle)',
                  background: 'rgba(0, 0, 0, 0.25)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Sparkles size={16} />
                      <span>Why this career? (Explainable AI Rationale)</span>
                    </h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                      {rec.explanation.summary}
                    </p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                    <div>
                      <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--accent-emerald)', fontWeight: 700, marginBottom: '8px' }}>
                        Your Profile Matches Because:
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {rec.explanation.strengths.map((str, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8rem', color: '#fff' }}>
                            <span style={{ color: 'var(--accent-emerald)' }}>✓</span>
                            <span>{str}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--accent-amber)', fontWeight: 700, marginBottom: '8px' }}>
                        Skills That Could Improve Alignment:
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {rec.explanation.improvementOpportunities.map((opp, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8rem', color: '#fff' }}>
                            <span style={{ color: 'var(--accent-amber)' }}>→</span>
                            <span>{opp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: 'rgba(6, 182, 212, 0.08)',
                    fontSize: '0.78rem',
                    color: 'var(--accent-cyan)'
                  }}>
                    <b>Impact Projection: </b>{rec.explanation.impactProjection}
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '6px' }}>
                    <button
                      onClick={() => onNavigateToSkillGap(rec.careerId)}
                      className="btn btn-secondary btn-sm"
                    >
                      <GitCompare size={14} className="text-cyan-400" />
                      <span>View Skill Gap</span>
                    </button>

                    <button
                      onClick={() => onSelectCareer(rec.careerId)}
                      className="btn btn-primary btn-sm"
                    >
                      <Compass size={14} />
                      <span>Explore Career Profile</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
