import React, { useState } from 'react';
import './It.css';

const It = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const cards = [
    {
      id: 1,
      title: "Сетевая инфраструктура и СКС",
      description: "Аудит, проектирование, монтаж, WiFi-обследование, VLAN/MLAG/LACP, резервирование каналов"
    },
    {
      id: 2,
      title: "Серверы и виртуализация",
      description: "Проектирование серверных, гипервизоры, хранилища (Ceph/RAID), отказоустойчивость, миграции"
    },
    {
      id: 3,
      title: "Информационная безопасность",
      description: "Межсетевые экраны (pfSense/OPNsense), VPN (WireGuard/IPsec), сегментация, журналы/ротация, политика доступа"
    },
    {
      id: 4,
      title: "Наблюдаемость и резервное копирование",
      description: "Мониторинг (Zabbix/Prometheus), бэкапы"
    },
    {
      id: 5,
      title: "Видео/СКУД",
      description: "CCTV, контроль/учёт доступа, интеграция с системами охраны"
    },
    {
      id: 6,
      title: "ПО и интеграции",
      description: "Web-порталы, интеграции с 1С/REST, документооборот, кастомная разработка"
    },
    {
      id: 7,
      title: "DevOps/Автоматизация",
      description: "CI/CD, контейнеризация, среды dev/stage/prod"
    }
  ];

  const cooperationFormats = [
    {
      title: "Проект под ключ",
      content: "Полный цикл работ от проектирования до внедрения и запуска в эксплуатацию"
    },
    {
      title: "Абонентская поддержка (SLA)",
      content: "Постоянное техническое сопровождение с гарантированным уровнем сервиса"
    },
    {
      title: "Разовые работы",
      content: "Выполнение отдельных задач и консультации по конкретным вопросам"
    }
  ];

  return (
    <section className="it-section">
      {/* Header Section */}
      <div className="it-header-background">
        <div className="it-header-content">
          <h1 className="it-title">
            Комплексные IT-решения: от инфраструктуры до ПО
          </h1>
          <div className="it-title-shadow">
            Комплексные IT-решения: от инфраструктуры до ПО
          </div>
          <p style={{
            fontSize: '1.4rem',
            color: 'white',
            marginTop: '20px',
            fontWeight: '300',
            lineHeight: '1.5',
            maxWidth: '800px',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
          }}>
            Проектирование, внедрение и сопровождение корпоративной ИТ-среды
          </p>
          <button className="it-learn-more-btn">
            Узнать больше
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="it-card-grid">
        {cards.map((card) => (
          <div key={card.id} className="it-card">
            <div className="it-card-image">
              <img 
                src={`/api/placeholder/350/250?text=${encodeURIComponent(card.title)}`} 
                alt={card.title}
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/350x250/325480/ffffff?text=${encodeURIComponent(card.title)}`;
                }}
              />
            </div>
            <div className="it-card-content">
              <h3 className="it-card-title">{card.title}</h3>
              <p className="it-card-description">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Cooperation Formats */}
      <div className="it-accordion-section">
        <h2 className="it-accordion-title">Форматы сотрудничества</h2>
        <div className="it-accordion">
          {cooperationFormats.map((format, index) => (
            <div 
              key={index}
              className={`it-accordion-item ${activeAccordion === index ? 'active' : ''}`}
            >
              <div 
                className="it-accordion-header"
                onClick={() => toggleAccordion(index)}
              >
                <h3>{format.title}</h3>
                <span className="it-accordion-icon"> {activeAccordion === index ? '−' : '+'}
</span>
              </div>
              <div className="it-accordion-content">
                <div className="it-accordion-text">
                  <p>{format.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default It;