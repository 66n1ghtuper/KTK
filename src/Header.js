import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import logo from './ktk_logo.png';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

 
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">

        <div className="logo-section">
          <div className="logo">
            <img src={logo} alt="Логотип КТК" className="logo-img" />
          </div>
        </div>

   
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#main" className="nav-link">
                Главная
              </a>
            </li>
            
            <li 
              className="nav-item dropdown"
              ref={dropdownRef}
            >
              <button 
                className={`nav-button ${activeDropdown === 'services' ? 'active' : ''}`}
                onClick={() => toggleDropdown('services')}
                aria-expanded={activeDropdown === 'services'}
              >
                Услуги
              </button>
              {activeDropdown === 'services' && (
                <div className="dropdown-menu">
                  <ul className="dropdown-list">
                    <li className="dropdown-item">
                      <a href="#architectural-design">
                        Архитектурно-строительное проектирование
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#construction-works">
                        Строительно-монтажные работы
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#engineering-surveys">
                        Инженерные изыскания в строительстве
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#engineering-systems">
                        Проектирование и монтаж инженерных систем
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li className="nav-item">
              <a href="#projects" className="nav-link">
                Проекты
              </a>
            </li>

            <li className="nav-item">
              <a href="#contacts" className="nav-link">
                Контакты
              </a>
            </li>

            <li 
              className="nav-item dropdown"
            >
              <button 
                className={`nav-button ${activeDropdown === 'about' ? 'active' : ''}`}
                onClick={() => toggleDropdown('about')}
                aria-expanded={activeDropdown === 'about'}
              >
                О компании
              </button>
              {activeDropdown === 'about' && (
                <div className="dropdown-menu">
                  <ul className="dropdown-list">
                    <li className="dropdown-item">
                      <a href="#privacy-policy">
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