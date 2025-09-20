import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Menu from './Menu';
import N from './N';
import Advantages from './Advantages';
import W from './W';
import E from './E';
import Q from './Q';
import S from './S';
import T from './T';
import Footer from './Footer';
import Ar from './raz/Ar';
import Bb from './raz/Bb';
import Inj from './raz/Inj';
import Proekt from './raz/Proekt';
import It from './raz/It';
import Pr from './raz/Pr';
import Kont from './raz/Kont';
import Okomp from './raz/Okomp';
import Pol from './raz/Pol';
import './App.css';

const AppContent = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentContent, setCurrentContent] = useState('main');
  const [activeSection, setActiveSection] = useState('main');

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 1060); 
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const handleServicesClick = () => {
    setCurrentContent('services');
    setActiveSection('services');
  };

  const handleServiceSelect = (service) => {
    setCurrentContent(service);
    setActiveSection('services');
  };

  const handleMainClick = () => {
    setCurrentContent('main');
    setActiveSection('main');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectsClick = () => {
    setCurrentContent('projects');
    setActiveSection('projects');
  };

  const handleContactsClick = () => {
    setCurrentContent('contacts');
    setActiveSection('contacts');
  };

  const handleAboutClick = () => {
    setCurrentContent('about');
    setActiveSection('about');
  };

  const handlePrivacyClick = () => {
    setCurrentContent('privacy');
    setActiveSection('privacy');
  };

  const renderContent = () => {
    switch(currentContent) {
      case 'main':
        return (
          <>
            <N id="n-section" />
            <Advantages /> 
            <W /> 
            <E onServiceSelect={handleServiceSelect} /> 
            <Q />
            <S />
          </>
        );
      case 'services':
        return (
          <>
            <W />
            <E onServiceSelect={handleServiceSelect} />
            <T />
          </>
        );
      case 'projects':
        return <Pr />;
      case 'contacts':
        return <Kont />;
      case 'architectural-design':
        return <Ar />;
      case 'construction-works':
        return <Bb />;
      case 'engineering-surveys':
        return <Inj />;
      case 'engineering-systems':
        return <Proekt />;
      case 'it-solutions':
        return <It />;
      case 'about':
        return <Okomp />;
      case 'privacy':
        return <Pol />;
      default:
        return (
          <>
            <N id="n-section" />
            <Advantages /> 
            <W /> 
            <E onServiceSelect={handleServiceSelect} /> 
            <Q />
            <S />
          </>
        );
    }
  };

  return (
    <div className="App">
      {isMobile ? 
        <Menu 
          onServicesClick={handleServicesClick} 
          onMainClick={handleMainClick} 
          onServiceSelect={handleServiceSelect}
          onProjectsClick={handleProjectsClick}
          onContactsClick={handleContactsClick}
          onAboutClick={handleAboutClick}
          onPrivacyClick={handlePrivacyClick}
          activeSection={activeSection}
        /> : 
        <Header 
          onServicesClick={handleServicesClick} 
          onMainClick={handleMainClick}
          onServiceSelect={handleServiceSelect}
          onProjectsClick={handleProjectsClick}
          onContactsClick={handleContactsClick}
          onAboutClick={handleAboutClick}
          onPrivacyClick={handlePrivacyClick}
          activeSection={activeSection}
        />
      }
      
      {renderContent()}
      
      {currentContent !== 'services' && currentContent !== 'about' && currentContent !== 'privacy' && (
        <>
          <T />
          <Footer />
        </>
      )}
      
      {(currentContent === 'about' || currentContent === 'privacy') && (
        <>
          <T />
          <Footer />
        </>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/architectural-design" element={<Ar />} />
        <Route path="/construction-works" element={<Bb />} />
        <Route path="/engineering-surveys" element={<Inj />} />
        <Route path="/engineering-systems" element={<Proekt />} />
        <Route path="/it-solutions" element={<It />} />
        <Route path="/projects" element={<Pr />} />
        <Route path="/contacts" element={<Kont />} />
        <Route path="/about" element={<Okomp />} />
        <Route path="/privacy" element={<Pol />} />
      </Routes>
    </Router>
  );
};

export default App;