import React from 'react'
import { render,screen } from "@testing-library/react";
import Carrito from "./Carrito";
import * as api from '../../api/api';
import { Product } from "../../shared/shareddtypes";
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';


test('check that everything is rendering propertly', async () => {

  function miGetProducts() {
    return Promise.resolve([]);
  }

  jest.spyOn(api, 'getProducts').mockImplementation(miGetProducts);

  const container =document.createElement('div'); ;
  await act (async () => {
  ReactDOM.render(<Carrito/>, container);});
  expect(container.querySelectorAll('tr').length).toBe(1);
});

test('check that everything is rendering propertly', async () => {

  function miGetProducts() {
    return Promise.resolve([{
      id: '1',
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

  const container =document.createElement('div'); ;
  await act (async () => {
  ReactDOM.render(<Carrito/>, container);});
  expect(container.querySelectorAll('tr').length).toBe(2);
});