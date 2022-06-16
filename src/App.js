import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './routerSample/AboutPage';
import ContactPage from './routerSample/ContactPage';
import HomePage from './routerSample/HomePage';

const App = () => {
  return (
    <>
      <h1>Site Header</h1>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/hakkimizda' element={<AboutPage />}></Route>
        <Route path='iletisim' element={<ContactPage />}></Route>
      </Routes>
      <h1>Site Footer</h1>
    </>
  );
};

export default App;
