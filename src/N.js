import React, { useState, useEffect } from 'react';
import logo from './ktk_logo.png';
import './N.css';

const N = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  

  const carouselData = [
    {
      title: "АРХИТЕКТУРНО-СТРОИТЕЛЬНОЕ ПРОЕКТИРОВАНИЕ",
      items: [
        "Разработка ППТ",
        "Получение ГПЗУ",
        "Проектирование зданий и сооружений",
        "Сопровождение получения разрешения",
        "Авторский надзор"
      ]
    },
    {
      title: "ИНЖЕНЕРНЫЕ ИЗЫСКАНИЯ В СТРОИТЕЛЬСТВЕ",
      items: [
        "Инженерно-геодезические изыскания",
        "Инженерно-геологические изыскания",
        "Инженерно-геофизические изыскания",
        "Инженерно-экологические изыскания",
        "Инженерно-гидрометеорологические изыскания",
        "Разработка и согласование проектов сокращения зон санитарной защиты, охранных зон"
      ]
    },
    {
      title: "СТРОИТЕЛЬНО-МОНТАЖНЫЕ РАБОТЫ",
      items: [
        "Водоснабжение",
        "Канализация",
        "Электроснабжение 0.4 и 10kV",
        "Газоснабжение, отопление, вентиляция, дымоходные системы",
        "Слаботочные системы и сети, КИПиА"
      ]
    },
    {
      title: "ПРОЕКТИРОВАНИЕ И МОНТАЖ ИНЖЕНЕРНЫХ СИСТЕМ",
      items: [
        "Водоснабжение",
        "Канализация",
        "Электроснабжение 0.4 и 10kV",
        "Газоснабжение, отопление, вентиляция, дымоходные системы",
        "Слаботочные системы и сети, КИПиА"
      ]
    }
  ];

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [carouselData.length]);

  return (
    <div className="engineering-center">
 
      <header className="headerw">
        <div className="logo-container">
          <img src={logo} alt="КТК Логотип" className="logo" />
        </div>
        <h1 className="main-title">ИНЖЕНЕРНО-ПРОЕКТНЫЙ ЦЕНТР</h1>
        <div className="divider-line"></div>
        <div className="subtitle-container">
          <h2 className="subtitle">КРЫМТЕХКОМ</h2>
          <p className="description">№1 в Республике Крым</p>
        </div>
      </header>


      <div className="carousel-container">
        <div className="carousel-slides">
          {carouselData.map((slide, index) => (
            <div 
              key={index}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <h3 className="slide-title">{slide.title}</h3>
              <ul className="slide-list">
                {slide.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="carousel-indicators">
          {carouselData.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default N;