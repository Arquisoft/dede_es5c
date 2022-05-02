import { model, Schema} from 'mongoose'

const pedidoModel = new Schema(
    {
        estado: {
            type: String,
            required: true
        },
        url_pod: {
            type: String,
            required: true
        },
        precio_final: {
            type: Number,
            required: true
        },
        email_dest: {
            type: String,
            required: true
        }
    }
)



const Pedido = model("Pedido", pedidoModel);
export default Pedido;