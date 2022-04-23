import { model, Schema} from 'mongoose'

export interface Pedido {
    DNI_dest: String,
    direccion: String,
    estado: String,
    nombre_dest: String,
    url_pod: String
}

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
        }
    }
)



const Pedido = model("Pedido", pedidoModel);
export default Pedido;