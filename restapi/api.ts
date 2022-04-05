import express, { Request, Response, Router } from 'express';
import {check} from 'express-validator';
import {findProductByName, findProducts, addProducto} from "./models/controllers/ProductController";
import {addPedido} from "./models/controllers/PedidoController";
import {createUser, findUsers} from "./models/controllers/UserController";

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

api.get("/products/list", findProducts)
api.post("/products/add", addProducto)
api.get("/products/:name", findProductByName)

api.post("/pedido/add", addPedido)

api.get("/users/list", findUsers)
api.post("/users/add", createUser);

export default api;