// Occupational Career Knowledge Base
// Cross-referenced with O*NET-SOC 2019 and European ESCO v1.1.1 Classifications

export const initialCareers = [
  {
    id: "CAR-01",
    title: "Software Developer",
    category: "Software Engineering",
    matchScore: 87,
    oNetCode: "15-1252.00",
    escoCode: "2512.1",
    escoUri: "http://data.europa.eu/esco/occupation/2512.1-software-developer",
    demand: "Very High (+25% 10-Yr Growth)",
    industryGrowth: "High Demand",
    shortDescription: "Research, design, build, and maintain computer software systems, backend services, and algorithmic components.",
    fullDescription: "Software Developers synthesize requirements into efficient, testable, and maintainable software architectures. In enterprise environments, this involves working across data persistence layers, business service logic, and API gateways while upholding strict code quality, concurrency, and performance benchmarks.",
    tags: ["Java", "Python", "SQL", "Git", "System Design", "OOP"],
    requiredSkills: [
      { name: "Java", required: 85, current: 84, gap: 1, criticality: "Critical", category: "Programming" },
      { name: "Python", required: 80, current: 78, gap: 2, criticality: "Essential", category: "Programming" },
      { name: "SQL", required: 80, current: 82, gap: 0, criticality: "Critical", category: "Database" },
      { name: "Data Structures & Algorithms", required: 85, current: 80, gap: 5, criticality: "Critical", category: "Programming" },
      { name: "Git & Version Control", required: 75, current: 82, gap: 0, criticality: "Essential", category: "Tools" },
      { name: "Software Testing & QA", required: 75, current: 60, gap: 15, criticality: "Recommended", category: "Tools" },
      { name: "Docker & Containerization", required: 70, current: 55, gap: 15, criticality: "Recommended", category: "Cloud" },
      { name: "Node.js & REST APIs", required: 75, current: 68, gap: 7, criticality: "Essential", category: "Web Development" }
    ],
    alignmentSummary: "Your profile exhibits exceptional alignment (87%) with Software Engineering requirements. Your mastery of Java OOP constructs, relational SQL queries, and version control satisfies core enterprise prerequisites.",
    missingCompetencies: [
      "Enterprise Automated Testing (JUnit / Integration Suites)",
      "Containerized Service Orchestration (Docker / Compose)",
      "Distributed Microservice Design Patterns"
    ],
    oNetTasks: [
      "Analyze user needs and develop software solutions.",
      "Design and customize software for client use with the aim of optimizing operational efficiency.",
      "Modify existing software to correct errors, adapt it to new hardware, or upgrade interfaces.",
      "Store, retrieve, and manipulate data for analysis of system capabilities and requirements."
    ],
    recommendedCourses: [
      "Advanced Java Concurrency & Spring Boot Microservices",
      "Enterprise Automated QA & Test-Driven Development (TDD)",
      "Containerization for Developers with Docker"
    ]
  },
  {
    id: "CAR-02",
    title: "Full Stack Developer",
    category: "Software Engineering",
    matchScore: 84,
    oNetCode: "15-1254.00",
    escoCode: "2513.1",
    escoUri: "http://data.europa.eu/esco/occupation/2513.1-web-developer",
    demand: "Very High (+22% Growth)",
    industryGrowth: "High Demand",
    shortDescription: "Build end-to-end web applications combining responsive client interfaces with resilient backend APIs and databases.",
    fullDescription: "Full Stack Developers bridge client-side user experience with server-side computational workflows. They architect relational/non-relational persistence, implement RESTful and GraphQL endpoints, and construct reactive UI state machines.",
    tags: ["React", "JavaScript", "Node.js", "SQL", "HTML5/CSS3", "REST APIs"],
    requiredSkills: [
      { name: "React", required: 85, current: 74, gap: 11, criticality: "Critical", category: "Web Development" },
      { name: "JavaScript", required: 85, current: 76, gap: 9, criticality: "Critical", category: "Programming" },
      { name: "HTML5 & CSS3", required: 85, current: 88, gap: 0, criticality: "Essential", category: "Web Development" },
      { name: "Node.js & REST APIs", required: 80, current: 68, gap: 12, criticality: "Critical", category: "Web Development" },
      { name: "SQL", required: 75, current: 82, gap: 0, criticality: "Essential", category: "Database" },
      { name: "MongoDB", required: 70, current: 65, gap: 5, criticality: "Recommended", category: "Database" },
      { name: "Git & Version Control", required: 75, current: 82, gap: 0, criticality: "Essential", category: "Tools" }
    ],
    alignmentSummary: "Strong frontend styling, SQL fluency, and Git proficiency give you an 84% foundation. Closing gaps in advanced React state patterns and server-side Node.js async performance will elevate your profile.",
    missingCompetencies: [
      "Advanced React Patterns (Custom Hooks, Redux Toolkit / Zustand)",
      "Server-Side Rendering (SSR) & Next.js Architecture",
      "API Security (JWT, CORS, Rate Limiting, OWASP Top 10)"
    ],
    oNetTasks: [
      "Write, design, or edit web page content, or direct others producing content.",
      "Select programming languages, design tools, or applications.",
      "Incorporate technical considerations into website design plans, such as budget, equipment, and performance needs.",
      "Perform or direct website updates and secure backend integrations."
    ],
    recommendedCourses: [
      "Advanced React Architecture & Performance Profiling",
      "Full-Stack Node.js Microservices & API Security",
      "NoSQL Data Modeling with MongoDB & Redis"
    ]
  },
  {
    id: "CAR-03",
    title: "Data Analyst",
    category: "Data & Analytics",
    matchScore: 81,
    oNetCode: "15-2051.01",
    escoCode: "2511.2",
    escoUri: "http://data.europa.eu/esco/occupation/2511.2-data-analyst",
    demand: "High (+23% Growth)",
    industryGrowth: "Rapid Growth",
    shortDescription: "Inspect, clean, transform, and model data to discover actionable insights and support strategic decision-making.",
    fullDescription: "Data Analysts examine large data corpuses using relational database query constructs and scripting languages. They convert ambiguous business inquiries into quantitative models, metric dashboards, and reproducible analytical pipelines.",
    tags: ["SQL", "Python", "Data Analysis", "PostgreSQL", "Pandas", "Statistics"],
    requiredSkills: [
      { name: "SQL", required: 90, current: 82, gap: 8, criticality: "Critical", category: "Database" },
      { name: "Python", required: 80, current: 78, gap: 2, criticality: "Critical", category: "Programming" },
      { name: "Data Analysis & Scikit-Learn", required: 80, current: 66, gap: 14, criticality: "Critical", category: "AI / ML" },
      { name: "PostgreSQL", required: 75, current: 72, gap: 3, criticality: "Essential", category: "Database" },
      { name: "Machine Learning Fundamentals", required: 60, current: 62, gap: 0, criticality: "Recommended", category: "AI / ML" }
    ],
    alignmentSummary: "Outstanding relational database mastery and solid Python scripting yield an 81% alignment score. Further emphasis on exploratory data analysis and dashboard storytelling will solidify readiness.",
    missingCompetencies: [
      "Advanced Window Functions & CTE Partitioning in SQL",
      "Interactive Dashboard Tooling (PowerBI / Tableau / Streamlit)",
      "Inferential Statistics & Hypothesis Testing"
    ],
    oNetTasks: [
      "Translate data into actionable business insights.",
      "Design and generate interactive dashboards and analytical reports.",
      "Cleanse, validate, and impute missing data in relational warehouses."
    ],
    recommendedCourses: [
      "Advanced SQL for High-Volume Analytics",
      "Applied Statistical Inference with Python & SciPy",
      "Business Intelligence Dashboards & Data Storytelling"
    ]
  },
  {
    id: "CAR-04",
    title: "Database Administrator",
    category: "Database & Systems",
    matchScore: 79,
    oNetCode: "15-1242.00",
    escoCode: "2521.1",
    escoUri: "http://data.europa.eu/esco/occupation/2521.1-dba",
    demand: "Steady (+9% Growth)",
    industryGrowth: "Stable",
    shortDescription: "Administer, test, optimize, and secure relational and distributed database management systems.",
    fullDescription: "Database Administrators ensure database integrity, high availability, backup redundancy, and query execution efficiency. They manage schemas, partition high-throughput tables, and tune engine parameters.",
    tags: ["SQL", "PostgreSQL", "MongoDB", "Linux", "ACID", "Indexing"],
    requiredSkills: [
      { name: "SQL", required: 92, current: 82, gap: 10, criticality: "Critical", category: "Database" },
      { name: "PostgreSQL", required: 85, current: 72, gap: 13, criticality: "Critical", category: "Database" },
      { name: "MongoDB", required: 75, current: 65, gap: 10, criticality: "Essential", category: "Database" },
      { name: "Linux Systems & CLI", required: 80, current: 70, gap: 10, criticality: "Essential", category: "Tools" },
      { name: "Python", required: 65, current: 78, gap: 0, criticality: "Recommended", category: "Programming" }
    ],
    alignmentSummary: "Your strong database grounding (82% SQL, 72% Postgres) qualifies you for 79% alignment. Specialization in disaster recovery, transaction replication, and query execution plan tuning is needed.",
    missingCompetencies: [
      "High-Availability Replication & Failover Clustering",
      "Database Backup & Disaster Recovery Protocols",
      "Query Plan Cost Estimation (EXPLAIN ANALYZE) & Index Tuning"
    ],
    oNetTasks: [
      "Specify users and user access levels for each segment of database.",
      "Test programs or databases, correct errors, and make necessary modifications.",
      "Plan, coordinate, and implement security measures to safeguard information."
    ],
    recommendedCourses: [
      "PostgreSQL Internals, Replication & High Availability",
      "Linux Performance Monitoring & Storage Administration"
    ]
  },
  {
    id: "CAR-05",
    title: "Data Scientist",
    category: "AI & Data Science",
    matchScore: 78,
    oNetCode: "15-2051.00",
    escoCode: "2120.1",
    escoUri: "http://data.europa.eu/esco/occupation/2120.1-data-scientist",
    demand: "Very High (+35% Growth)",
    industryGrowth: "Rapid Growth",
    shortDescription: "Apply mathematical modeling, machine learning, and statistical analysis to extract patterns from structured and unstructured data.",
    fullDescription: "Data Scientists formulate mathematical hypotheses, evaluate predictive algorithms, and create automated modeling pipelines to solve complex business and scientific challenges.",
    tags: ["Python", "Machine Learning", "Data Analysis", "SQL", "Statistics"],
    requiredSkills: [
      { name: "Python", required: 90, current: 78, gap: 12, criticality: "Critical", category: "Programming" },
      { name: "Machine Learning Fundamentals", required: 85, current: 62, gap: 23, criticality: "Critical", category: "AI / ML" },
      { name: "Data Analysis & Scikit-Learn", required: 85, current: 66, gap: 19, criticality: "Critical", category: "AI / ML" },
      { name: "SQL", required: 80, current: 82, gap: 0, criticality: "Essential", category: "Database" },
      { name: "Deep Learning (Basics)", required: 65, current: 45, gap: 20, criticality: "Recommended", category: "AI / ML" }
    ],
    alignmentSummary: "Solid algorithmic and scripting skills provide 78% alignment. Deepening statistical inference, ensemble learning, and model validation techniques will bridge the gap.",
    missingCompetencies: [
      "Ensemble Learning & Gradient Boosting (XGBoost / LightGBM)",
      "Hypothesis Testing & A/B Experimentation Design",
      "Dimensionality Reduction (PCA, t-SNE) & Feature Selection"
    ],
    oNetTasks: [
      "Develop and implement machine learning algorithms and predictive models.",
      "Synthesize large volumes of data into actionable statistical conclusions.",
      "Collaborate with engineering teams to deploy models to production."
    ],
    recommendedCourses: [
      "Statistical Machine Learning with Scikit-Learn",
      "Applied Mathematics & Linear Algebra for Data Science"
    ]
  },
  {
    id: "CAR-06",
    title: "Machine Learning Engineer",
    category: "AI & Data Science",
    matchScore: 74,
    oNetCode: "15-1251.00",
    escoCode: "2519.2",
    escoUri: "http://data.europa.eu/esco/occupation/2519.2-ml-engineer",
    demand: "Exceptional (+40% Growth)",
    industryGrowth: "Exponential Growth",
    shortDescription: "Design, build, and deploy production machine learning models, inference pipelines, and scalable AI infrastructure.",
    fullDescription: "ML Engineers sit at the intersection of Data Science and Software Engineering. They convert algorithmic prototypes into scalable, low-latency microservices, maintain feature stores, and monitor model drift.",
    tags: ["Python", "Machine Learning", "Deep Learning", "Docker", "Algorithms"],
    requiredSkills: [
      { name: "Python", required: 90, current: 78, gap: 12, criticality: "Critical", category: "Programming" },
      { name: "Data Structures & Algorithms", required: 85, current: 80, gap: 5, criticality: "Critical", category: "Programming" },
      { name: "Machine Learning Fundamentals", required: 88, current: 62, gap: 26, criticality: "Critical", category: "AI / ML" },
      { name: "Deep Learning (Basics)", required: 75, current: 45, gap: 30, criticality: "Critical", category: "AI / ML" },
      { name: "Docker & Containerization", required: 75, current: 55, gap: 20, criticality: "Essential", category: "Cloud" },
      { name: "Node.js & REST APIs", required: 70, current: 68, gap: 2, criticality: "Essential", category: "Web Development" }
    ],
    alignmentSummary: "Your solid algorithmic foundation and Python skills give you 74% readiness. The primary learning trajectory involves advancing from classical ML to deep learning frameworks and production model serving.",
    missingCompetencies: [
      "Production ML Serving (TorchServe, Triton, ONNX Runtime)",
      "Deep Learning Architecture Design (CNNs, Transformers, Attention)",
      "MLOps & Model Monitoring Pipelines (MLflow, Weights & Biases)"
    ],
    oNetTasks: [
      "Design and implement scalable machine learning models.",
      "Deploy models to cloud infrastructure with low latency constraints.",
      "Monitor model drift and retrain pipelines automatically."
    ],
    recommendedCourses: [
      "Deep Learning Specialization with PyTorch",
      "Production Machine Learning Systems & MLOps"
    ]
  },
  {
    id: "CAR-07",
    title: "AI Engineer",
    category: "AI & Data Science",
    matchScore: 72,
    oNetCode: "15-1299.08",
    escoCode: "2519.3",
    escoUri: "http://data.europa.eu/esco/occupation/2519.3-ai-specialist",
    demand: "Emerging (+45% Growth)",
    industryGrowth: "Exponential Growth",
    shortDescription: "Architect cognitive systems, LLM integrations, retrieval-augmented generation (RAG) pipelines, and intelligent agents.",
    fullDescription: "AI Engineers leverage foundation models, vector databases, and semantic search architectures to embed cognitive intelligence into modern enterprise applications.",
    tags: ["Python", "Deep Learning", "Machine Learning", "REST APIs", "Vector DBs"],
    requiredSkills: [
      { name: "Python", required: 90, current: 78, gap: 12, criticality: "Critical", category: "Programming" },
      { name: "Deep Learning (Basics)", required: 80, current: 45, gap: 35, criticality: "Critical", category: "AI / ML" },
      { name: "Machine Learning Fundamentals", required: 80, current: 62, gap: 18, criticality: "Critical", category: "AI / ML" },
      { name: "Node.js & REST APIs", required: 75, current: 68, gap: 7, criticality: "Essential", category: "Web Development" },
      { name: "SQL", required: 75, current: 82, gap: 0, criticality: "Essential", category: "Database" }
    ],
    alignmentSummary: "Achieves 72% alignment due to good programming and API development skills. Advancing understanding of transformer architectures and vector embedding indexing will unlock high competence.",
    missingCompetencies: [
      "Transformer Architectures & Attention Mechanisms",
      "Vector Embeddings & Semantic Search (Chroma, Pinecone, pgvector)",
      "Retrieval-Augmented Generation (RAG) Architectures"
    ],
    oNetTasks: [
      "Develop cognitive software architectures using neural networks.",
      "Integrate generative models into production application stacks.",
      "Evaluate algorithmic safety and hallucination mitigation."
    ],
    recommendedCourses: [
      "Natural Language Processing & Large Language Models",
      "Building Production RAG Systems with Vector Databases"
    ]
  },
  {
    id: "CAR-08",
    title: "Cloud Engineer",
    category: "Cloud & Infrastructure",
    matchScore: 69,
    oNetCode: "15-1243.00",
    escoCode: "2522.2",
    escoUri: "http://data.europa.eu/esco/occupation/2522.2-cloud-engineer",
    demand: "Very High (+27% Growth)",
    industryGrowth: "High Demand",
    shortDescription: "Design, provision, and maintain resilient, scalable multi-region cloud infrastructure and automated deployments.",
    fullDescription: "Cloud Engineers build and manage secure cloud computing environments on AWS, Azure, and GCP. They implement Infrastructure as Code (Terraform), serverless computing, and hybrid cloud topologies.",
    tags: ["Cloud", "AWS", "Linux", "Docker", "Networking", "Security"],
    requiredSkills: [
      { name: "Cloud Computing Basics", required: 88, current: 58, gap: 30, criticality: "Critical", category: "Cloud" },
      { name: "AWS Fundamentals", required: 85, current: 52, gap: 33, criticality: "Critical", category: "Cloud" },
      { name: "Linux Systems & CLI", required: 82, current: 70, gap: 12, criticality: "Critical", category: "Tools" },
      { name: "Docker & Containerization", required: 80, current: 55, gap: 25, criticality: "Essential", category: "Cloud" },
      { name: "Python", required: 70, current: 78, gap: 0, criticality: "Essential", category: "Programming" },
      { name: "Git & Version Control", required: 75, current: 82, gap: 0, criticality: "Essential", category: "Tools" }
    ],
    alignmentSummary: "Currently at 69% alignment. While Linux and Python are solid, developing deeper AWS service knowledge (VPC, IAM, CloudFormation) and container orchestration will close the gap.",
    missingCompetencies: [
      "Virtual Private Cloud (VPC) Subnetting & CIDR Routing",
      "Infrastructure as Code (Terraform / CloudFormation)",
      "Serverless Architecture Design (AWS Lambda, API Gateway)"
    ],
    oNetTasks: [
      "Architect cloud computing solutions to meet enterprise availability requirements.",
      "Implement identity management and encryption policies in cloud environments.",
      "Monitor resource utilization and cost optimization across cloud services."
    ],
    recommendedCourses: [
      "AWS Certified Solutions Architect Associate Pathway",
      "Infrastructure as Code with HashiCorp Terraform"
    ]
  },
  {
    id: "CAR-09",
    title: "DevOps Engineer",
    category: "Cloud & Infrastructure",
    matchScore: 62,
    oNetCode: "15-1251.02",
    escoCode: "2519.4",
    escoUri: "http://data.europa.eu/esco/occupation/2519.4-devops-engineer",
    demand: "High (+28% Growth)",
    industryGrowth: "High Demand",
    shortDescription: "Automate continuous integration, delivery pipelines, container orchestration, and observability platforms.",
    fullDescription: "DevOps Engineers unite development and operations workflows. They engineer automated CI/CD pipelines, manage Kubernetes clusters, enforce security guardrails, and maintain telemetry stacks.",
    tags: ["Docker", "Linux", "CI/CD", "Git", "Kubernetes", "AWS"],
    requiredSkills: [
      { name: "Docker & Containerization", required: 90, current: 55, gap: 35, criticality: "Critical", category: "Cloud" },
      { name: "Linux Systems & CLI", required: 88, current: 70, gap: 18, criticality: "Critical", category: "Tools" },
      { name: "Cloud Computing Basics", required: 82, current: 58, gap: 24, criticality: "Critical", category: "Cloud" },
      { name: "Git & Version Control", required: 85, current: 82, gap: 3, criticality: "Essential", category: "Tools" },
      { name: "Software Testing & QA", required: 80, current: 60, gap: 20, criticality: "Essential", category: "Tools" },
      { name: "Python", required: 75, current: 78, gap: 0, criticality: "Essential", category: "Programming" }
    ],
    alignmentSummary: "At 62% alignment, this is an ambitious progression pathway. Substantial growth is needed in container orchestration (Kubernetes) and CI/CD automation pipelines.",
    missingCompetencies: [
      "Container Orchestration with Kubernetes (Pods, Services, Ingress)",
      "Automated CI/CD Pipeline Construction (GitHub Actions, Jenkins)",
      "Observability & Telemetry (Prometheus, Grafana, OpenTelemetry)"
    ],
    oNetTasks: [
      "Build and automate deployment pipelines for production microservices.",
      "Maintain Kubernetes clusters and container networking.",
      "Conduct automated chaos testing and resilience engineering."
    ],
    recommendedCourses: [
      "Certified Kubernetes Administrator (CKA) Training",
      "Complete CI/CD Mastery with GitHub Actions & ArgoCD"
    ]
  },
  {
    id: "CAR-10",
    title: "Cybersecurity Analyst",
    category: "Security & Governance",
    matchScore: 58,
    oNetCode: "15-1212.00",
    escoCode: "2529.1",
    escoUri: "http://data.europa.eu/esco/occupation/2529.1-security-analyst",
    demand: "Exceptional (+32% Growth)",
    industryGrowth: "Critical Need",
    shortDescription: "Protect organizational networks, systems, and digital assets from unauthorized access, cyber threats, and vulnerabilities.",
    fullDescription: "Cybersecurity Analysts monitor digital perimeters, conduct vulnerability assessments, configure intrusion detection systems, and lead incident response protocols.",
    tags: ["Security", "Linux", "Networking", "Python", "Vulnerability Assessment"],
    requiredSkills: [
      { name: "Linux Systems & CLI", required: 88, current: 70, gap: 18, criticality: "Critical", category: "Tools" },
      { name: "Python", required: 80, current: 78, gap: 2, criticality: "Essential", category: "Programming" },
      { name: "Cloud Computing Basics", required: 80, current: 58, gap: 22, criticality: "Critical", category: "Cloud" },
      { name: "SQL", required: 75, current: 82, gap: 0, criticality: "Essential", category: "Database" },
      { name: "Software Testing & QA", required: 80, current: 60, gap: 20, criticality: "Essential", category: "Tools" }
    ],
    alignmentSummary: "Currently at 58% alignment. While Python scripting and Linux familiarity provide a base, specialized knowledge of network security protocols, cryptography, and penetration testing is required.",
    missingCompetencies: [
      "Network Protocol Security & Packet Analysis (Wireshark, TCP/IP)",
      "Vulnerability Scanning & Penetration Testing Methodologies",
      "Security Information & Event Management (SIEM) Operations"
    ],
    oNetTasks: [
      "Monitor computer networks for security issues.",
      "Investigate security breaches and other cybersecurity incidents.",
      "Install security software and explain security risks to staff."
    ],
    recommendedCourses: [
      "CompTIA Security+ Certification Preparation",
      "Network Defense & Ethical Hacking Foundations"
    ]
  }
];

export const careerCategories = [
  "All",
  "Software Engineering",
  "AI & Data Science",
  "Cloud & Infrastructure",
  "Database & Systems",
  "Security & Governance"
];
