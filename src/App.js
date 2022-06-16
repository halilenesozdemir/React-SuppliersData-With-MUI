import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './routerSample/AboutPage';
import ContactPage from './routerSample/ContactPage';
import HomePage from './routerSample/HomePage';
import NoMatch from './routerSample/NoMatch';
import ProductList from './routerSample/ProductList';
import { Link } from 'react-router-dom';
import ProductDetails from './routerSample/ProductDetails';
import DataDisplay from './materialSample/DataDisplay';
import ProductDataGrid from './materialSample/ProductDataGrid';
import AutoCompleteSample from './materialSample/AutoCompleteSample';

const App = () => {
  return (
    <>
      <h1>Site Header</h1>

      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/hakkimizda'>About</Link>
        </li>
        <li>
          <Link to='/iletisim'>Contact</Link>
        </li>
        <li>
          <Link to='/urunler'>Products</Link>
        </li>
        <li>
          <Link to='/datadisplay'>Data Display</Link>
        </li>
        <li>
          <Link to='/productdatagrid'>Product Data Grid</Link>
        </li>
        <li>
          <Link to='/autocompletesample'>AutoComplete Sample</Link>
        </li>
      </ul>

      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/hakkimizda' element={<AboutPage />}></Route>
        <Route path='/iletisim' element={<ContactPage />}></Route>
        <Route path='/urunler' element={<ProductList />}></Route>
        <Route path='/urunler/:id' element={<ProductDetails />}></Route>
        <Route path='/datadisplay' element={<DataDisplay />}></Route>
        <Route path='*' element={<NoMatch />}></Route>
        <Route path='/productdatagrid' element={<ProductDataGrid />}></Route>
        <Route path='/autocompletesample' element={<AutoCompleteSample />}></Route>
      </Routes>
      <h1>Site Footer</h1>
    </>
  );
};

export default App;
