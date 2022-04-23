export type User = {
    name:string;
    email:string;
  }

export type Product = {
  description: String
    name: String,
    price: Number,
    category: String,
    color: String,
    talla_stock: [{ talla: String }, {stock: Number}],
    url: String
}