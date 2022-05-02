import React, { useEffect, useState } from 'react';
import { Product, ProductoCarrito } from "../shared/shareddtypes";
import { getCarrito, removeCarrito } from "../api/api";
import { Container, Row, Col, Button } from "react-bootstrap";
import { VCARD } from "@inrupt/lit-generated-vocab-common";
import { useSession } from "@inrupt/solid-ui-react";
import {
    getSolidDataset, getStringNoLocale, getThing, Thing, getUrl
} from "@inrupt/solid-client";

async function retrievePODAddress(webID: string): Promise<string> {
    console.log(webID);
    let myDataSet = await getSolidDataset(webID)
    let profile = getThing(myDataSet, webID)
    let urlAddress = getUrl(profile as Thing, VCARD.hasAddress) as string
    let addressProfile = await getThing(myDataSet, urlAddress)
    let ret= getStringNoLocale(addressProfile as Thing, VCARD.country_name) as string+" "+
    getStringNoLocale(addressProfile as Thing, VCARD.region) as string+" "+
    getStringNoLocale(addressProfile as Thing, VCARD.locality) as string+" "+
    getStringNoLocale(addressProfile as Thing, VCARD.postal_code) as string+" "+
    getStringNoLocale(addressProfile as Thing, VCARD.street_address) as string;
    return ret
  }

function PaymentForm() {

    const [products,setProducts] = useState<ProductoCarrito[]>([]);

    const refreshProducts = () => {
      setProducts(getCarrito());
    }
  
    useEffect(()=>{
      refreshProducts();
    },[]);

    const { session } = useSession();
    const { webId } = session.info;
   

    const [address, setAddress] = React.useState("");

    const getPODAddress = async () => {setAddress(await retrievePODAddress(webId!))
    }
    ;

    useEffect(() => {
        getPODAddress();
        console.log(address);
    })

    const pagar = async () => {

    }

    console.log(webId);

    return (

        <React.Fragment>
            <Container fluid>
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
                </tr>
                
                    
                )
                
            })}
            </table>
            </Container>

            <div className='Container'>
                <div className='MainBody'>
                    <div>
                        <div>
                            <div className='Card'>
                                <div className='Image'>
                                        <div>
                                            <h6>Dirección</h6> {/*Esto vendría de los pods*/}
                                            <p>{address.toString()}</p>
                                        </div>
                                        <hr />

                                        <div>
                                            <h6>Número de tarjeta</h6>
                                            <div>
                                                <div> <label ><input type="text" className="form-control" placeholder=" " /></label> </div>
                                            </div>
                                        </div>

                                        <hr />

                                        <div>
                                            <h6>Fecha en formato MM/YY</h6>
                                            <div>
                                                <div> <label ><input type="text" className="form-control" placeholder=" " /></label> </div>
                                            </div>
                                        </div>

                                        <hr />

                                        <div>
                                            <h6>Código de seguridad</h6>
                                            <div>
                                                <div> <label ><input type="text" className="form-control" placeholder=" " /></label> </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <br/>
                                <Button onClick={() => pagar()}>Pagar</Button>
                            </div>
                        </div>
                    </div>
                </div>

        </React.Fragment>

    );
}


export default PaymentForm;