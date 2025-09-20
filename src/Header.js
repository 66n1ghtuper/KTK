import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import logo from './img/ktk_logo.png';

const Header = ({ onServicesClick, onMainClick, onServiceSelect, onProjectsClick, onContactsClick, onAboutClick, onPrivacyClick, activeSection }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const aboutDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
          aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  const handleMainClick = (e) => {
    e.preventDefault();
    onMainClick();
    setActiveDropdown(null);
  };

  const handleServiceClick = (service) => {
    onServiceSelect(service);
    setActiveDropdown(null);
  };

  const handleServicesButtonClick = (e) => {
    e.preventDefault();
    onServicesClick();
    setActiveDropdown(null);
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();
    onProjectsClick();
    setActiveDropdown(null);
  };

  const handleContactsClick = (e) => {
    e.preventDefault();
    onContactsClick();
    setActiveDropdown(null);
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    onAboutClick();
    setActiveDropdown(null);
  };

  const handlePrivacyClick = (e) => {
    e.preventDefault();
    onPrivacyClick();
    setActiveDropdown(null);
  };

  const isActive = (section) => {
    return activeSection === section;
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">

        <div className="logo-section">
          <div className="logo">
            <img src={logo} alt="Логотип КТК" className="logo-img" onClick={handleMainClick} style={{cursor: 'pointer'}} />
          </div>
        </div>

        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#main" className={`nav-link ${isActive('main') ? 'active' : ''}`} onClick={handleMainClick}>
                Главная
                {isActive('main') }
              </a>
            </li>
            
            <li 
              className="nav-item dropdown"
              ref={dropdownRef}
            >
              <button 
                className={`nav-button ${activeDropdown === 'services' ? 'active' : ''} ${isActive('services') ? 'section-active' : ''}`}
                onMouseEnter={() => toggleDropdown('services')}
                onClick={handleServicesButtonClick}
                aria-expanded={activeDropdown === 'services'}
              >
                Услуги
                {isActive('services') }
              </button>
              {activeDropdown === 'services' && (
                <div className="dropdown-menu" onMouseLeave={() => setActiveDropdown(null)}>
                  <ul className="dropdown-list">
                    <li className="dropdown-item">
                      <a href="#architectural-design" onClick={() => handleServiceClick('architectural-design')}>
                        Архитектурно-строительное проектирование
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#construction-works" onClick={() => handleServiceClick('construction-works')}>
                        Строительно-монтажные работы
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#engineering-surveys" onClick={() => handleServiceClick('engineering-surveys')}>
                        Инженерные изыскания в строительстве
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#engineering-systems" onClick={() => handleServiceClick('engineering-systems')}>
                        Проектирование и монтаж инженерных систем
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#it-solutions" onClick={() => handleServiceClick('it-solutions')}>
                        Комплексные ИТ-решения
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li className="nav-item">
              <a href="#projects" className={`nav-link ${isActive('projects') ? 'active' : ''}`} onClick={handleProjectsClick}>
                Проекты
                {isActive('projects') }
              </a>
            </li>

            <li className="nav-item">
              <a href="#contacts" className={`nav-link ${isActive('contacts') ? 'active' : ''}`} onClick={handleContactsClick}>
                Контакты
                {isActive('contacts') }
              </a>
            </li>

            <li 
              className="nav-item dropdown"
              ref={aboutDropdownRef}
            >
              <button 
                className={`nav-button ${activeDropdown === 'about' ? 'active' : ''} ${isActive('about') ? 'section-active' : ''}`}
                onMouseEnter={() => toggleDropdown('about')}
                onClick={handleAboutClick}
                aria-expanded={activeDropdown === 'about'}
              >
                О компании
                {isActive('about') }
              </button>
              {activeDropdown === 'about' && (
                <div className="dropdown-menu" onMouseLeave={() => setActiveDropdown(null)}>
                  <ul className="dropdown-list">
                    <li className="dropdown-item">
                      <a href="#privacy-policy" onClick={handlePrivacyClick}>
                        Политика конфиденциальности
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </nav>

        <div className="contact-info">
          <div className="phone-number">
            <a href="tel:+79780000000">7 978 888 88 88</a>
          </div>
          <div className="email">
            <a href="mailto:info@crimekhek.com">info@crimekhek.com</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;