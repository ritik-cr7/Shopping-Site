import React from 'react';
import { CartProvider } from '../context/CartContext';
import ProductList from './ProductList';
import Cart from './Cart';
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <div className="app">
        <h1>Shopping Site</h1>
        <div className="container">
          <ProductList />
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
};

export default App;