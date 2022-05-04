import React from 'react'
import { getByDisplayValue, render } from "@testing-library/react";
import Login from "./Login";
import { BrowserRouter } from 'react-router-dom';

test('check that everything is rendering propertly', async () => {

  const { getByText } = render(<BrowserRouter><Login/></BrowserRouter>);
  expect(getByText('Login')).toBeInTheDocument();
});