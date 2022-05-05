import { model, Schema} from 'mongoose'

const pedidoModel = new Schema(

    {
        id:{
            type: String,
            required: false

        },
        estado: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        precio_final: {
            type: Number,
            required: true
        }
    }
)


pedidoModel.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject._v
    }
})

const Pedido = model("Pedido", pedidoModel);
export default Pedido;