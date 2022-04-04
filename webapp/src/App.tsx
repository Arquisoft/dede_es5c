import React, { useState, useEffect } from 'react';

import './App.css';
import NavBar from './components/NavBar';

import ProductDetails from './components/ProductDetails';
import ProductsList from './components/ProductsList';
import UserDetails from './components/UserDetails';
import Home from "./components/Home";
import PaymentForm from './components/PaymentForm';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App(): JSX.Element {



  return (
    
    <>
      
        <Router>
        <NavBar/>
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/product/:name" element={<ProductDetails/>} />
          <Route path="/perfil" element={<UserDetails/>} />
          <Route path="/pay/:name" element={<PaymentForm/>} />
          </Routes>
        </Router>
    </>
  );
}


export default App;
