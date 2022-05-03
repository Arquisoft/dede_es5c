export type User = {
    name: String,
    surname: String,
    email: String,
    password: String
  }

export interface Product {
    description: String
    name: String,
    price: number,
    category: String,
    color: String,
    talla_stock: [{ talla: String }, {stock: number}],
    url: String,
    id: String
}

export interface ProductoCarrito {
    description: String
    name: String,
    price: number,
    category: String,
    color: String,
    amount: number,
    talla: String,
    url: String,
    id: String
}

export interface Pedido {
  id: String,
  estado: String,
  nombre_dest: String,
  email: String,
  precio_final: Number
}