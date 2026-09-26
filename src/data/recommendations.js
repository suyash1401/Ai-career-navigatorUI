// Explainable Career Recommendation Mock Data
// Highlights transparent, rule-informed and vector-similarity rationale

export const initialRecommendations = [
  {
    careerId: "CAR-01",
    title: "Software Developer",
    category: "Software Engineering",
    oNetCode: "15-1252.00",
    matchPercentage: 87,
    confidenceTier: "Very High Alignment",
    projectedFitRank: 1,
    matchingSkills: [
      { name: "Java", studentLevel: 84, benchmark: 85, weight: "Critical" },
      { name: "SQL", studentLevel: 82, benchmark: 80, weight: "Critical" },
      { name: "Data Structures & Algorithms", studentLevel: 80, benchmark: 85, weight: "Critical" },
      { name: "Python", studentLevel: 78, benchmark: 80, weight: "Essential" },
      { name: "Git & Version Control", studentLevel: 82, benchmark: 75, weight: "Essential" }
    ],
    missingSkills: [
      { name: "Software Testing & QA", studentLevel: 60, targetLevel: 75, priority: "High" },
      { name: "Docker & Containerization", studentLevel: 55, targetLevel: 70, priority: "Medium" },
      { name: "Node.js & REST APIs", studentLevel: 68, targetLevel: 75, priority: "Medium" }
    ],
    explanation: {
      summary: "Your technical profile matches this career path with 87% statistical similarity, driven by an exceptional core programming foundation and strong database fluency.",
      strengths: [
        "Strong object-oriented programming foundation (Java 84%, Python 78%) surpassing standard entry-level benchmarks.",
        "Relational database query competence (SQL 82%) aligns well with enterprise backend data persistence requirements.",
        "Proficiency in Data Structures (80%) satisfies foundational technical interview & architectural design prerequisites.",
        "Demonstrated version control hygiene (Git 82%) satisfies team collaboration standards."
      ],
      improvementOpportunities: [
        "Strengthening automated unit testing frameworks (JUnit/pytest) will close the remaining 15% QA readiness gap.",
        "Familiarity with containerized execution (Docker) will improve developer workflow readiness."
      ],
      impactProjection: "Investing ~4 weeks in unit testing and Docker containers is projected to raise alignment from 87% to 94%."
    }
  },
  {
    careerId: "CAR-02",
    title: "Full Stack Developer",
    category: "Software Engineering",
    oNetCode: "15-1254.00",
    matchPercentage: 84,
    confidenceTier: "High Alignment",
    projectedFitRank: 2,
    matchingSkills: [
      { name: "HTML5 & CSS3", studentLevel: 88, benchmark: 85, weight: "Essential" },
      { name: "SQL", studentLevel: 82, benchmark: 75, weight: "Essential" },
      { name: "Git & Version Control", studentLevel: 82, benchmark: 75, weight: "Essential" },
      { name: "JavaScript", studentLevel: 76, benchmark: 85, weight: "Critical" },
      { name: "React", studentLevel: 74, benchmark: 85, weight: "Critical" }
    ],
    missingSkills: [
      { name: "React (Advanced Patterns)", studentLevel: 74, targetLevel: 85, priority: "Critical" },
      { name: "Node.js & REST APIs", studentLevel: 68, targetLevel: 80, priority: "Critical" },
      { name: "MongoDB", studentLevel: 65, targetLevel: 70, priority: "Low" }
    ],
    explanation: {
      summary: "High visual and client-side capability coupled with strong database knowledge produces an 84% fit for full-stack web roles.",
      strengths: [
        "Mastery of modern responsive layouts (HTML5/CSS3 88%) ensures high fidelity in UI delivery.",
        "Solid hands-on experience in component-driven reactive development with React (74%).",
        "Dual exposure to relational SQL and document-based MongoDB storage patterns."
      ],
      improvementOpportunities: [
        "Transitioning from client-only React to production state management (Zustand/Redux) and Next.js SSR.",
        "Deepening asynchronous backend server architecture with Node.js and Express."
      ],
      impactProjection: "Completing a production full-stack capstone project will elevate alignment to 92%."
    }
  },
  {
    careerId: "CAR-03",
    title: "Data Analyst",
    category: "Data & Analytics",
    oNetCode: "15-2051.01",
    matchPercentage: 81,
    confidenceTier: "High Alignment",
    projectedFitRank: 3,
    matchingSkills: [
      { name: "SQL", studentLevel: 82, benchmark: 90, weight: "Critical" },
      { name: "Python", studentLevel: 78, benchmark: 80, weight: "Critical" },
      { name: "PostgreSQL", studentLevel: 72, benchmark: 75, weight: "Essential" },
      { name: "Machine Learning Fundamentals", studentLevel: 62, benchmark: 60, weight: "Recommended" }
    ],
    missingSkills: [
      { name: "Data Analysis & Scikit-Learn", studentLevel: 66, targetLevel: 80, priority: "Critical" },
      { name: "SQL (Advanced Analytics)", studentLevel: 82, targetLevel: 90, priority: "High" }
    ],
    explanation: {
      summary: "Your analytical SQL capability and Python data manipulation skills position you at an 81% alignment with modern data analytics roles.",
      strengths: [
        "Strong relational querying (SQL 82%) enables effective data warehousing and aggregation operations.",
        "Python knowledge facilitates automated ETL workflows and exploratory statistics.",
        "Sound understanding of foundational machine learning concepts for clustering and segmentation."
      ],
      improvementOpportunities: [
        "Mastering window functions, rollups, and dimensional modeling in SQL warehouses.",
        "Expanding interactive storytelling with visualization tools and statistical significance testing."
      ],
      impactProjection: "A concentrated 3-week focus on exploratory data analysis will bring alignment to 89%."
    }
  },
  {
    careerId: "CAR-06",
    title: "Machine Learning Engineer",
    category: "AI & Data Science",
    oNetCode: "15-1251.00",
    matchPercentage: 74,
    confidenceTier: "Moderate-High Potential",
    projectedFitRank: 4,
    matchingSkills: [
      { name: "Data Structures & Algorithms", studentLevel: 80, benchmark: 85, weight: "Critical" },
      { name: "Python", studentLevel: 78, benchmark: 90, weight: "Critical" },
      { name: "Machine Learning Fundamentals", studentLevel: 62, benchmark: 88, weight: "Critical" },
      { name: "Node.js & REST APIs", studentLevel: 68, targetLevel: 70, weight: "Essential" }
    ],
    missingSkills: [
      { name: "Deep Learning (Basics)", studentLevel: 45, targetLevel: 75, priority: "Critical" },
      { name: "Machine Learning (Advanced)", studentLevel: 62, targetLevel: 88, priority: "Critical" },
      { name: "Docker & Containerization", studentLevel: 55, targetLevel: 75, priority: "High" }
    ],
    explanation: {
      summary: "Strong algorithmic programming logic and Python fluency create a viable launchpad (74% alignment), with targeted upskilling required in deep neural models and containerized model deployment.",
      strengths: [
        "Exceptional CS fundamentals and computational complexity analysis (Algorithms 80%).",
        "Clean procedural and object-oriented Python scripting fluency.",
        "Working knowledge of classical statistical learning paradigms."
      ],
      improvementOpportunities: [
        "Gaining practical experience with PyTorch tensors, autograd, and neural layer design.",
        "Containerizing models with Docker for low-latency inference serving."
      ],
      impactProjection: "Dedicated coursework in Deep Learning architectures will progress alignment from 74% to 85%."
    }
  }
];
