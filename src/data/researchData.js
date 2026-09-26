// MCA Research Dataset & Architecture Knowledge Base
// Formalizes O*NET & ESCO Cross-Taxonomy Integration

export const researchMetadata = {
  projectTitle: "AI Career Navigator: Occupational Skill Intelligence & Canonical Normalization",
  projectType: "MCA Final-Year Research Project & Technical Prototype",
  institution: "Faculty of Technology & Computer Science",
  department: "Department of Computer Applications",
  author: "Suyash Karandikar",
  academicYear: "2025-2026",
  advisors: ["Dr. V. K. Deshmukh (Professor & Head, Computer Applications)"],
  primaryTaxonomies: [
    {
      name: "O*NET (Occupational Information Network)",
      version: "28.0 Standard Release",
      origin: "U.S. Department of Labor / Employment and Training Administration",
      features: "Detailed occupational descriptors, generalized work activities, abilities, and knowledge matrices.",
      status: "Completed Research Component"
    },
    {
      name: "ESCO (European Skills, Competences, and Occupations)",
      version: "v1.1.1 Semantic Web Release",
      origin: "European Commission Directorate-General for Employment (DG EMPL)",
      features: "Multilingual taxonomy, SKOS-compliant concept schemes, granular skill-to-occupation relations.",
      status: "Completed Research Component"
    },
    {
      name: "Canonical Skill Normalization Layer",
      version: "v0.8-alpha MCA Ontology",
      origin: "Project Research Innovation",
      features: "Vector-space semantic clustering & domain rule synthesis reconciling terminology variance.",
      status: "Current Research Component"
    }
  ],
  pipelineStages: [
    {
      id: "stage-1",
      name: "O*NET Raw Ingestion",
      status: "completed",
      badge: "Completed Research",
      description: "Extracted 1,016 O*NET SOC occupations and 24,000+ task and knowledge records."
    },
    {
      id: "stage-2",
      name: "ESCO Semantic Web Parsing",
      status: "completed",
      badge: "Completed Research",
      description: "Parsed 3,008 ESCO occupations and 13,890 granular skill nodes using SKOS taxonomy."
    },
    {
      id: "stage-3",
      name: "Data Cleaning & Quality Audit",
      status: "completed",
      badge: "Completed Research",
      description: "Resolved duplicate taxonomy entries, stripped non-technical descriptors, and imputed missing attributes."
    },
    {
      id: "stage-4",
      name: "Canonical Skill Layer Mapping",
      status: "current",
      badge: "Current Research",
      description: "Applying contextual embeddings to cluster synonymous terms (e.g., 'Programming' vs 'Coding') into canonical concepts."
    },
    {
      id: "stage-5",
      name: "Recommendation Inference Engine",
      status: "planned",
      badge: "Planned Component",
      description: "Hybrid vector similarity and rule-based constraint solver for student career matching."
    },
    {
      id: "stage-6",
      name: "Skill Gap & Adaptive Roadmap Engine",
      status: "planned",
      badge: "Planned Component",
      description: "Topological sort of prerequisite skill dependency graphs to formulate optimal student learning pathways."
    },
    {
      id: "stage-7",
      name: "Frontend-Backend Integration",
      status: "planned",
      badge: "Planned Component",
      description: "RESTful API handshake connecting modern React UI to persistent PostgreSQL database."
    }
  ]
};

