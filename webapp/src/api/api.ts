

import {User, Product, Pedido} from '../shared/shareddtypes';


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

  export async function getCarrito(): Promise<Product[]> {
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/pedidoProducto/list');
    //The objects returned by the api are directly convertible to User objects
    return response.json()
  }

  export async function addCarrito(product:Product): Promise<boolean>  {
    console.log("/pedidoProducto/add/" + product.name);
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/pedidoProducto/add', {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        'name': product.name,
        'description': product.description,
        'price': product.price,
        'category': product.category,
        'color': product.color,
        'talla_stock': product.talla_stock,
        'url': product.url
      })
      
    })
    console.log("respuesta: " + response.status)
    
    if (response.status===200)
      return true;
    else
      return false
  }

export async function filterProducts(type:string): Promise<Product[]> {
    const apiEndPoint = process.env.REACT_APP_API_URI|| 'http://localhost:5000/api'
    var str: string = apiEndPoint + '/products/filter/' + type;
    let response = await fetch(str);
    return response.json();
}