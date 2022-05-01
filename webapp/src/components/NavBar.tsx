import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import LogoCarrito from "../images/carrito.png";
import { useSession, SessionProvider, LogoutButton } from "@inrupt/solid-ui-react";



function NavBar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const { session } = useSession();

    //We have logged in
  session.onLogin(()=>{
    setIsLoggedIn(true)
  })

  //We have logged out
  session.onLogout(()=>{
    setIsLoggedIn(false)
  })

    return (
        <SessionProvider sessionId="solid-login">
            <Navbar bg="dark" variant="dark">
            <Container>
            <Grid item xs={1}>
                <img src={logo} className="App-logo" alt="logo" />
            </Grid>
            <Navbar.Brand>DeDe</Navbar.Brand>
            <Nav className="me-auto">
                <Link className="nav-link" to="/">Home</Link>

                {(isLoggedIn) ?
                <Nav>
                    <Link className="nav-link" to="/perfil">Perfil</Link>
                    <Link className="nav-link" to="/pedidos">Pedidos</Link>
                </Nav>
                : <Nav/>}

                <Link className="nav-link" to="/carrito">
                    <img src={LogoCarrito} className="logo" alt="carrito" />
                </Link>
            </Nav>
                {(!isLoggedIn) ?
                    <Button href="/login" style={{float: "right"}}>Login</Button> : 
                    <LogoutButton >
                        <Button style={{ marginTop: 20 }} variant="contained" color="primary">
                            Logout
                        </Button>
                    </LogoutButton>}
            
            </Container>
            </Navbar>
        </SessionProvider>
        
    );
}

export default NavBar;