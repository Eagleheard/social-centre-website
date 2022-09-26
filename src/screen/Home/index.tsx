import React from 'react';

import { Departments } from 'components/Departments';
import { Footer, Preview, Resources } from 'components';
import { News } from 'components/News';

import './style.scss';

export const Home = () => {
  return (
    <div className="home">
      <Preview />
      <Departments />
      <News />
      <Resources />
      <Footer />
    </div>
  );
};
