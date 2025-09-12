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
      <div className="services-container">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className={`service-card ${activeCard === service.id ? 'active' : ''}`}
            onClick={() => handleCardClick(service.id)}
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="image-overlay"></div>
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
                  <button className="details-button">
                    Подробнее
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default E;