//consultas

import UserModel from "../UserModel";

require("../../database")


import {Request, Response} from "express";
import api from "../../api";
import ProductModel from "../ProductModel";

export const findProducts = async (req: Request, res: Response): Promise<Response> => {
    const p = await ProductModel.find({})
    return res.json(p);

};


export const addProducto = async (req: Request, res: Response): Promise<Response> => {

    console.log("POST");
    console.log(req.body);

    const productReq = req.body

    const nProduct =  new ProductModel({
        name: productReq.name,
        description: productReq.description,
        price: productReq.price,
        category: productReq.category,
        color: productReq.color,
        talla_stock: productReq.talla_stock,
        url: productReq.url
    })

    nProduct.save()

    return res.status(200).json({ nProduct });
};



export const findProductByName = async (req: Request, res: Response): Promise<Response> => {
    
    const p = await ProductModel.find({name: req.params.name})
    return res.json(p);

};