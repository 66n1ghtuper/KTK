import React, { useState } from 'react';
import './Proekt.css';

const Proekt = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const engineeringSystems = [
    {
      title: "Водоснабжение",
      description: "Проектирование и монтаж систем водоснабжения любой сложности. Обеспечиваем надежную подачу воды для жилых и коммерческих объектов.",
      image: "/images/water-supply.jpg"
    },
    {
      title: "Канализация", 
      description: "Комплексные решения по организации систем канализации. От проектирования до монтажа с соблюдением всех нормативов.",
      image: "/images/sewage.jpg"
    },
    {
      title: "Электроснабжение 0,4-10 кВ",
      description: "Проектирование и монтаж систем электроснабжения различного напряжения. Обеспечиваем безопасное и надежное энергоснабжение.",
      image: "/images/electro.jpg"
    },
    {
      title: "Газоснабжение / Отопление / Вентиляция / Дымоходы",
      description: "Полный комплекс услуг по газоснабжению, отоплению, вентиляции и установке дымоходов. Создаем комфортный микроклимат в помещениях.",
      image: "/img/0.jpg"
    }
  ];

  const accordionItems = [
    {
      title: "Расчёт нагрузок и ТУ/договора техприсоединения",
      content: (
        <div>
          <p>Комплексные услуги по расчету нагрузок и оформлению технических условий:</p>
          <ul>
            <li>ГУП РК «Вода Крыма»</li>
            <li>ГУП РК «Крымэнерго»</li>
            <li>ГУП РК «КрымГазСети»</li>
            <li>ГУП Севастополь «Водоканал»</li>
            <li>ГУП РК «Водоканал Южного Берега Крыма»</li>
          </ul>
        </div>
      )
    },
    {
      title: "Геодезическая съёмка трассы",
      content: (
        <div>
          <p>Профессиональная геодезическая съемка трасс для прокладки инженерных коммуникаций. Обеспечиваем точное проектирование с учетом особенностей рельефа и существующей инфраструктуры.</p>
          <ul>
            <li>ГУП РК «Вода Крыма»</li>
            <li>ГУП Севастополь «Водоканал»</li>
            <li>ГУП РК «Водоканал Южного Берега Крыма»</li>
          </ul>
        </div>
      )
    },
    {
      title: "Проектная документация П и РД",
      content: (
        <div>
          <p>Разработка полного комплекта проектной и рабочей документации для строительства и реконструкции инженерных систем. Обеспечиваем соответствие всем нормативным требованиям.</p>
          <ul>
            <li>Получение ордера на земляные работы</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <section className="proekt-section">
      {/* Header Section */}
      <div className="proekt-header-background">
        <div className="proekt-header-content">
          <h1 className="proekt-title">Проектирование и монтаж инженерных систем</h1>
          <div className="proekt-title-shadow">Проектирование и монтаж инженерных систем</div>
          <button className="proekt-learn-more-btn">Узнать больше</button>
        </div>
      </div>

      {/* Engineering Systems Cards */}
      <div className="proekt-card-grid">
        {engineeringSystems.map((system, index) => (
          <div key={index} className="proekt-card">
            <div className="proekt-card-image">
              <img src={system.image} alt={system.title} />
            </div>
            <div className="proekt-card-content">
              <h3 className="proekt-card-title">{system.title}</h3>
              <p className="proekt-card-description">{system.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Accordion Section */}
      <div className="proekt-accordion-section">
        <h2 className="proekt-accordion-title">Дополнительные услуги</h2>
        <div className="proekt-accordion">
          {accordionItems.map((item, index) => (
            <div 
              key={index} 
              className={`proekt-accordion-item ${activeAccordion === index ? 'active' : ''}`}
            >
              <div 
                className="proekt-accordion-header"
                onClick={() => toggleAccordion(index)}
              >
                <h3>{item.title}</h3>
                <span className="proekt-accordion-icon"> {activeAccordion === index ? '−' : '+'}
</span>
              </div>
              <div className="proekt-accordion-content">
                <div className="proekt-accordion-text">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proekt;