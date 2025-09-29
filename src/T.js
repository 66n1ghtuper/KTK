import React, { useState } from 'react';
import './T.css';

const T = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section className="cont">
            <div className="contact-section">
      <div className="contact-header">
        <h2 className="contact-title">СВЯЗЬ С НАМИ</h2>
        <div className="contact-title-shadow">СВЯЗЬ С НАМИ</div>
      </div>

      <div className="contact-content">
        <div className="contact-description-wrapper">
          <p className="contact-description">
            Вы можете оставить заявку, заполнив форму обратной связи. 
            Мы свяжемся с Вами как можно скорее.
          </p>
        </div>
      </div>

      <form className="feedback-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Ваше имя *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Введите ваше имя"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Адрес электронной почты *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="example@mail.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Контактный номер телефона</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+7 (XXX) XXX-XX-XX"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Ваше сообщение *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Напишите ваше сообщение..."
          />
        </div>

        <p className="form-description">
          Вы можете оставить заявку, заполнив форму обратной связи. 
          Мы свяжемся с Вами как можно скорее.
        </p>

        <button type="submit" className="submit-btn">
          Отправить
        </button>
      </form>
      </div>
    </section>
  );
};

export default T;