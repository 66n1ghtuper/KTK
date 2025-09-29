import React, { useState } from 'react';
import './Ar.css';
import Img1 from './e1.png';

const Ar = () => {
  const works = [
    {
      title: "Получение ГПЗУ",
      image: Img1,
      description: "Градостроительный план земельного участка"
    },
    {
      title: "Разработка ППТ",
      image: Img1,
      description: "Проект планировки территории"
    },
    {
      title: "Проектирование зданий и сооружений",
      image: Img1,
      description: "МКД, апартаменты, офисные здания, склады, ТЦ, линейные объекты и сооружения на них"
    }
  ];

  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const accordionData = [
    {
      title: "Этапы проектирования",
      content: `
        <ol>
          <li><strong>Предпроектная подготовка:</strong> сбор исходных данных, анализ участка, техническое задание</li>
          <li><strong>Эскизное проектирование (ЭП):</strong> концепция, объемно-планировочные решения</li>
          <li><strong>Проектная документация (П):</strong> разработка полного комплекта документации</li>
          <li><strong>Рабочая документация (Р):</strong> детальные чертежи для строительства</li>
          <li><strong>Экспертиза:</strong> прохождение государственной/негосударственной экспертизы</li>
          <li><strong>Авторский надзор:</strong> сопровождение строительства</li>
        </ol>
      `
    },
    {
      title: "Сроки выполнения",
      content: `
        <ul>
          <li><strong>Эскизный проект:</strong> 2-4 недели</li>
          <li><strong>Проектная документация (стадия П):</strong> 4-8 недель</li>
          <li><strong>Рабочая документация (стадия Р):</strong> 6-10 недель</li>
          <li><strong>Экспертиза:</strong> 3-5 недель</li>
          <li><strong>Полный цикл:</strong> 15-27 недель</li>
        </ul>
        <p><strong>Внимание:</strong> сроки могут меняться в зависимости от сложности объекта, площади, и согласований.</p>
      `
    },
    {
      title: "Комплектность документации",
      content: `
        <p><strong>Согласно Постановлению №87, проектная документация включает разделы:</strong></p>
        <ol>
          <li>Пояснительная записка</li>
          <li>Схема планировочной организации земельного участка</li>
          <li>Архитектурные решения</li>
          <li>Конструктивные и объемно-планировочные решения</li>
          <li>Сведения об инженерном оборудовании, сетях:
            <ul>
              <li>Электроснабжение</li>
              <li>Водоснабжение и водоотведение</li>
              <li>Отопление, вентиляция и кондиционирование</li>
              <li>Сети связи</li>
              <li>Газоснабжение (при наличии)</li>
            </ul>
          </li>
          <li>Проект организации строительства</li>
          <li>Проект организации работ по сносу/демонтажу</li>
          <li>Мероприятия по охране окружающей среды</li>
          <li>Мероприятия по обеспечению пожарной безопасности</li>
          <li>Мероприятия по обеспечению доступа инвалидов</li>
          <li>Смета на строительство</li>
          <li>Иная документация в случаях, предусмотренных законодательством</li>
        </ol>
      `
    }
  ];

  return (
    <div className="xcer-section">
      {/* Header с фоном */}
      <div className="xcer-header-background">
        <div className="xcer-header-content">
          <div className="xcer-title">Архитектурно строительное проектирование</div>
          <div className="xcer-title-shadow">Архитектурно строительное проектирование</div>
          <button className="xcer-learn-more-btn">Узнать больше</button>
        </div>
      </div>

      {/* CardGrid */}
      <div className="xcer-card-grid">
        {works.map((work, index) => (
          <div key={index} className="xcer-card">
            <div className="xcer-card-image">
              <img src={work.image} alt={work.title} />
            </div>
            <div className="xcer-card-content">
              <h3 className="xcer-card-title">{work.title}</h3>
              <p className="xcer-card-description">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="xcer-project-documentation">
        <div className="xcer-documentation-header">
          <h2>«Проектная документация стадии П»</h2>
        </div>
        <div className="xcer-documentation-content">
          <div className="xcer-description-block">
            <p>«В полном объёме согласно Постановлению Правительства РФ от 16.02.2008 №87 (ред. от 06.05.2023) с сопровождением получения положительного заключения экспертизы проектной документации.»</p>
          </div>
          <div className="xcer-points-list">
            <ul>
              <li>Сопровождение получения разрешения на строительство/реконструкцию в Минжилищполитики и госстройнадзора РК.</li>
              <li>Авторский надзор.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Аккордеон */}
      <div className="xcer-accordion-section">
        <h2 className="xcer-accordion-title">Детали проектирования</h2>
        <div className="xcer-accordion">
          {accordionData.map((item, index) => (
            <div key={index} className={`xcer-accordion-item ${activeAccordion === index ? 'active' : ''}`}>
              <div 
                className="xcer-accordion-header"
                onClick={() => toggleAccordion(index)}
              >
                <h3>{item.title}</h3>
                <span className="xcer-accordion-icon">
                  {activeAccordion === index ? '−' : '+'}
                </span>
              </div>
              <div className="xcer-accordion-content">
                <div 
                  dangerouslySetInnerHTML={{ __html: item.content }}
                  className="xcer-accordion-text"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ar;