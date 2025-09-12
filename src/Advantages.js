import React from 'react';
import './Advantages.css';

import IconTeam from './n1.png';
import IconExperience from './n2.png';
import IconReputation from './n3.png';

const Advantages = () => {
  const advantagesData = [
    {
      id: 1,
      title: "Надёжная команда профессионалов",
      description: "Постоянно повышаем свою квалификацию, совершенствуем знания и проходим разностороннее обучение",
      icon: IconTeam
    },
    {
      id: 2,
      title: "Богатый опыт и компетентность",
      description: "Своевременная и качественная реализация проектов, Соблюдение всех стандартов современных требований",
      icon: IconExperience
    },
    {
      id: 3,
      title: "Репутация надежного партнера",
      description: "Конечный результат и профессионализм - высший приоритет компании",
      icon: IconReputation
    }
  ];

  return (
    <section className="advantages">
      <div className="advantages-header">
        <h1 className="advantages-title">ПРЕИМУЩЕСТВА</h1>
        <h1 className="advantages-title-shadow">ПРЕИМУЩЕСТВА</h1>
      </div>
      
      <div className="advantages-list">
        {advantagesData.map((advantage) => (
          <div key={advantage.id} className="advantage-item">
            <div className="advantage-icon">
              <img 
                src={advantage.icon} 
                alt={advantage.title}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="advantage-content">
              <h3 className="advantage-item-title">{advantage.title}</h3>
              <p className="advantage-description">{advantage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;