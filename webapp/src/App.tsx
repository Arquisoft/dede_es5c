import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import EmailForm from './components/EmailForm';
import Welcome from './components/Welcome';
import UserList from './components/UserList';
import  {getUsers} from './api/api';
import {User} from './shared/shareddtypes';
import './App.css';
import NavBar from './components/NavBar';
import Home from "./components/Home";
import { Product } from './components/Product';

function App(): JSX.Element {

  const [users,setUsers] = useState<User[]>([]);

  const Producto = () => {
    const[product1, setProduct1] = useState<Product>({id:"1", photo:"https://www.gap.es/cdnassets/images/Shootings/211217/490386028_s.jpg", name:"Nombre1", category:"Catergory1", description:"Description1", size:44, price:25.65});
    const[product2, setProduct2] = useState<Product>({id:"2", photo:"https://m.media-amazon.com/images/I/51yNfWlevlL._AC_UX385_.jpg", name:"Nombre2", category:"Catergory2", description:"Description2", size:45, price:26.65});
    const[product3, setProduct3] = useState<Product>({id:"2", photo:"https://m.media-amazon.com/images/I/51yNfWlevlL._AC_UX385_.jpg", name:"Nombre2", category:"Catergory2", description:"Description2", size:45, price:26.65});
    const[product4, setProduct4] = useState<Product>({id:"2", photo:"https://m.media-amazon.com/images/I/51yNfWlevlL._AC_UX385_.jpg", name:"Nombre2", category:"Catergory2", description:"Description2", size:45, price:26.65});
    const[product5, setProduct5] = useState<Product>({id:"2", photo:"https://m.media-amazon.com/images/I/51yNfWlevlL._AC_UX385_.jpg", name:"Nombre2", category:"Catergory2", description:"Description2", size:45, price:26.65});
    const[product6, setProduct6] = useState<Product>({id:"2", photo:"https://m.media-amazon.com/images/I/51yNfWlevlL._AC_UX385_.jpg", name:"Nombre2", category:"Catergory2", description:"Description2", size:45, price:26.65});
    const[product7, setProduct7] = useState<Product>({id:"2", photo:"https://m.media-amazon.com/images/I/51yNfWlevlL._AC_UX385_.jpg", name:"Nombre2", category:"Catergory2", description:"Description2", size:45, price:26.65});
    const[product8, setProduct8] = useState<Product>({id:"2", photo:"https://m.media-amazon.com/images/I/51yNfWlevlL._AC_UX385_.jpg", name:"Nombre2", category:"Catergory2", description:"Description2", size:45, price:26.65});
    const products = [product1, product2, product3, product4, product5, product6, product7, product8];
    return products;
}

  const refreshUserList = async () => {
    setUsers(await getUsers());
  }

  useEffect(()=>{
    refreshUserList();
  },[]);


  return (
    <>
      <NavBar/>
      <Container>
        <Home products={Producto()}></Home>
      </Container>
    </>
  );
}

export default App;
