import { model, Schema} from 'mongoose'

export interface Product {
    description: String
    name: String,
    price: Number,
    category: String,
    color: String,
    talla_stock: [{ talla: String }, {stock: Number}],
    url: String
}

const productModel = new Schema(
    {
        id:{
            type: String,
            required: true
        },
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
        url: {
            type: String,
            required: true
        },


    }
)

/**productModel.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject._v
    }
})*/

const ProductModel = model("Product", productModel);
export default ProductModel;