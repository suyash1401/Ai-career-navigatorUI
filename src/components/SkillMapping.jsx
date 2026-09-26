import React, { useState } from 'react';
import { 
  Workflow, ArrowRight, Layers, CheckCircle2, 
  ExternalLink, Sparkles, Database, Globe, Info, Search
} from 'lucide-react';
import { canonicalMappings } from '../data/canonicalMappings';
import { ResearchBadge } from './ResearchBadge';

export const SkillMapping = ({ onSelectCareer }) => {
  const [selectedMapping, setSelectedMapping] = useState(canonicalMappings[0]);
  const [searchFilter, setSearchFilter] = useState("");

  const filteredMappings = canonicalMappings.filter(m => 
    m.canonicalName.toLowerCase().includes(searchFilter.toLowerCase()) ||
    m.category.toLowerCase().includes(searchFilter.toLowerCase()) ||
    m.sourceTerms.some(t => t.term.toLowerCase().includes(searchFilter.toLowerCase()))
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Research Disclaimer & Concept Banner */}
      <div style={{
        padding: '16px 20px',
        borderRadius: '12px',
        background: 'rgba(139, 92, 246, 0.08)',
        border: '1px solid rgba(139, 92, 246, 0.3)',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '14px'
      }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '8px',
          background: 'rgba(139, 92, 246, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--accent-purple)',
          flexShrink: 0
        }}>
          <Workflow size={20} />
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>
              Canonical Skill Normalization Architecture (Research Prototype)
            </h4>
            <ResearchBadge type="current" text="Semantic Disambiguation Layer" size="sm" />
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: 1.45 }}>
            Demonstrates the harmonization of disparate occupational taxonomies: US Department of Labor <b>O*NET</b> descriptors and European Commission <b>ESCO</b> competencies converge through a <b>Canonical Skill Normalization Layer</b> to enable cross-border career matching.
          </p>
        </div>
      </div>

      {/* Interactive Mapping Selector Tabs */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {canonicalMappings.map((m) => {
            const isSelected = selectedMapping.id === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setSelectedMapping(m)}
                className={`btn btn-sm ${isSelected ? 'btn-primary' : 'btn-secondary'}`}
                style={{
                  padding: '6px 14px',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  border: isSelected ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)'
                }}
              >
                <span>{m.canonicalName.split('&')[0]}</span>
                {isSelected && <Sparkles size={12} className="text-black" />}
              </button>
            );
          })}
        </div>

        <div style={{ width: '220px' }}>
          <input
            type="text"
            placeholder="Search mapping terms..."
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            className="glass-input"
            style={{ padding: '6px 12px', fontSize: '0.8rem' }}
          />
        </div>
      </div>

      {/* Main Visual Convergence Architecture Box */}
      <div className="glass-card" style={{ padding: '24px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '12px' }}>
          <div>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--accent-purple)', fontWeight: 700, letterSpacing: '0.05em' }}>
              Active Normalization Entity: {selectedMapping.id}
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginTop: '2px' }}>
              {selectedMapping.canonicalName}
            </h3>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <span style={{ fontSize: '0.78rem', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-emerald)', padding: '3px 8px', borderRadius: '4px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
              Confidence: {Math.round(selectedMapping.confidenceScore * 100)}%
            </span>
            <span style={{ fontSize: '0.78rem', background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-muted)', padding: '3px 8px', borderRadius: '4px' }}>
              Vector Dist: {selectedMapping.vectorDistance}
            </span>
          </div>
        </div>

        {/* 5-Column Visual Pipeline: O*NET -> Source Terms -> Canonical Layer -> ESCO -> Occupations */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          position: 'relative'
        }}>
          {/* Column 1: O*NET Source */}
          <div style={{
            background: 'rgba(59, 130, 246, 0.05)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '12px',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <ResearchBadge type="onet" text={selectedMapping.oNet.code} size="sm" />
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff', marginTop: '10px' }}>
                {selectedMapping.oNet.title}
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                Element: {selectedMapping.oNet.elementId}
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '8px', lineHeight: 1.4 }}>
                "{selectedMapping.oNet.definition}"
              </p>
            </div>
            <div style={{ marginTop: '12px', fontSize: '0.7rem', color: 'var(--accent-cyan)' }}>
              Domain: {selectedMapping.oNet.domain}
            </div>
          </div>

          {/* Column 2: Converging Source Terminology */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '12px',
            padding: '16px'
          }}>
            <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '8px' }}>
              Source Terminology (Aliases)
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {selectedMapping.sourceTerms.map((term, i) => (
                <div
                  key={i}
                  style={{
                    padding: '8px 10px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#fff' }}>
                    "{term.term}"
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    <span>{term.source}</span>
                    <span style={{ color: 'var(--accent-cyan)' }}>{term.frequency} refs</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: The Canonical Normalization Hub (Center) */}
          <div style={{
            background: 'linear-gradient(180deg, rgba(139, 92, 246, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)',
            border: '2px solid var(--accent-purple)',
            borderRadius: '12px',
            padding: '18px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 0 25px rgba(139, 92, 246, 0.25)',
            position: 'relative'
          }}>
            <div>
              <ResearchBadge type="canonical" text="Normalized MCA Layer" size="sm" />
              <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#fff', marginTop: '10px' }}>
                {selectedMapping.canonicalName}
              </div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-accent-purple)', marginTop: '4px', fontWeight: 600 }}>
                Category: {selectedMapping.category}
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '10px', lineHeight: 1.45 }}>
                {selectedMapping.description}
              </p>
            </div>
            <div style={{ marginTop: '12px', padding: '6px 10px', background: 'rgba(0, 0, 0, 0.4)', borderRadius: '6px', fontSize: '0.7rem', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={13} />
              <span>{selectedMapping.researchStatus}</span>
            </div>
          </div>

          {/* Column 4: ESCO Standard */}
          <div style={{
            background: 'rgba(245, 158, 11, 0.05)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            borderRadius: '12px',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <ResearchBadge type="esco" text="v1.1.1 Semantic Web" size="sm" />
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff', marginTop: '10px' }}>
                "{selectedMapping.esco.preferredLabel}"
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '4px', wordBreak: 'break-all' }}>
                URI: {selectedMapping.esco.uri.slice(-22)}
              </div>
              <div style={{ marginTop: '8px' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Synonyms in ESCO:</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '4px' }}>
                  {selectedMapping.esco.altLabels.map((alt, i) => (
                    <span key={i} style={{ fontSize: '0.7rem', padding: '2px 6px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px', color: 'var(--text-secondary)' }}>
                      {alt}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ marginTop: '12px', fontSize: '0.7rem', color: 'var(--accent-amber)' }}>
              Group: {selectedMapping.esco.broaderConcept}
            </div>
          </div>

          {/* Column 5: Target Occupations */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '12px',
            padding: '16px'
          }}>
            <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '8px' }}>
              Standardized Occupations
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {selectedMapping.targetOccupations.map((occ, i) => (
                <div
                  key={i}
                  onClick={() => onSelectCareer && onSelectCareer(occ.id)}
                  style={{
                    padding: '8px 10px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    cursor: onSelectCareer ? 'pointer' : 'default',
                    transition: 'all 0.15s'
                  }}
                  onMouseEnter={(e) => {
                    if (onSelectCareer) e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                  }}
                  onMouseLeave={(e) => {
                    if (onSelectCareer) e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  }}
                >
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#fff' }}>
                    {occ.title}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', marginTop: '2px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Role Importance</span>
                    <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>{Math.round(occ.matchWeight * 100)}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
