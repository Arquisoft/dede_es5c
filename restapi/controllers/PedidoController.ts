//consultas
require("../database")
import ProductModel from "../models/ProductModel";
import DistributionCenterModel from "../models/DistributionCenterModel";
import { Request, Response } from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import api from "../api";
import PedidoModel from "../models/PedidoModel";
const TOKEN:string = "pk.eyJ1IjoidW8yNzc0NDAiLCJhIjoiY2wyaXBhaGZkMDc4YjNqcW5qenY5MjFvOCJ9.0oTGSdJTHf7bwxxiK9jCKg";
const PRECIO_KILOMETRO:number = 0.030;
dotenv.config();

export const findPedidos = async (req: Request, res: Response): Promise<Response> => {
    const p = await PedidoModel.find({})
    return res.json(p);
};


export const addPedido = async (req: Request, res: Response): Promise<Response> => {

    const body = req.body
    const newPedido =  new PedidoModel({
        estado: body.estado,
        url_pod: body.url_pod,
        precio_final: body.precio_final,
        email_dest: body.email_dest
    })

    newPedido.save()

    return res.status(200).json({ newPedido });

}

export const findPedidoByWebid = async (req: Request, res: Response): Promise<Response> => {

    const p = await PedidoModel.find({url_pod: req.params.url_pod})
    return res.json(p);

};
export const findPedidoByClientEmail = async (req: Request, res: Response): Promise<Response> => {

    const p = await PedidoModel.find({email_dest: req.params.email_dest})
    return res.json(p);

};

async function calcularCoordenadas(direccion: { zipcode: any; country: any; number: any; city: any; street: any }) {
    var uri = new URL('https://api.mapbox.com/geocoding/v5/mapbox.places/' + direccion.number + '%20' + direccion.street + '%20' + direccion.city + '%20' + direccion.country + '%20' + direccion.zipcode + '.json?access_token=' + TOKEN);
    return await fetch(uri.toString())
        .then(function (response) {
            return response.json();
        })
        .then(function (result: any) {

            return {
                "long": result.features[0].center[0],
                "lat": result.features[0].center[1],
            }
        });
}

async function calcularDistancia(coordenadasCliente: { long: any; lat: any }) {
    const centro = await DistributionCenterModel.find({})
    var long : number = centro[0].longitude
    var lat : number = centro[0].latitude
    return await fetch('https://api.mapbox.com/directions/v5/mapbox/driving/'+long+'%2C'+lat+'%3B'+ coordenadasCliente.long +'%2C'+ coordenadasCliente.lat +'?alternatives=false&geometries=geojson&language=en&overview=simplified&steps=false&access_token=' + TOKEN)
        .then(function(response) {
            return response.json();
        })
        .then(function(distanceInfo: any) {
            return (distanceInfo.routes[0].distance)/1000;
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
    var coste = PRECIO_KILOMETRO * distancia;
    return res.json(coste);

}