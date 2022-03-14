//consultas

require("../../database")


import {Request, Response} from "express";
import api from "../../api";
import ProductModel from "../ProductModel";

export const findProducts = async (req: Request, res: Response): Promise<Response> => {
    const p = await ProductModel.find({})
    return res.json(p);

};


export const findProductByName = async (req: Request, res: Response): Promise<Response> => {

    const p = await ProductModel.find({name: req.params.name})
    return res.json(p);

}