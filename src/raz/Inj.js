import React, { useState } from 'react';
import './Inj.css';

const Inj = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const services = [
    {
      title: "Инженерно-геодезические изыскания",
      description: "Комплекс работ по созданию геодезической основы, топографической съемке, разбивочным работам и исполнительной съемке объектов строительства.",
      image: "/img/0.jpg"
    },
    {
      title: "Инженерно-геологические изыскания",
      description: "Исследование геологического строения участка, свойств грунтов и гидрогеологических условий для проектирования фундаментов и подземных сооружений.",
      image: "/images/geological.jpg"
    },
    {
      title: "Инженерно-геофизические изыскания",
      description: "Применение геофизических методов для изучения геологического разреза, выявления неоднородностей и оценки физико-механических свойств грунтов.",
      image: "/images/geophysical.jpg"
    },
    {
      title: "Инженерно-экологические изыскания",
      description: "Оценка современного экологического состояния территории и прогноз возможных изменений в результате строительной деятельности.",
      image: "/images/ecological.jpg"
    },
    {
      title: "Инженерно-гидрометеорологические изыскания",
      description: "Изучение гидрологического режима водных объектов и метеорологических условий района строительства.",
      image: "/images/hydrometeorological.jpg"
    },
    {
      title: "Разработка и согласование проектов сокращения зон санитарной защиты, охранных зон",
      description: "Подготовка документации и сопровождение согласований по изменению границ охранных и санитарных зон.",
      image: "/images/sanitary-zones.jpg"
    }
  ];

  const documentationItems = [
    "Технический отчет по инженерным изысканиям",
    "Топографические планы масштаба 1:500 - 1:5000",
    "Геологические разрезы и колонки",
    "Карты современных физико-геологических процессов",
    "Прогноз изменений инженерно-геологических условий",
    "Оценка воздействия на окружающую среду",
    "Заключения по результатам лабораторных исследований",
    "Материалы полевых исследований и испытаний",
    "Акты освидетельствования геологических выработок",
    "Сводные ведомости объемов работ"
  ];

  const accordionItems = [
    {
      title: "Этапы проведения инженерных изысканий",
      content: `
        <ol>
          <li><strong>Подготовительный этап</strong> - сбор и анализ архивных материалов, получение технического задания, разработка программы работ</li>
          <li><strong>Полевой этап</strong> - проведение полевых исследований, съемок, бурения скважин, отбора проб</li>
          <li><strong>Лабораторный этап</strong> - испытание отобранных проб грунтов и воды в аккредитованной лаборатории</li>
          <li><strong>Камеральный этап</strong> - обработка полученных данных, составление отчетной документации</li>
        </ol>
      `
    },
    {
      title: "Сроки выполнения работ",
      content: `
        <p>Сроки выполнения инженерных изысканий зависят от:</p>
        <ul>
          <li>Объема и сложности работ</li>
          <li>Площади исследуемой территории</li>
          <li>Сезонности и погодных условий</li>
          <li>Наличия необходимых согласований</li>
        </ul>
        <p><em>Стандартные сроки: от 14 рабочих дней для простых объектов до 3 месяцев для сложных промышленных комплексов.</em></p>
      `
    },
    {
      title: "Нормативная база",
      content: `
        <p>Работы выполняются в соответствии с требованиями:</p>
        <ul>
          <li>Градостроительный кодекс РФ</li>
          <li>СП 47.13330.2016 "Инженерные изыскания для строительства"</li>
          <li>СП 11-104-97 "Инженерно-геодезические изыскания для строительства"</li>
          <li>СП 446.1325800.2019 "Инженерно-геологические изыскания для строительства"</li>
          <li>Федеральные законы № 384-ФЗ, № 184-ФЗ</li>
        </ul>
      `
    }
  ];

  return (
    <section className="inj-section">
      <div className="inj-header-background">
        <div className="inj-header-content">
          <h1 className="inj-title">Инженерные изыскания для строительства</h1>
          <div className="inj-title-shadow">Инженерные изыскания для строительства</div>
          <button className="inj-learn-more-btn">Узнать больше</button>
        </div>
      </div>

      <div className="inj-card-grid">
        {services.map((service, index) => (
          <div key={index} className="inj-card">
            <div className="inj-card-image">
              <img 
                src={service.image} 
                alt={service.title}
                onError={(e) => {
                  e.target.src = '/images/placeholder.jpg';
                }}
              />
            </div>
            <div className="inj-card-content">
              <h3 className="inj-card-title">{service.title}</h3>
              <p className="inj-card-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="inj-project-documentation">
        <div className="inj-documentation-header">
          <h2>Результаты и отчётность</h2>
        </div>
        <div className="inj-documentation-content">
          <div className="inj-description-block">
            <p>
              По результатам инженерных изысканий составляется технический отчет, 
              содержащий полную информацию об условиях территории строительства и 
              рекомендации для проектирования. Отчет проходит экспертизу и служит 
              основой для принятия проектных решений.
            </p>
          </div>
          <div className="inj-points-list">
            <ul>
              {documentationItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="inj-accordion-section">
        <h2 className="inj-accordion-title">Часто задаваемые вопросы</h2>
        <div className="inj-accordion">
          {accordionItems.map((item, index) => (
            <div 
              key={index}
              className={`inj-accordion-item ${activeAccordion === index ? 'active' : ''}`}
            >
              <div 
                className="inj-accordion-header"
                onClick={() => toggleAccordion(index)}
              >
                <h3>{item.title}</h3>
               <span className="inj-accordion-icon">
  {activeAccordion === index ? '−' : '+'}
</span>
              </div>
              <div className="inj-accordion-content">
                <div 
                  className="inj-accordion-text"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inj;