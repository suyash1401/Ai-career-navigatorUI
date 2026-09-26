import React, { useState } from 'react';
import { 
  GitCompare, CheckCircle2, AlertTriangle, ArrowUpRight, 
  Sparkles, Sliders, TrendingUp, Info, ChevronRight, RefreshCw
} from 'lucide-react';
import { initialCareers } from '../data/careers';
import { SkillGapChart } from '../components/SkillGapChart';
import { ResearchBadge } from '../components/ResearchBadge';

export const SkillGap = ({ selectedCareerId = "CAR-01", onSelectCareer, onNavigateToRoadmap }) => {
  const [activeCareerId, setActiveCareerId] = useState(selectedCareerId);
  const [simulationBonus, setSimulationBonus] = useState({});

  const career = initialCareers.find(c => c.id === activeCareerId) || initialCareers[0];

  // Calculate dynamic skill values with simulation bonuses
  const simulatedSkills = career.requiredSkills.map(s => {
    const bonus = simulationBonus[s.name] || 0;
    const current = Math.min(100, s.current + bonus);
    const gap = Math.max(0, s.required - current);
    return { ...s, current, gap };
  });

  // Calculate dynamic match score
  const totalRequired = simulatedSkills.reduce((acc, s) => acc + s.required, 0);
  const totalAttained = simulatedSkills.reduce((acc, s) => acc + Math.min(s.required, s.current), 0);
  const dynamicMatch = Math.round((totalAttained / totalRequired) * 100);

  // Group skills into 4 categories requested in Section 11
  const skillsAlreadyHave = simulatedSkills.filter(s => s.gap === 0);
  const skillsNeedImprovement = simulatedSkills.filter(s => s.gap > 0 && s.gap <= 15);
  const criticalSkills = simulatedSkills.filter(s => s.gap > 15 && s.criticality === "Critical");
  const recommendedSkills = simulatedSkills.filter(s => s.gap > 0 && s.criticality !== "Critical");

  const handleSimulateUpgrade = (skillName, bonusVal) => {
    setSimulationBonus(prev => ({
      ...prev,
      [skillName]: Number(bonusVal)
    }));
  };

  const resetSimulation = () => {
    setSimulationBonus({});
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Page Header & Career Selector */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', fontWeight: 700 }}>
              Occupational Competence Gap Engine
            </span>
            <ResearchBadge type="current" text="Delta Analysis Algorithm" size="sm" />
          </div>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            Your Skill Gap Analysis
          </h2>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Algorithmic delta between your student profile and target industry occupational benchmarks.
          </p>
        </div>

        {/* Target Career Selector */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid var(--border-subtle)',
          padding: '8px 14px',
          borderRadius: '10px'
        }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Target Career:</span>
          <select
            value={activeCareerId}
            onChange={(e) => {
              setActiveCareerId(e.target.value);
              if (onSelectCareer) onSelectCareer(e.target.value);
              resetSimulation();
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
                {c.title} ({c.matchScore}%)
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 4 Summary Cards Requested in Specification */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
        {/* Card 1: Skills You Already Have */}
        <div className="glass-card" style={{ padding: '20px', borderLeft: '3px solid var(--accent-emerald)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>
              Skills You Already Have
            </span>
            <CheckCircle2 size={16} className="text-emerald-400" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-emerald)' }}>
            {skillsAlreadyHave.length} Skills
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '10px' }}>
            {skillsAlreadyHave.map((s, idx) => (
              <span key={idx} style={{ fontSize: '0.7rem', padding: '2px 6px', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.1)', color: '#fff' }}>
                ✓ {s.name}
              </span>
            ))}
          </div>
        </div>

        {/* Card 2: Skills That Need Improvement */}
        <div className="glass-card" style={{ padding: '20px', borderLeft: '3px solid var(--accent-cyan)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>
              Needs Improvement
            </span>
            <TrendingUp size={16} className="text-cyan-400" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>
            {skillsNeedImprovement.length} Skills
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '10px' }}>
            {skillsNeedImprovement.map((s, idx) => (
              <span key={idx} style={{ fontSize: '0.7rem', padding: '2px 6px', borderRadius: '4px', background: 'rgba(6, 182, 212, 0.1)', color: '#fff' }}>
                ↑ {s.name} (-{s.gap}%)
              </span>
            ))}
          </div>
        </div>

        {/* Card 3: Critical Skills */}
        <div className="glass-card" style={{ padding: '20px', borderLeft: '3px solid var(--accent-rose)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>
              Critical Skills Gap
            </span>
            <AlertTriangle size={16} className="text-rose-400" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-rose)' }}>
            {criticalSkills.length} Skills
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '10px' }}>
            {criticalSkills.length === 0 ? (
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>None! High core alignment</span>
            ) : (
              criticalSkills.map((s, idx) => (
                <span key={idx} style={{ fontSize: '0.7rem', padding: '2px 6px', borderRadius: '4px', background: 'rgba(244, 63, 94, 0.15)', color: 'var(--accent-rose)' }}>
                  ! {s.name} (-{s.gap}%)
                </span>
              ))
            )}
          </div>
        </div>

        {/* Card 4: Recommended Skills */}
        <div className="glass-card" style={{ padding: '20px', borderLeft: '3px solid var(--accent-purple)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>
              Recommended Skills
            </span>
            <Sparkles size={16} className="text-purple-400" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-purple)' }}>
            {recommendedSkills.length} Skills
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '10px' }}>
            {recommendedSkills.map((s, idx) => (
              <span key={idx} style={{ fontSize: '0.7rem', padding: '2px 6px', borderRadius: '4px', background: 'rgba(139, 92, 246, 0.15)', color: '#fff' }}>
                ★ {s.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Comparison Chart */}
      <div className="glass-card" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff' }}>
              Detailed Gap Breakdown for {career.title}
            </h3>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              Animated comparative visualization of current student competency vs expected requirement.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ fontSize: '0.85rem' }}>
              Simulated Alignment: <strong style={{ color: 'var(--accent-emerald)', fontSize: '1.1rem' }}>{dynamicMatch}%</strong>
            </div>
            {Object.keys(simulationBonus).length > 0 && (
              <button
                onClick={resetSimulation}
                className="btn btn-ghost btn-sm"
                style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', gap: '4px' }}
              >
                <RefreshCw size={12} />
                <span>Reset Simulation</span>
              </button>
            )}
          </div>
        </div>

        <SkillGapChart requiredSkills={simulatedSkills} />
      </div>

      {/* Interactive Simulation Panel for Teacher Demonstration */}
      <div className="glass-card" style={{
        padding: '24px',
        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)',
        border: '1px solid rgba(6, 182, 212, 0.3)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <Sliders size={18} className="text-cyan-400" />
          <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>
            Interactive Upskilling Simulator (Demonstration Feature)
          </h4>
        </div>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '18px', lineHeight: 1.45 }}>
          Test what happens when the student develops high-priority skills (e.g., containerization or testing). Drag the sliders to see how your career match percentage updates dynamically!
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px' }}>
          {career.requiredSkills.filter(s => s.gap > 0).slice(0, 4).map((s, idx) => {
            const currentBonus = simulationBonus[s.name] || 0;
            return (
              <div key={idx} style={{ padding: '14px', borderRadius: '10px', background: 'rgba(0, 0, 0, 0.3)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.82rem' }}>
                  <span style={{ fontWeight: 600, color: '#fff' }}>{s.name}</span>
                  <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>
                    +{currentBonus}% (Now {s.current + currentBonus}%)
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={Math.min(30, s.gap + 5)}
                  value={currentBonus}
                  onChange={(e) => handleSimulateUpgrade(s.name, e.target.value)}
                  style={{ width: '100%', cursor: 'pointer', accentColor: 'var(--accent-cyan)' }}
                />
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={() => onNavigateToRoadmap(career.id)}
            className="btn btn-primary btn-sm"
          >
            <span>View Learning Roadmap for this Role</span>
            <ChevronRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};
