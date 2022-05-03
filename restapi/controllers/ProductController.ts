//consultas

import UserModel from "../models/UserModel";

require("../database")


import {Request, Response} from "express";
import api from "../api";
import ProductModel from "../models/ProductModel";

export const findProducts = async (req: Request, res: Response): Promise<Response> => {
    const p = await ProductModel.find({})
    return res.json(p);

};


export const addProducto = async (req: Request, res: Response): Promise<Response> => {


    const productReq = req.body

    const nProduct =  new ProductModel({
        name: productReq.name,
        description: productReq.description,
        price: productReq.price,
        category: productReq.category,
        color: productReq.color,
        talla_stock: productReq.talla_stock,
        url: productReq.url,
    })

    nProduct.save()

    return res.status(200).json({ nProduct });
};



export const findProductByName = async (req: Request, res: Response): Promise<Response> => {
    
    const p = await ProductModel.findOne({name: req.params.name})
    console.log("ooooooo" + p)
    return res.json(p);

};