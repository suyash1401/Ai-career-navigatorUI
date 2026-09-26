import React from 'react';
import { CheckCircle2, AlertCircle, ArrowUpRight, Code, Database, Globe, Cpu, Cloud, Wrench } from 'lucide-react';
import { ProgressBar } from './ProgressBar';

export const SkillCard = ({ skill, onClick }) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Programming": return <Code size={15} className="text-cyan-400" />;
      case "Database": return <Database size={15} className="text-blue-400" />;
      case "Web Development": return <Globe size={15} className="text-emerald-400" />;
      case "AI / ML": return <Cpu size={15} className="text-purple-400" />;
      case "Cloud": return <Cloud size={15} className="text-sky-400" />;
      case "Tools": return <Wrench size={15} className="text-amber-400" />;
      default: return <Code size={15} className="text-cyan-400" />;
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "Mastery": return "var(--accent-emerald)";
      case "Advanced": return "var(--accent-cyan)";
      case "Intermediate": return "var(--accent-purple)";
      case "Foundational": return "var(--accent-amber)";
      default: return "var(--accent-cyan)";
    }
  };

  return (
    <div
      onClick={() => onClick(skill)}
      className="glass-card glass-card-interactive"
      style={{
        padding: '16px 18px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative'
      }}
    >
      <div>
        {/* Top Header: Category and Verified */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {getCategoryIcon(skill.category)}
            <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              {skill.category}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {skill.verified ? (
              <span title="Verified by Coursework / Assessment" style={{ display: 'flex', alignItems: 'center', gap: '3px', color: 'var(--accent-emerald)', fontSize: '0.7rem' }}>
                <CheckCircle2 size={12} />
                <span>Verified</span>
              </span>
            ) : (
              <span title="Self-Reported" style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>
                Self-Reported
              </span>
            )}
          </div>
        </div>

        {/* Skill Title & Level */}
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '8px' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>
            {skill.name}
          </h4>
          <span style={{
            fontSize: '0.74rem',
            fontWeight: 700,
            color: getLevelColor(skill.level),
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '2px 8px',
            borderRadius: '4px'
          }}>
            {skill.level}
          </span>
        </div>

        {/* Canonical Normalized Mapping Reference */}
        <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginBottom: '14px', lineHeight: 1.3 }}>
          <span style={{ color: 'var(--accent-purple)', fontWeight: 600 }}>Mapped: </span>
          {skill.canonicalName}
        </div>
      </div>

      {/* Progress & Bottom Bar */}
      <div>
        <ProgressBar value={skill.proficiency} variant="dynamic" height={6} showLabel={false} />
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px', fontSize: '0.74rem' }}>
          <span style={{ color: 'var(--text-muted)' }}>
            {skill.projectsCount} Projects • {skill.experienceMonths}m exp
          </span>
          <span style={{ color: '#fff', fontWeight: 700 }}>
            {skill.proficiency}%
          </span>
        </div>
      </div>
    </div>
  );
};
