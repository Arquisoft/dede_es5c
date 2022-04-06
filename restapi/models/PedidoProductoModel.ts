import { model, Schema} from 'mongoose'
import Pedido from "./PedidoModel";

const pedidoProductoModel = new Schema(
    {
        quantity: {
            type: Number,
            required: true
        },
        id_product: {
            type: String,
            required: true
        },
        id_order: {
            type: String,
            required: true
        }
    }
)

pedidoProductoModel.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
    }
})

const ProductoPedido = model("Pedido_Producto", pedidoProductoModel);
export default ProductoPedido;