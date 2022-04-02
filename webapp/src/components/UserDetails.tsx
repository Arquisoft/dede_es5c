import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { url } from 'inspector';
import { profile } from 'console';


function UserDetails() {


    var user = { name: "Enol", userName:"Eno_Glez", joinDate: "3-4-2022", surname: "González", birthdate: "20-03-1999", phoneNumber: "1234", email: "Enolglez@email.com", money: 20, profileUrl: "https://files.proyectoclubes.com/sporting/202202/1024x800_ac5505462f01102232310122-chusmonteserin-033.jpg" };

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
                                        <h4 className="CardUserName">{user.name} {user.surname}</h4>
                                        <p>@{user.userName}</p>
                                        <p>Usuario desde {user.joinDate}</p> 
                                        <hr />
                                        
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

                                        <div>
                                            <h6>Nombre de usuario</h6>
                                            <div>
                                                <p className='CardUserUserName'> {user.userName}</p>
                                            </div>
                                        </div>
                                        <hr />

                                        <div>
                                            <h6>Fecha nacimiento</h6>
                                            <div>
                                                <p className='CardUserBirthDate'> {user.birthdate}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div>
                                            <h6>Email</h6>
                                            <div>
                                                <p className='CardUserEmail'> {user.email} </p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div>
                                            <h6>Teléfono</h6>
                                            <div>
                                                <p className='CardUserPhone'> {user.phoneNumber} </p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div>
                                            <h6>Dinero</h6>
                                            <div>
                                                <p className='CardUserMoney'> {user.money} </p>
                                            </div>
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