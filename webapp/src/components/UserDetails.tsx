import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { url } from 'inspector';
import { profile } from 'console';
import { getUserByEmail } from "../api/api";
import { User } from "../shared/shareddtypes"

function UserDetails() {


    const [user,setUser] = useState<User>({name:"Nombre", surname:"surname", email: "email",  password:""});

    type UserEmail = {
        email: string;
    }

    const {email} = useParams<UserEmail>();

    const refreshProducts = async () => {
        //await getProduct(name!).then(val => console.log(val.at(0)?.name))
        //await getUserByEmail(email!).then(val => setUser(val.at(0)!))
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
