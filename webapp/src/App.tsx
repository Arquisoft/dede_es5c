import React, { useState, useEffect } from 'react';

import './App.css';
import NavBar from './components/NavBar';

import ProductDetails from './components/ProductDetails';
import ProductsList from './components/ProductsList';

import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginForm from './components/login/Login';
import Carrito from './components/carrito/Carrito';



function App(): JSX.Element {



  return (
    
    <>
      
        <Router>
        <NavBar/>
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/product/:name" element={<ProductDetails/>} />
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
          </Routes>
        </Router>
    </>
  );
}


export default App;
