# AI Career Navigator — Interactive Technical Student Frontend

**MCA Final-Year Research Project & Technical Prototype**

An interactive, animated research-grade dashboard for technical and MCA students, demonstrating **Occupational Skill Intelligence** and **Canonical Skill Normalization** across international taxonomies (**O*NET** and **ESCO**).

---

## 🚀 Quick Start

The frontend is built using **React + Vite + Lucide React + Recharts**.

```bash
# Navigate to the project directory
cd "C:\Users\krati\.gemini\antigravity\scratch\ai-career-navigator"

# Install dependencies (if not already installed)
npm install

# Start the interactive development server
npm run dev
```

Open your browser at: **[http://localhost:5173/](http://localhost:5173/)**

---

## 🎓 Teacher Demonstration Walkthrough (13-Step Sequence)

A sticky **Teacher Demo Flow Toolbar** is included at the very top of the interface. You can click **Next** to walk through the complete academic sequence, or jump to any stage:

1. **Landing Page**: Project vision, Hero, CTA buttons, and the interactive technical pipeline animation.
2. **Student Dashboard**: 4 Stat Cards (82% Circular Profile Completion, 24 Skills, 8 Career Matches, 6 Skill Gaps), candidate banner, and radar preview.
3. **Student Profile**: MCA candidate information (Suyash Karandikar), GPA, academic markers, edit profile dialog, and interactive skill chips.
4. **Skills Visualization**: Competency domain filters, Recharts radar chart, and live skill proficiency calibration sliders.
5. **Career Explorer**: 10 curated technical careers with match scores, tags, O*NET SOC codes, and ESCO badges.
6. **Career Skill Requirements**: In-depth occupational view with interactive comparison bars and side-by-side benchmark table.
7. **Skill Gap Analysis**: 4 summary categories (Have, Needs Improvement, Critical, Recommended) + **Interactive Upskilling Simulator**.
8. **Canonical Skill Mapping**: The core research contribution — visualizing O*NET and ESCO convergence into canonical entities.
9. **Occupation-Skill Network**: Interactive bipartite graph connecting technologies (Emerald), canonical skills (Cyan), and occupations (Purple).
10. **AI Career Recommendations**: Explainable AI recommendations with explicit *"Why this career?"* rationale.
11. **Career Pathway / Roadmap**: 7-stage progressive milestone learning roadmap with capstone projects.
12. **Technical Skill Assessment**: 12-question technical diagnostic covering Programming, DB, Cloud, AI/ML, and instant gap scoring.
13. **Research Insights & Architecture**: Faculty dashboard with demonstration dataset statistics, ETL quality metrics, and the end-to-end system architecture diagram.

---

## 🏛 Architecture & Technology Stack

* **UI Framework**: React 19 + Vite
* **Design System**: Custom obsidian dark theme (`#070a12`), glassmorphism cards (`backdrop-filter: blur`), glowing neon borders, responsive sidebar
* **Icons**: Lucide React
* **Visualizations**: Recharts (Radar, Bar) + Custom Interactive SVG (Occupation-Skill Network & Canonical Mapping Pipeline)
* **Data Layer**: Clean, decoupled mock architecture in `src/data/` (easily swappable with future REST APIs)

---

## 📑 Research Status Distinctions

* **Completed Research**: O*NET 28.0 Ingestion, ESCO v1.1.1 Semantic Parsing, Data Quality & Deduplication Audit.
* **Current Research**: Canonical Skill Normalization Layer & Disambiguation Ontology.
* **Planned Components**: Pluggable AI Recommendation Inference Engine, Adaptive Graph Topological Sorter, Backend Integration.
