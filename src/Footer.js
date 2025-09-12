import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>ООО "КрымТехКом"</h3>
              <div className="logo-divider"></div>
            </div>
            <p className="company-description">Инженерно-проектный центр</p>
            <div className="footer-contacts">
              <div className="contact-item">
    
                <a href="tel:+79788888888" className="contact-link">+7 978 888 88 88</a>
              </div>
              <div className="contact-item">
  
                <a href="mailto:inform@ktk.ru" className="contact-link">inform@ktk.ru</a>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="section-title">Адрес</h4>
            <div className="address-block">
 
              <div>
                <p>295053, Респ. Крым, г. Симферополь,</p>
                <p>ул. Гурзувская, д. 1, цокольный этаж</p>
              </div>
            </div>
            <div className="work-hours">
              <h5 className="hours-title">Режим работы офиса:</h5>
              <p className="hours-text">пн-пт: с 9:00 до 18:00</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="section-title">Информация</h4>
            <a href="/privacy-policy" className="footer-link">

              Политика конфиденциальности
            </a>
            <div className="legal-notice">
              <p>Обращаем ваше внимание на то, что данный интернет-сайт носит исключительно информационный характер и ни при каких условиях не является публичной офертой.</p>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>Сайт спроектирован IT отделом ООО "КрымТехКом". Все права защищены © {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;