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
import ProductDetails from './components/ProductDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsList from './components/ProductsList';

/**function App(): JSX.Element {

  const [users,setUsers] = useState<User[]>([]);

  const refreshUserList = async () => {
    setUsers(await getUsers());
  }

  useEffect(()=>{
    refreshUserList();
  },[]);


  return (
    <>
      <NavBar/>
      <Container maxWidth="sm">
        <Welcome message="ASW students"/>
        <Box component="div" sx={{ py: 2}}>This is a basic example of a React application using Typescript. You can add your email to the list filling the form below.</Box>
        <EmailForm OnUserListChange={refreshUserList}/>        
        <UserList users={users}/>
        <Link href="https://github.com/arquisoft/dede_es5c">Source code</Link>
      </Container>
    </>
  );
}**/

function App(): JSX.Element {

  const [users,setUsers] = useState<User[]>([]);

  const refreshUserList = async () => {
    setUsers(await getUsers());
  }

  useEffect(()=>{
    refreshUserList();
  },[]);


  return (
    <>
      <NavBar/>
      <Container maxWidth="sm">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductsList/>}/>
            <Route path="/product-details" element={<ProductDetails/>}/>
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}


export default App;