export const demonstrationDatasetStats = {
  isDemonstrationData: true,
  disclaimer: "Demonstration Dataset Statistics (Pre-computed research sample from local test cache)",
  summaryCards: [
    { label: "Total Source Records Processed", value: "48,920", change: "+12.4% over baseline", note: "Aggregated from O*NET & ESCO dumps" },
    { label: "Duplicate & Alias Records Reconciled", value: "6,430", change: "100% harmonized", note: "Resolved through semantic clustering" },
    { label: "Missing Value Imputations", value: "1,120", change: "2.3% total volume", note: "Attribute interpolation applied" },
    { label: "Mapped Canonical Skills", value: "1,840", change: "Targeted taxonomy", note: "Standardized technical competencies" },
    { label: "Standardized Technical Occupations", value: "620", change: "Computer & Info Tech", note: "Cross-referenced SOC & ESCO roles" }
  ],
  categoryDistribution: [
    { name: "Essential Technical Skills", count: 840, percentage: 45.6, color: "#06b6d4" },
    { name: "Software & Tool Knowledge", count: 420, percentage: 22.8, color: "#3b82f6" },
    { name: "Theoretical CS Knowledge", count: 260, percentage: 14.1, color: "#8b5cf6" },
    { name: "Cross-Functional Abilities", count: 180, percentage: 9.8, color: "#10b981" },
    { name: "Emerging AI/Cloud Skills", count: 140, percentage: 7.6, color: "#f59e0b" }
  ],
  mappingConfidenceTiers: [
    { tier: "High Confidence (>90%)", count: 1380, share: "75.0%" },
    { tier: "Moderate Confidence (75-90%)", count: 340, share: "18.5%" },
    { tier: "Manual Review Required (<75%)", count: 120, share: "6.5%" }
  ],
  taxonomyComparison: [
    { metric: "Total Occupations", onet: 1016, esco: 3008, canonicalMapped: 620 },
    { metric: "Total Skill Descriptors", onet: 24300, esco: 13890, canonicalMapped: 1840 },
    { metric: "Granularity Level", onet: "Broad Occupational", esco: "Fine-Grained Task", canonicalMapped: "Standardized Competency" },
    { metric: "Hierarchy Format", onet: "Content Model (O*NET-SOC)", esco: "SKOS Semantic Web Graph", canonicalMapped: "Multi-Taxonomy Knowledge Graph" }
  ]
};

export const architectureFlowSteps = [
  {
    step: 1,
    title: "O*NET Dataset",
    source: "US Department of Labor",
    details: "Ingestion of O*NET Content Model (Work Activities, Knowledge, Skills, Abilities, Tools & Technology).",
    badge: "Completed",
    type: "source"
  },
  {
    step: 2,
    title: "Data Processing & Cleaning",
    source: "ETL Pipeline",
    details: "Parsing, deduplication, punctuation normalization, acronym resolution, and stop-word filtering.",
    badge: "Completed",
    type: "processing"
  },
  {
    step: 3,
    title: "Validated Occupational Knowledge",
    source: "Harmonized Store",
    details: "Verified technical competence descriptors tagged with frequency and importance weights.",
    badge: "Completed",
    type: "storage"
  },
  {
    step: 4,
    title: "Canonical Skill Layer",
    source: "Core Research Innovation",
    details: "Reconciles terminology divergence between O*NET and ESCO into unified canonical entities.",
    badge: "Current Research",
    type: "core"
  },
  {
    step: 5,
    title: "ESCO Occupation / Skills",
    source: "European Commission",
    details: "Integration of European classification with transversal and occupation-specific competence nodes.",
    badge: "Completed",
    type: "source"
  },
  {
    step: 6,
    title: "Career Knowledge Base",
    source: "Integrated Knowledge Graph",
    details: "Unified bipartite graph linking canonical skills to industry job roles and technical curriculum nodes.",
    badge: "Current Research",
    type: "storage"
  },
  {
    step: 7,
    title: "AI Recommendation & Skill Gap",
    source: "Algorithmic Inference",
    details: "Calculates cosine similarity and skill coverage matrices against student technical profiles.",
    badge: "Planned",
    type: "engine"
  },
  {
    step: 8,
    title: "Career Pathway & Roadmap",
    source: "Graph Topological Sort",
    details: "Generates step-by-step milestone progression guiding student from current state to career readiness.",
    badge: "Planned",
    type: "output"
  }
];
