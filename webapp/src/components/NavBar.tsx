import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';



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
            </Nav>
            <Button href="#login" style={{float: "right"}}>Login</Button>
            </Container>
        </Navbar>
        /*<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Grid item xs={1}>
                <img src={logo} className="App-logo" alt="logo" />
            </Grid>
        <a className="navbar-brand">Dede</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/welcome">Welcome</Link>
            </li>
          </ul>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
        </div>
      </nav>*/
    );
}

export default NavBar;