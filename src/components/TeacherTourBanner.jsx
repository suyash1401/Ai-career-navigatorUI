import React, { useState } from 'react';
import { Presentation, ChevronRight, ChevronLeft, Eye, EyeOff, Sparkles, CheckCircle2 } from 'lucide-react';

export const demonstrationSteps = [
  { id: "landing", page: "landing", title: "1. Landing Page", description: "Hero, Project Vision, and High-Level Research Flow" },
  { id: "dashboard", page: "dashboard", title: "2. Student Dashboard", description: "Overview of Student Competency Metrics & Activity" },
  { id: "profile", page: "profile", title: "3. Student Profile", description: "MCA Candidate Technical Background & Skill Chips" },
  { id: "skills", page: "skills", title: "4. Skills Visualization", description: "Taxonomy Categories, Radar Coverage & Distribution" },
  { id: "explorer", page: "explorer", title: "5. Career Explorer", description: "O*NET/ESCO Occupational Database & Match Filtering" },
  { id: "career-detail", page: "career-detail", title: "6. Career Requirements", description: "In-Depth Occupational Skills & Benchmark Levels" },
  { id: "skill-gap", page: "skill-gap", title: "7. Skill Gap Analysis", description: "Delta Calculation & Interactive Upskilling Simulator" },
  { id: "mapping", page: "mapping", title: "8. Canonical Skill Mapping", description: "Semantic Normalization bridging O*NET & ESCO Disparities" },
  { id: "network", page: "network", title: "9. Occupation-Skill Network", description: "Interactive Bipartite Knowledge Graph & Clustering" },
  { id: "recommendations", page: "recommendations", title: "10. AI Career Recommendations", description: "Explainable Career Inference & Alignment Rationale" },
  { id: "roadmap", page: "roadmap", title: "11. Career Pathway / Roadmap", description: "7-Stage Sequential Milestone Pathway to Target Role" },
  { id: "assessment", page: "assessment", title: "12. Technical Skill Assessment", description: "Multi-Domain Diagnostic Assessment & Gap Calibration" },
  { id: "research", page: "research", title: "13. Research Insights & Architecture", description: "Dataset Ingestion Metrics & End-to-End Pipeline Model" }
];

export const TeacherTourBanner = ({ currentPage, onNavigate, activeCareerId }) => {
  const [minimized, setMinimized] = useState(false);

  // find current step index
  const currentIndex = demonstrationSteps.findIndex(s => s.page === currentPage) !== -1
    ? demonstrationSteps.findIndex(s => s.page === currentPage)
    : 0;

  const currentStep = demonstrationSteps[currentIndex] || demonstrationSteps[0];

  const handleNext = () => {
    if (currentIndex < demonstrationSteps.length - 1) {
      const nextStep = demonstrationSteps[currentIndex + 1];
      onNavigate(nextStep.page);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevStep = demonstrationSteps[currentIndex - 1];
      onNavigate(prevStep.page);
    }
  };

  if (minimized) {
    return (
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '24px',
        zIndex: 999
      }}>
        <button
          onClick={() => setMinimized(false)}
          className="btn btn-secondary"
          style={{
            background: 'rgba(15, 23, 42, 0.95)',
            border: '1px solid var(--accent-cyan)',
            boxShadow: 'var(--shadow-glow-cyan)',
            padding: '8px 14px',
            fontSize: '0.82rem'
          }}
          title="Open Guided Teacher Demonstration Flow"
        >
          <Presentation size={15} className="text-cyan-400" />
          <span>Teacher Demo Flow ({currentIndex + 1}/13)</span>
          <Eye size={13} style={{ marginLeft: 4, opacity: 0.7 }} />
        </button>
      </div>
    );
  }

  return (
    <div style={{
      background: 'linear-gradient(90deg, rgba(8, 23, 48, 0.96) 0%, rgba(15, 17, 35, 0.96) 100%)',
      borderBottom: '1px solid rgba(6, 182, 212, 0.35)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
      padding: '8px 20px',
      position: 'sticky',
      top: 0,
      zIndex: 990,
      backdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px',
      fontSize: '0.85rem'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          background: 'rgba(6, 182, 212, 0.15)',
          padding: '4px 10px',
          borderRadius: '6px',
          border: '1px solid rgba(6, 182, 212, 0.3)'
        }}>
          <Presentation size={14} style={{ color: 'var(--accent-cyan)' }} />
          <span style={{ fontWeight: 700, color: 'var(--accent-cyan)', letterSpacing: '0.03em', fontSize: '0.75rem', textTransform: 'uppercase' }}>
            MCA Presentation Flow
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <select
            value={currentStep.page}
            onChange={(e) => onNavigate(e.target.value)}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#fff',
              padding: '4px 10px',
              borderRadius: '6px',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            {demonstrationSteps.map((step, idx) => (
              <option key={step.id} value={step.page} style={{ background: '#0b1324', color: '#fff' }}>
                {step.title}
              </option>
            ))}
          </select>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
            — {currentStep.description}
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="btn btn-ghost btn-sm"
          style={{ opacity: currentIndex === 0 ? 0.4 : 1, padding: '4px 8px' }}
          title="Previous Stage"
        >
          <ChevronLeft size={16} />
          <span>Prev</span>
        </button>

        <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem', minWidth: '45px', textAlign: 'center' }}>
          {currentIndex + 1} of {demonstrationSteps.length}
        </span>

        <button
          onClick={handleNext}
          disabled={currentIndex === demonstrationSteps.length - 1}
          className="btn btn-primary btn-sm"
          style={{ padding: '4px 12px' }}
          title="Next Stage"
        >
          <span>Next</span>
          <ChevronRight size={16} />
        </button>

        <button
          onClick={() => setMinimized(true)}
          className="btn btn-ghost btn-sm"
          style={{ color: 'var(--text-muted)', padding: '4px' }}
          title="Minimize Demo Toolbar"
        >
          <EyeOff size={14} />
        </button>
      </div>
    </div>
  );
};
