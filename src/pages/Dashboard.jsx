import React from 'react';
import { 
  Award, Code2, Compass, GitCompare, Sparkles, 
  ArrowRight, CheckCircle2, ChevronRight, Zap, Target, BookOpen, Layers
} from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { CareerCard } from '../components/CareerCard';
import { SkillRadar } from '../components/SkillRadar';
import { ResearchBadge } from '../components/ResearchBadge';
import { initialCareers } from '../data/careers';

export const Dashboard = ({ student, skills, onNavigate, onSelectCareer }) => {
  // Top 3 matching careers
  const topMatches = initialCareers.slice(0, 3);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      {/* Student Welcome & Target Banner */}
      <div
        className="glass-card"
        style={{
          padding: '24px 28px',
          background: 'linear-gradient(135deg, rgba(14, 23, 42, 0.95) 0%, rgba(10, 16, 32, 0.95) 100%)',
          border: '1px solid rgba(6, 182, 212, 0.3)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '250px',
          height: '100%',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div style={{ zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              MCA Candidate Profile
            </span>
            <ResearchBadge type="current" text="Research Cohort 2026" size="sm" />
          </div>

          <h2 style={{ fontSize: '1.7rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            Welcome back, {student.name}
          </h2>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '6px', fontSize: '0.85rem', color: 'var(--text-secondary)', flexWrap: 'wrap' }}>
            <span>{student.degree}</span>
            <span>•</span>
            <span>Class of {student.graduationYear}</span>
            <span>•</span>
            <span style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>CGPA: {student.cgpa}</span>
            <span>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--accent-purple)' }}>
              <Target size={14} /> Target: <b>{student.targetRole}</b>
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', zIndex: 1 }}>
          <button
            onClick={() => onNavigate('assessment')}
            className="btn btn-primary btn-sm"
            style={{ padding: '8px 16px' }}
          >
            <Zap size={15} />
            <span>Retake Diagnostic</span>
          </button>

          <button
            onClick={() => onNavigate('mapping')}
            className="btn btn-secondary btn-sm"
            style={{ padding: '8px 14px' }}
          >
            <Layers size={15} className="text-purple-400" />
            <span>Canonical Mapping</span>
          </button>
        </div>
      </div>

      {/* 4 Primary Metric Stat Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '20px' }}>
        <StatCard
          title="Profile Completion"
          value={`${student.profileCompletion}%`}
          subtitle="All academic & technical markers"
          progress={student.profileCompletion}
          variant="cyan"
          onClick={() => onNavigate('profile')}
        />

        <StatCard
          title="Skills Identified"
          value={`${student.skillsCount} Skills`}
          subtitle="6 Competency domains mapped"
          icon={Code2}
          progress={75}
          variant="purple"
          onClick={() => onNavigate('skills')}
        />

        <StatCard
          title="Career Matches"
          value={`${student.careerMatchesCount} Paths`}
          subtitle="High alignment (≥ 70% threshold)"
          icon={Compass}
          progress={87}
          variant="emerald"
          onClick={() => onNavigate('explorer')}
        />

        <StatCard
          title="Skill Gap"
          value={`${student.skillGapCount} Skills`}
          subtitle="High-priority learning targets"
          icon={GitCompare}
          progress={45}
          variant="amber"
          onClick={() => onNavigate('skill-gap')}
        />
      </div>

      {/* Middle Split: Top Career Recommendations & Competency Radar */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px' }}>
        {/* Left: Top Career Recommendations */}
        <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff' }}>
                  Top Career Alignments
                </h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Computed via O*NET benchmark vectors and verified skills
                </p>
              </div>
              <button
                onClick={() => onNavigate('explorer')}
                className="btn btn-ghost btn-sm"
                style={{ color: 'var(--accent-cyan)', fontSize: '0.78rem' }}
              >
                <span>View All 10</span>
                <ChevronRight size={14} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {topMatches.map((career) => (
                <div
                  key={career.id}
                  onClick={() => {
                    onSelectCareer(career.id);
                    onNavigate('career-detail');
                  }}
                  style={{
                    padding: '14px 16px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                    e.currentTarget.style.background = 'rgba(6, 182, 212, 0.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>
                        {career.title}
                      </span>
                      <ResearchBadge type="onet" text={career.oNetCode} size="sm" />
                    </div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                      {career.category} • {career.industryGrowth}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--accent-emerald)' }}>
                        {career.matchScore}%
                      </div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                        Match Fit
                      </div>
                    </div>
                    <ChevronRight size={16} style={{ color: 'var(--text-muted)' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '18px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            <span>Demonstration baseline: O*NET-SOC 2019 content model</span>
            <button
              onClick={() => onNavigate('recommendations')}
              className="btn btn-ghost btn-sm"
              style={{ color: 'var(--accent-purple)', padding: '2px 6px', fontSize: '0.74rem' }}
            >
              <span>Explainable AI Reasoning</span>
              <ArrowRight size={12} />
            </button>
          </div>
        </div>

        {/* Right: Competency Radar Chart */}
        <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff' }}>
                  Technical Domain Radar
                </h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Evaluated across 6 standardized competency dimensions
                </p>
              </div>
              <button
                onClick={() => onNavigate('skills')}
                className="btn btn-ghost btn-sm"
                style={{ color: 'var(--accent-cyan)', fontSize: '0.78rem' }}
              >
                <span>Full Skills</span>
                <ChevronRight size={14} />
              </button>
            </div>

            <SkillRadar skills={skills} height={260} studentName={student.name} />
          </div>

          <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid var(--border-subtle)', fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between' }}>
            <span>Strongest: <b>Programming (82%)</b></span>
            <span>Target Growth: <b style={{ color: 'var(--accent-amber)' }}>Cloud (48%)</b></span>
          </div>
        </div>
      </div>

      {/* Quick Action Pathways */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
        <div
          onClick={() => onNavigate('skill-gap')}
          className="glass-card glass-card-interactive"
          style={{ padding: '18px', display: 'flex', alignItems: 'center', gap: '14px' }}
        >
          <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-amber)' }}>
            <GitCompare size={20} />
          </div>
          <div>
            <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fff' }}>Interactive Skill Gap Analysis</h4>
            <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Compare current proficiency against required career benchmarks.</p>
          </div>
        </div>

        <div
          onClick={() => onNavigate('mapping')}
          className="glass-card glass-card-interactive"
          style={{ padding: '18px', display: 'flex', alignItems: 'center', gap: '14px' }}
        >
          <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(139, 92, 246, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-purple)' }}>
            <Layers size={20} />
          </div>
          <div>
            <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fff' }}>Canonical Normalization Layer</h4>
            <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Inspect semantic convergence between O*NET and ESCO entities.</p>
          </div>
        </div>

        <div
          onClick={() => onNavigate('roadmap')}
          className="glass-card glass-card-interactive"
          style={{ padding: '18px', display: 'flex', alignItems: 'center', gap: '14px' }}
        >
          <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-emerald)' }}>
            <Compass size={20} />
          </div>
          <div>
            <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fff' }}>7-Stage Career Roadmap</h4>
            <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Step-by-step sequential learning milestones to target readiness.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
