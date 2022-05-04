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
const PRECIO_KILOMETRO:number = 0.003;
dotenv.config();

export const findPedidos = async (req: Request, res: Response): Promise<Response> => {
    const p = await PedidoModel.find({})
    return res.json(p);
};


export const addPedido = async (req: Request, res: Response): Promise<Response> => {

    const body = req.body
    const newPedido =  new PedidoModel({
        estado: body.estado,
        email: body.email,
        precio_final: body.precio_final
    })

    newPedido.save()
    console.log(newPedido)

    return res.status(200).json({ newPedido });

}

export const findPedidoByClientEmail = async (req: Request, res: Response): Promise<Response> => {
    const p = await PedidoModel.find({email: req.params.email})
    return res.json(p);

};

async function calcularCoordenadas(direccion: string) {
    var uri = new URL('https://api.mapbox.com/geocoding/v5/mapbox.places/' + direccion + '.json?access_token=' + TOKEN);
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
    console.log("centro: " + centro[0]);
    var long : number = centro[0].longitud
    var lat : number = centro[0].latitud
    console.log("cositas: " + 'https://api.mapbox.com/directions/v5/mapbox/driving/'+lat+'%2C'+long+'%3B'+ coordenadasCliente.long +'%2C'+ coordenadasCliente.lat +'?alternatives=false&geometries=geojson&language=en&overview=simplified&steps=false&access_token=' + TOKEN)
    return await fetch('https://api.mapbox.com/directions/v5/mapbox/driving/'+lat+'%2C'+long+'%3B'+ coordenadasCliente.long +'%2C'+ coordenadasCliente.lat +'?alternatives=false&geometries=geojson&language=en&overview=simplified&steps=false&access_token=' + TOKEN)
        .then(function(response) {
            return response.json();
        })
        .then(function(distanceInfo: any) {
            return (distanceInfo.routes[0].distance)/1000;
        });

}

export const calculatePrice = async (req: Request, res: Response): Promise<Response> => {
    let direccion = req.params.direccion;
    console.log("ey x3:" + direccion );
    var coordenadasCliente = await calcularCoordenadas (direccion);
    var distancia = await calcularDistancia(coordenadasCliente);
    var coste = PRECIO_KILOMETRO * distancia;
    var rounding = Number((Math.abs(coste) * 100).toPrecision(15));
    coste = Math.round(rounding) / 100 * Math.sign(coste);
    return res.json(coste);

}