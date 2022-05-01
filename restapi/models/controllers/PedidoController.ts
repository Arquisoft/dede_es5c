//consultas

import ProductModel from "../ProductModel";

require("../../database")


import {Request, Response} from "express";
import api from "../../api";
import PedidoModel from "../PedidoModel";

export const findPedidos = async (req: Request, res: Response): Promise<Response> => {
    const p = await PedidoModel.find({})
    return res.json(p);
};


export const addPedido = async (req: Request, res: Response): Promise<Response> => {

    const body = req.body
    const newPedido =  new PedidoModel({
        estado: body.estado,
        url_pod: body.url_pod,
        precio_final: body.precio_final
    })

    newPedido.save()

    return res.status(200).json({ newPedido });

}

export const findPedidoByWebid = async (req: Request, res: Response): Promise<Response> => {

    const p = await PedidoModel.find({url_pod: req.params.url_pod})
    return res.json(p);

};