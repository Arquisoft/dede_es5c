import React, { ReactHTMLElement, useEffect, useState } from 'react';
import { ProductoCarrito } from "../shared/shareddtypes";
import { useNavigate } from "react-router-dom";
import { addPedido, addProductoPedido, getCarrito, getPedidosByEmail, getShipping, vaciarCarrito } from "../api/api";
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
    let ret = getStringNoLocale(addressProfile as Thing, VCARD.country_name) as string + " " +
        getStringNoLocale(addressProfile as Thing, VCARD.region) as string + " " +
        getStringNoLocale(addressProfile as Thing, VCARD.locality) as string + " " +
        getStringNoLocale(addressProfile as Thing, VCARD.postal_code) as string + " " +
        getStringNoLocale(addressProfile as Thing, VCARD.street_address) as string;
    return ret
}

async function retirevePODEmail(webID: string): Promise<string> {
    let profileDocumentURI = webID.split("#")[0]
    let myDataSet = await getSolidDataset(profileDocumentURI)
    let profile = getThing(myDataSet, webID)
    let email = getStringNoLocale(profile as Thing, VCARD.note.iri.value) as string;
    return email;
}

async function retirevePODName(webID: string): Promise<string> {
    let profileDocumentURI = webID.split("#")[0]
    let myDataSet = await getSolidDataset(profileDocumentURI)
    let profile = getThing(myDataSet, webID)
    let name = getStringNoLocale(profile as Thing, VCARD.fn.iri.value) as string;
    return name;
}

function PaymentForm() {

    const [products, setProducts] = useState<ProductoCarrito[]>([]);

    const refreshProducts = () => {
        setProducts(getCarrito());
    }

    useEffect(() => {
        refreshProducts();
    }, []);

    const { session } = useSession();
    const { webId } = session.info;

    const navigate = useNavigate();

    const [address, setAddress] = React.useState("");

    const getPODAddress = async () => {
        setAddress(await retrievePODAddress(webId!))
    }
        ;

    const [email, setEmail] = React.useState("");

    const [cardNumber, setCardNumber] = React.useState("");
    const [cardCode, setCardCode] = React.useState("");
    const [cardExpDate, setCardExpDate] = React.useState("");

    const getPODEmail = async () => {
        setEmail(await retirevePODEmail(webId!))
    }
        ;

    const [name, setName] = React.useState("");

    const getPODName = async () => {
        setName(await retirevePODName(webId!))
    }
        ;

    const [gastoEnvio, setGastoEnvio] = React.useState<number>();

    const getGastoEnvio = async () => {
        console.log('ey');
        setGastoEnvio(await getShipping(address));
    }
        ;


    useEffect(() => {
        getPODAddress();
        getPODEmail();
        getPODName();
        console.log(email);
        console.log(address);
        getGastoEnvio();
        console.log("gastos " + gastoEnvio);

    })



    const pagar = async (emailu: string, gasto: number) => {
        if (cardCode.length != 3) {
            alert("El código debe tener 3 digitos");
        }
        else if (!cardCode.match("[0-9]*")) {
            alert("Introduce dígitos");
        }
        else if (!cardExpDate.match("[0-9]{2}/[0-9]{2}" ) || !chechvalido(cardExpDate)) {
            alert("Introduce una fecha valida");
        }
        else if(cardNumber.length != 6) {
            alert("La longitud de la tarjeta debe ser 6 digitos");

        }
        else {
            var precio = 0;
            products.map((product: ProductoCarrito) => {
                precio += product.amount * product.price;
            })
            addPedido(emailu, precio + gasto);
            console.log("ey:" + emailu)
            var pedidos = getPedidosByEmail(emailu);
            var pedido = (await pedidos).pop();
            products.map((product: ProductoCarrito) => {
                addProductoPedido(product.amount, product, pedido!);
            });
            vaciarCarrito();
            navigate("/pedidos")
        }

    }

    const chechvalido = (fecha: string) => {
        let fechas = fecha.split("/");
        console.log("fehcas:" + fechas);
        if(((parseInt(fechas[0]) >= 5 && parseInt(fechas[0]) <= 12) && parseInt(fechas[1]) >= 22) || (parseInt(fechas[0]) <= 12 && parseInt(fechas[0]) > 0) && (parseInt(fechas[1]) >= 23))
            return true;
        return false;
    }

    const validateCVC = (element: React.FocusEvent<HTMLInputElement>) => {
        if (element.target.value.length < 3 || element.target.value.length > 3) {
            alert("El código debe tener 3 digitos");
            element.target.value = "";
        }
        else if (!element.target.value.match("[0-9]*")) {
            alert("Introduce un dígito");
            element.target.value = "";
        }

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
                        return (

                            <tr>
                                <td>

                                    <img src={product?.url.toString()} alt={product?.name.toString()} width="100" height="100" />
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
                                        <h6>Nombre</h6> {/*Esto vendría de los pods*/}
                                        <p>{name.toString()}</p>
                                    </div>
                                    <div>
                                        <h6>Dirección</h6> {/*Esto vendría de los pods*/}
                                        <p>{address.toString()}</p>
                                    </div>
                                    <div>
                                        <h6>Email</h6> {/*Esto vendría de los pods*/}
                                        <p>{email.toString()}</p>
                                    </div>
                                    <div>
                                        <h6>Gastos de envío</h6> {/*Esto vendría de los pods*/}
                                        <p>{gastoEnvio?.toString().substring(0,5)} €</p>
                                    </div>
                                    <hr />

                                    <div>
                                        <h6>Número de tarjeta (6 dígitos)</h6>
                                        <div>
                                            <div>
                                                <div> <label ><input type="text" name="cardNumber" className="form-control" placeholder=" " onChange={(e) => setCardNumber(e.target.value)} /></label> </div>
                                            </div>
                                        </div>

                                        <hr />

                                        <div>
                                            <h6>Fecha en formato MM/YY</h6>
                                            <div>
                                                <div> <label ><input type="text" name="expDate" className="form-control" placeholder=" " onChange={(e) => setCardExpDate(e.target.value)} /></label> </div>
                                            </div>
                                        </div>

                                        <hr />

                                        <div>
                                            <h6>Código de seguridad (3 dígitos)</h6>
                                            <div>
                                                <div> <label ><input type="text" name="cvc" className="form-control" placeholder=" " onChange={(e) => setCardCode(e.target.value)} /></label> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <br />
                            <Button onClick={() => pagar(email, gastoEnvio!)}>Pagar</Button>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>

    );
}


export default PaymentForm;