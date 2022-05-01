import React from 'react'
import { render } from "@testing-library/react";
import NavBar from "./NavBar";
import * as api from '../api/api';
import { Product } from "../shared/shareddtypes";
import { BrowserRouter } from 'react-router-dom';

test('check that everything is rendering propertly', async () => {

  const { getByText } = render(<BrowserRouter><NavBar/></BrowserRouter>);
  expect(getByText('Home')).toBeInTheDocument();
  expect(getByText('Welcome')).toBeInTheDocument();
  expect(getByText('Perfil')).toBeInTheDocument();
});