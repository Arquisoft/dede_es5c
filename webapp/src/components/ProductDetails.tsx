import React, { useEffect, useState } from 'react';
import { getProduct } from '../api/api';
import { Product } from '../shared/shareddtypes';
    
function ProductDetails() {

    const [product, setProduct] = useState(null as Product|null);

    useEffect(function () {
        async function callGetProduct() {
            const product = await getProduct('1');
            setProduct(product);
        }
        callGetProduct();
    }, []);

    return (
        <div className="ProductDetails">
            <div className='ProductImage'>
                <img src = {product?.img} alt={product?.name} />
            </div>

            <div className="Box">
                <div className="Row">
                    <h2>{product?.name}</h2>
                </div>

            <div className='Options'>
                <select name="Sizes">
                    {product?.sizes?.map(s => (
                        <option key={s} value={s}>{s}</option>
                    ))}
                </select>
                
                <div className='BuyButton'>
                <button id='buyButton'>Añadir a la cesta</button>
                </div>
            </div>
            </div>   
            <span id="price">{product?.price} €</span>
            <p>{product?.description}</p> 
        </div>
    );
}


export default ProductDetails;