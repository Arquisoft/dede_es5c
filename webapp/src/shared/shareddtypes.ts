export type User = {
    name: String,
    surname: String,
    email: String,
    password: String
  }

export interface Product {
  description: String
    name: String,
    price: Number,
    category: String,
    color: String,
    talla_stock: [{ talla: String }, {stock: Number}],
    url: String
}