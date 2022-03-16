export type User = {
    name:string;
    email:string;
  }

export type Product = {
  name: string;
  sizes: string[];
  colors: string[];
  price: number;
  description: string,
  img : {[color:string]: string}
}