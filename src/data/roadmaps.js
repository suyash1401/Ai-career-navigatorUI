// Career Learning Roadmap & Milestone Pathways
// Features 7-Stage progressive mastery calibrated for technical students

export const careerRoadmaps = {
  "CAR-01": {
    careerTitle: "Software Developer",
    category: "Software Engineering",
    stages: [
      {
        stageNumber: 1,
        title: "Programming Fundamentals",
        subtitle: "Core Imperative & OOP Syntax",
        status: "completed",
        studentProgress: 100,
        estimatedWeeks: 4,
        description: "Master procedural and object-oriented paradigms, control flow, functions, memory references, and exception handling.",
        topics: ["Core Java OOP (Polymorphism, Inheritance)", "Python Syntax & Scripting", "Exception Handling & Memory Management", "Clean Code & Formatting Standards"],
        milestoneProject: "Command-Line Bank Account & Transaction Simulation Engine",
        targetSkills: ["Java", "Python"],
        canonicalReference: "CANON-01 (Programming & Algorithmic Logic)"
      },
      {
        stageNumber: 2,
        title: "Data Structures & Algorithms",
        subtitle: "Computational Complexity & Optimization",
        status: "completed",
        studentProgress: 95,
        estimatedWeeks: 6,
        description: "Analyze asymptotic complexity (Big-O), design efficient data structures, and solve combinatorial algorithmic challenges.",
        topics: ["Linear Structures (Arrays, Linked Lists, Stacks, Queues)", "Hierarchical Structures (Binary Search Trees, Heaps)", "Graph Traversals (BFS, DFS, Dijkstra)", "Dynamic Programming & Greedy Paradigms"],
        milestoneProject: "Shortest Path Transit Router with Priority Queue Graph Implementation",
        targetSkills: ["Data Structures & Algorithms"],
        canonicalReference: "CANON-01 (Algorithmic Complexity)"
      },
      {
        stageNumber: 3,
        title: "Database Engineering",
        subtitle: "Relational Modeling & Transaction Integrity",
        status: "completed",
        studentProgress: 90,
        estimatedWeeks: 4,
        description: "Architect normalized relational schemas, write high-performance SQL queries, and implement transactional isolation.",
        topics: ["Relational Schema Design & 3NF Normalization", "Complex Joins, Subqueries & CTEs", "ACID Transactions & Row-Level Locking", "B+ Tree Indexing & Query Cost Profiling"],
        milestoneProject: "Multi-Tenant E-Commerce Inventory & Order Ledger Schema in PostgreSQL",
        targetSkills: ["SQL", "PostgreSQL"],
        canonicalReference: "CANON-02 (Relational Database Management)"
      },
      {
        stageNumber: 4,
        title: "Web & API Development",
        subtitle: "Client-Server Architectures & REST Contracts",
        status: "in-progress",
        studentProgress: 75,
        estimatedWeeks: 5,
        description: "Build reactive client interfaces and RESTful server endpoints adhering to HTTP standards and stateful authentication.",
        topics: ["Modern React (Hooks, Context, State)", "Node.js / Express Server Handlers", "RESTful API Standards & JSON Schemas", "JWT Authentication & CORS Security"],
        milestoneProject: "Full-Stack Task & Workflow Management Portal with Role-Based Access",
        targetSkills: ["React", "JavaScript", "Node.js & REST APIs", "HTML5 & CSS3"],
        canonicalReference: "CANON-05 (Web Application Engineering)"
      },
      {
        stageNumber: 5,
        title: "Software Engineering & Architecture",
        subtitle: "Design Patterns, Testing & Modularity",
        status: "in-progress",
        studentProgress: 60,
        estimatedWeeks: 4,
        description: "Apply SOLID architectural principles, Gang of Four design patterns, and rigorous automated unit and integration testing.",
        topics: ["SOLID Design Principles & Inversion of Control", "Factory, Observer, and Repository Patterns", "Unit Testing with JUnit / Mocha", "API Contract Testing & Mocking"],
        milestoneProject: "Pluggable Notification & Payment Gateway Service with 85% Code Coverage",
        targetSkills: ["Software Testing & QA", "Git & Version Control"],
        canonicalReference: "CANON-05 (Software Configuration & Quality)"
      },
      {
        stageNumber: 6,
        title: "Cloud & DevOps",
        subtitle: "Containerization & Continuous Delivery",
        status: "upcoming",
        studentProgress: 40,
        estimatedWeeks: 5,
        description: "Containerize multi-tier applications, formulate automated CI/CD build pipelines, and provision basic cloud workloads.",
        topics: ["Docker Multi-Stage Container Builds", "Docker Compose Multi-Service Stacks", "GitHub Actions CI/CD Pipeline Automation", "AWS EC2, S3 & Security Group Deployment"],
        milestoneProject: "Automated Build, Test, and Containerized Deploy Workflow for Microservice",
        targetSkills: ["Docker & Containerization", "Cloud Computing Basics", "AWS Fundamentals"],
        canonicalReference: "CANON-03 (Cloud Infrastructure Architecture)"
      },
      {
        stageNumber: 7,
        title: "Industry Capstone Projects",
        subtitle: "Production-Scale Portfolio & System Design",
        status: "upcoming",
        studentProgress: 20,
        estimatedWeeks: 6,
        description: "Architect, build, and document an end-to-end distributed system incorporating asynchronous workers, caching, and database replication.",
        topics: ["High-Level System Design (HLD) & Low-Level Design (LLD)", "Caching with Redis & Asynchronous Queues", "Production Monitoring & Logging", "Technical Documentation & Open Source Release"],
        milestoneProject: "Distributed Resilient Event Processing Engine with Metrics Dashboard",
        targetSkills: ["Java", "SQL", "Docker", "Git & Version Control"],
        canonicalReference: "All Unified Canonical Competencies"
      }
    ]
  },
  "CAR-06": {
    careerTitle: "Machine Learning Engineer",
    category: "AI & Data Science",
    stages: [
      { stageNumber: 1, title: "Mathematical Foundations", subtitle: "Linear Algebra & Multivariable Calculus", status: "completed", studentProgress: 90, topics: ["Matrix operations", "Eigenvalues", "Gradient descent mechanics"] },
      { stageNumber: 2, title: "Python & Numerical Computing", subtitle: "NumPy, Pandas & Vectorized Code", status: "completed", studentProgress: 88, topics: ["Dataframe indexing", "Vectorized broadcasting", "Data cleaning"] },
      { stageNumber: 3, title: "Classical Machine Learning", subtitle: "Supervised & Unsupervised Modeling", status: "in-progress", studentProgress: 65, topics: ["Scikit-learn pipelines", "Ensemble trees", "Cross-validation"] },
      { stageNumber: 4, title: "Deep Learning Architectures", subtitle: "Neural Networks & Backpropagation", status: "upcoming", studentProgress: 40, topics: ["PyTorch tensors", "MLP, CNN & RNN basics", "Loss optimization"] },
      { stageNumber: 5, title: "NLP & Transformers", subtitle: "Modern Language & Vision Models", status: "upcoming", studentProgress: 25, topics: ["Self-attention mechanisms", "HuggingFace transformers", "Embeddings"] },
      { stageNumber: 6, title: "MLOps & Model Serving", subtitle: "Inference Deployment & Containerization", status: "upcoming", studentProgress: 20, topics: ["Docker model packaging", "FastAPI inference serving", "Model registry"] },
      { stageNumber: 7, title: "Production AI Capstone", subtitle: "Real-World Low Latency ML System", status: "upcoming", studentProgress: 10, topics: ["End-to-end retraining pipeline", "Drift detection", "Scalable serving"] }
    ]
  },
  "CAR-08": {
    careerTitle: "Cloud Engineer",
    category: "Cloud & Infrastructure",
    stages: [
      { stageNumber: 1, title: "Operating Systems & Networking", subtitle: "Linux Administration & TCP/IP", status: "completed", studentProgress: 85, topics: ["Bash scripting", "DNS, routing & CIDR", "Process management"] },
      { stageNumber: 2, title: "Virtualization & Containers", subtitle: "Docker & Image Management", status: "in-progress", studentProgress: 60, topics: ["Container isolation", "Dockerfiles", "Volume persistence"] },
      { stageNumber: 3, title: "AWS Cloud Fundamentals", subtitle: "Core Compute, Storage & IAM", status: "in-progress", studentProgress: 50, topics: ["EC2 & S3", "IAM permissions", "VPC subnets & routing"] },
      { stageNumber: 4, title: "Infrastructure as Code", subtitle: "Declarative Cloud Orchestration", status: "upcoming", studentProgress: 25, topics: ["Terraform syntax", "State management", "Resource modules"] },
      { stageNumber: 5, title: "Kubernetes Orchestration", subtitle: "Cluster Management & Ingress", status: "upcoming", studentProgress: 15, topics: ["Pods & Deployments", "Cluster networking", "ConfigMaps & Secrets"] },
      { stageNumber: 6, title: "Cloud Security & Compliance", subtitle: "Perimeter Defense & Encryption", status: "upcoming", studentProgress: 10, topics: ["KMS encryption", "Least-privilege auditing", "Vulnerability scanning"] },
      { stageNumber: 7, title: "Multi-Region Cloud Capstone", subtitle: "High-Availability Resilient Deployment", status: "upcoming", studentProgress: 5, topics: ["Auto-scaling groups", "Load balancers", "Disaster recovery failover"] }
    ]
  }
};
