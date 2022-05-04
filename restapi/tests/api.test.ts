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
    mongoose.disconnect();
    mongoose.connection.close();
    server.close(); //close the server


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
     * Test that we can get a user from the database without error
     */
    it("can get a user by email", async () => {
        const response: Response = await request(app).get('/api/users/findEmail/gonzalezgpablo2@uniovi.es');
        expect(response.statusCode).toBe(200);
        expect(response.body._id).toEqual("624c733d58cfeefe03f41a1a");

    });


    /**
     * Test that we can delete a user from the database without error
     */
    it("delete a user by email", async () => {
        const response: Response = await request(app).post('/api/users/delete/unusuario@uniovi.es');
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

    /**
     * Test that we can delete a user from the database without error
     */
    it("get a product by name", async () => {
        const response: Response = await request(app).get('/api/products/Camiseta');
        expect(response.statusCode).toBe(200);
    });


});



describe('pedido ', () => {
    /**
     * Test that we can list pedidos without any error.
     */
    it('can be listed', async () => {
        const response: Response = await request(app).get("/api/pedido/list");
        expect(response.statusCode).toBe(200);
    });


    /**
     * Tests that a pedido can be created through the productService without throwing any errors.
     */
    it('can be created correctly', async () => {
        let estado: string = 'enviado'
        let url_pod: string = "xxx.xxx"
        let precio_final = 50
        const response: Response = await request(app).post('/api/pedido/add').send({
            estado: estado, url_pod: url_pod, precio_final: precio_final
        }).set('Accept', 'application/json')
        expect(response.statusCode).toBe(200);
    });



});
describe('producto en pedido ', () => {
    /**
     * Test that we can list pedidos without any error.
     */
    it('can be listed', async () => {
        const response: Response = await request(app).get("/api/pedidoProducto/list");
        expect(response.statusCode).toBe(200);
    });


    /**
     * Tests that an existing product can be added to an existing order.
     */
    it('can be added correctly to an existing order', async () => {

        let quantity: Number = 2
        let id_product: string = "624c73ef97fdb9f2b1fe1692"
        let id_order: string ="624c84e388ca5c266f4d4f25"
        const response: Response = await request(app).post('/api/pedidoProducto/add').send({
            quantity: quantity, id_product: id_product, id_order: id_order
        }).set('Accept', 'application/json')
        expect(response.statusCode).toBe(200);
    });
});

