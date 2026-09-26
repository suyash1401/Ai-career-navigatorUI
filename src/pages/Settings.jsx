import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, User, Sliders, RotateCcw, 
  Download, CheckCircle2, Shield, Eye, Database
} from 'lucide-react';
import { alternateStudents } from '../data/students';
import { initialCareers } from '../data/careers';
import { ResearchBadge } from '../components/ResearchBadge';

export const Settings = ({ 
  student, 
  onSelectStudent, 
  onResetData, 
  demoMode, 
  setDemoMode 
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleExportProfile = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(student, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `mca_profile_${student.name.replace(/\s+/g, '_').toLowerCase()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', maxWidth: '850px' }}>
      {/* Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', fontWeight: 700 }}>
            Prototype Configuration
          </span>
          <ResearchBadge type="completed" text="Local Demonstration State" size="sm" />
        </div>
        <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
          Platform Settings & Cohort Preferences
        </h2>
        <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
          Manage research demonstration mode, switch active candidate profiles, and export experimental data.
        </p>
      </div>

      {/* Section 1: Demonstration Candidate Switcher */}
      <div className="glass-card" style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>
          Active MCA Student Profile
        </h3>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
          Select candidate archetype to demonstrate how the recommendation engine adjusts for different MCA specializations:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {alternateStudents.map((stu) => {
            const isSelected = student.id === stu.id;
            return (
              <div
                key={stu.id}
                onClick={() => onSelectStudent(stu.id)}
                style={{
                  padding: '14px 18px',
                  borderRadius: '10px',
                  background: isSelected ? 'rgba(6, 182, 212, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                  border: '1.5px solid',
                  borderColor: isSelected ? 'var(--accent-cyan)' : 'var(--border-subtle)',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: isSelected ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.08)',
                    color: isSelected ? '#030712' : '#fff',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {stu.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#fff' }}>
                      {stu.name}
                    </div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                      {stu.degree} • Target: <b>{stu.targetRole}</b>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>
                    {stu.profileCompletion}% Ready
                  </span>
                  {isSelected && <CheckCircle2 size={18} className="text-cyan-400" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 2: Research Annotations Mode */}
      <div className="glass-card" style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>
          Demonstration Display Controls
        </h3>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
          Enable or disable technical taxonomy provenance badges (O*NET, ESCO, Canonical SOC codes) across the interface:
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '14px 18px',
          borderRadius: '10px',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid var(--border-subtle)'
        }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#fff' }}>
              Academic Research Annotations
            </div>
            <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
              Displays O*NET-SOC codes, ESCO URIs, and canonical vector distance metrics.
            </div>
          </div>

          <button
            onClick={() => setDemoMode(!demoMode)}
            className={`btn btn-sm ${demoMode ? 'btn-primary' : 'btn-secondary'}`}
          >
            {demoMode ? "Enabled (Research Mode)" : "Disabled (Clean Student Mode)"}
          </button>
        </div>
      </div>

      {/* Section 3: Data Export & Reset */}
      <div className="glass-card" style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>
          Experimental Data Management
        </h3>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
          Export local mock JSON profile state or reset candidate competencies back to original MCA baselines:
        </p>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button
            onClick={handleExportProfile}
            className="btn btn-secondary btn-sm"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Download size={15} />
            <span>{downloadSuccess ? "Profile Downloaded!" : "Export Profile JSON"}</span>
          </button>

          <button
            onClick={onResetData}
            className="btn btn-ghost btn-sm"
            style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-rose)' }}
          >
            <RotateCcw size={15} />
            <span>Reset Demo Data to Initial Baseline</span>
          </button>
        </div>
      </div>
    </div>
  );
};
