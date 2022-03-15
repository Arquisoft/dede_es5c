import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from "@mui/material";
import Typography from '@mui/material/Typography';
import {Product} from "../components/Product";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";



type HomeProps = {
    products: Product[];
}

function Home(props: HomeProps) {
    return(
        <Container fluid>
            <Row>
        {props.products.map((product: Product) => {
            return(
            <Col xs md lg ="auto">
            <Card sx={{ maxWidth: 280 }}>
                <CardActionArea to={'/producto/' + product.name } component={Link}>
                <CardMedia
                    component="img"
                    height="450"
                    image={product.photo}
                    alt="sudadera"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.price + "€"}
                    </Typography>
                </CardContent>
                </CardActionArea>
                
            </Card>
            </Col>
            )
        })}
        </Row>
        </Container>
    );
}

export default Home;