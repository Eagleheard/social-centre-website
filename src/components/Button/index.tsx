import React from 'react';

import './style.scss';

interface IButton {
  text: string;
  style?: string;
}

export const Button: React.FC<IButton> = ({ text, style }) => {
  return <button className={`button button__${style}`}>{text}</button>;
};
