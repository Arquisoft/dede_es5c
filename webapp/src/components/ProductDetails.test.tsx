import React from 'react'
import { render } from "@testing-library/react";
import ProductDetails from "./ProductDetails";
import * as api from '../api/api';
import { Product } from "../shared/shareddtypes";

test('check that everything is rendering propertly', async () => {

  function miGetProduct() {
    return Promise.resolve({
      description:'Sudadera amarilla',
      name: "Sudadera gap", 
      price:10.0, 
      category: 'Partes de arriba', 
      color: "amarillo", 
      talla_stock:[{talla: "S"}, {stock:10}], 
      url: "PruebaURL"
    } as Product

    );
  }

  jest.spyOn(api, 'getProduct').mockImplementation(miGetProduct);

  const { getByText } = render(<ProductDetails/>);
  expect(getByText('Sudadera amarilla')).toBeInTheDocument();
  expect(getByText('Sudadera gap')).toBeInTheDocument();
  expect(getByText(10.0)).toBeInTheDocument();
});