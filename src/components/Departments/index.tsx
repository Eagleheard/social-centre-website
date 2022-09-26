import React from 'react';

import { Cart } from 'components/Cart';

import plan from '../../assets/plan.png';
import invalid from '../../assets/invalid.png';
import help from '../../assets/help.png';
import riabilitation from '../../assets/riabilitation.png';

import './style.scss';

export const Departments = () => {
  const cartInfo = [
    {
      name: 'Отделение первичного приёма, анализа, информирования и прогнозирования',
      image: plan,
      description: '111',
    },
    {
      name: 'Отделение социальной помощи на дому',
      image: help,
      description: '111',
    },
    {
      name: 'Отделение обеспечения дневного пребывания для инвалидов и граждан пожилого возраста',
      image: invalid,
      description: '111',
    },
    {
      name: 'Отделение социальной адаптации и реабилитации',
      image: riabilitation,
      description: '111',
    },
  ];
  return (
    <div className="departments">
      <h1 className="departments__label">Наши отделения</h1>
      <div className="departments__carts">
        {cartInfo.map(({ name, image, description }) => (
          <Cart key={name} name={name} image={image} />
        ))}
      </div>
    </div>
  );
};
