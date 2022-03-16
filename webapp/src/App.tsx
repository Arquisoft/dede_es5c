import React, { useState, useEffect } from 'react';

import './App.css';
import NavBar from './components/NavBar';

import ProductDetails from './components/ProductDetails';
import ProductsList from './components/ProductsList';

import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App(): JSX.Element {



  return (
    
    <>
      
        <Router>
        <NavBar/>
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/product/:name" element={<ProductDetails/>} />
          </Routes>
        </Router>
    </>
  );
}


export default App;
