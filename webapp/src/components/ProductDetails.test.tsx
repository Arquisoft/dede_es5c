import React from 'react'
import { render, screen } from "@testing-library/react";
import ProductDetails from "./ProductDetails";
import * as api from '../api/api';
import { Product } from "../shared/shareddtypes";
import { act } from 'react-dom/test-utils';

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

  await act(async () => {
    render(<ProductDetails/>)});
  expect(screen.getByText('Sudadera amarilla')).toBeInTheDocument();
  expect(screen.getByText('Sudadera gap')).toBeInTheDocument();
  expect(screen.getByText("10 €")).toBeInTheDocument();
});