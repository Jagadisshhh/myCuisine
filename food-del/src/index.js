import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
// import FoodContextProvider from './Context/FoodContext';
import CartContextProvider from './Context/CartContex';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CartContextProvider >
        <App /> 
    </CartContextProvider>
  </BrowserRouter>
);
