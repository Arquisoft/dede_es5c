import React, { useEffect, useState } from 'react';
import { getProduct, addCarrito } from '../api/api';
import { useParams } from "react-router-dom";
import { Product } from '../shared/shareddtypes';
import { Button } from 'react-bootstrap';

function ProductDetails() {

    const helloThere = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (tallap == undefined) {
            alert("Debes seleccionar una talla");
        }
        else {
            alert("Producto añadido correctamente");
            addCarrito(product!, amountp, tallap!)
        }

    }


    const [product,setProduct] = useState<Product>({name:"Nombre", description:"Description", category: "Category", color:"Color", price:55, talla_stock:[{talla:"talla"},{stock:50}], url:"", id: ""});

    type ProductoName = {
        name: string;
    }



    const [addable, setAddable] = React.useState(false)




    const {name} = useParams<ProductoName>();

    console.log(name);

    const refreshProducts = async () => {
        //await getProduct(name!).then(val => console.log(val.at(0)?.name))
        //await getProduct(name!).then(val => setProduct(val.at(0)!))
        console.log("hola");
        setProduct(await getProduct(name!));
    }

    useEffect(()=>{
        refreshProducts();
    },[]);

    const [amountp, setAmountp] = useState<number>(1);

    const refreshAmountp = (event: any) => {
        setAmountp(event.target.value);
    }

    const [tallap, setTallap] = useState<string>();

    const refreshTallap = (ta: string) => {
        console.log(ta)
        setTallap(ta);
    }

    const tallas = ['34', '36', '38', '40', '42']

    return (

        <React.Fragment>
            {console.log(product)}
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

                        <div className="my-5">
                            <label className="mb-2">
                                Cantidad:
                                <input type="number" name='cantidad' placeholder='1' onChange={refreshAmountp}/>
                            </label>
                            <br/>
                            <label>
                                Talla:
                                {tallas.map((t) => {
                                    return(
                                        <Button className="m-1" onClick={() => refreshTallap(t)}>{t}</Button>
                                    )
                                })}
                            </label>
                        </div>

                        <span id="price" className="h4">{product!.price} €</span>
                        <Button className="mx-5" name= "addCarrito" onClick={helloThere}>Añadir al carrito</Button>
                    </div>
                </div>

            </div>

        </React.Fragment>

    );
}


export default ProductDetails;