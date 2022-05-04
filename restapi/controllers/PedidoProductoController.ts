require("../database")
import { Request, Response } from 'express';
import ProductoPedido from '../models/PedidoProductoModel';

export const findAllOrderProducts = async (req: Request, res: Response): Promise<Response> => {
    const orderProducts = await ProductoPedido.find({});

    return res.json(orderProducts);
};
export const findAllProductsForOrder = async (req: Request, res: Response): Promise<Response> => {
    const orderProducts = await ProductoPedido.find({id_pedido: req.params.id_pedido});

    return res.json(orderProducts);
};

export const addOrderProduct = async (req: Request, res: Response): Promise<Response> => {

    const orderProductReq = req.body

    const nOrderProduct =  new ProductoPedido({
        quantity: orderProductReq.quantity,
        id_product: orderProductReq.id_product,
        id_order: orderProductReq.id_order
    })
    nOrderProduct.save()

    return res.status(200).json({ nOrderProduct });
};