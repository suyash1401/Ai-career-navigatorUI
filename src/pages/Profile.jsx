import React, { useState } from 'react';
import { 
  User, GraduationCap, Calendar, MapPin, Mail, 
  Award, Edit3, CheckCircle2, Sparkles, BookOpen, 
  ExternalLink, Layers, Database, ChevronRight, Sliders
} from 'lucide-react';
import { ResearchBadge } from '../components/ResearchBadge';
import { Modal } from '../components/Modal';
import { ProgressBar } from '../components/ProgressBar';

export const Profile = ({ student, skills, onUpdateSkill, onUpdateStudent }) => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  // Temporary state for editing profile
  const [profileForm, setProfileForm] = useState({
    name: student.name,
    targetRole: student.targetRole,
    specialization: student.specialization,
    graduationYear: student.graduationYear,
    summary: student.summary
  });

  const categories = ["All", "Programming", "Web Development", "Database", "AI / ML", "Cloud", "Tools"];

  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(s => s.category.toLowerCase().includes(activeCategory.toLowerCase().slice(0, 4)));

  const handleSaveProfile = (e) => {
    e.preventDefault();
    onUpdateStudent(profileForm);
    setIsEditProfileOpen(false);
  };

  const handleProficiencyChange = (newLevel) => {
    if (selectedSkill) {
      const updated = {
        ...selectedSkill,
        proficiency: Number(newLevel),
        level: Number(newLevel) >= 85 ? "Mastery" : Number(newLevel) >= 75 ? "Advanced" : Number(newLevel) >= 55 ? "Intermediate" : "Foundational"
      };
      setSelectedSkill(updated);
      onUpdateSkill(updated);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      {/* Student Academic Bio Header Card */}
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
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            {/* Avatar Circle */}
            <div style={{
              width: '84px',
              height: '84px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)',
              color: '#030712',
              fontSize: '2rem',
              fontWeight: 900,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 25px rgba(6, 182, 212, 0.4)',
              flexShrink: 0
            }}>
              {student.avatar || "SK"}
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '4px' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
                  {student.name}
                </h2>
                <ResearchBadge type="current" text="Verified Student Profile" size="sm" />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.85rem', color: 'var(--text-secondary)', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <GraduationCap size={15} className="text-cyan-400" />
                  {student.degree}
                </span>
                <span>•</span>
                <span style={{ color: 'var(--accent-purple)', fontWeight: 600 }}>{student.specialization}</span>
                <span>•</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Calendar size={14} /> Class of {student.graduationYear}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '8px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={13} /> {student.location}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Mail size={13} /> {student.email}
                </span>
                <span style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>
                  Cumulative GPA: {student.cgpa}
                </span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => setIsEditProfileOpen(true)}
              className="btn btn-secondary btn-sm"
              style={{ padding: '8px 14px' }}
            >
              <Edit3 size={14} />
              <span>Edit Profile</span>
            </button>
          </div>
        </div>

        {/* Bio Summary */}
        <div style={{
          marginTop: '20px',
          paddingTop: '16px',
          borderTop: '1px solid var(--border-subtle)',
          fontSize: '0.86rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.55
        }}>
          {student.summary}
        </div>

        {/* Research Cohort Metadata */}
        <div style={{
          display: 'flex',
          gap: '20px',
          marginTop: '16px',
          padding: '10px 14px',
          borderRadius: '8px',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid var(--border-subtle)',
          fontSize: '0.76rem',
          color: 'var(--text-muted)',
          flexWrap: 'wrap'
        }}>
          <span>Cohort ID: <b style={{ color: '#fff' }}>{student.researchParticipation.datasetCohort}</b></span>
          <span>Curriculum Code: <b style={{ color: '#fff' }}>{student.researchParticipation.curriculumCode}</b></span>
          <span>Target Alignment Role: <b style={{ color: 'var(--accent-cyan)' }}>{student.targetRole}</b></span>
        </div>
      </div>

      {/* Technical Skills Section with Interactive Chips */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>
              Technical Skills Matrix
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              Interactive competencies mapped to canonical taxonomies. Click any skill chip to inspect O*NET/ESCO alignment and simulate level calibration.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`btn btn-sm ${activeCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '4px 10px', fontSize: '0.76rem' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Skill Chips Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '14px'
        }}>
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              onClick={() => setSelectedSkill(skill)}
              className="skill-chip"
              style={{
                padding: '12px 14px',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                width: '100%',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#fff' }}>
                  {skill.name}
                </span>
                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: skill.proficiency >= 80 ? 'var(--accent-emerald)' : skill.proficiency >= 65 ? 'var(--accent-cyan)' : 'var(--accent-amber)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '2px 6px',
                  borderRadius: '4px'
                }}>
                  {skill.proficiency}% • {skill.level}
                </span>
              </div>

              {/* Progress bar */}
              <ProgressBar value={skill.proficiency} variant="dynamic" height={5} showLabel={false} />

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-muted)', width: '100%' }}>
                <span>{skill.category}</span>
                <span>{skill.projectsCount} projects</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Skill Inspection Modal */}
      {selectedSkill && (
        <Modal
          isOpen={!!selectedSkill}
          onClose={() => setSelectedSkill(null)}
          title={selectedSkill.name}
          subtitle={`Technical Competency • Category: ${selectedSkill.category}`}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Top Badges */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <ResearchBadge type="canonical" text={selectedSkill.canonicalId} size="sm" />
              <ResearchBadge type="onet" text={selectedSkill.oNetCode} size="sm" />
              <span className="badge badge-completed text-xs py-0.5 px-2">
                {selectedSkill.verified ? "Verified by Academic Project" : "Self-Reported"}
              </span>
            </div>

            {/* Description */}
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              {selectedSkill.description}
            </p>

            {/* Canonical Mapping Details */}
            <div style={{
              padding: '14px',
              borderRadius: '8px',
              background: 'rgba(139, 92, 246, 0.08)',
              border: '1px solid rgba(139, 92, 246, 0.25)'
            }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-purple)' }}>
                Canonical Ontology Alignment
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff', marginTop: '4px' }}>
                {selectedSkill.canonicalName}
              </div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                ESCO Skill Reference: {selectedSkill.escoSkillUri}
              </div>
            </div>

            {/* Live Proficiency Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#fff' }}>
                  Simulate Proficiency Calibration
                </span>
                <span style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>
                  {selectedSkill.proficiency}% ({selectedSkill.level})
                </span>
              </div>
              <input
                type="range"
                min="30"
                max="100"
                value={selectedSkill.proficiency}
                onChange={(e) => handleProficiencyChange(e.target.value)}
                style={{ width: '100%', cursor: 'pointer', accentColor: 'var(--accent-cyan)' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                <span>Foundational (30%)</span>
                <span>Intermediate (60%)</span>
                <span>Advanced (80%)</span>
                <span>Mastery (100%)</span>
              </div>
            </div>

            {/* Experience and Projects Meta */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div style={{ padding: '10px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '6px' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Experience Duration</span>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{selectedSkill.experienceMonths} Months</div>
              </div>
              <div style={{ padding: '10px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '6px' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Academic & Capstone Projects</span>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{selectedSkill.projectsCount} Projects</div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
              <button
                onClick={() => setSelectedSkill(null)}
                className="btn btn-primary btn-sm"
              >
                <span>Save Calibration</span>
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Edit Profile Modal */}
      {isEditProfileOpen && (
        <Modal
          isOpen={isEditProfileOpen}
          onClose={() => setIsEditProfileOpen(false)}
          title="Edit Student Information"
          subtitle="Update candidate academic markers for research evaluation"
        >
          <form onSubmit={handleSaveProfile} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '6px' }}>Full Name</label>
              <input
                type="text"
                value={profileForm.name}
                onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                className="glass-input"
                required
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '6px' }}>Target Role</label>
                <input
                  type="text"
                  value={profileForm.targetRole}
                  onChange={(e) => setProfileForm({ ...profileForm, targetRole: e.target.value })}
                  className="glass-input"
                  required
                />
              </div>
              <div>
                <label style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '6px' }}>Graduation Year</label>
                <input
                  type="number"
                  value={profileForm.graduationYear}
                  onChange={(e) => setProfileForm({ ...profileForm, graduationYear: e.target.value })}
                  className="glass-input"
                  required
                />
              </div>
            </div>

            <div>
              <label style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '6px' }}>Specialization</label>
              <input
                type="text"
                value={profileForm.specialization}
                onChange={(e) => setProfileForm({ ...profileForm, specialization: e.target.value })}
                className="glass-input"
                required
              />
            </div>

            <div>
              <label style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '6px' }}>Research & Professional Summary</label>
              <textarea
                rows={3}
                value={profileForm.summary}
                onChange={(e) => setProfileForm({ ...profileForm, summary: e.target.value })}
                className="glass-input"
                style={{ resize: 'vertical' }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
              <button
                type="button"
                onClick={() => setIsEditProfileOpen(false)}
                className="btn btn-ghost btn-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary btn-sm"
              >
                Update Profile
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};
