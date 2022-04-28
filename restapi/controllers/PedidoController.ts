//consultas

import ProductModel from "../models/ProductModel";
import { Request, Response } from "express";
require("../database")
import { Request, Response } from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();


import {Request, Response} from "express";
import api from "../api";
import PedidoModel from "../models/PedidoModel";
import * as url from "url";
const TOKEN:string = "pk.eyJ1IjoidW8yNzc0NDAiLCJhIjoiY2wyaXBhaGZkMDc4YjNqcW5qenY5MjFvOCJ9.0oTGSdJTHf7bwxxiK9jCKg";

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

async function calcularCoordenadas(direccion: { zipcode: any; country: any; number: any; city: any; street: any }) {
    var uri = new URL('https://api.mapbox.com/geocoding/v5/mapbox.places/' + direccion.number + '%20' + direccion.street + '%20' + direccion.city + '%20' + direccion.country + '%20' + direccion.zipcode + '.json?access_token=' + TOKEN);
    return await fetch(uri.toString())
        .then(function (response) {
            return response.json();
        })
        .then(function (coordenadas) {
            return {
                "long": coordenadas.features[0].center[0],
                "lat": coordenadas.features[0].center[1],
            }
        });
}

export const calculatePrice = async (req: Request, res: Response): Promise<Response> => {
    let direccion = {
        "zipcode": req.body.zipcode,
        "city": req.body.city,
        "street": req.body.street,
        "country": req.body.country,
        "number": req.body.number
    }

    var coordenadasCliente = await calcularCoordenadas (direccion);
    var distancia = await calcularDistancia(coordenadasCliente);

}