import React from 'react';
    
function ProductDetails() {

    return (
        <div className="ProductDetails">
            <div className='ProductImage'>
                <img src = "https://www.gap.es/cdnassets/images/Shootings/211217/490386028_s.jpg" alt="sudadera gap" />
            </div>

            <div className="Box">
                <div className="Row">
                    <h2>Sudadera Gap amarilla</h2>
                </div>

            <div className='Options'>
                <select name="Sizes">
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
                
                <div className='BuyButton'>
                <button id='buyButton'>Añadir a la cesta</button>
                </div>
            </div>
            </div>   
            <span id="price">39,99€</span>
            <p>Sudadera de color amarillo de la marca Gap</p> 
        </div>
    );
}


export default ProductDetails;