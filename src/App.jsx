import React, { useState, useEffect } from 'react';
import './styles/global.css';

// Components
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { TeacherTourBanner } from './components/TeacherTourBanner';

// Pages
import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
import { Profile } from './pages/Profile';
import { Skills } from './pages/Skills';
import { CareerExplorer } from './pages/CareerExplorer';
import { CareerDetails } from './pages/CareerDetails';
import { SkillGap } from './pages/SkillGap';
import { CareerPath } from './pages/CareerPath';
import { Assessment } from './pages/Assessment';
import { Recommendations } from './pages/Recommendations';
import { CanonicalMappingPage } from './pages/CanonicalMappingPage';
import { NetworkPage } from './pages/NetworkPage';
import { VisualArchitecture } from './pages/VisualArchitecture';
import { ResearchInsights } from './pages/ResearchInsights';
import { Settings } from './pages/Settings';

// Mock Data
import { initialStudent, alternateStudents } from './data/students';
import { initialSkills } from './data/skills';
import { initialCareers } from './data/careers';

export function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [student, setStudent] = useState(initialStudent);
  const [skills, setSkills] = useState(initialSkills);
  const [selectedCareerId, setSelectedCareerId] = useState('CAR-01');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [demoMode, setDemoMode] = useState(true);
  const [toastMessage, setToastMessage] = useState(null);

  // Show temporary toast notification
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Switch student archetype
  const handleSelectStudent = (id) => {
    const found = alternateStudents.find(s => s.id === id);
    if (found) {
      setStudent(prev => ({
        ...prev,
        id: found.id,
        name: found.name,
        degree: found.degree,
        targetRole: found.targetRole,
        avatar: found.name.split(' ').map(n => n[0]).join(''),
        profileCompletion: found.profileCompletion
      }));
      triggerToast(`Switched active profile to ${found.name}`);
    }
  };

  // Update student bio details
  const handleUpdateStudent = (updatedFields) => {
    setStudent(prev => ({
      ...prev,
      ...updatedFields
    }));
    triggerToast("Student profile updated successfully.");
  };

  // Update a single skill
  const handleUpdateSkill = (updatedSkill) => {
    setSkills(prev => prev.map(s => s.id === updatedSkill.id ? updatedSkill : s));
    triggerToast(`Updated ${updatedSkill.name} proficiency to ${updatedSkill.proficiency}%.`);
  };

  // Reset to baseline
  const handleResetData = () => {
    setStudent(initialStudent);
    setSkills(initialSkills);
    setSelectedCareerId('CAR-01');
    triggerToast("Demo data reset to initial research baseline.");
  };

  // Apply assessment results to profile
  const handleApplyAssessmentResults = (domainScores) => {
    // Elevate skills based on scores
    setSkills(prev => prev.map(s => {
      const matchDomain = domainScores.find(d => s.category.toLowerCase().includes(d.category.toLowerCase().slice(0, 4)));
      if (matchDomain && matchDomain.score > s.proficiency) {
        return {
          ...s,
          proficiency: Math.min(100, Math.round((s.proficiency + matchDomain.score) / 2)),
          verified: true
        };
      }
      return s;
    }));
    setStudent(prev => ({ ...prev, profileCompletion: Math.min(100, prev.profileCompletion + 6) }));
    triggerToast("Diagnostic assessment calibrated into student profile skills!");
    setCurrentPage('skills');
  };

  // Smooth scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Render appropriate page view
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'landing':
        return (
          <Landing 
            onNavigate={setCurrentPage} 
            onStartAssessment={() => setCurrentPage('assessment')} 
          />
        );
      case 'dashboard':
        return (
          <Dashboard
            student={student}
            skills={skills}
            onNavigate={setCurrentPage}
            onSelectCareer={(id) => {
              setSelectedCareerId(id);
              setCurrentPage('career-detail');
            }}
          />
        );
      case 'profile':
        return (
          <Profile
            student={student}
            skills={skills}
            onUpdateSkill={handleUpdateSkill}
            onUpdateStudent={handleUpdateStudent}
          />
        );
      case 'skills':
        return (
          <Skills
            skills={skills}
            onUpdateSkill={handleUpdateSkill}
          />
        );
      case 'explorer':
        return (
          <CareerExplorer
            onSelectCareer={(id) => {
              setSelectedCareerId(id);
              setCurrentPage('career-detail');
            }}
            onNavigate={setCurrentPage}
            onViewSkillGap={(id) => {
              setSelectedCareerId(id);
              setCurrentPage('skill-gap');
            }}
          />
        );
      case 'career-detail':
        return (
          <CareerDetails
            careerId={selectedCareerId}
            onBack={() => setCurrentPage('explorer')}
            onNavigateToSkillGap={(id) => {
              setSelectedCareerId(id);
              setCurrentPage('skill-gap');
            }}
            onNavigateToRoadmap={(id) => {
              setSelectedCareerId(id);
              setCurrentPage('roadmap');
            }}
          />
        );
      case 'skill-gap':
        return (
          <SkillGap
            selectedCareerId={selectedCareerId}
            onSelectCareer={(id) => setSelectedCareerId(id)}
            onNavigateToRoadmap={(id) => {
              setSelectedCareerId(id);
              setCurrentPage('roadmap');
            }}
          />
        );
      case 'roadmap':
        return (
          <CareerPath
            selectedCareerId={selectedCareerId}
            onSelectCareer={(id) => setSelectedCareerId(id)}
          />
        );
      case 'recommendations':
        return (
          <Recommendations
            onSelectCareer={(id) => {
              setSelectedCareerId(id);
              setCurrentPage('career-detail');
            }}
            onNavigateToSkillGap={(id) => {
              setSelectedCareerId(id);
              setCurrentPage('skill-gap');
            }}
            onNavigateToRoadmap={(id) => {
              setSelectedCareerId(id);
              setCurrentPage('roadmap');
            }}
          />
        );
      case 'assessment':
        return (
          <Assessment
            onApplyResults={handleApplyAssessmentResults}
          />
        );
      case 'mapping':
        return (
          <CanonicalMappingPage
            onSelectCareer={(id) => {
              setSelectedCareerId(id);
              setCurrentPage('career-detail');
            }}
          />
        );
      case 'network':
        return (
          <NetworkPage
            onSelectCareer={(id) => {
              setSelectedCareerId(id);
              setCurrentPage('career-detail');
            }}
          />
        );
      case 'architecture':
        return (
          <VisualArchitecture
            onNavigate={setCurrentPage}
          />
        );
      case 'research':
        return (
          <ResearchInsights
            onNavigateToArchitecture={() => setCurrentPage('architecture')}
          />
        );
      case 'settings':
        return (
          <Settings
            student={student}
            onSelectStudent={handleSelectStudent}
            onResetData={handleResetData}
            demoMode={demoMode}
            setDemoMode={setDemoMode}
          />
        );
      default:
        return <Dashboard student={student} skills={skills} onNavigate={setCurrentPage} onSelectCareer={setSelectedCareerId} />;
    }
  };

  const isLandingView = currentPage === 'landing';

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Teacher Demonstration Guided Walkthrough Bar */}
      <TeacherTourBanner
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        activeCareerId={selectedCareerId}
      />

      {/* Global Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        student={student}
        onSelectCareer={(id) => setSelectedCareerId(id)}
        toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        isSidebarOpen={!isSidebarCollapsed}
      />

      {/* Main Container Layout */}
      <div style={{ display: 'flex', flex: 1, position: 'relative' }}>
        {/* Sidebar (shown on internal dashboard/research pages) */}
        {!isLandingView && (
          <Sidebar
            currentPage={currentPage}
            onNavigate={setCurrentPage}
            isCollapsed={isSidebarCollapsed}
            toggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          />
        )}

        {/* Content Area */}
        <main style={{
          flex: 1,
          padding: isLandingView ? '24px 32px' : '28px 36px',
          maxWidth: isLandingView ? '1380px' : '1240px',
          margin: '0 auto',
          width: '100%',
          overflowX: 'hidden'
        }}>
          {renderCurrentPage()}
        </main>
      </div>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(14, 23, 42, 0.95)',
          border: '1px solid var(--accent-cyan)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8), 0 0 15px rgba(6, 182, 212, 0.4)',
          borderRadius: '10px',
          padding: '10px 20px',
          color: '#fff',
          fontSize: '0.85rem',
          fontWeight: 600,
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          backdropFilter: 'blur(10px)'
        }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-cyan)' }} />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
