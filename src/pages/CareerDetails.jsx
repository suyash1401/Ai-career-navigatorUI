import React, { useState } from 'react';
import { 
  ArrowLeft, CheckCircle2, AlertCircle, TrendingUp, 
  Map, GitCompare, ExternalLink, Sparkles, BookOpen, Layers
} from 'lucide-react';
import { initialCareers } from '../data/careers';
import { ResearchBadge } from '../components/ResearchBadge';
import { SkillGapChart } from '../components/SkillGapChart';

export const CareerDetails = ({ careerId = "CAR-01", onBack, onNavigateToSkillGap, onNavigateToRoadmap }) => {
  const career = initialCareers.find(c => c.id === careerId) || initialCareers[0];
  const [activeTab, setActiveTab] = useState("bars"); // "bars" or "table"

  const getMatchColor = (score) => {
    if (score >= 80) return "var(--accent-emerald)";
    if (score >= 70) return "var(--accent-cyan)";
    if (score >= 60) return "var(--accent-amber)";
    return "var(--accent-rose)";
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Back button & Action Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
        <button
          onClick={onBack}
          className="btn btn-ghost btn-sm"
          style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)' }}
        >
          <ArrowLeft size={16} />
          <span>Back to Career Explorer</span>
        </button>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => onNavigateToSkillGap(career.id)}
            className="btn btn-secondary btn-sm"
          >
            <GitCompare size={15} className="text-cyan-400" />
            <span>Analyze Skill Gap</span>
          </button>

          <button
            onClick={() => onNavigateToRoadmap(career.id)}
            className="btn btn-primary btn-sm"
          >
            <Map size={15} />
            <span>View Learning Roadmap</span>
          </button>
        </div>
      </div>

      {/* Main Career Overview Header Card */}
      <div
        className="glass-card"
        style={{
          padding: '28px',
          background: 'linear-gradient(135deg, rgba(14, 23, 42, 0.95) 0%, rgba(10, 16, 32, 0.95) 100%)',
          border: '1px solid rgba(6, 182, 212, 0.35)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                {career.category}
              </span>
              <ResearchBadge type="onet" text={career.oNetCode} size="sm" />
              <ResearchBadge type="esco" text={`Code: ${career.escoCode}`} size="sm" />
            </div>

            <h1 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: '8px' }}>
              {career.title}
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent-emerald)' }}>
                <TrendingUp size={15} /> {career.demand}
              </span>
              <span>•</span>
              <span>Growth: {career.industryGrowth}</span>
            </div>
          </div>

          {/* Match Score Capsule */}
          <div style={{
            padding: '16px 24px',
            borderRadius: '14px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: `1.5px solid ${getMatchColor(career.matchScore)}`,
            textAlign: 'center',
            boxShadow: `0 0 20px ${getMatchColor(career.matchScore)}33`
          }}>
            <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>
              Profile Match
            </div>
            <div style={{ fontSize: '2.2rem', fontWeight: 900, color: getMatchColor(career.matchScore), lineHeight: 1.1 }}>
              {career.matchScore}%
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
              High Statistical Fit
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <p style={{
          marginTop: '20px',
          paddingTop: '16px',
          borderTop: '1px solid var(--border-subtle)',
          fontSize: '0.9rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.6
        }}>
          {career.fullDescription}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
          {career.tags.map((tag, idx) => (
            <span
              key={idx}
              style={{
                fontSize: '0.76rem',
                padding: '3px 10px',
                borderRadius: '6px',
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#fff',
                border: '1px solid var(--border-subtle)'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Section 10 Core: Skill Requirements & Level Comparison */}
      <div className="glass-card" style={{ padding: '26px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>
              Skill Requirements & Benchmark Levels
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              Comparing student competency against O*NET expected industry standards.
            </p>
          </div>

          {/* View Toggle (Interactive Bars vs Data Table) */}
          <div style={{ display: 'flex', gap: '6px', background: 'rgba(255, 255, 255, 0.05)', padding: '4px', borderRadius: '8px' }}>
            <button
              onClick={() => setActiveTab("bars")}
              className={`btn btn-sm ${activeTab === "bars" ? "btn-primary" : "btn-ghost"}`}
              style={{ padding: '4px 12px', fontSize: '0.76rem' }}
            >
              Comparison Bars
            </button>
            <button
              onClick={() => setActiveTab("table")}
              className={`btn btn-sm ${activeTab === "table" ? "btn-primary" : "btn-ghost"}`}
              style={{ padding: '4px 12px', fontSize: '0.76rem' }}
            >
              Requirements Table
            </button>
          </div>
        </div>

        {activeTab === "bars" ? (
          <SkillGapChart requiredSkills={career.requiredSkills} />
        ) : (
          /* Side-by-Side Comparison Table requested in Section 10 */
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-medium)', textAlign: 'left', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '12px 14px' }}>Skill Competency</th>
                  <th style={{ padding: '12px 14px' }}>Domain</th>
                  <th style={{ padding: '12px 14px' }}>Your Current Level</th>
                  <th style={{ padding: '12px 14px' }}>Required Level</th>
                  <th style={{ padding: '12px 14px' }}>Skill Gap</th>
                  <th style={{ padding: '12px 14px' }}>Criticality</th>
                </tr>
              </thead>
              <tbody>
                {career.requiredSkills.map((s, idx) => {
                  const gap = Math.max(0, s.required - s.current);
                  const isMatch = s.current >= s.required;
                  return (
                    <tr
                      key={idx}
                      style={{
                        borderBottom: '1px solid var(--border-subtle)',
                        background: idx % 2 === 0 ? 'rgba(255, 255, 255, 0.015)' : 'transparent'
                      }}
                    >
                      <td style={{ padding: '12px 14px', fontWeight: 700, color: '#fff' }}>
                        {s.name}
                      </td>
                      <td style={{ padding: '12px 14px', color: 'var(--text-secondary)' }}>
                        {s.category}
                      </td>
                      <td style={{ padding: '12px 14px', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                        {s.current}%
                      </td>
                      <td style={{ padding: '12px 14px', color: '#fff', fontWeight: 700 }}>
                        {s.required}%
                      </td>
                      <td style={{ padding: '12px 14px' }}>
                        {isMatch ? (
                          <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>
                            0% (Satisfied)
                          </span>
                        ) : (
                          <span style={{ color: gap > 15 ? 'var(--accent-rose)' : 'var(--accent-amber)', fontWeight: 700 }}>
                            -{gap}%
                          </span>
                        )}
                      </td>
                      <td style={{ padding: '12px 14px' }}>
                        <span style={{
                          fontSize: '0.72rem',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          fontWeight: 600,
                          background: s.criticality === "Critical" ? 'rgba(244, 63, 94, 0.15)' : 'rgba(6, 182, 212, 0.15)',
                          color: s.criticality === "Critical" ? 'var(--accent-rose)' : 'var(--accent-cyan)'
                        }}>
                          {s.criticality}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* O*NET Work Activities & Explainable AI Alignment */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
        {/* O*NET Tasks Box */}
        <div className="glass-card" style={{ padding: '22px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <BookOpen size={16} className="text-cyan-400" />
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>
              O*NET Core Occupational Tasks
            </h4>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {career.oNetTasks.map((task, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--accent-cyan)', fontWeight: 800 }}>•</span>
                <span>{task}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Explainable AI Fit Box */}
        <div className="glass-card" style={{ padding: '22px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <Sparkles size={16} className="text-purple-400" />
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>
              Why Your Profile Aligns
            </h4>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '14px' }}>
            {career.alignmentSummary}
          </p>
          <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--accent-amber)', fontWeight: 700, marginBottom: '6px' }}>
            Recommended Bridge Actions:
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {career.missingCompetencies.map((mc, idx) => (
              <div key={idx} style={{ fontSize: '0.78rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: 'var(--accent-amber)' }}>→</span>
                <span>{mc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
