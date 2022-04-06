import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { url } from 'inspector';
import { profile } from 'console';
import { User } from '../../../restapi/models/UserModel';
function UserDetails() {


    //var user = { name: "Enol", surname: "González", email: "Enolglez@email.com", profileUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA3W3oppN7sdVCsUWwwnPIn9pX6E6G2UW70w&usqp=CAU" };
    const [user,setUser] = useState<User>({name:"Nombre", description:"Description", category: "Category", color:"Color", price:55, talla_stock:[{talla:"talla"},{stock:50}], url:""});

    type ProductoName = {
        name: string;
    }

    const {name} = useParams<ProductoName>();

    const refreshProducts = async () => {
        //await getProduct(name!).then(val => console.log(val.at(0)?.name))
        //await getProduct(name!).then(val => setProduct(val.at(0)!))
        //setProduct(await getProduct(name!));
    }

    useEffect(()=>{
        refreshProducts();
    },[]);

    return (

        <React.Fragment>
            <div className='Container'>
                <div className='MainBody'>
                    <div>
                        <div>
                            <div className='Card'>
                                <div className='ProfileImage'>
                                    <img className='Avatar' src={user.profileUrl} alt="Users profile picture"></img>
                                    <div className='CardBody'>
                                        <div>
                                            <h6>Nombre</h6>
                                            <div>
                                                <p className='CardUserName'> {user.name}</p>
                                            </div>
                                        </div>
                                        <hr />

                                        <div>
                                            <h6>Apellidos</h6>
                                            <div>
                                                <p className='CardUserSurname'> {user.surname}</p>
                                            </div>
                                        </div>
                                        <hr />
                                            <h6>Email</h6>
                                            <div>
                                                <p className='CardUserEmail'> {user.email} </p>
                                            </div>
                                        </div>
                                    <div>
                                        <div>
                                        <button className="Boton">Editar perfil</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>

    );
}

export default UserDetails;