import {Request, Response} from "express";
import UserModel from "../UserModel";

require("../../database")



export const findUsers = async (req: Request, res: Response): Promise<Response> => {

        const users = await UserModel.find({});
        return res.json(users);

};

export const findUsersById = async (req: Request, res: Response): Promise<Response> =>  {
    const p = await UserModel.find({_id: req.params.id})
    return res.json(p);

};

export const findUsersByEmail = async (req: Request, res: Response): Promise<Response> => {
    const email = req.params.email;
    const userFound = await UserModel.findOne({email: email});
    return res.json(userFound)

};

export const createUser = async (req: Request, res: Response): Promise<Response> => {

        console.log("POST");
        console.log(req.body);

        const userReq = req.body

        const nUser =  new UserModel({
            name: userReq.name,
            surname: userReq.surname,
            email: userReq.email,
            password: userReq.password
        })

        nUser.save()

        return res.status(200).json({ nUser });
};



export const loginUser = async (req: Request, res: Response) => {
    var bcrypt = require('bcrypt');
    var emailReq = req.body.email;
    var password = req.body.password;

        const userFound = await UserModel.findOne({email: emailReq});
        if(userFound){
            if(await bcrypt.compare(password,userFound.password)){
                res.status(201).send("User logged");
            }else{
                res.send("Password Incorrect");
            }
        }else{
            res.send("User not exist");
        }



};

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        await UserModel.findByIdAndDelete(id);
        return res.send("Usuario borrado con éxito")
    } catch (error) {
        return res.status(404).json({message: 'Error en borrado'});
    }
};

