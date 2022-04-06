import React, { useEffect, useState } from 'react';
import { getProduct } from '../api/api';
import { useParams } from "react-router-dom";
import { Product } from '../../../restapi/models/ProductModel';
import { Button } from 'react-bootstrap';

    
function ProductDetails() {


    const [product,setProduct] = useState<Product>({name:"Nombre", description:"Description", category: "Category", color:"Color", price:55, talla_stock:[{talla:"talla"},{stock:50}], url:""});

    type ProductoName = {
        name: string;
    }

    const {name} = useParams<ProductoName>();

    const refreshProducts = async () => {
        //await getProduct(name!).then(val => console.log(val.at(0)?.name))
        await getProduct(name!).then(val => setProduct(val.at(0)!))
        //setProduct(await getProduct(name!));
    }

    useEffect(()=>{
        refreshProducts();
    },[]);

    return (
       
        <React.Fragment>
            {console.log(product.name)}
            <div className="ProductDetails">
            <div className='ProductImage'>
                {
                   <img src = {product?.url.toString()} alt={product?.name.toString()} />
                }
            </div>

            <div className="Box">
                <div className="Row">
                    <h2>{product.name}</h2>
                </div>

            <div className='Options'>
                
                <div className='BuyButton'>
                <button id='buyButton'>Añadir a la cesta</button>
                </div>
            </div>
            </div>   
            <span id="price">{product.price} €</span>
            <p>{product?.description}</p> 
        </div>
        <Button>Añadir al carrito</Button>
        </React.Fragment>
        
    );
}

/*
            <select name="Sizes">
                    {product?.sizes?.map(s => (
                        <option key={s} value={s}>{s}</option>
                    ))}
                </select>
                <select name="Colors" onChange={ev => setCurrentColor(ev.target.value)}>
                    {product?.colors?.map(s => (
                        <option key={s} value={s} selected={currentColor == s}>{s}</option>
                    ))}
                </select>
*/

export default ProductDetails;