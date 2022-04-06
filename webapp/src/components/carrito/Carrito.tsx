import "./Carrito.css";
import React, { useState, useEffect } from "react";
import { Product } from "../../../../restapi/models/ProductModel";
import { getProducts } from "../../api/api";
import { Container, Row, Col, Button } from "react-bootstrap";


function Carrito() {
    const [products, setProducts] = useState<Product[]>([]);

    const refreshProducts = async () => {
        setProducts(await getProducts());
      }
    
      useEffect(()=>{
        refreshProducts();
      },[]);

    return (
        <Container fluid>
        <h2>Carrito de la compra</h2>
        <table>
            <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Categoría</th>
                <th>Color</th>
                <th>Precio</th>
            </tr>

        
        {products.map((product: Product) => {
            return(

            <tr>
                <td>
                <img src = {product?.url.toString()} alt={product?.name.toString()} width="100" height="100" />
                </td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>{product.color}</td>
                <td>{product.price} €</td>
            </tr>
            
                
            )
            
        })}
        </table>
   
        <Button>Comprar</Button>
        </Container>
    )

}

export default Carrito;