import React, { useState, useEffect } from 'react';
import './Menu.css';
import logo from './ktk_logo.png';

const Menu = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1060) {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`mobil-header ${isScrolled ? 'mobil-scrolled' : ''}`}>
      <div className="mobil-header-container">
        <div className="mobil-logo-section">
          <div className="mobil-logo">
            <img src={logo} alt="Логотип КТК" className="mobil-logo-img" />
          </div>
          
          <div className="mobil-mobile-logo-text">
            ИНЖЕНЕРНО-ПРОЕКТНЫЙ ЦЕНТР
          </div>
          
          <div className="mobil-mobile-logo-info">
            <div className="mobil-company-name-mobile">
              Инженерно проектный центр ООО "Крымхеком"
            </div>
            <div className="mobil-mobile-contacts">
              <a href="tel:+79780000000" className="mobil-mobile-phone">+7 (978) 000-00-00</a>
              <a href="mailto:info@crimekhek.com" className="mobil-mobile-email">info@crimekhek.com</a>
            </div>
          </div>
        </div>

        <button 
          className="mobil-mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Открыть меню"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        <nav className={`mobil-navigation ${isMobileMenuOpen ? 'mobil-active' : ''}`}>
          <ul className="mobil-nav-list">
            <li className="mobil-nav-item">
              <a href="#main" className="mobil-nav-link" onClick={handleNavClick}>
                Главная
              </a>
            </li>
            
            <li 
              className={`mobil-nav-item mobil-dropdown ${activeDropdown === 'services' ? 'mobil-active' : ''}`}
            >
              <a 
                href="#services" 
                className="mobil-nav-link" 
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown('services');
                }}
              >
                Услуги
                <span className="mobil-dropdown-arrow">▼</span>
              </a>
              <div className="mobil-dropdown-menu">
                <ul className="mobil-dropdown-list">
                  <li className="mobil-dropdown-item">
                    <a href="#architectural-design" onClick={handleNavClick}>
                      Архитектурно-строительное проектирование
                    </a>
                  </li>
                  <li className="mobil-dropdown-item">
                    <a href="#construction-works" onClick={handleNavClick}>
                      Строительно-монтажные работы
                    </a>
                  </li>
                  <li className="mobil-dropdown-item">
                    <a href="#engineering-surveys" onClick={handleNavClick}>
                      Инженерные изыскания в строительстве
                    </a>
                  </li>
                  <li className="mobil-dropdown-item">
                    <a href="#engineering-systems" onClick={handleNavClick}>
                      Проектирование и монтаж инженерных систем
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="mobil-nav-item">
              <a href="#projects" className="mobil-nav-link" onClick={handleNavClick}>
                Проекты
              </a>
            </li>

            <li className="mobil-nav-item">
              <a href="#contacts" className="mobil-nav-link" onClick={handleNavClick}>
                Контакты
              </a>
            </li>

            <li 
              className={`mobil-nav-item mobil-dropdown ${activeDropdown === 'about' ? 'mobil-active' : ''}`}
            >
              <a 
                href="#about" 
                className="mobil-nav-link" 
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown('about');
                }}
              >
                О компании
                <span className="mobil-dropdown-arrow">▼</span>
              </a>
              <div className="mobil-dropdown-menu">
                <ul className="mobil-dropdown-list">
                  <li className="mobil-dropdown-item">
                    <a href="#privacy-policy" onClick={handleNavClick}>
                      Политика конфиденциальности
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          <div className="mobil-burger-contact-info">
            <div className="mobil-office-hours">
              <strong>Режим работы офиса:</strong>
              <p>пн-пт: с 9:00 до 18:00</p>
            </div>
            <div className="mobil-contact-phone">
              <a href="tel:+79780000000">+7 (978) 000-00-00</a>
            </div>
            <div className="mobil-contact-email">
              <a href="mailto:info@crimekhek.com">info@crimekhek.com</a>
            </div>
            <div className="mobil-contact-address">
              295053, Респ. Крым, г. Симферополь,
              ул. Гурзувская, д. 1, цокольный этаж
            </div>
          </div>
        </nav>

        <div className={`mobil-contact-info ${isMobileMenuOpen ? 'mobil-mobile-visible' : ''}`}>
          <div className="mobil-phone-number">
            <a href="tel:+79780000000">+7 (978) 000-00-00</a>
          </div>
          <div className="mobil-email">
            <a href="mailto:info@crimekhek.com">info@crimekhek.com</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Menu;