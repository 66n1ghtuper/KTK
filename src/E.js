import React, { useState } from 'react';
import './E.css';
import ImgTeam from './img/e3.jpg';
import ImgExperience from './img/e2.png';
import ImgReputation from './img/e1.png';
import ImgLv from './img/e4.jpg';
import ImgLNV from './img/lv.png';

const E = ({ onServiceSelect }) => {
  const [activeCard, setActiveCard] = useState(null);

  const servicesData = [
    {
      id: 1,
      title: "Архитектурно строительное проектирование",
      image: ImgTeam, 
      details: [
        "Разработка ППТ",
        "Получение ГПЗУ",
        "Проектирование зданий и сооружений",
        "Сопровождение получения разрешения",
        "Авторский надзор"
      ],
      route: 'architectural-design'
    },
    {
      id: 2,
      title: "Строительно-монтажные работы",
      image: ImgExperience, 
      details: [
        "Водоснабжение",
        "Канализация",
        "Электроснабжение 0.4 и 10KV",
        "Газоснабжение, отопление, вентиляция, дымоходные системы",
        "Слаботочные системы и сети, КИПиА"
      ],
      route: 'construction-works'
    },
    {
      id: 3,
      title: "Инженерные изыскания в строительстве",
      image: ImgReputation, 
      details: [
        "Инженерно-геодезические изыскания",
        "Инженерно-геологические изыскания",
        "Инженерно-геофизические изыскания",
        "Инженерно-экологические изыскания",
        "Инженерно-гидрометеорологические изыскания",
        "Разработка и согласование проектов сокращения зон санитарной защиты, охранных зон"
      ],
      route: 'engineering-surveys'
    },
    {
      id: 4,
      title: "Проектирование и монтаж инженерных систем",
      image: ImgLv, 
      details: [
        "Водоснабжение",
        "Канализация",
        "Электроснабжение 0.4 и 10kV",
        "Газоснабжение, отопление, вентиляция, дымоходные системы",
        "Слаботочные системы и сети, КИПиА"
      ],
      route: 'engineering-systems'
    },
    {
      id: 5,
      title: "Комплексные ИТ-решения: от инфраструктуры до программного обеспечения",
      image: ImgLNV, 
      details: [
        "Водоснабжение",
        "Канализация",
        "Электроснабжение 0.4 и 10kV",
        "Газоснабжение, отопление, вентиляция, дымоходные системы",
        "Слаботочные системы и сети, КИПиА"
      ],
      route: 'it-solutions'
    }
  ];

  const handleCardClick = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  const handleDetailsClick = (service, event) => {
    event.stopPropagation();
    if (onServiceSelect) {
      onServiceSelect(service.route);
    }
  };

  const handleImageClick = (service, event) => {
    event.stopPropagation();
    if (onServiceSelect) {
      onServiceSelect(service.route);
    }
  };

  const renderServiceCard = (service) => (
    <div
      className={`service-card ${getCardClass(service.id)} ${activeCard === service.id ? 'active' : ''}`}
      onClick={() => handleCardClick(service.id)}
      style={{ backgroundImage: `url(${service.image})` }}
    >
      <div className="image-overlay" onClick={(e) => handleImageClick(service, e)}></div>
      <div className="service-title">
        {service.title}
      </div>
      
      {activeCard === service.id && (
        <div className="details-overlay">
          <div className="details-content">
            <ul>
              {service.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <button 
              className="details-button" 
              onClick={(e) => handleDetailsClick(service, e)}
            >
              Подробнее
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const getCardClass = (id) => {
    switch(id) {
      case 1: return 'wide';
      case 2: return 'tall';
      case 3: return 'small';
      case 4: return 'half-width';
      case 5: return 'half-width';
      default: return '';
    }
  };

  return (
    <div className="services-gallery">
      <div className="services-grid">
        <div className="top-row">
          {renderServiceCard(servicesData[0])}
          
          <div className="narrow-column">
            {renderServiceCard(servicesData[1])}
            {renderServiceCard(servicesData[2])}
          </div>
        </div>
        
        <div className="bottom-row">
          {renderServiceCard(servicesData[3])}
          {renderServiceCard(servicesData[4])}
        </div>
      </div>
    </div>
  );
};

export default E;