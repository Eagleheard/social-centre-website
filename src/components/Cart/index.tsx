import React from 'react';

import './style.scss';

interface ICart {
  name: string;
  image?: string;
  style?: string;
}

export const Cart: React.FC<ICart> = ({ name, image, style }) => {
  return (
    <div className={`cart cart__${style}`}>
      <div className="cart__preview">
        <img className="cart__img" src={image}></img>
        <h1 className="cart__name">{name}</h1>
      </div>
    </div>
  );
};
