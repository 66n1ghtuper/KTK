import React from 'react';
import './S.css';
import ImgGF from './5.png';

const S = () => {
  return (
    <section className="S">
      <div className="S-header">
        <h2 className="S-title">У НАС НЕТ ГРАНИЦ</h2>
        <div className="S-title-shadow">У НАС НЕТ ГРАНИЦ</div>
      </div>
      
      <div className="S-content">
        <p className="S-description SL">
          Мы сотрудничаем с компаниями на всей территории России и выполняем проекты 
          в сфере энергетики, ЖКХ, промышленности и многих других отраслях.
        </p>
      </div>
      
      <div className="S-image-container">
        <img 
          src={ImgGF} 
          alt="Карта России с проектами компании" 
          className="S-image"
        />
      </div>
    </section>
  );
};

export default S;