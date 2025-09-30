import React, { useState } from 'react';
import './bb.css';

const BB = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const accordionData = [
    {
      title: "Водоснабжение",
      content: "Внутриплощадочные и внеплощадочные сети (по ТУ с актом ввода), ВНС, РЧВ, ПНС, ВОС."
    },
    {
      title: "Канализация",
      content: "Внутриплощадочные/внеплощадочные (по ТУ с актом), КНС, септики, ЛОС."
    },
    {
      title: "Электроснабжение",
      content: "Внутридомовые/внутриплощадочные/внеплощадочные сети (по ТУ ГУП РК «Крымэнерго» с актом ввода), монтаж КТП10/0,4, строительство линий 10 кВ и 0,4 кВ."
    },
    {
      title: "Сети связи",
      content: "СКС (медь/оптика), серверные и кроссовые, WiFi (планирование/обследование), видеонаблюдение, контроль доступа, домофония, ретрансляция связи внутри зданий, шкафы/стойки, ИБП, ИТинфраструктуры."
    },
    {
      title: "Газоснабжение",
      content: "Внутридомовые/внутриплощадочные сети (по ТУ ГУП РК «КрымГазСети» с актом ввода), монтаж/установка ГРПШ, узлы учёта газа (по ТЗ и проекту)."
    }
  ];

  return (
    <div className="bb-section">
      <div className="bb-header-background">
        <div className="bb-header-content">
          <h1 className="bb-title">Строительно-монтажные работы</h1>
          <div className="bb-title-shadow">Строительно монтажные работы</div>
          <button className="bb-learn-more-btn">Узнать больше</button>
        </div>
      </div>

      <div className="bb-accordion-section">
        <h2 className="bb-accordion-title">Направления работ</h2>
        <div className="bb-accordion">
          {accordionData.map((item, index) => (
            <div 
              key={index} 
              className={`bb-accordion-item ${activeAccordion === index ? 'active' : ''}`}
            >
              <div 
                className="bb-accordion-header" 
                onClick={() => toggleAccordion(index)}
              >
                <h3>{item.title}</h3>
                <span className="bb-accordion-icon">
                  {activeAccordion === index ? '−' : '+'}
                </span>
              </div>
              <div className="bb-accordion-content">
                <div className="bb-accordion-text">
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bb-project-documentation">
        <div className="bb-documentation-header">
          <h2>Документооборот и ввод в эксплуатацию</h2>
        </div>
        <div className="bb-documentation-content">
          <div className="bb-description-block">
            <p>
              Организация документооборота осуществляется в строгом соответствии 
              с требованиями нормативных документов и технических условий. 
              Мы обеспечиваем полный цикл сопровождения проекта от разработки 
              технической документации до получения всех необходимых разрешений 
              и актов ввода в эксплуатацию. На каждом этапе ведется тщательный 
              контроль качества и соблюдение сроков выполнения работ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BB;