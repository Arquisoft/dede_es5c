

import {User, Product, Pedido, ProductoCarrito} from '../shared/shareddtypes';

const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'

export async function addUser(user:User):Promise<boolean>{
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({'name':user.name, 'email':user.email})
      });
    if (response.status===200)
      return true;
    else
      return false;
}

export async function getUsers():Promise<User[]>{
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/list');
    //The objects returned by the api are directly convertible to User objects
    return response.json()
}

export async function getUserByEmail(email: String): Promise<User[]> {
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
  let response = await fetch(apiEndPoint+'/users/findEmail/'+ email);
  //The objects returned by the api are directly convertible to User objects
  return response.json();
}

export async function getProduct(name: String): Promise<Product>{
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api/products'
    let response = await fetch(`${apiEndPoint}/${name}`);
    let json = response.json();
    console.log(json);
    console.log(json);
    //The objects returned by the api are directly convertible to User objects
    return json;
  }

  export async function getProducts(): Promise<Product[]> {
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/products/list');
    //The objects returned by the api are directly convertible to User objects
    return response.json()
  }

  export async function getPedidos(): Promise<Pedido[]> {
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/pedido/list');
    //The objects returned by the api are directly convertible to User objects
    return response.json()
  } 

  export function getCarrito(): ProductoCarrito[] {
    var carrito = localStorage.getItem('carrito');
    if (carrito != null) {
      return JSON.parse(carrito!);
    }
      
    else {
      localStorage.setItem('carrito', JSON.stringify([]));
    return [];
    }
  }

  export function addCarrito(product:Product, amountp:number, tallap: string): void  {
    var carrito = getCarrito();
    console.log(carrito);
    var productoCar: ProductoCarrito = {name: product.name, amount: amountp, category: product.category, color: product.color, description: product.description, price: product.price, talla: tallap, url: product.url, id: product.id};
    console.log(product);
    carrito.push(productoCar);
    carrito = carrito.filter(Boolean);
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  export function removeCarrito(product: ProductoCarrito): void {
    var carrito = getCarrito();
    console.log(carrito);
    const index = carrito.findIndex((i: ProductoCarrito) => i.name === product.name);
    if (index >= 0) {
      delete carrito[index];
      carrito = carrito.filter(Boolean);
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }

export async function filterProducts(type:string): Promise<Product[]> {
    const apiEndPoint = process.env.REACT_APP_API_URI|| 'http://localhost:5000/api'
    var str: string = apiEndPoint + '/products/category/' + type;
    let response = await fetch(str);
    return response.json();
}

export async function addPedido(email:string, precio:number): Promise<boolean> {
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/pedido/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({'estado': 'En proceso','email':email, 'precio_final':precio})
      });
    console.log(response.status)
    if (response.status===200)
      return true;
    else
      return false;
}

export async function addProductoPedido(cantidad: number, producto:ProductoCarrito, pedido:Pedido): Promise<boolean> {
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/pedidoProducto/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({'quantity': cantidad,'id_product':producto.id, 'id_order':pedido.id})
      });
    
    if (response.status===200)
      return true;
    else
      return false;
}

export async function getPedidosByEmail(email: string): Promise<Pedido[]> {
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
  console.log("getPedidos:" + email);
  let response = await fetch(apiEndPoint+'/pedido/'+email);
  //The objects returned by the api are directly convertible to User objects
  return response.json()
}

export async function getShipping(direccion: string): Promise<number> {
  console.log("ey x2:" + direccion)
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
  console.log(apiEndPoint+'/pedido/price/' + direccion.toString())
  let response = await fetch(apiEndPoint+'/pedido/price/' + direccion);
  //The objects returned by the api are directly convertible to User objects
  return response.json()
}