import React, { useEffect, useState } from 'react';
import { getProduct, addCarrito } from '../api/api';
import { useParams } from "react-router-dom";
import { Product } from '../shared/shareddtypes';
import { Button } from 'react-bootstrap';

    
function ProductDetails() {


    const [product,setProduct] = useState<Product>({name:"Nombre", description:"Description", category: "Category", color:"Color", price:55, talla_stock:[{talla:"talla"},{stock:50}], url:""});

    type ProductoName = {
        name: string;
    }

    const {name} = useParams<ProductoName>();

    const refreshProducts = async () => {
       //await getProduct(name!).then(val => console.log(val.at(0)?.name))
       //await getProduct(name!).then(val => setProduct(val.at(0)!))
        setProduct(await getProduct(name!));
    }

    useEffect(()=>{
        refreshProducts();
    },[]);

    

    return (
       
        <React.Fragment>
            {console.log(product.name)}
            <div className="m-5">
                <div className="ProductDetails ms-5">
                    <div className="ProductImage">
                        {
                           <img src = {product?.url.toString()} alt={product?.name.toString()} />
                        }
                    </div>

                    <div className="info">
                        <div className="Box">
                            <div className="Row">
                                <p className="display-2">{product.name}</p>
                            </div>
                        </div>
                        <p className="h5">{product?.description}</p>
                        <span id="price" className="h4">{product.price} €</span>
                        <Button className="mx-5" onClick={() => addCarrito(product)}>Añadir al carrito</Button>
                    </div>
                </div>

            </div>

        </React.Fragment>
        
    );
}


export default ProductDetails;