import React, { useState, useEffect } from 'react';

import './App.css';
import NavBar from './components/NavBar';

import ProductDetails from './components/ProductDetails';
import UserDetails from './components/UserDetails';
import Home from "./components/Home";
import PaymentForm from './components/PaymentForm';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginForm from './components/login/Login';
import Carrito from './components/carrito/Carrito';
import { SessionProvider } from '@inrupt/solid-ui-react';

//import PedidosList from './components/pedidos/PedidosList';
import { Product, ProductoCarrito } from './shared/shareddtypes';
import {getCarrito} from "./api/api";




function App(): JSX.Element {

  const [carrito, setCarrito] = useState<Product[]>([]);




  const refreshCartList = () => {
    setCarrito(getCarrito());
  }

  useEffect(() => {
    refreshCartList();
  }, []);

  

  return (
    
    <>
      <SessionProvider sessionId="solid-login">
        <Router>
        <NavBar/>
          <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/product/:name" element={<ProductDetails />} />
          <Route path="/perfil" element={<UserDetails/>} />
          <Route path="/pay" element={<PaymentForm/>} />
          <Route path='/login' element={<LoginForm/>}/>

          <Route path='/carrito' element={<Carrito />}/>
          <Route path='/pedidos' /*element={<PedidosList/>}*//>

          </Routes>
        </Router>
        </SessionProvider>
    </>
  );
}


export default App;
