import request, {Response} from 'supertest';
import express, { Application } from 'express';
import * as http from 'http';
import bp from 'body-parser';
import cors from 'cors';
import api from '../api';
const dotenv = require("dotenv");

dotenv.config();

let app:Application;
let server:http.Server;

const uri = "mongodb+srv://dede_5c:cuentademongo@dede.irypt.mongodb.net/DeDe_Tests?retryWrites=true&w=majority";
const mongoose = require('mongoose')

beforeAll(async () => {

    app = express();
    const port: number = 5000;
    const options: cors.CorsOptions = {
        origin: ['http://localhost:3000/']
    };
    app.use(cors(options));
    app.use(bp.json());
    app.use("/api", api)

    server = app.listen(port, ():void => {
        console.log('Restapi server for testing listening on '+ port);
    }).on("error",(error:Error)=>{
        console.error('Error occured: ' + error.message);
    });

    mongoose.connect(uri)
        .then(() => {
            console.log('Conexion correcta a la BD')
        }).catch((err:any) => {
        console.log(err)
    })
});

afterAll(async () => {
    server.close() //close the server
})

describe('user ', () => {
    /**
     * Test that we can list users without any error.
     */
    it('can be listed',async () => {
        const response:Response = await request(app).get("/api/users/list");
        expect(response.statusCode).toBe(200);
    });

    /**
     * Tests that a user can be created through the productService without throwing any errors.
    */
    it('can be created correctly', async () => {
        let name:string = 'Pablo'
        let surname:string = 'Gonzalez'
        let email:string = 'gonzalezgpablo4@uniovi.es'
        let password:string = "123"
        const response:Response = await request(app).post('/api/users/add').send({name: name, surname: surname,
            email: email, password:password}).
        set('Accept', 'application/json')
        expect(response.statusCode).toBe(200);
    });



});


describe('product ', () => {
    /**
     * Test that we can list products without any error.
     */
    it('can be listed',async () => {
        const response:Response = await request(app).get("/api/products/list");
        expect(response.statusCode).toBe(200);
    });


    /**
     * Tests that a product can be created through the productService without throwing any errors.
     */
    it('can be created correctly', async () => {
        let name:string = 'Camiseta'
        let description:string = 'Camisa blanca'
        let price:Number = 5
        let category:string = 'Parte arriba'
        let color:string = 'Blanca'
        let url:string= 'xxx'
        let talla_stock=null
        const response:Response = await request(app).post('/api/products/add').send({name: name, description: description,
            price: price, category:category, color: color, talla_stock: talla_stock, url:url}).
        set('Accept', 'application/json')
        console.log("--------" + response.body.name)
        expect(response.statusCode).toBe(200);
    });



});
