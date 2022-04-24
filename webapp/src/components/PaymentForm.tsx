import React, { useEffect, useState } from 'react';
import { getProduct } from '../api/api';
import { useParams } from "react-router-dom";
import { Product } from '../shared/shareddtypes';
import { url } from 'inspector';


function PaymentForm() {


    //const [product, setProduct] = useState<Product>({ name: "Nombre", description: "Description", category: "Category", color: "Color", price: 55, talla_stock: [{ talla: "talla" }, { stock: 50 }], url: "" });
    const address = { country: "España", province: "Asturias", city: "Oviedo", street: "Calle" }
    
    /*type ProductoName = {
        name: string;
    }

    const { name } = useParams<ProductoName>();

    const refreshProducts = async () => {
        //await getProduct(name!).then(val => console.log(val.at(0)?.name))
        await getProduct(name!).then(val => setProduct(val.at(0)!))
        //setProduct(await getProduct(name!));
    }

    useEffect(() => {
        refreshProducts();
    }, []);*/

    return (

        <React.Fragment>
            <div className='Container'>
                <div className='MainBody'>
                    <div>
                        <div>
                            <div className='Card'>
                                <div className='Image'>
                                        <div>
                                            <h6>Dirección</h6> {/*Esto vendría de los pods*/}
                                            <div>
                                                <h6>País</h6>
                                                <p className='CardAddressName'> {address.country}</p>
                                                <h6>Provincia</h6>
                                                <p>{address.province}</p>
                                                <h6>Ciudad</h6>
                                                <p>{address.city}</p>
                                                <h6>Calle</h6>
                                                <p>{address.street}</p>
                                            </div>
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
                                    <button>Pagar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </React.Fragment>

    );
}


export default PaymentForm;