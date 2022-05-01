import React from 'react'
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import * as api from '../api/api';
import { Product } from "../shared/shareddtypes";
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

test('check that everything is rendering propertly', async () => {

  function miGetProducts() {
    return Promise.resolve([{
      description:'Sudadera amarilla',
      name: "Sudadera gap", 
      price:10.0, 
      category: 'Partes de arriba', 
      color: "amarillo", 
      talla_stock:[{talla: "S"}, {stock:10}], 
      url: "PruebaURL"
    } as Product

    ]);
  }

  jest.spyOn(api, 'getProducts').mockImplementation(miGetProducts);
  await act(async () => {
    render(<BrowserRouter><Home/></BrowserRouter>)});
  expect(screen.getByText('Sudadera amarilla')).toBeInTheDocument();
  expect(screen.getByText('Sudadera gap')).toBeInTheDocument();
  expect(screen.getByText("10€")).toBeInTheDocument();
});