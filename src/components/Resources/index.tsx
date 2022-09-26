import React from 'react';

import './style.scss';

export const Resources = () => {
  const resources = [
    {
      img: 'https://president.gov.by/build/img/logo.png',
      label: 'Официальный сайт Президента Республики Беларусь',
    },
    {
      img: 'http://www.pukhovichi.gov.by/images/gerb2.png',
      label: 'Пуховичский районный исполнительный комитет',
    },
    {
      img: 'https://ktzszmoik.gov.by/wp-content/uploads/elementor/thumbs/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD_%D0%B1%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F1-removebg-preview-pt0jgu9mdwomw6x7myisj0nvl3l17t2dd9z7459wms.png',
      label: 'Комитет по труду, занятости и социальной защите населения Минского облисполкома',
    },
    {
      img: 'https://pravo.by/local/templates/.default/i/logo-main.png',
      label: 'Национальный правовой интернет-портал Республики Беларусь',
    },
  ];
  return (
    <div className="resources">
      <h1 className="resources__description">Официальные ресурсы</h1>
      <div className="resources__links">
        {resources.map(({ img, label }) => (
          <div className="resources__link" key="label">
            <img src={img} className="resources__img" />
            <span className="resources__label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
