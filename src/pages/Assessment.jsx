import React, { useState } from 'react';
import { 
  Award, Code2, Terminal, Play, RotateCcw, CheckCircle2, 
  AlertTriangle, ArrowRight, ArrowLeft, Sparkles, BookOpen, 
  Layers, Sliders, Check, Clock, Cpu, Zap, Eye, ChevronRight, Filter
} from 'lucide-react';
import { 
  assessmentQuestions, 
  programmingChallenges, 
  calculateSkillExperience, 
  initialAssessmentSummary 
} from '../data/assessment';
import { initialSkills } from '../data/skills';
import { ResearchBadge } from '../components/ResearchBadge';
import { ProgressBar } from '../components/ProgressBar';

export const Assessment = ({ onApplyResults }) => {
  // Navigation tabs between different assessment modalities
  const [activeTab, setActiveTab] = useState("skill-analyzer"); // "skill-analyzer", "coding-lab", "full-mcq", "experience-matrix"
  
  // Selected skill for deep-dive testing
  const [selectedSkillName, setSelectedSkillName] = useState("Java");
  const currentSkill = initialSkills.find(s => s.name === selectedSkillName) || initialSkills[0];
  const challenge = programmingChallenges[selectedSkillName] || programmingChallenges["Java"];

  // Coding Editor State
  const [userCode, setUserCode] = useState(challenge.starterCode);
  const [isRunningCode, setIsRunningCode] = useState(false);
  const [executionResult, setExecutionResult] = useState(null);

  // Skill-Specific MCQ State
  const skillQuestions = assessmentQuestions.filter(q => 
    q.skillName?.toLowerCase() === selectedSkillName.toLowerCase() ||
    q.category === currentSkill.category
  ).slice(0, 3);
  const [skillMcqAnswers, setSkillMcqAnswers] = useState({});

  // Full MCA MCQ Diagnostic State
  const [fullMcqIdx, setFullMcqIdx] = useState(0);
  const [fullMcqAnswers, setFullMcqAnswers] = useState({});
  const [isFullMcqSubmitted, setIsFullMcqSubmitted] = useState(false);
  const [diagnosticSummary, setDiagnosticSummary] = useState(initialAssessmentSummary);

  // Update challenge code when switching skill
  const handleSelectSkill = (skillName) => {
    setSelectedSkillName(skillName);
    const newChallenge = programmingChallenges[skillName] || programmingChallenges["Java"];
    setUserCode(newChallenge.starterCode);
    setExecutionResult(null);
    setSkillMcqAnswers({});
  };

  // Simulate Running Code in the Frontend
  const handleRunCode = () => {
    setIsRunningCode(true);
    setExecutionResult(null);

    setTimeout(() => {
      setIsRunningCode(false);
      const isOptimal = userCode.includes("class") || userCode.includes("def") || userCode.includes("SELECT") || userCode.length > 100;
      const testsPassed = isOptimal ? challenge.testCases.length : Math.max(1, challenge.testCases.length - 1);
      
      setExecutionResult({
        success: true,
        testsPassed,
        totalTests: challenge.testCases.length,
        executionTime: isOptimal ? "18ms" : "42ms",
        memoryPeak: "16.4 MB",
        codeQualityScore: isOptimal ? 92 : 74,
        complexityEstimate: challenge.language === "sql" ? "O(N log N) Indexed" : "O(N) Optimal Time, O(1) Aux Space",
        terminalLogs: [
          `[COMPILER] Target: ${challenge.language.toUpperCase()} Virtual Environment 2026.4`,
          `[RUNTIME] Syntax tree validated successfully. Initializing test runner...`,
          ...challenge.testCases.map((tc, i) => 
            `[PASS] Test Case ${i + 1}: ${tc.name} (${tc.executionTime}) - Output verified.`
          ),
          `[AUDIT] All ${challenge.testCases.length} assertion invariants satisfied.`
        ]
      });
    }, 1200);
  };

  // Compute Experience Analysis for the currently selected skill
  const evaluatedExperience = calculateSkillExperience(
    currentSkill,
    Object.keys(skillMcqAnswers).length > 0 ? 88 : 78,
    executionResult ? executionResult.codeQualityScore : 82
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', fontWeight: 700 }}>
              Technical Experience & Competency Engine
            </span>
            <ResearchBadge type="completed" text="Dual Mode: Programming & MCQ" size="sm" />
          </div>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            Skill Experience & Technical Assessment
          </h2>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Analyze hands-on coding ability, conceptual depth, and equivalent industry experience for every technical skill.
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div style={{
          display: 'flex',
          gap: '6px',
          background: 'rgba(255, 255, 255, 0.04)',
          padding: '4px',
          borderRadius: '10px',
          border: '1px solid var(--border-subtle)'
        }}>
          {[
            { id: "skill-analyzer", label: "Skill Deep-Dive", icon: Zap },
            { id: "coding-lab", label: "Programming Lab", icon: Terminal },
            { id: "experience-matrix", label: "All Skills Experience", icon: Layers },
            { id: "full-mcq", label: "MCA Diagnostic Test", icon: Award }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`btn btn-sm ${isActive ? 'btn-primary' : 'btn-ghost'}`}
                style={{
                  padding: '6px 14px',
                  fontSize: '0.78rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  border: isActive ? '1px solid var(--accent-cyan)' : 'none'
                }}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MODE 1: SKILL DEEP-DIVE & EXPERIENCE ANALYZER                            */}
      {/* ========================================================================= */}
      {activeTab === "skill-analyzer" && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Skill Selector Carousel / Ribbon */}
          <div className="glass-card" style={{ padding: '16px 20px' }}>
            <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '10px' }}>
              Select Skill to Analyze Experience:
            </div>
            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '6px' }}>
              {["Java", "Python", "SQL", "React", "Data Structures & Algorithms", "Docker & Containerization", "Machine Learning Fundamentals"].map(skillName => {
                const isSelected = selectedSkillName === skillName;
                return (
                  <button
                    key={skillName}
                    onClick={() => handleSelectSkill(skillName)}
                    className={`btn btn-sm ${isSelected ? 'btn-primary' : 'btn-secondary'}`}
                    style={{
                      whiteSpace: 'nowrap',
                      padding: '6px 14px',
                      fontSize: '0.8rem',
                      border: isSelected ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)'
                    }}
                  >
                    <span>{skillName}</span>
                    {isSelected && <Sparkles size={12} className="text-black" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Evaluated Experience Card for the Selected Skill */}
          <div
            className="glass-card"
            style={{
              padding: '24px',
              background: 'linear-gradient(135deg, rgba(14, 23, 42, 0.95) 0%, rgba(10, 16, 32, 0.95) 100%)',
              border: '1.5px solid rgba(6, 182, 212, 0.35)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
              alignItems: 'center'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                  Evaluated Competency Index
                </span>
                <ResearchBadge type="canonical" text={currentSkill.canonicalId} size="sm" />
              </div>

              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff' }}>
                {evaluatedExperience.skillName}
              </h3>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                Category: <b>{evaluatedExperience.category}</b> • Current Tracking: <b>{currentSkill.experienceMonths} Months</b>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '14px' }}>
                <span style={{
                  padding: '4px 10px',
                  borderRadius: '6px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: 'var(--accent-emerald)',
                  fontWeight: 700,
                  fontSize: '0.82rem'
                }}>
                  {evaluatedExperience.experienceTier}
                </span>

                <span style={{
                  padding: '4px 10px',
                  borderRadius: '6px',
                  background: 'rgba(6, 182, 212, 0.12)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  color: 'var(--accent-cyan)',
                  fontWeight: 700,
                  fontSize: '0.82rem'
                }}>
                  {evaluatedExperience.experienceLabel}
                </span>
              </div>
            </div>

            {/* Score Distribution Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', marginBottom: '3px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Theoretical Depth (MCQ Knowledge)</span>
                  <span style={{ color: 'var(--accent-purple)', fontWeight: 700 }}>{evaluatedExperience.theoreticalDepth}%</span>
                </div>
                <ProgressBar value={evaluatedExperience.theoreticalDepth} variant="purple" height={6} showLabel={false} />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', marginBottom: '3px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Hands-on Coding & Syntax Fluency</span>
                  <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>{evaluatedExperience.practicalFluency}%</span>
                </div>
                <ProgressBar value={evaluatedExperience.practicalFluency} variant="cyan" height={6} showLabel={false} />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', marginBottom: '3px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Code Quality & Complexity Handling</span>
                  <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>{evaluatedExperience.codeQualityScore}%</span>
                </div>
                <ProgressBar value={evaluatedExperience.codeQualityScore} variant="emerald" height={6} showLabel={false} />
              </div>
            </div>

            {/* Composite Proficiency Capsule */}
            <div style={{
              padding: '16px',
              borderRadius: '12px',
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid var(--border-subtle)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>
                Calibrated Proficiency
              </div>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--accent-cyan)', lineHeight: 1.1 }}>
                {evaluatedExperience.compositeProficiency}%
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--accent-emerald)', marginTop: '4px' }}>
                ✓ {evaluatedExperience.readiness}
              </div>

              <button
                onClick={() => {
                  if (onApplyResults) {
                    onApplyResults([{
                      category: currentSkill.category,
                      score: evaluatedExperience.compositeProficiency
                    }]);
                  }
                }}
                className="btn btn-primary btn-sm"
                style={{ width: '100%', marginTop: '12px', fontSize: '0.76rem' }}
              >
                <span>Calibrate {selectedSkillName} to Profile</span>
              </button>
            </div>
          </div>

          {/* Quick Dual Assessment Launcher for this Skill */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '20px' }}>
            {/* Left: Quick Coding Challenge Preview */}
            <div className="glass-card" style={{ padding: '22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Code2 size={16} className="text-cyan-400" />
                    <span style={{ fontSize: '0.76rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                      Programming Challenge
                    </span>
                  </div>
                  <span style={{ fontSize: '0.72rem', padding: '2px 8px', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.05)', color: '#fff' }}>
                    Lang: {challenge.language.toUpperCase()}
                  </span>
                </div>

                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>
                  {challenge.title}
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.45, marginBottom: '14px' }}>
                  {challenge.scenario}
                </p>

                <div style={{ display: 'flex', gap: '12px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  <span>Time Limit: <b>{challenge.timeLimit}</b></span>
                  <span>Memory Limit: <b>{challenge.memoryLimit}</b></span>
                  <span>Test Cases: <b>{challenge.testCases.length} Invariants</b></span>
                </div>
              </div>

              <div style={{ marginTop: '18px', display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setActiveTab("coding-lab")}
                  className="btn btn-primary btn-sm"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <Terminal size={14} />
                  <span>Open Interactive Code Editor</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Right: Quick Targeted MCQs */}
            <div className="glass-card" style={{ padding: '22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <BookOpen size={16} className="text-purple-400" />
                <span style={{ fontSize: '0.76rem', textTransform: 'uppercase', color: 'var(--accent-purple)', fontWeight: 700 }}>
                  Conceptual Knowledge Check ({skillQuestions.length} Questions)
                </span>
              </div>

              {skillQuestions.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {skillQuestions.map((q, idx) => (
                    <div key={q.id} style={{ padding: '10px 12px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-subtle)' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#fff', marginBottom: '6px' }}>
                        {idx + 1}. {q.prompt.slice(0, 95)}...
                      </div>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {q.options.map(opt => {
                          const isPicked = skillMcqAnswers[q.id] === opt.id;
                          return (
                            <button
                              key={opt.id}
                              onClick={() => setSkillMcqAnswers(prev => ({ ...prev, [q.id]: opt.id }))}
                              style={{
                                padding: '3px 8px',
                                borderRadius: '4px',
                                border: '1px solid',
                                borderColor: isPicked ? 'var(--accent-cyan)' : 'var(--border-subtle)',
                                background: isPicked ? 'rgba(6, 182, 212, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                                color: isPicked ? '#fff' : 'var(--text-secondary)',
                                fontSize: '0.72rem',
                                cursor: 'pointer'
                              }}
                            >
                              Option {opt.id}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  General conceptual questions active.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODE 2: INTERACTIVE PROGRAMMING LAB & CODE EXECUTION                       */}
      {/* ========================================================================= */}
      {activeTab === "coding-lab" && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Lab Header & Language Selector */}
          <div className="glass-card" style={{ padding: '18px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Terminal size={18} className="text-cyan-400" />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>
                  {challenge.title}
                </h3>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                Target Competency: <b style={{ color: 'var(--accent-cyan)' }}>{challenge.skillName}</b> • Difficulty: <b>{challenge.difficulty}</b>
              </p>
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <button
                onClick={() => setUserCode(challenge.solutionSample)}
                className="btn btn-secondary btn-sm"
                title="Load clean reference implementation for demonstration"
              >
                <span>Load Optimal Solution</span>
              </button>

              <button
                onClick={() => {
                  setUserCode(challenge.starterCode);
                  setExecutionResult(null);
                }}
                className="btn btn-ghost btn-sm"
                title="Reset to starter boilerplate"
              >
                <RotateCcw size={14} />
                <span>Reset</span>
              </button>

              <button
                onClick={handleRunCode}
                disabled={isRunningCode}
                className="btn btn-primary"
                style={{ padding: '8px 20px', minWidth: '150px' }}
              >
                {isRunningCode ? (
                  <>
                    <Sparkles size={15} className="animate-spin-slow" />
                    <span>Executing Tests...</span>
                  </>
                ) : (
                  <>
                    <Play size={15} fill="#030712" />
                    <span>Run & Evaluate Tests</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Code Editor and Output Console Split */}
          <div style={{ display: 'grid', gridTemplateColumns: executionResult ? '1.2fr 1fr' : '1fr', gap: '20px' }}>
            {/* Code Editor Workspace */}
            <div
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1.5px solid rgba(6, 182, 212, 0.35)',
                background: '#090d16'
              }}
            >
              {/* Editor Top Bar */}
              <div style={{
                padding: '8px 16px',
                background: 'rgba(255, 255, 255, 0.04)',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.74rem'
              }}>
                <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  editor.{challenge.language} • UTF-8
                </span>
                <span style={{ color: 'var(--accent-cyan)' }}>
                  Interactive Web Sandbox
                </span>
              </div>

              {/* Textarea Code Workspace */}
              <textarea
                value={userCode}
                onChange={(e) => setUserCode(e.target.value)}
                rows={16}
                spellCheck={false}
                style={{
                  width: '100%',
                  background: '#080c18',
                  color: '#e2e8f0',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.85rem',
                  lineHeight: '1.6',
                  padding: '16px',
                  border: 'none',
                  outline: 'none',
                  resize: 'vertical'
                }}
              />
            </div>

            {/* Test Runner & Terminal Output Console */}
            {executionResult && (
              <div className="glass-card animate-slide-in" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#090d16' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={16} className="text-emerald-400" />
                      <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#fff' }}>
                        Test Execution Results
                      </span>
                    </div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>
                      {executionResult.testsPassed} / {executionResult.totalTests} Invariants Passed
                    </span>
                  </div>

                  {/* Benchmark Performance Pills */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '14px' }}>
                    <div style={{ padding: '8px 10px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '6px', fontSize: '0.74rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Execution Time: </span>
                      <strong style={{ color: 'var(--accent-cyan)' }}>{executionResult.executionTime}</strong>
                    </div>
                    <div style={{ padding: '8px 10px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '6px', fontSize: '0.74rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Memory Peak: </span>
                      <strong style={{ color: '#fff' }}>{executionResult.memoryPeak}</strong>
                    </div>
                  </div>

                  {/* Terminal Log Console */}
                  <div style={{
                    padding: '12px',
                    borderRadius: '8px',
                    background: '#040711',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.74rem',
                    color: '#94a3b8',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    maxHeight: '180px',
                    overflowY: 'auto'
                  }}>
                    {executionResult.terminalLogs.map((log, idx) => (
                      <div key={idx} style={{ color: log.includes('[PASS]') ? '#34d399' : log.includes('[AUDIT]') ? '#38bdf8' : '#94a3b8' }}>
                        {log}
                      </div>
                    ))}
                  </div>

                  {/* Evaluated Experience Projection from Code Performance */}
                  <div style={{ marginTop: '16px', padding: '12px', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.08)', border: '1px solid rgba(6, 182, 212, 0.25)' }}>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                      Code Quality & Experience Evaluation:
                    </div>
                    <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#fff', marginTop: '2px' }}>
                      Score: {executionResult.codeQualityScore}% • {evaluatedExperience.experienceLabel}
                    </div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                      {evaluatedExperience.recommendation}
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    onClick={() => {
                      if (onApplyResults) {
                        onApplyResults([{ category: currentSkill.category, score: executionResult.codeQualityScore }]);
                      }
                    }}
                    className="btn btn-primary btn-sm"
                  >
                    <span>Record Verified Practical Score to Profile</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODE 3: ALL SKILLS EXPERIENCE & READINESS MATRIX                           */}
      {/* ========================================================================= */}
      {activeTab === "experience-matrix" && (
        <div className="glass-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>
                All Skills Experience & Competency Matrix
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Comprehensive cross-domain evaluation of candidate technical experience, code fluency, and enterprise readiness.
              </p>
            </div>
            <ResearchBadge type="onet" text="24 Standardized Skills Tracked" size="sm" />
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.84rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-medium)', textAlign: 'left', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '12px' }}>Skill Competency</th>
                  <th style={{ padding: '12px' }}>Category</th>
                  <th style={{ padding: '12px' }}>Evaluated Experience</th>
                  <th style={{ padding: '12px' }}>Practical Fluency</th>
                  <th style={{ padding: '12px' }}>Conceptual Depth</th>
                  <th style={{ padding: '12px' }}>Readiness Tier</th>
                  <th style={{ padding: '12px', textAlign: 'right' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {initialSkills.map((sk) => {
                  const hasCoding = !!programmingChallenges[sk.name];
                  const expEval = calculateSkillExperience(sk, sk.proficiency, Math.min(100, sk.proficiency + 4));

                  return (
                    <tr
                      key={sk.id}
                      style={{
                        borderBottom: '1px solid var(--border-subtle)',
                        transition: 'background 0.15s'
                      }}
                    >
                      <td style={{ padding: '12px', fontWeight: 700, color: '#fff' }}>
                        {sk.name}
                      </td>
                      <td style={{ padding: '12px', color: 'var(--text-secondary)' }}>
                        {sk.category}
                      </td>
                      <td style={{ padding: '12px', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                        {expEval.experienceLabel}
                      </td>
                      <td style={{ padding: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ color: '#fff', fontWeight: 700, minWidth: '35px' }}>{sk.proficiency}%</span>
                          <div style={{ width: '60px' }}>
                            <ProgressBar value={sk.proficiency} variant="dynamic" height={4} showLabel={false} />
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: '12px', color: 'var(--accent-purple)', fontWeight: 600 }}>
                        {expEval.theoreticalDepth}%
                      </td>
                      <td style={{ padding: '12px' }}>
                        <span style={{
                          fontSize: '0.72rem',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          fontWeight: 600,
                          background: expEval.compositeProficiency >= 80 ? 'rgba(16, 185, 129, 0.15)' : 'rgba(6, 182, 212, 0.15)',
                          color: expEval.compositeProficiency >= 80 ? 'var(--accent-emerald)' : 'var(--accent-cyan)'
                        }}>
                          {expEval.experienceTier}
                        </span>
                      </td>
                      <td style={{ padding: '12px', textAlign: 'right' }}>
                        <button
                          onClick={() => {
                            setSelectedSkillName(sk.name);
                            setActiveTab(hasCoding ? "coding-lab" : "skill-analyzer");
                          }}
                          className="btn btn-ghost btn-sm"
                          style={{ color: 'var(--accent-cyan)', fontSize: '0.74rem' }}
                        >
                          {hasCoding ? "Run Code Test" : "Deep-Dive"}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODE 4: FULL MCA DIAGNOSTIC TEST (12 Questions from Section 17)            */}
      {/* ========================================================================= */}
      {activeTab === "full-mcq" && (
        <div>
          {!isFullMcqSubmitted ? (
            <div className="glass-card" style={{ padding: '30px', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                  Question {fullMcqIdx + 1} of {assessmentQuestions.length}
                </span>
                <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                  {Math.round(((fullMcqIdx + 1) / assessmentQuestions.length) * 100)}% Complete
                </span>
              </div>

              <ProgressBar value={Math.round(((fullMcqIdx + 1) / assessmentQuestions.length) * 100)} variant="cyan" height={5} showLabel={false} />

              <div style={{ marginTop: '20px', marginBottom: '14px', display: 'flex', gap: '8px' }}>
                <span className="badge badge-current text-xs py-0.5 px-2">
                  {assessmentQuestions[fullMcqIdx].category}
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', background: 'rgba(255, 255, 255, 0.05)', padding: '2px 8px', borderRadius: '4px' }}>
                  Difficulty: {assessmentQuestions[fullMcqIdx].difficulty}
                </span>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', lineHeight: 1.5, marginBottom: '24px' }}>
                {assessmentQuestions[fullMcqIdx].prompt}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {assessmentQuestions[fullMcqIdx].options.map(option => {
                  const isSelected = fullMcqAnswers[assessmentQuestions[fullMcqIdx].id] === option.id;
                  return (
                    <div
                      key={option.id}
                      onClick={() => setFullMcqAnswers(prev => ({ ...prev, [assessmentQuestions[fullMcqIdx].id]: option.id }))}
                      style={{
                        padding: '14px 18px',
                        borderRadius: '10px',
                        background: isSelected ? 'rgba(6, 182, 212, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                        border: '1.5px solid',
                        borderColor: isSelected ? 'var(--accent-cyan)' : 'var(--border-subtle)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        transition: 'all 0.2s'
                      }}
                    >
                      <div style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: isSelected ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.08)',
                        color: isSelected ? '#030712' : '#fff',
                        fontWeight: 800,
                        fontSize: '0.82rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {option.id}
                      </div>
                      <span style={{ fontSize: '0.9rem', color: isSelected ? '#fff' : 'var(--text-secondary)' }}>
                        {option.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '18px' }}>
                <button
                  onClick={() => setFullMcqIdx(prev => Math.max(0, prev - 1))}
                  disabled={fullMcqIdx === 0}
                  className="btn btn-secondary btn-sm"
                  style={{ opacity: fullMcqIdx === 0 ? 0.4 : 1 }}
                >
                  <ArrowLeft size={16} />
                  <span>Previous</span>
                </button>

                <button
                  onClick={() => {
                    if (fullMcqIdx < assessmentQuestions.length - 1) {
                      setFullMcqIdx(prev => prev + 1);
                    } else {
                      setIsFullMcqSubmitted(true);
                    }
                  }}
                  disabled={!fullMcqAnswers[assessmentQuestions[fullMcqIdx].id]}
                  className="btn btn-primary"
                  style={{ padding: '8px 20px', opacity: !fullMcqAnswers[assessmentQuestions[fullMcqIdx].id] ? 0.5 : 1 }}
                >
                  <span>{fullMcqIdx === assessmentQuestions.length - 1 ? "Submit Diagnostic" : "Next Question"}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ) : (
            <div className="glass-card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>
                    MCA Diagnostic Assessment Summary
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Aggregated scores across 6 core technical domains
                  </p>
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--accent-cyan)' }}>
                  78%
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', marginBottom: '20px' }}>
                {diagnosticSummary.domainScores.map((ds, idx) => (
                  <div key={idx} style={{ padding: '12px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', fontSize: '0.82rem' }}>
                      <span style={{ color: '#fff', fontWeight: 600 }}>{ds.category}</span>
                      <strong style={{ color: ds.score >= 70 ? 'var(--accent-emerald)' : 'var(--accent-amber)' }}>{ds.score}%</strong>
                    </div>
                    <ProgressBar value={ds.score} variant={ds.score >= 70 ? "emerald" : "amber"} height={5} showLabel={false} />
                  </div>
                ))}
              </div>

              <div style={{ padding: '16px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.3)', marginBottom: '20px' }}>
                <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--accent-amber)', marginBottom: '6px' }}>
                  Areas Requiring Development:
                </div>
                <div style={{ fontSize: '0.82rem', color: '#fff' }}>
                  • <b>Cloud Computing (48%)</b>: Docker containers, AWS VPC architecture
                </div>
                <div style={{ fontSize: '0.82rem', color: '#fff', marginTop: '4px' }}>
                  • <b>AI / ML (61%)</b>: Neural network activation functions & imbalanced evaluation
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <button
                  onClick={() => setIsFullMcqSubmitted(false)}
                  className="btn btn-secondary btn-sm"
                >
                  <RotateCcw size={14} />
                  <span>Retake Test</span>
                </button>

                <button
                  onClick={() => {
                    if (onApplyResults) onApplyResults(diagnosticSummary.domainScores);
                  }}
                  className="btn btn-primary"
                >
                  <span>Apply Results to Profile</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
