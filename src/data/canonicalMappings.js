// Canonical Skill Mapping Data for MCA Research Project
// Bridges semantic disparity between US O*NET and European Commission ESCO taxonomies

export const canonicalMappings = [
  {
    id: "CANON-01",
    canonicalName: "Programming & Algorithmic Logic",
    category: "Software Development",
    confidenceScore: 0.96,
    vectorDistance: 0.042,
    researchStatus: "Validated Harmonization",
    description: "The core cognitive competency of designing, structuring, and encoding procedural and object-oriented logic into executable computer code.",
    oNet: {
      code: "15-1252.00.P01",
      elementId: "2.A.2.a",
      title: "Programming",
      definition: "Writing computer programs for various purposes.",
      domain: "Cross-Functional Technical Skills"
    },
    sourceTerms: [
      { term: "Computer Programming", source: "O*NET Source Descriptor", frequency: 1420 },
      { term: "Writing Computer Code", source: "Academic MCA Curriculum", frequency: 980 },
      { term: "Software Coding & Syntax", source: "Industry Job Postings (Tech)", frequency: 2150 },
      { term: "Procedural Logic Synthesis", source: "Theoretical CS Ontology", frequency: 430 }
    ],
    esco: {
      uri: "http://data.europa.eu/esco/skill/02.1.1",
      preferredLabel: "computer programming",
      altLabels: ["write code", "develop computer programs", "code software"],
      skillType: "knowledge/skill",
      broaderConcept: "ICT Information & Communication Technologies"
    },
    targetOccupations: [
      { id: "CAR-01", title: "Software Developer", matchWeight: 0.95 },
      { id: "CAR-02", title: "Full Stack Developer", matchWeight: 0.92 },
      { id: "CAR-06", title: "Machine Learning Engineer", matchWeight: 0.88 },
      { id: "CAR-05", title: "Data Scientist", matchWeight: 0.82 }
    ]
  },
  {
    id: "CANON-02",
    canonicalName: "Relational Database Management & SQL",
    category: "Data Systems",
    confidenceScore: 0.94,
    vectorDistance: 0.058,
    researchStatus: "Validated Harmonization",
    description: "Architecting, indexing, querying, and securing structured relational data layers governed by ACID transactional properties.",
    oNet: {
      code: "15-1242.00.SQL",
      elementId: "2.C.3.b",
      title: "Database Administration & SQL",
      definition: "Formulating queries to create, retrieve, update, and manage relational records.",
      domain: "Technical Occupational Knowledge"
    },
    sourceTerms: [
      { term: "Structured Query Language (SQL)", source: "O*NET Standard Knowledge", frequency: 1850 },
      { term: "RDBMS Management", source: "University Coursework", frequency: 1120 },
      { term: "Relational Schema Normalization", source: "MCA Database Syllabus", frequency: 790 },
      { term: "Postgres/MySQL Query Execution", source: "Industry Postings", frequency: 1640 }
    ],
    esco: {
      uri: "http://data.europa.eu/esco/skill/02.2.4",
      preferredLabel: "manage relational databases",
      altLabels: ["use SQL", "relational database design", "maintain RDBMS"],
      skillType: "skill",
      broaderConcept: "Database Architecture"
    },
    targetOccupations: [
      { id: "CAR-04", title: "Database Administrator", matchWeight: 0.98 },
      { id: "CAR-03", title: "Data Analyst", matchWeight: 0.92 },
      { id: "CAR-01", title: "Software Developer", matchWeight: 0.85 },
      { id: "CAR-02", title: "Full Stack Developer", matchWeight: 0.80 }
    ]
  },
  {
    id: "CANON-03",
    canonicalName: "Cloud Infrastructure Architecture & Virtualization",
    category: "Infrastructure",
    confidenceScore: 0.91,
    vectorDistance: 0.086,
    researchStatus: "Calibrated Prototype",
    description: "Configuring, orchestrating, and provisioning scalable multi-tenant compute, storage, and networking on public and hybrid cloud providers.",
    oNet: {
      code: "15-1243.00.CC",
      elementId: "2.C.1.c",
      title: "Cloud Systems Architecture",
      definition: "Analyzing, architecting, and optimizing cloud compute resources and virtualization pipelines.",
      domain: "Emerging Technical Competencies"
    },
    sourceTerms: [
      { term: "Cloud Computing Systems", source: "O*NET Emerging Technology", frequency: 1670 },
      { term: "AWS Cloud Provisioning", source: "Industry Job Postings", frequency: 2450 },
      { term: "Infrastructure as a Service (IaaS)", source: "Academic Cloud Syllabus", frequency: 650 },
      { term: "Serverless & Virtual Environments", source: "DevOps Ontology", frequency: 890 }
    ],
    esco: {
      uri: "http://data.europa.eu/esco/skill/02.4.8",
      preferredLabel: "cloud computing concepts",
      altLabels: ["deploy cloud infrastructure", "cloud virtualization", "configure cloud services"],
      skillType: "knowledge",
      broaderConcept: "Computer Systems & Networks"
    },
    targetOccupations: [
      { id: "CAR-08", title: "Cloud Engineer", matchWeight: 0.96 },
      { id: "CAR-09", title: "DevOps Engineer", matchWeight: 0.90 },
      { id: "CAR-01", title: "Software Developer", matchWeight: 0.72 }
    ]
  },
  {
    id: "CANON-04",
    canonicalName: "Statistical Machine Learning & Predictive Modeling",
    category: "Artificial Intelligence",
    confidenceScore: 0.93,
    vectorDistance: 0.065,
    researchStatus: "Validated Harmonization",
    description: "Formulating supervised and unsupervised mathematical models to discover predictive signals from structured and tabular data.",
    oNet: {
      code: "15-2051.00.ML",
      elementId: "2.B.4.g",
      title: "Predictive Analytics & Machine Learning",
      definition: "Applying statistical methodologies and algorithmic pattern detection to high-dimensional datasets.",
      domain: "Advanced Analytical Methods"
    },
    sourceTerms: [
      { term: "Statistical Pattern Recognition", source: "O*NET Research Taxonomy", frequency: 820 },
      { term: "Supervised Learning Algorithms", source: "MCA AI Curriculum", frequency: 1100 },
      { term: "Scikit-Learn Modeling", source: "Industry Postings", frequency: 1950 },
      { term: "Feature Engineering & Cross-Validation", source: "Data Science Benchmarks", frequency: 1340 }
    ],
    esco: {
      uri: "http://data.europa.eu/esco/skill/02.6.2",
      preferredLabel: "machine learning algorithms",
      altLabels: ["train ML models", "supervised classification", "predictive analytics"],
      skillType: "skill",
      broaderConcept: "Artificial Intelligence & Analytics"
    },
    targetOccupations: [
      { id: "CAR-06", title: "Machine Learning Engineer", matchWeight: 0.97 },
      { id: "CAR-05", title: "Data Scientist", matchWeight: 0.94 },
      { id: "CAR-07", title: "AI Engineer", matchWeight: 0.89 },
      { id: "CAR-03", title: "Data Analyst", matchWeight: 0.76 }
    ]
  },
  {
    id: "CANON-05",
    canonicalName: "Distributed Version Control & Collaborative Engineering",
    category: "Software Engineering Practice",
    confidenceScore: 0.98,
    vectorDistance: 0.021,
    researchStatus: "Validated Harmonization",
    description: "Maintaining immutable revision histories, branching models, and collaborative peer-review workflows using distributed repositories.",
    oNet: {
      code: "15-1252.00.GIT",
      elementId: "2.A.1.f",
      title: "Software Configuration Management",
      definition: "Controlling modifications to source artifacts and coordinating multi-developer releases.",
      domain: "Engineering Management"
    },
    sourceTerms: [
      { term: "Source Code Management", source: "O*NET Legacy Standard", frequency: 950 },
      { term: "Git Branching & Pull Requests", source: "Industry Benchmarks", frequency: 3200 },
      { term: "Version Control Systems", source: "Academic SE Coursework", frequency: 1450 }
    ],
    esco: {
      uri: "http://data.europa.eu/esco/skill/02.1.9",
      preferredLabel: "use version control systems",
      altLabels: ["manage software revisions", "git repository operations", "collaborate with git"],
      skillType: "skill",
      broaderConcept: "Software Development Tools"
    },
    targetOccupations: [
      { id: "CAR-01", title: "Software Developer", matchWeight: 0.94 },
      { id: "CAR-02", title: "Full Stack Developer", matchWeight: 0.94 },
      { id: "CAR-09", title: "DevOps Engineer", matchWeight: 0.92 },
      { id: "CAR-06", title: "Machine Learning Engineer", matchWeight: 0.85 }
    ]
  }
];

export const mappingSummaryStats = {
  totalSourceTerms: 48920,
  canonicalEntities: 1840,
  averageDisambiguationConfidence: "94.6%",
  oNetTaxonomyVersion: "O*NET 28.0 (US DOL)",
  escoTaxonomyVersion: "ESCO v1.1.1 (European Commission)",
  semanticEmbeddingModel: "Sentence-BERT Fine-Tuned on Technical Curricula (Demonstration Sample)"
};
