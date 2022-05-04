import React from 'react'
import { render, screen } from "@testing-library/react";
import PedidosList from "./PedidosList";
import * as api from '../../api/api';
import { Pedido, Product } from "../../shared/shareddtypes";
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import * as solid from "@inrupt/solid-ui-react";

test('check that everything is rendering propertly', async () => {

  function miGetPedidos() {
    return Promise.resolve([{
        id: "1",
        estado: "En camino",
        nombre_dest: "Enol",
        email: "Email",
        precio_final: 20
    } as Pedido

    ]);
  }

  jest.spyOn(api, 'getPedidosByEmail').mockImplementation(miGetPedidos);
  //jest.spyOn(solid, 'useSession').mockImplementation(()=> ({session:{info:{webId:"abc#abc"}}} as any));
  jest.mock("@inrupt/solid-client");
  await act(async () => {
    render(<BrowserRouter><PedidosList/></BrowserRouter>)});
  expect(screen.getByText('En camino')).toBeInTheDocument();
});