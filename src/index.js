import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import ProductsProvider from "./context/products-context";
import './index.css';
import configureProductsStore from "./hooks-store/products-store";

configureProductsStore();
//if you need another stores, you need to just run the configureStore function of this store, like in the products-store.js

ReactDOM.render(
  // <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  // </ProductsProvider>,
  document.getElementById('root')
);
