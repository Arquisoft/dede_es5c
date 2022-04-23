import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import LogoCarrito from "../images/carrito.png";



function NavBar() {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Grid item xs={1}>
                <img src={logo} className="App-logo" alt="logo" />
            </Grid>
            <Navbar.Brand>DeDe</Navbar.Brand>
            <Nav className="me-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/welcome">Welcome</Link>
                <Link className="nav-link" to="/perfil">Perfil</Link>
                <Link className="nav-link" to="/pedidos">Pedidos</Link>
                <Link className="nav-link" to="/carrito">
                    <img src={LogoCarrito} className="logo" alt="carrito" />
                </Link>
            </Nav>
            <Button href="/login" style={{float: "right"}}>Login</Button>
            </Container>
        </Navbar>
        
    );
}

export default NavBar;