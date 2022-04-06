//consultas

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
        id_metododepago: body.id_metododepago,
        DNI_dest: body.DNI_dest,
        direccion: body.direccion,
        estado: body.estado,
        nombre_dest: body.nombre_dest,
        numero_pedido: body.numero_pedido,
        url_pod: body.url_pod
    })

    newPedido.save()

    return res.status(200).json({ newPedido });

}