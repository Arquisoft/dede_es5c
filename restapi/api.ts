import express, { Request, Response, Router } from 'express';
import {check} from 'express-validator';
import {findProductByName, findProducts, addProducto, findProductByCategory} from "./controllers/ProductController";
import {
    addPedido,
    calculatePrice,
    findPedidoByClientEmail,
    findPedidoByWebid,
    findPedidos
} from "./controllers/PedidoController";
import {createUser, findUsers, findUsersByEmail, deleteUser} from "./controllers/UserController";
import {addOrderProduct, findAllOrderProducts, findAllProductsForOrder} from "./controllers/PedidoProductoController";

const bodyParser = require('body-parser')

const api:Router = express.Router()

api.use(bodyParser.urlencoded({extended:true}));



/**
interface User {
    name: string;
    email: string;
}

//This is not a restapi as it mantains state but it is here for
//simplicity. A database should be used instead.
let users: Array<User> = [];

api.get(
    "/users/list",
    async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send(users);
    }
);

api.post(
  "/users/add",[
    check('name').isLength({ min: 1 }).trim().escape(),
    check('email').isEmail().normalizeEmail(),
  ],
  async (req: Request, res: Response): Promise<Response> => {
    let name = req.body.name;
    let email = req.body.email;
    let user: User = {name:name,email:email}
    users.push(user);
    return res.sendStatus(200);
  }
);

 */

//------productos
api.get("/products/list", findProducts)
api.post("/products/add", addProducto)
api.get("/products/:name", findProductByName)
api.get("/products/:category", findProductByCategory)


//-------pedidos
api.post("/pedido/add", addPedido)
api.get("/pedido/list", findPedidos)
api.get("/pedido/:webid", findPedidoByWebid)
api.get("/pedido/:email", findPedidoByClientEmail)
api.get("/pedido/price", calculatePrice)


//-------usuarios
api.get("/users/list", findUsers)
api.post("/users/add", createUser);
api.get("/users/findEmail/:email", findUsersByEmail)
api.post("/users/delete/:email", deleteUser)

//-------pedido-producto
api.post("/pedidoProducto/add",addOrderProduct)
api.get("/pedidoProducto/list",findAllOrderProducts)
api.get("/pedidoProducto/list/:id_pedido",findAllProductsForOrder)




export default api;