import React from 'react';
import { 
  Compass, ArrowRight, Award, CheckCircle2, 
  Sparkles, Layers, Database, Globe, Network, ChevronRight, Terminal, BarChart2
} from 'lucide-react';
import { ResearchBadge } from '../components/ResearchBadge';

export const Landing = ({ onNavigate, onStartAssessment }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', paddingBottom: '60px' }}>
      {/* Hero Section */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '40px',
        alignItems: 'center',
        padding: '40px 0 20px 0'
      }}>
        {/* Left Column: Vision & Action Buttons */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '999px', background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.3)', marginBottom: '20px' }}>
            <Sparkles size={14} className="text-cyan-400 animate-spin-slow" />
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-cyan)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              MCA Final-Year Research Project
            </span>
          </div>

          <h1 style={{
            fontSize: '2.8rem',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: '16px'
          }}>
            AI Career <span className="grad-text-cyan">Navigator</span>
          </h1>

          <h2 style={{
            fontSize: '1.25rem',
            fontWeight: 600,
            color: 'var(--text-accent-purple)',
            marginBottom: '16px',
            lineHeight: 1.4
          }}>
            Intelligent Career Discovery & Skill Gap Analysis for Technical Students
          </h2>

          <p style={{
            fontSize: '0.96rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: '32px',
            maxWidth: '540px'
          }}>
            Explore career possibilities, understand required skills, identify your skill gaps, and discover a structured pathway toward your target career using standardized O*NET and ESCO occupational intelligence.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigate('explorer')}
              className="btn btn-primary"
              style={{ padding: '12px 24px', fontSize: '0.95rem' }}
            >
              <span>Explore Career Paths</span>
              <Compass size={18} />
            </button>

            <button
              onClick={() => onNavigate('assessment')}
              className="btn btn-secondary"
              style={{ padding: '12px 24px', fontSize: '0.95rem' }}
            >
              <Award size={18} className="text-cyan-400" />
              <span>Take Skill Assessment</span>
            </button>

            <button
              onClick={() => onNavigate('dashboard')}
              className="btn btn-ghost"
              style={{ padding: '12px 20px', fontSize: '0.9rem', color: 'var(--accent-purple)' }}
            >
              <span>Enter Student Dashboard</span>
              <ChevronRight size={16} />
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '36px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={14} className="text-emerald-400" />
              <span>O*NET 28.0 Ingestion</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={14} className="text-emerald-400" />
              <span>ESCO v1.1.1 Taxonomy</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={14} className="text-cyan-400" />
              <span>Canonical Normalization</span>
            </div>
          </div>
        </div>

        {/* Right Column: Animated Technical Visual Flow */}
        <div style={{
          position: 'relative',
          padding: '24px',
          borderRadius: '20px',
          background: 'linear-gradient(145deg, rgba(14, 23, 42, 0.95) 0%, rgba(8, 13, 26, 0.95) 100%)',
          border: '1px solid rgba(6, 182, 212, 0.3)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(6, 182, 212, 0.15)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Terminal size={15} className="text-cyan-400" />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff', letterSpacing: '0.05em' }}>
                OCCUPATIONAL INTELLIGENCE PIPELINE
              </span>
            </div>
            <span style={{ fontSize: '0.68rem', color: 'var(--accent-emerald)', background: 'rgba(16, 185, 129, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>
              ACTIVE GRAPH
            </span>
          </div>

          {/* Interactive Flow Nodes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative' }}>
            {/* Step 1: Student Profile */}
            <div
              onClick={() => onNavigate('profile')}
              style={{
                padding: '12px 16px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-cyan)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)' }}>
                  <Award size={16} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.86rem', color: '#fff' }}>1. Student Profile</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Suyash Karandikar • MCA Candidate (82% Ready)</div>
                </div>
              </div>
              <ChevronRight size={16} style={{ color: 'var(--text-muted)' }} />
            </div>

            {/* Connecting Line 1 */}
            <div style={{ display: 'flex', justifyContent: 'center', margin: '-8px 0' }}>
              <div style={{ width: '2px', height: '18px', background: 'var(--accent-cyan)' }} />
            </div>

            {/* Step 2: Technical Skills Extraction */}
            <div
              onClick={() => onNavigate('skills')}
              style={{
                padding: '12px 16px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-cyan)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(59, 130, 246, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-blue)' }}>
                  <Layers size={16} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.86rem', color: '#fff' }}>2. Technical Skills Matrix</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>24 Validated Competencies • Java, Python, SQL, React</div>
                </div>
              </div>
              <ChevronRight size={16} style={{ color: 'var(--text-muted)' }} />
            </div>

            {/* Connecting Line 2 */}
            <div style={{ display: 'flex', justifyContent: 'center', margin: '-8px 0' }}>
              <div style={{ width: '2px', height: '18px', background: 'var(--accent-purple)' }} />
            </div>

            {/* Step 3: Occupational Knowledge & Canonical Mapping */}
            <div
              onClick={() => onNavigate('mapping')}
              style={{
                padding: '12px 16px',
                borderRadius: '10px',
                background: 'linear-gradient(90deg, rgba(139, 92, 246, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)',
                border: '1.5px solid var(--accent-purple)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                boxShadow: '0 0 15px rgba(139, 92, 246, 0.2)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(139, 92, 246, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-purple)' }}>
                  <Network size={16} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.86rem', color: '#fff' }}>3. Canonical Skill Normalization</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-accent-cyan)' }}>Bridges O*NET & ESCO Disparities • 1,840 Entities</div>
                </div>
              </div>
              <ResearchBadge type="current" text="Core Research" size="sm" />
            </div>

            {/* Connecting Line 3 */}
            <div style={{ display: 'flex', justifyContent: 'center', margin: '-8px 0' }}>
              <div style={{ width: '2px', height: '18px', background: 'var(--accent-emerald)' }} />
            </div>

            {/* Step 4: Career Paths & Roadmaps */}
            <div
              onClick={() => onNavigate('explorer')}
              style={{
                padding: '12px 16px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-emerald)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-emerald)' }}>
                  <Compass size={16} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.86rem', color: '#fff' }}>4. Career Paths & Roadmaps</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Software Developer (87%), Data Analyst (81%)</div>
                </div>
              </div>
              <ChevronRight size={16} style={{ color: 'var(--text-muted)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: RESEARCH INDICATOR (Requested in Specification) */}
      <section>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <BarChart2 size={16} className="text-cyan-400" />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>
              Research Foundation & Dataset Architecture
            </h3>
          </div>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
            This project investigates the semantic convergence of open occupational taxonomies to power explainable student career guidance.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
          {/* Card 1: O*NET */}
          <div className="glass-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <ResearchBadge type="onet" size="sm" />
                <ResearchBadge type="completed" text="Completed" size="sm" />
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>
                O*NET Standard
              </h4>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                Occupational Skills, Knowledge matrices, and generalized work activities from the U.S. Department of Labor (Release 28.0).
              </p>
            </div>
            <div style={{ marginTop: '16px', paddingTop: '10px', borderTop: '1px solid var(--border-subtle)', fontSize: '0.72rem', color: 'var(--accent-cyan)' }}>
              1,016 Occupations • 24,000+ Descriptors
            </div>
          </div>

          {/* Card 2: ESCO */}
          <div className="glass-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <ResearchBadge type="esco" size="sm" />
                <ResearchBadge type="completed" text="Completed" size="sm" />
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>
                ESCO European System
              </h4>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                Multilingual European Skills, Competences, and Occupations taxonomy using semantic web SKOS structures (v1.1.1).
              </p>
            </div>
            <div style={{ marginTop: '16px', paddingTop: '10px', borderTop: '1px solid var(--border-subtle)', fontSize: '0.72rem', color: 'var(--accent-amber)' }}>
              3,008 Occupations • 13,890 Granular Skills
            </div>
          </div>

          {/* Card 3: Canonical Skill Mapping */}
          <div className="glass-card animate-pulse-purple" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1.5px solid var(--accent-purple)' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <ResearchBadge type="canonical" size="sm" />
                <ResearchBadge type="current" text="Current Research" size="sm" />
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>
                Canonical Normalization
              </h4>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                Novel MCA research layer reconciling terminology variance between O*NET and ESCO into unified canonical competencies.
              </p>
            </div>
            <div style={{ marginTop: '16px', paddingTop: '10px', borderTop: '1px solid var(--border-subtle)', fontSize: '0.72rem', color: 'var(--accent-purple)' }}>
              1,840 Canonical Entities • 94.6% Confidence
            </div>
          </div>

          {/* Card 4: AI Recommendation */}
          <div className="glass-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="badge badge-planned text-xs py-0.5 px-2">AI Engine</span>
                <ResearchBadge type="planned" text="Planned" size="sm" />
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>
                AI Recommendation Engine
              </h4>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                Simulated explainable career matching and skill-gap delta calculations. (Currently rendered via validated mock datasets).
              </p>
            </div>
            <div style={{ marginTop: '16px', paddingTop: '10px', borderTop: '1px solid var(--border-subtle)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              Rule Constraints & Vector Cosine Fit
            </div>
          </div>
        </div>
      </section>

      {/* Target Disciplines Highlight */}
      <section style={{
        padding: '24px',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid var(--border-subtle)'
      }}>
        <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '12px' }}>
          Calibrated For Technical Career Pathways:
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {[
            "Software Engineering",
            "AI / Machine Learning",
            "Data Science & Analytics",
            "Cloud Computing (AWS/Azure)",
            "Cybersecurity Operations",
            "Full Stack Web Development",
            "DevOps & SRE",
            "Database Engineering & RDBMS"
          ].map((cat, i) => (
            <span
              key={i}
              onClick={() => onNavigate('explorer')}
              style={{
                padding: '6px 12px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.8rem',
                color: '#fff',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              }}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};
