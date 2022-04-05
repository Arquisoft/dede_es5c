import { model, Schema} from 'mongoose'

const productModel = new Schema(
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
        },
        color: {
            type: String,
            required: true
        },
        talla_stock: [{ talla: String }, {stock: Number}],
        stock: {
            type: Number,
            required: true
        }
    }
)

productModel.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        //delete returnedObject._v
    }
})

const Product = model("Product", productModel);
export default Product;