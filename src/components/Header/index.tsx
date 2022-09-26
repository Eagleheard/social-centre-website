import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';
import 'constants/base.scss';

export const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar__menu">
          <li className="navbar__item">
            <NavLink to="/" className="navbar__link  link">
              Главная
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/activity" className="navbar__link  link">
              Деятельность
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/services" className="navbar__link  link">
              Соц. услуги
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/news" className="navbar__link  link">
              Новости
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/faq" className="navbar__link  link">
              Вопрос/Ответ
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/contacts" className="navbar__link  link">
              Контакты
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
