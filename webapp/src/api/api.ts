

import {User, Product, Pedido, ProductoCarrito} from '../shared/shareddtypes';


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
    //The objects returned by the api are directly convertible to User objects
    return json;
  }

  export async function getProducts(): Promise<Product[]> {
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/products/list');
    //The objects returned by the api are directly convertible to User objects
    return response.json()
  }

  export function getCarrito(): Product[] {
    var carrito = localStorage.getItem('carrito');
    if (carrito != null)
      return JSON.parse(carrito);
    else {
      localStorage.setItem('carrito', JSON.stringify([]));
    return [];
    }
  }

  export function addCarrito(product:Product): void  {
    var carrito = getCarrito();
    console.log(carrito);
    const index = carrito.findIndex((i: Product) => i.name === product.name);
    carrito.push(product);
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }

export async function filterProducts(type:string): Promise<Product[]> {
    const apiEndPoint = process.env.REACT_APP_API_URI|| 'http://localhost:5000/api'
    var str: string = apiEndPoint + '/products/filter/' + type;
    let response = await fetch(str);
    return response.json();
}