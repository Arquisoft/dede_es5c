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
        id_metododepago: {
            type: String,
            required: true
        },
        DNI_dest: {
            type: String,
            required: true
        },
        direccion: {
            type: String,
            required: true
        },
        estado: {
            type: String,
            required: true
        },
        nombre_dest: {
            type: String,
            required: true
        },
        numero_pedido: {
            type: String,
            required: true
        },
        url_pod: {
            type: String,
            required: true
        }
    }
)

pedidoModel.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id_pago = returnedObject.id_metododepago
        delete returnedObject.id_metododepago
    }
})

const Pedido = model("Pedido", pedidoModel);
export default Pedido;