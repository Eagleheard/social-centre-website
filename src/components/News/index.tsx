import { Cart } from 'components/Cart';
import React from 'react';

import './style.scss';

export const News = () => {
  const news = [
    {
      date: '10 Сен.',
      news: "В рамках акции 'Старость не для насилия'",
    },
    {
      date: '11 Сен.',
      news: 'Форум по скандинавской ходьбе «Едины вместе»',
    },
    {
      date: '12 Сен.',
      news: '«Мы вместе – мы едины»',
    },
    {
      date: '13 Сен.',
      news: '«Мы вместе – мы едины»',
    },
    {
      date: '14 Сен.',
      news: '«Мы вместе – мы едины»',
    },
  ];
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__news">
          <h1>Новости</h1>
          {news.map(({ date, news }) => (
            <div key={date} className="about__news-info">
              <h2 className="about__date">{date}</h2> <p className="about__news-label">{news}</p>
            </div>
          ))}
        </div>
        <div className="about__tips">
          <Cart name="Единый день информирования" style="news" />
          <Cart name="Профилактика насилия" style="news" />
          <Cart name="Профилактика насилия" style="news" />
          <Cart name="Профилактика насилия" style="news" />
          <Cart name="Профилактика насилия" style="news" />
        </div>
      </div>
    </div>
  );
};
