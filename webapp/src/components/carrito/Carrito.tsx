import "./Carrito.css";
import React, { useState, useEffect } from "react";
import { Product, ProductoCarrito } from "../../shared/shareddtypes";
import { getCarrito, getProducts } from "../../api/api";
import { Container, Row, Col, Button } from "react-bootstrap";



function Carrito(): JSX.Element {

    const [products,setProducts] = useState<Product[]>([]);

    const refreshProducts = async () => {
      setProducts(await getCarrito());
    }
  
    useEffect(()=>{
      refreshProducts();
    },[]);

    if (products.length > 0) {
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
            <div className='BuyButton'>
                <form action= {`/pay`}><button id='buyButton'>Comprar</button></form>
            </div>
            
            </Container>
        )
    }
    else {
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
            </table>
       
            <Button>Comprar</Button>
            </Container>
        )
    }
    

}

export default Carrito;