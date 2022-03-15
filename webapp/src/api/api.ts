import {Product, User} from '../shared/shareddtypes';

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

export async function getProduct(id: string): Promise<Product>{
  return {
    name: 'Sudadera Gap amarilla',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 23.56,
    description: 'Sudadera de color amarillo de la marca Gap',
    colors: ['Rojo', 'Amarillo'],
    img: {
      'Rojo': 'https://m.media-amazon.com/images/I/71+5V4emsKL._AC_UL1500_.jpg',
      'Amarillo': 'https://www.gap.es/cdnassets/images/Shootings/211217/490386028_s.jpg'
    }
  };
}