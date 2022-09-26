import React from 'react';

import preview from 'assets/logo.png';

import './style.scss';
import { Button } from 'components/Button';

export const Preview = () => {
  return (
    <div className="preview">
      <div className="preview__container">
        <div className="preview__description">
          <h1 className="preview__name">
            Территориальный центр социального обслуживания населения Пуховичского района
          </h1>
          <p className="preview__about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <div className="preview__navigation">
            <Button style="about" text="О нас" />
            <Button style="contact" text="Свяжитесь с нами!" />
          </div>
        </div>
        <img src={preview} className="preview__logo" />
      </div>
    </div>
  );
};
