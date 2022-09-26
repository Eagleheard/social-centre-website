import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Docs, Home } from 'screen';
import { Header } from 'components';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="docs" element={<Docs />} />
      </Routes>
    </div>
  );
}

export default App;
