import React from 'react';
import { 
  BarChart3, Database, Globe, Layers, AlertCircle, 
  CheckCircle2, Sparkles, GitFork, ArrowDown, FileText
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { researchMetadata, demonstrationDatasetStats } from '../data/researchData';
import { ResearchBadge } from '../components/ResearchBadge';

export const ResearchInsights = ({ onNavigateToArchitecture }) => {
  const { summaryCards, categoryDistribution, taxonomyComparison, disclaimer } = demonstrationDatasetStats;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      {/* Page Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--accent-purple)', fontWeight: 700 }}>
              MCA Faculty Demonstration
            </span>
            <ResearchBadge type="completed" text="Audited Research Corpus" size="sm" />
          </div>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            Research Insights & Dataset Quality
          </h2>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Empirical metrics from the O*NET v28.0 and ESCO v1.1.1 cross-taxonomy harmonization pipeline.
          </p>
        </div>

        {onNavigateToArchitecture && (
          <button
            onClick={onNavigateToArchitecture}
            className="btn btn-primary btn-sm"
          >
            <GitFork size={15} />
            <span>Interactive Research Pipeline</span>
          </button>
        )}
      </div>

      {/* Mandatory Disclaimer Badge (Section 18) */}
      <div style={{
        padding: '12px 18px',
        borderRadius: '10px',
        background: 'rgba(245, 158, 11, 0.08)',
        border: '1px solid rgba(245, 158, 11, 0.3)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <AlertCircle size={16} className="text-amber-400" />
        <span style={{ fontSize: '0.8rem', color: '#fbbf24', fontWeight: 600 }}>
          {disclaimer}
        </span>
      </div>

      {/* Demonstration Statistics Summary Cards (Section 18) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '16px' }}>
        {summaryCards.map((card, idx) => (
          <div
            key={idx}
            className="glass-card"
            style={{
              padding: '18px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}
          >
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>
              {card.label}
            </span>
            <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#fff', margin: '8px 0 4px 0' }}>
              {card.value}
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)' }}>
              {card.note}
            </div>
          </div>
        ))}
      </div>

      {/* Dataset Overview: O*NET vs ESCO vs Canonical Layer (Section 18 & 19) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
        {/* O*NET Ingestion Card */}
        <div className="glass-card" style={{ padding: '22px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <ResearchBadge type="onet" text="US DOL Release 28.0" size="sm" />
            <ResearchBadge type="completed" text="Parsed & Cleansed" size="sm" />
          </div>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
            O*NET Occupational Information Network
          </h4>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
            Comprehensive knowledge base detailing 1,016 SOC-coded technical and engineering occupations with importance ratings across 277 skills, abilities, and work activities.
          </p>
          <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span>• Broad occupational taxonomy designed for the US labor market</span>
            <span>• Content model links generalized work activities to technological tools</span>
          </div>
        </div>

        {/* ESCO Ingestion Card */}
        <div className="glass-card" style={{ padding: '22px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <ResearchBadge type="esco" text="European Commission v1.1.1" size="sm" />
            <ResearchBadge type="completed" text="Parsed & Cleansed" size="sm" />
          </div>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
            ESCO Multilingual Taxonomy
          </h4>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
            Semantic Web classification organizing 3,008 occupations and 13,890 granular competence nodes compliant with W3C SKOS (Simple Knowledge Organization System).
          </p>
          <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span>• Fine-grained task-level competence descriptions</span>
            <span>• Provides international semantic graph URI identifiers</span>
          </div>
        </div>

        {/* Canonical Layer Card */}
        <div className="glass-card" style={{ padding: '22px', border: '1.5px solid var(--accent-purple)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <ResearchBadge type="canonical" text="Research Contribution" size="sm" />
            <ResearchBadge type="current" text="Semantic Layer" size="sm" />
          </div>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
            Canonical Skill Normalization Layer
          </h4>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
            The core MCA research innovation: reconciles vocabulary divergences (e.g. US "Programming" vs European "computer programming") into a unified, source-aware ontology.
          </p>
          <div style={{ fontSize: '0.74rem', color: 'var(--accent-purple)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span>• Preserves source provenance badges across all nodes</span>
            <span>• Enables zero-loss cross-taxonomy career matching</span>
          </div>
        </div>
      </div>

      {/* Visual Charts: Category Breakdown & Taxonomy Comparison */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(320px, 1fr) 1.2fr', gap: '20px' }}>
        {/* Category Distribution Pie/List */}
        <div className="glass-card" style={{ padding: '22px' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>
            Mapped Skill Categories
          </h4>
          <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
            Proportional distribution across 1,840 standardized canonical competencies
          </span>

          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {categoryDistribution.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                  <span style={{ color: '#fff', fontWeight: 600 }}>{item.name}</span>
                  <span style={{ color: item.color, fontWeight: 700 }}>{item.count} ({item.percentage}%)</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '999px', overflow: 'hidden' }}>
                  <div style={{ width: `${item.percentage * 2}%`, height: '100%', background: item.color, borderRadius: '999px' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Taxonomy Comparison Table */}
        <div className="glass-card" style={{ padding: '22px' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>
            Cross-Taxonomy Structural Comparison
          </h4>
          <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
            O*NET Standard vs ESCO System vs Normalized Canonical Layer
          </span>

          <div style={{ overflowX: 'auto', marginTop: '16px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-medium)', textAlign: 'left', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '10px' }}>Dimension</th>
                  <th style={{ padding: '10px' }}>O*NET 28.0</th>
                  <th style={{ padding: '10px' }}>ESCO v1.1.1</th>
                  <th style={{ padding: '10px', color: 'var(--accent-purple)' }}>Canonical Layer</th>
                </tr>
              </thead>
              <tbody>
                {taxonomyComparison.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <td style={{ padding: '10px', fontWeight: 700, color: '#fff' }}>{row.metric}</td>
                    <td style={{ padding: '10px', color: 'var(--accent-blue)' }}>{row.onet}</td>
                    <td style={{ padding: '10px', color: 'var(--accent-amber)' }}>{row.esco}</td>
                    <td style={{ padding: '10px', color: 'var(--accent-purple)', fontWeight: 600 }}>{row.canonicalMapped}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
