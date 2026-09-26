import React, { useState } from 'react';
import { 
  GitFork, Database, Globe, Layers, ArrowDown, 
  ArrowRight, CheckCircle2, Sparkles, Clock, Compass, GitCompare, Map, Info
} from 'lucide-react';
import { ResearchBadge } from '../components/ResearchBadge';

export const VisualArchitecture = ({ onNavigate }) => {
  const [selectedNode, setSelectedNode] = useState("canonical");

  const architectureNodes = [
    {
      id: "onet",
      title: "O*NET Dataset",
      source: "U.S. Department of Labor (Release 28.0)",
      type: "Taxonomy Ingestion",
      status: "completed",
      description: "Direct ingestion of O*NET Content Model consisting of generalized work activities, knowledge matrices, and 1,016 SOC-coded technical roles.",
      input: "Raw O*NET CSV/SQL dumps (48,920 records)",
      output: "Structured relational tables in local staging database",
      details: "Normalized into occupational clusters with importance and level ratings (0-100)."
    },
    {
      id: "processing",
      title: "Data Processing & Cleaning",
      source: "ETL Transformation Pipeline",
      type: "Data Quality Pipeline",
      status: "completed",
      description: "Automated deduplication, special-character normalization, terminology disambiguation, and stopword pruning across source descriptions.",
      input: "Raw taxonomy records with noisy descriptors",
      output: "Cleaned, tokenized occupational competence statements",
      details: "6,430 duplicate taxonomy aliases reconciled with 1,120 missing value interpolations."
    },
    {
      id: "validated",
      title: "Validated Occupational Knowledge",
      source: "Curriculum Harmonization",
      type: "Knowledge Store",
      status: "completed",
      description: "Verified competence database cross-referenced against modern MCA computer science syllabi and industry technical role standards.",
      input: "Cleansed taxonomy records",
      output: "Standardized Technical Skill & Knowledge Entities",
      details: "Segmented into 6 academic domains: Programming, Databases, Web, AI/ML, Cloud, and Software Tools."
    },
    {
      id: "canonical",
      title: "Canonical Skill Layer",
      source: "Core MCA Research Innovation",
      type: "Semantic Normalization Hub",
      status: "current",
      description: "Semantic layer bridging vocabulary differences between US O*NET and European ESCO systems to produce a single source of truth for technical skills.",
      input: "O*NET skill elements + ESCO competence nodes + Curriculum keywords",
      output: "1,840 Harmonized Canonical Entities with vector similarity weights",
      details: "Solves the semantic gap (e.g. US 'Programming' vs EU 'computer programming' vs academic 'Coding')."
    },
    {
      id: "esco",
      title: "ESCO Occupation / Skills",
      source: "European Commission (v1.1.1)",
      type: "Taxonomy Ingestion",
      status: "completed",
      description: "Multilingual taxonomy utilizing W3C Simple Knowledge Organization System (SKOS) concepts for fine-grained task competencies.",
      input: "ESCO SKOS RDF/CSV releases (13,890 skills)",
      output: "Hierarchical skill-to-occupation graph edges",
      details: "Mapped to canonical nodes via semantic embedding distance and URI anchors."
    },
    {
      id: "knowledge_base",
      title: "Career Knowledge Base",
      source: "Integrated Graph Store",
      type: "Bipartite Knowledge Graph",
      status: "current",
      description: "Unified bipartite graph linking technical student profiles, canonical skills, and industry career profiles.",
      input: "Canonical skills + O*NET/ESCO mapped occupations",
      output: "Queryable occupational graph with edge weight calibrations",
      details: "Powers downstream explainable recommendation and gap estimation engines."
    },
    {
      id: "recommendation",
      title: "AI Recommendation & Skill Gap Engine",
      source: "Algorithmic Inference",
      type: "Multi-Constraint Solver",
      status: "planned",
      description: "Dual-component system: calculates statistical cosine fit for career matching and computes exact delta gaps with criticality ratings.",
      input: "Student technical profile vector + Target career requirement vector",
      output: "Ranked career recommendations with 'Why this career?' explainability",
      details: "Designed as pluggable service for subsequent backend deployment."
    },
    {
      id: "roadmap",
      title: "Career Pathway & Roadmap Generator",
      source: "Graph Topological Sorter",
      type: "Pathway Synthesis",
      status: "planned",
      description: "Converts skill gap deltas into a 7-stage progressive milestone roadmap tailored to candidate career targets.",
      input: "Ranked skill gaps + Pedagogical prerequisite graph",
      output: "Sequential learning stages with benchmark milestone projects",
      details: "From programming fundamentals to production distributed capstone engineering."
    }
  ];

  const activeNodeData = architectureNodes.find(n => n.id === selectedNode) || architectureNodes[3];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--accent-purple)', fontWeight: 700 }}>
              End-to-End System Design
            </span>
            <ResearchBadge type="current" text="Architecture Specification" size="sm" />
          </div>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            Visual Research Architecture
          </h2>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Interactive blueprint detailing the data ingestion, canonical normalization, and recommendation pipeline.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => onNavigate('mapping')}
            className="btn btn-secondary btn-sm"
          >
            <Layers size={14} className="text-purple-400" />
            <span>Inspect Canonical Mappings</span>
          </button>
        </div>
      </div>

      {/* Main Split: Interactive Visual Flow on Left, Node Inspector on Right */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '24px' }}>
        {/* Pipeline Diagram Visual */}
        <div
          className="glass-card"
          style={{
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            position: 'relative',
            background: 'rgba(9, 13, 22, 0.95)'
          }}
        >
          <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '4px' }}>
            Click any architecture stage to inspect pipeline specifications:
          </div>

          {/* Step 1: O*NET */}
          <div
            onClick={() => setSelectedNode("onet")}
            style={{
              padding: '12px 16px',
              borderRadius: '10px',
              background: selectedNode === "onet" ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.03)',
              border: '1.5px solid',
              borderColor: selectedNode === "onet" ? 'var(--accent-blue)' : 'var(--border-subtle)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'all 0.2s'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Database size={16} className="text-blue-400" />
              <div>
                <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#fff' }}>O*NET Dataset (US DOL)</span>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Occupational skills, knowledge & tasks (v28.0)</div>
              </div>
            </div>
            <ResearchBadge type="completed" size="sm" />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ArrowDown size={16} style={{ color: 'var(--accent-cyan)' }} />
          </div>

          {/* Step 2: Data Processing & Cleaning */}
          <div
            onClick={() => setSelectedNode("processing")}
            style={{
              padding: '12px 16px',
              borderRadius: '10px',
              background: selectedNode === "processing" ? 'rgba(6, 182, 212, 0.2)' : 'rgba(255, 255, 255, 0.03)',
              border: '1.5px solid',
              borderColor: selectedNode === "processing" ? 'var(--accent-cyan)' : 'var(--border-subtle)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'all 0.2s'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Sparkles size={16} className="text-cyan-400" />
              <div>
                <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#fff' }}>Data Processing & ETL Cleaning</span>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Deduplication, stopword resolution & tokenization</div>
              </div>
            </div>
            <ResearchBadge type="completed" size="sm" />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ArrowDown size={16} style={{ color: 'var(--accent-cyan)' }} />
          </div>

          {/* Step 3: Validated Occupational Knowledge */}
          <div
            onClick={() => setSelectedNode("validated")}
            style={{
              padding: '12px 16px',
              borderRadius: '10px',
              background: selectedNode === "validated" ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.03)',
              border: '1.5px solid',
              borderColor: selectedNode === "validated" ? 'var(--accent-emerald)' : 'var(--border-subtle)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'all 0.2s'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <CheckCircle2 size={16} className="text-emerald-400" />
              <div>
                <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#fff' }}>Validated Occupational Knowledge</span>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Skills & knowledge matrices linked to curricula</div>
              </div>
            </div>
            <ResearchBadge type="completed" size="sm" />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ArrowDown size={16} style={{ color: 'var(--accent-purple)' }} />
          </div>

          {/* Step 4 & 5: Canonical Skill Layer converging with ESCO */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '12px' }}>
            {/* Center Canonical Hub */}
            <div
              onClick={() => setSelectedNode("canonical")}
              style={{
                padding: '14px',
                borderRadius: '10px',
                background: selectedNode === "canonical" ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.25), rgba(6, 182, 212, 0.15))' : 'rgba(139, 92, 246, 0.1)',
                border: '2px solid var(--accent-purple)',
                cursor: 'pointer',
                boxShadow: selectedNode === "canonical" ? '0 0 20px rgba(139, 92, 246, 0.35)' : 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <Layers size={16} className="text-purple-400" />
                <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#fff' }}>Canonical Skill Layer</span>
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-accent-cyan)' }}>
                Term Normalization (Core Innovation)
              </div>
              <div style={{ marginTop: '6px' }}>
                <ResearchBadge type="current" text="Active" size="sm" />
              </div>
            </div>

            {/* ESCO Source Converging */}
            <div
              onClick={() => setSelectedNode("esco")}
              style={{
                padding: '14px',
                borderRadius: '10px',
                background: selectedNode === "esco" ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                border: '1.5px solid',
                borderColor: selectedNode === "esco" ? 'var(--accent-amber)' : 'var(--border-subtle)',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <Globe size={16} className="text-amber-400" />
                <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#fff' }}>ESCO Skills</span>
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                European System (v1.1.1)
              </div>
              <div style={{ marginTop: '6px' }}>
                <ResearchBadge type="completed" size="sm" />
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ArrowDown size={16} style={{ color: 'var(--accent-purple)' }} />
          </div>

          {/* Step 6: Career Knowledge Base */}
          <div
            onClick={() => setSelectedNode("knowledge_base")}
            style={{
              padding: '12px 16px',
              borderRadius: '10px',
              background: selectedNode === "knowledge_base" ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255, 255, 255, 0.03)',
              border: '1.5px solid',
              borderColor: selectedNode === "knowledge_base" ? 'var(--accent-purple)' : 'var(--border-subtle)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <GitFork size={16} className="text-purple-400" />
              <div>
                <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#fff' }}>Career Knowledge Base</span>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Bipartite knowledge graph linking roles to canonical skills</div>
              </div>
            </div>
            <ResearchBadge type="current" size="sm" />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ArrowDown size={16} style={{ color: 'var(--accent-cyan)' }} />
          </div>

          {/* Step 7 & 8: Recommendation & Roadmap */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div
              onClick={() => setSelectedNode("recommendation")}
              style={{
                padding: '12px',
                borderRadius: '10px',
                background: selectedNode === "recommendation" ? 'rgba(6, 182, 212, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                border: '1.5px solid',
                borderColor: selectedNode === "recommendation" ? 'var(--accent-cyan)' : 'var(--border-subtle)',
                cursor: 'pointer'
              }}
            >
              <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#fff' }}>Recommendation Engine</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Cosine fit & skill gap delta</div>
              <div style={{ marginTop: '6px' }}>
                <ResearchBadge type="planned" size="sm" />
              </div>
            </div>

            <div
              onClick={() => setSelectedNode("roadmap")}
              style={{
                padding: '12px',
                borderRadius: '10px',
                background: selectedNode === "roadmap" ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                border: '1.5px solid',
                borderColor: selectedNode === "roadmap" ? 'var(--accent-emerald)' : 'var(--border-subtle)',
                cursor: 'pointer'
              }}
            >
              <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#fff' }}>Career Roadmap</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>7-Stage prerequisite pathway</div>
              <div style={{ marginTop: '6px' }}>
                <ResearchBadge type="planned" size="sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Selected Stage Detail Inspector */}
        <div className="glass-card animate-slide-in" style={{ padding: '26px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '12px' }}>
              <div>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                  Architecture Pipeline Inspector
                </span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginTop: '2px' }}>
                  {activeNodeData.title}
                </h3>
              </div>
              <ResearchBadge type={activeNodeData.status} size="sm" />
            </div>

            <div style={{ fontSize: '0.8rem', color: 'var(--text-accent-purple)', fontWeight: 600, marginBottom: '10px' }}>
              Provenance: {activeNodeData.source}
            </div>

            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '20px' }}>
              {activeNodeData.description}
            </p>

            {/* Inputs & Outputs Specs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>
                  Stage Input Contract:
                </span>
                <div style={{ fontSize: '0.82rem', color: '#fff', marginTop: '3px' }}>
                  {activeNodeData.input}
                </div>
              </div>

              <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.06)', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                  Stage Output Artifacts:
                </span>
                <div style={{ fontSize: '0.82rem', color: '#fff', marginTop: '3px' }}>
                  {activeNodeData.output}
                </div>
              </div>

              <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>
                  Research Methodology:
                </span>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '3px' }}>
                  {activeNodeData.details}
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '24px', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
            Research Status: <b>{activeNodeData.status.toUpperCase()}</b> • Frontend Mock Representation
          </div>
        </div>
      </div>
    </div>
  );
};
