import React, { useState } from 'react';
import { 
  Code2, Filter, Search, Sparkles, BarChart2, 
  Layers, Plus, CheckCircle2, ArrowUpDown
} from 'lucide-react';
import { SkillCard } from '../components/SkillCard';
import { SkillRadar } from '../components/SkillRadar';
import { Modal } from '../components/Modal';
import { ResearchBadge } from '../components/ResearchBadge';
import { skillCategories } from '../data/skills';

export const Skills = ({ skills, onUpdateSkill }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("proficiency-desc");
  const [inspectSkill, setInspectSkill] = useState(null);

  // Filter skills
  const filteredSkills = skills
    .filter(skill => {
      const matchCat = selectedCategory === "All" || skill.category === selectedCategory;
      const matchQuery = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         skill.canonicalName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    })
    .sort((a, b) => {
      if (sortBy === "proficiency-desc") return b.proficiency - a.proficiency;
      if (sortBy === "proficiency-asc") return a.proficiency - b.proficiency;
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      return 0;
    });

  const handleLevelChange = (newVal) => {
    if (inspectSkill) {
      const updated = {
        ...inspectSkill,
        proficiency: Number(newVal),
        level: Number(newVal) >= 85 ? "Mastery" : Number(newVal) >= 75 ? "Advanced" : Number(newVal) >= 55 ? "Intermediate" : "Foundational"
      };
      setInspectSkill(updated);
      onUpdateSkill(updated);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Top Header & Overview */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', fontWeight: 700 }}>
              Technical Competence Inventory
            </span>
            <ResearchBadge type="onet" text="Content Model 2.A & 2.C" size="sm" />
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            Skills Visualization & Analysis
          </h2>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Multidimensional technical skills categorized into 6 core MCA research disciplines.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <div style={{
            padding: '10px 16px',
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid var(--border-subtle)',
            fontSize: '0.8rem',
            textAlign: 'center'
          }}>
            <div style={{ color: 'var(--text-muted)' }}>Total Tracked</div>
            <strong style={{ fontSize: '1.1rem', color: '#fff' }}>{skills.length} Skills</strong>
          </div>

          <div style={{
            padding: '10px 16px',
            borderRadius: '10px',
            background: 'rgba(6, 182, 212, 0.08)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            fontSize: '0.8rem',
            textAlign: 'center'
          }}>
            <div style={{ color: 'var(--accent-cyan)' }}>Avg Proficiency</div>
            <strong style={{ fontSize: '1.1rem', color: '#fff' }}>
              {Math.round(skills.reduce((acc, c) => acc + c.proficiency, 0) / skills.length)}%
            </strong>
          </div>
        </div>
      </div>

      {/* Visual Analytics Row: Radar Chart + Category Breakdown */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(320px, 1fr) 1.2fr', gap: '20px' }}>
        {/* Radar Chart */}
        <div className="glass-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ marginBottom: '8px' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>
              Taxonomy Competency Coverage
            </h4>
            <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
              Radar representation against typical junior software engineer benchmarks
            </span>
          </div>

          <SkillRadar skills={skills} height={270} />
        </div>

        {/* Category Strength Breakdown */}
        <div className="glass-card" style={{ padding: '20px' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '14px' }}>
            Competency Domain Distribution
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { name: "Programming", count: skills.filter(s => s.category === "Programming").length, avg: 80, color: "var(--accent-cyan)" },
              { name: "Web Development", count: skills.filter(s => s.category === "Web Development").length, avg: 76, color: "var(--accent-blue)" },
              { name: "Database", count: skills.filter(s => s.category === "Database").length, avg: 73, color: "var(--accent-purple)" },
              { name: "AI / ML", count: skills.filter(s => s.category === "AI / ML").length, avg: 58, color: "var(--accent-violet)" },
              { name: "Cloud", count: skills.filter(s => s.category === "Cloud").length, avg: 55, color: "var(--accent-amber)" },
              { name: "Tools", count: skills.filter(s => s.category === "Tools").length, avg: 74, color: "var(--accent-emerald)" }
            ].map((cat, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                  <span style={{ fontWeight: 600, color: '#fff' }}>{cat.name} ({cat.count})</span>
                  <span style={{ color: cat.color, fontWeight: 700 }}>{cat.avg}% avg</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '999px', overflow: 'hidden' }}>
                  <div style={{ width: `${cat.avg}%`, height: '100%', background: cat.color, borderRadius: '999px' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '14px',
        padding: '14px 18px',
        borderRadius: '12px',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid var(--border-subtle)'
      }}>
        {/* Category Pills */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`btn btn-sm ${selectedCategory === cat ? 'btn-primary' : 'btn-ghost'}`}
              style={{
                padding: '5px 12px',
                fontSize: '0.78rem',
                border: selectedCategory === cat ? '1px solid var(--accent-cyan)' : '1px solid transparent'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search & Sort Controls */}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: '220px' }}>
            <Search size={14} style={{ position: 'absolute', left: '10px', top: '10px', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="glass-input"
              style={{ padding: '6px 10px 6px 30px', fontSize: '0.8rem' }}
            />
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              color: '#fff',
              padding: '6px 10px',
              borderRadius: '8px',
              fontSize: '0.78rem',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            <option value="proficiency-desc" style={{ background: '#0b1324' }}>Highest Level</option>
            <option value="proficiency-asc" style={{ background: '#0b1324' }}>Lowest Level</option>
            <option value="name-asc" style={{ background: '#0b1324' }}>Alphabetical</option>
          </select>
        </div>
      </div>

      {/* Grid of Skill Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '16px'
      }}>
        {filteredSkills.map((skill) => (
          <SkillCard
            key={skill.id}
            skill={skill}
            onClick={(s) => setInspectSkill(s)}
          />
        ))}
      </div>

      {/* Inspect / Calibrate Skill Modal */}
      {inspectSkill && (
        <Modal
          isOpen={!!inspectSkill}
          onClose={() => setInspectSkill(null)}
          title={inspectSkill.name}
          subtitle={`Skill Taxonomy Inspector • Category: ${inspectSkill.category}`}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <ResearchBadge type="canonical" text={inspectSkill.canonicalId} size="sm" />
              <ResearchBadge type="onet" text={inspectSkill.oNetCode} size="sm" />
              <ResearchBadge type="esco" text="ESCO Skill Standard" size="sm" />
            </div>

            <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              {inspectSkill.description}
            </p>

            {/* Canonical Mapping Reference */}
            <div style={{
              padding: '12px 14px',
              borderRadius: '8px',
              background: 'rgba(139, 92, 246, 0.08)',
              border: '1px solid rgba(139, 92, 246, 0.25)'
            }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-purple)' }}>
                Harmonized Canonical Concept
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fff', marginTop: '2px' }}>
                {inspectSkill.canonicalName}
              </div>
            </div>

            {/* Interactive Proficiency Adjustment */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#fff' }}>
                  Adjust Technical Proficiency
                </span>
                <span style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>
                  {inspectSkill.proficiency}% ({inspectSkill.level})
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                value={inspectSkill.proficiency}
                onChange={(e) => handleLevelChange(e.target.value)}
                style={{ width: '100%', cursor: 'pointer', accentColor: 'var(--accent-cyan)' }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
              <button
                onClick={() => setInspectSkill(null)}
                className="btn btn-primary btn-sm"
              >
                <span>Done</span>
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
