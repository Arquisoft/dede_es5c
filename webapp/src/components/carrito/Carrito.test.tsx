import React from 'react'
import { render,screen } from "@testing-library/react";
import Carrito from "./Carrito";
import * as api from '../../api/api';
import { Product, ProductoCarrito } from "../../shared/shareddtypes";
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


test('check that everything is rendering propertly', async () => {

  function miGetProducts() {
    return [] as ProductoCarrito[];
  }

  jest.spyOn(api, 'getCarrito').mockImplementation(miGetProducts);

  const container =document.createElement('div'); ;
  await act (async () => {
  ReactDOM.render(<Carrito/>, container);});
  expect(container.querySelectorAll('tr').length).toBe(1);
});

test('check that everything is rendering propertly', async () => {

  function miGetProducts() {
    return [{
      amount: 1,
      talla: 'S',
      id: '1',
      description:'Sudadera amarilla',
      name: "Sudadera gap", 
      price:10.0, 
      category: 'Partes de arriba', 
      color: "amarillo", 
      url: "PruebaURL"
    } as ProductoCarrito

    ];
  }

  jest.spyOn(api, 'getCarrito').mockImplementation(miGetProducts);

  const container =document.createElement('div'); ;
  await act (async () => {
    ReactDOM.render(<BrowserRouter><Carrito/></BrowserRouter>, container);
  });
  console.log(container.innerHTML);
  expect(container.querySelectorAll('tr').length).toBe(2);
});