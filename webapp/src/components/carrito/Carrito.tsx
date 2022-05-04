import "./Carrito.css";
import React, { useState, useEffect } from "react";
import { Product, ProductoCarrito } from "../../shared/shareddtypes";
import { getCarrito, removeCarrito } from "../../api/api";
import { Container, Row, Col, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import { useSession, SessionProvider } from "@inrupt/solid-ui-react";


function Carrito(): JSX.Element {

    const { session } = useSession();

    const [isLoggedIn, setIsLoggedIn] = useState(session.info.isLoggedIn);

    console.log(session.info)

    //We have logged in
  session.onLogin(()=>{
    setIsLoggedIn(true)
  })

  //We have logged out
  session.onLogout(()=>{
    setIsLoggedIn(false)
  })

    const [products,setProducts] = useState<ProductoCarrito[]>([]);

    const refreshProducts = () => {
      setProducts(getCarrito());
    }
  
    useEffect(()=>{
      refreshProducts();
    },[]);

    const eliminarProducto = (product: ProductoCarrito) => {
        removeCarrito(product);
        window.location.reload();
    }

    console.log(isLoggedIn)
    if (products.length > 0) {
        return (
            <SessionProvider sessionId="solid-login">
            <Container className="m-5">
            <h2>Carrito de la compra</h2>
            <table>
                <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Categoría</th>
                    <th>Color</th>
                    <th>Talla</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Opciones</th>
                </tr>
    
            
            {products.map((product: ProductoCarrito) => {
                console.log(product.name)
                return(
    
                <tr>
                    <td>
                    
                    <img src = {product?.url.toString()} alt={product?.name.toString()} width="100" height="100" />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.category}</td>
                    <td>{product.color}</td>
                    <td>{product.talla}</td>
                    <td>{product.amount}</td>
                    <td>{product.price * product.amount} €</td>
                    <td><Button className="eliminar" onClick={() => eliminarProducto(product)}>Eliminar</Button></td>
                </tr>
                
                    
                )
                
            })}
            </table>
            {(isLoggedIn) ? 
                <div className="BuyButton">
                <br/>
                <Link className="nav-link" to="/pay">
                    <Button>Comprar</Button>
                </Link>
                </div>
            : <div></div>
            }
            
            
            </Container>
            </SessionProvider>
        )
    }
    else {
        return (
            <Container  className="m-5">
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
       
            
            </Container>
        )
    }
    

}

export default Carrito;