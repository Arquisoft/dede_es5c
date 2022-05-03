import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from "@mui/material";
import Typography from '@mui/material/Typography';
import { Product } from "../shared/shareddtypes";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { filterProducts, getProducts } from "../api/api";
import { ProductoCarrito } from "../shared/shareddtypes"


function Home() {
    const [products,setProducts] = useState<Product[]>([]);
    const [filtro, setFiltro] = useState<string>('todos');

    const refreshProducts = async (filtro: string) => {
      if (filtro == 'todos') {
        setProducts(await getProducts());

      }
      else {
        setProducts(await filterProducts(filtro));
    }
    }
  
    useEffect(()=>{
      refreshProducts(filtro);
    },[filtro]);

    return(
        
        <Container fluid>
            <Button name="Sneakers" onClick={() => setFiltro('Sneakers')}>Filtrar por zapatillas</Button>
            <Button name="Jeans" onClick={() => setFiltro('Jeans')}>Filtrar por vaqueros</Button>
            <Button name="Falda" onClick={() => setFiltro('Falda')}>Filtrar por faldas</Button>
            <Button name="Chaqueta" onClick={() => setFiltro('Chaqueta')}>Filtrar por chaquetas</Button>
            <Button name="Sudadera" onClick={() => setFiltro('Sudadera')}>Filtrar por sudaderas</Button>
            <Button name="Todos" onClick={() => setFiltro('todos')}>Deshacer filtro</Button>
            <Row>
        {products.map((product: Product) => {
            return(
            <Col xs md lg ="auto">
            <Card sx={{ maxWidth: 280 }}>
                <CardActionArea to={`/product/${product.name}`} component={Link}>
                <CardMedia
                    component="img"
                    height="450"
                    image={product.url.toString()}
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

/*

 */

export default Home;