import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import logo from '../logo.svg';



function NavBar() {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Grid item xs={1}>
                <img src={logo} className="App-logo" alt="logo" />
            </Grid>
            <Navbar.Brand href="#home">DeDe</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#tienda">Tienda</Nav.Link>
                <Nav.Link href="#perfil">Perfil</Nav.Link>
            </Nav>
            <Button href="#login" style={{float: "right"}}>Login</Button>
            </Container>
        </Navbar>
    );
}

export default NavBar;