// Occupation-Skill-Technology Network Graph Data
// Designed for Interactive Graph Visualization

export const networkData = {
  nodes: [
    // Occupations (Purple)
    { id: "occ-1", label: "Software Developer", type: "occupation", cluster: "software", oNet: "15-1252.00", importance: 95 },
    { id: "occ-2", label: "Data Scientist", type: "occupation", cluster: "ai_data", oNet: "15-2051.00", importance: 90 },
    { id: "occ-3", label: "Machine Learning Engineer", type: "occupation", cluster: "ai_data", oNet: "15-1251.00", importance: 92 },
    { id: "occ-4", label: "Cloud Engineer", type: "occupation", cluster: "cloud", oNet: "15-1243.00", importance: 88 },
    { id: "occ-5", label: "Data Analyst", type: "occupation", cluster: "ai_data", oNet: "15-2051.01", importance: 85 },
    { id: "occ-6", label: "DevOps Engineer", type: "occupation", cluster: "cloud", oNet: "15-1251.02", importance: 86 },
    { id: "occ-7", label: "Full Stack Developer", type: "occupation", cluster: "software", oNet: "15-1254.00", importance: 91 },

    // Core Skills (Cyan)
    { id: "skl-1", label: "Object-Oriented Programming", type: "skill", cluster: "software", canonical: "CAN-01", importance: 92 },
    { id: "skl-2", label: "Relational Querying (SQL)", type: "skill", cluster: "database", canonical: "CAN-02", importance: 94 },
    { id: "skl-3", label: "Statistical Modeling", type: "skill", cluster: "ai_data", canonical: "CAN-04", importance: 85 },
    { id: "skl-4", label: "Cloud Infrastructure", type: "skill", cluster: "cloud", canonical: "CAN-03", importance: 88 },
    { id: "skl-5", label: "Container Orchestration", type: "skill", cluster: "cloud", canonical: "CAN-06", importance: 82 },
    { id: "skl-6", label: "Reactive Web UI", type: "skill", cluster: "software", canonical: "CAN-05", importance: 84 },
    { id: "skl-7", label: "Data Structures & Algorithms", type: "skill", cluster: "software", canonical: "CAN-07", importance: 95 },

    // Concrete Technologies / Tools (Emerald)
    { id: "tech-1", label: "Java", type: "technology", cluster: "software", level: "Enterprise", importance: 88 },
    { id: "tech-2", label: "Python", type: "technology", cluster: "ai_data", level: "General Purpose", importance: 95 },
    { id: "tech-3", label: "PostgreSQL", type: "technology", cluster: "database", level: "RDBMS", importance: 86 },
    { id: "tech-4", label: "Docker", type: "technology", cluster: "cloud", level: "Containers", importance: 89 },
    { id: "tech-5", label: "React.js", type: "technology", cluster: "software", level: "Frontend", importance: 87 },
    { id: "tech-6", label: "AWS EC2/S3", type: "technology", cluster: "cloud", level: "Cloud Platform", importance: 85 },
    { id: "tech-7", label: "Git / GitHub", type: "technology", cluster: "software", level: "VCS", importance: 93 },
    { id: "tech-8", label: "Scikit-Learn", type: "technology", cluster: "ai_data", level: "ML Library", importance: 81 }
  ],
  links: [
    // Tech -> Skill
    { source: "tech-1", target: "skl-1", strength: 0.95, label: "Implements" },
    { source: "tech-2", target: "skl-1", strength: 0.85, label: "Implements" },
    { source: "tech-2", target: "skl-3", strength: 0.95, label: "Enables" },
    { source: "tech-3", target: "skl-2", strength: 0.95, label: "Implements" },
    { source: "tech-4", target: "skl-5", strength: 0.90, label: "Enables" },
    { source: "tech-5", target: "skl-6", strength: 0.92, label: "Implements" },
    { source: "tech-6", target: "skl-4", strength: 0.90, label: "Hosts" },
    { source: "tech-7", target: "skl-1", strength: 0.70, label: "Versions" },
    { source: "tech-8", target: "skl-3", strength: 0.90, label: "Powers" },

    // Skill -> Occupation
    { source: "skl-1", target: "occ-1", strength: 0.95, label: "Prerequisite for" },
    { source: "skl-7", target: "occ-1", strength: 0.95, label: "Foundation for" },
    { source: "skl-2", target: "occ-1", strength: 0.80, label: "Required by" },
    { source: "skl-2", target: "occ-5", strength: 0.95, label: "Core of" },
    { source: "skl-3", target: "occ-2", strength: 0.95, label: "Core of" },
    { source: "skl-3", target: "occ-3", strength: 0.92, label: "Underpins" },
    { source: "skl-7", target: "occ-3", strength: 0.88, label: "Foundation for" },
    { source: "skl-4", target: "occ-4", strength: 0.95, label: "Primary Competency" },
    { source: "skl-5", target: "occ-6", strength: 0.95, label: "Key Responsibility" },
    { source: "skl-6", target: "occ-7", strength: 0.94, label: "Primary Interface" },
    { source: "skl-1", target: "occ-7", strength: 0.85, label: "Backend Core" },

    // Direct Cross-Discipline Bridges
    { source: "tech-2", target: "occ-1", strength: 0.82, label: "Primary Language" },
    { source: "tech-2", target: "occ-2", strength: 0.98, label: "Standard Lingua Franca" },
    { source: "tech-2", target: "occ-3", strength: 0.95, label: "Model Architecture" },
    { source: "tech-3", target: "occ-5", strength: 0.90, label: "Data Extraction" },
    { source: "tech-4", target: "occ-1", strength: 0.75, label: "Local Deployment" },
    { source: "tech-4", target: "occ-4", strength: 0.85, label: "Workload Container" }
  ]
};
