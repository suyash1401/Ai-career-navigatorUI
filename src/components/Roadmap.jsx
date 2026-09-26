import React, { useState } from 'react';
import { 
  CheckCircle2, Clock, Sparkles, FolderGit2, BookOpen, 
  ChevronRight, Calendar, Award, ArrowDown, Layers
} from 'lucide-react';
import { careerRoadmaps } from '../data/roadmaps';

export const Roadmap = ({ careerId = "CAR-01" }) => {
  const currentRoadmap = careerRoadmaps[careerId] || careerRoadmaps["CAR-01"];
  const [selectedStage, setSelectedStage] = useState(currentRoadmap.stages[0]);

  // Update selected stage if career changes
  React.useEffect(() => {
    if (careerRoadmaps[careerId]) {
      setSelectedStage(careerRoadmaps[careerId].stages[0]);
    }
  }, [careerId]);

  const getStageStatusBadge = (status) => {
    switch (status) {
      case "completed":
        return (
          <span style={{
            fontSize: '0.7rem',
            padding: '2px 8px',
            borderRadius: '999px',
            background: 'rgba(16, 185, 129, 0.15)',
            color: 'var(--accent-emerald)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <CheckCircle2 size={11} /> Completed
          </span>
        );
      case "in-progress":
        return (
          <span style={{
            fontSize: '0.7rem',
            padding: '2px 8px',
            borderRadius: '999px',
            background: 'rgba(6, 182, 212, 0.15)',
            color: 'var(--accent-cyan)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <Sparkles size={11} className="animate-spin-slow" /> In Progress
          </span>
        );
      default:
        return (
          <span style={{
            fontSize: '0.7rem',
            padding: '2px 8px',
            borderRadius: '999px',
            background: 'rgba(255, 255, 255, 0.05)',
            color: 'var(--text-muted)',
            border: '1px solid var(--border-subtle)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <Clock size={11} /> Upcoming
          </span>
        );
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Overview Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 20px',
        borderRadius: '12px',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid var(--border-subtle)',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div>
          <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', fontWeight: 700 }}>
            Structured Pathway • {currentRoadmap.category}
          </span>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginTop: '2px' }}>
            {currentRoadmap.careerTitle} Learning Pathway
          </h3>
        </div>
        <div style={{ display: 'flex', gap: '16px', fontSize: '0.8rem' }}>
          <div>
            <span style={{ color: 'var(--text-muted)' }}>Total Milestones: </span>
            <strong style={{ color: '#fff' }}>7 Stages</strong>
          </div>
          <div>
            <span style={{ color: 'var(--text-muted)' }}>Est. Duration: </span>
            <strong style={{ color: 'var(--accent-cyan)' }}>34 Weeks</strong>
          </div>
        </div>
      </div>

      {/* Main Roadmap Split: Timeline on Left, Deep Stage Inspector on Right */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.2fr', gap: '24px' }}>
        {/* Stages Timeline List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', position: 'relative' }}>
          {currentRoadmap.stages.map((stage, idx) => {
            const isSelected = selectedStage.stageNumber === stage.stageNumber;
            const isCompleted = stage.status === "completed";
            const isInProgress = stage.status === "in-progress";

            return (
              <div
                key={stage.stageNumber}
                onClick={() => setSelectedStage(stage)}
                className={`glass-card ${isSelected ? 'animate-pulse-cyan' : ''}`}
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  border: isSelected 
                    ? '1.5px solid var(--accent-cyan)' 
                    : isCompleted 
                    ? '1px solid rgba(16, 185, 129, 0.3)' 
                    : '1px solid var(--border-subtle)',
                  background: isSelected 
                    ? 'linear-gradient(90deg, rgba(6, 182, 212, 0.12) 0%, rgba(14, 23, 42, 0.8) 100%)' 
                    : 'var(--bg-glass)',
                  transition: 'all 0.2s',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: isCompleted ? 'var(--accent-emerald)' : isInProgress ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.1)',
                      color: isCompleted || isInProgress ? '#030712' : '#94a3b8',
                      fontWeight: 800,
                      fontSize: '0.78rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {stage.stageNumber}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fff' }}>
                        {stage.title}
                      </h4>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        {stage.subtitle}
                      </div>
                    </div>
                  </div>
                  <div>
                    {getStageStatusBadge(stage.status)}
                  </div>
                </div>

                {/* Progress bar inside card */}
                <div style={{ marginTop: '10px' }}>
                  <div style={{ width: '100%', height: '4px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '999px', overflow: 'hidden' }}>
                    <div style={{
                      width: `${stage.studentProgress}%`,
                      height: '100%',
                      background: isCompleted ? 'var(--accent-emerald)' : 'var(--accent-cyan)',
                      borderRadius: '999px'
                    }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Stage Detail Panel */}
        <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '14px', marginBottom: '18px' }}>
              <div>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase' }}>
                  Stage {selectedStage.stageNumber} Details
                </span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginTop: '2px' }}>
                  {selectedStage.title}
                </h3>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  {selectedStage.subtitle}
                </div>
              </div>
              <div>
                {getStageStatusBadge(selectedStage.status)}
              </div>
            </div>

            {/* Description */}
            {selectedStage.description && (
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '20px' }}>
                {selectedStage.description}
              </p>
            )}

            {/* Topics Covered */}
            <div style={{ marginBottom: '20px' }}>
              <h5 style={{ fontSize: '0.76rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '10px' }}>
                Key Competency Topics
              </h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {selectedStage.topics.map((topic, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.82rem',
                      color: '#fff'
                    }}
                  >
                    <CheckCircle2 size={14} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Milestone Project */}
            {selectedStage.milestoneProject && (
              <div style={{
                padding: '14px 16px',
                borderRadius: '10px',
                background: 'rgba(6, 182, 212, 0.08)',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                marginBottom: '18px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-cyan)', fontSize: '0.74rem', fontWeight: 700, textTransform: 'uppercase' }}>
                  <FolderGit2 size={15} />
                  <span>Benchmark Milestone Capstone</span>
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#fff', marginTop: '6px' }}>
                  {selectedStage.milestoneProject}
                </div>
              </div>
            )}

            {/* Target Skills & Canonical Link */}
            {selectedStage.targetSkills && (
              <div>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Associated Profile Skills:
                </span>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '6px' }}>
                  {selectedStage.targetSkills.map((ts, idx) => (
                    <span key={idx} className="skill-chip" style={{ fontSize: '0.74rem', padding: '3px 8px' }}>
                      {ts}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div style={{ marginTop: '24px', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem' }}>
            <span style={{ color: 'var(--text-muted)' }}>
              Progress: <strong style={{ color: '#fff' }}>{selectedStage.studentProgress}%</strong>
            </span>
            <span style={{ color: 'var(--accent-purple)' }}>
              {selectedStage.canonicalReference || "Standardized MCA Competency"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
