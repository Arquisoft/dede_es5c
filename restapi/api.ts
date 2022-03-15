import express, { Request, Response, Router } from 'express';
import {check} from 'express-validator';
import {findProductByName, findProducts} from "./models/controllers/ProductController";
import {addPedido} from "./models/controllers/PedidoController";

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

api.get("/products/:name", findProductByName)

api.post("/pedido/add", addPedido)

export default api;