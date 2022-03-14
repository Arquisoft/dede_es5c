import { model, Schema} from 'mongoose'

const productSchema = new Schema(
    {
        description: {
            type: String
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            required: true
        }
        color: {
            type: String,
            required: true
        }
        talla: {
             type: String,
             required: true
        }
        stock: {
            type: Number,
            required: true
        }
    }
)

productSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
    }
})

const Product = model("Product", productSchema);
export default Product;