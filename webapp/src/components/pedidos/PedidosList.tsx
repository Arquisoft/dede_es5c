import React, { useState, useEffect } from "react";
import {Pedido} from "../../../../restapi/models/PedidoModel"
import { Container } from "react-bootstrap";
import { getPedidos } from "../../api/api";

function PedidosList() {

    const [pedidos, setPedidos] = useState<Pedido[]>([]);

    const refreshProducts = async () => {
        setPedidos(await getPedidos());
    }
    
    useEffect(()=>{
        refreshProducts();
    },[]);

     console.log("Pedidos: " + pedidos.length);

    return (
            <Container fluid>
            <h2>Pedidos del usuario</h2>
            <table>
                <tr>
                    <th>DNI</th>
                    <th>Direccion</th>
                    <th>Estado</th>
                    <th>Nombre Destinatario</th>
                    <th>URL</th>
                </tr>
    
            
            {pedidos.map((pedido: Pedido) => {
                return(
    
                <tr>
                    <td>{pedido.DNI_dest}</td>
                    <td>{pedido.direccion}</td>
                    <td>{pedido.estado}</td>
                    <td>{pedido.nombre_dest}</td>
                    <td>{pedido.url_pod}</td>
                </tr>
                
                    
                )
                
            })}
            </table>
            
            
            </Container>
        )

}

export default PedidosList;