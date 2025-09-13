import React, { useState } from 'react';
import './E.css';
import ImgTeam from './e3.jpg';
import ImgExperience from './e2.png';
import ImgReputation from './e1.png';
import ImgLv from './e4.jpg';

const E = () => {
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
      ]
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
      ]
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

        
      ]
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
      ]
    }
  ];

  const handleCardClick = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <div className="services-gallery">
      <div className="services-grid">
        <div className="top-row">
          <div
            className={`service-card wide ${activeCard === 1 ? 'active' : ''}`}
            onClick={() => handleCardClick(1)}
            style={{ backgroundImage: `url(${servicesData[0].image})` }}
          >
            <div className="image-overlay"></div>
            <div className="service-title">
              {servicesData[0].title}
            </div>
            
            {activeCard === 1 && (
              <div className="details-overlay">
                <div className="details-content">
                  <ul>
                    {servicesData[0].details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                  <button className="details-button">
                    Подробнее
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <div className="narrow-column">
            <div
              className={`service-card tall ${activeCard === 2 ? 'active' : ''}`}
              onClick={() => handleCardClick(2)}
              style={{ backgroundImage: `url(${servicesData[1].image})` }}
            >
              <div className="image-overlay"></div>
              <div className="service-title">
                {servicesData[1].title}
              </div>
              
              {activeCard === 2 && (
                <div className="details-overlay">
                  <div className="details-content">
                    <ul>
                      {servicesData[1].details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                    <button className="details-button">
                      Подробнее
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <div
              className={`service-card small ${activeCard === 3 ? 'active' : ''}`}
              onClick={() => handleCardClick(3)}
              style={{ backgroundImage: `url(${servicesData[2].image})` }}
            >
              <div className="image-overlay"></div>
              <div className="service-title">
                {servicesData[2].title}
              </div>
              
              {activeCard === 3 && (
                <div className="details-overlay">
                  <div className="details-content">
                    <ul>
                      {servicesData[2].details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                    <button className="details-button">
                      Подробнее
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
     
        <div
          className={`service-card full-width ${activeCard === 4 ? 'active' : ''}`}
          onClick={() => handleCardClick(4)}
          style={{ backgroundImage: `url(${servicesData[3].image})` }}
        >
          <div className="image-overlay"></div>
          <div className="service-title">
            {servicesData[3].title}
          </div>
          
          {activeCard === 4 && (
            <div className="details-overlay">
              <div className="details-content">
                <ul>
                  {servicesData[3].details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
                <button className="details-button">
                  Подробнее
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default E;