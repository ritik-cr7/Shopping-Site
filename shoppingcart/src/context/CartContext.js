import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products] = useState([
    { id: 1, name: 'Jeans', price: 1000, image: 'https://i5.walmartimages.com/asr/1e071242-6f21-4a80-b978-c70fcfb69887_1.64e4c2966d72a4c0dcdabdbb912c6d3a.jpeg' },
    { id: 2, name: 'Shirt', price: 600, image: 'https://4.imimg.com/data4/LE/LD/MY-10186440/1298440927-500x500.jpg' },
    { id: 3, name: 'DailyCare', price: 100, image: 'https://img9.hkrtcdn.com/306/30508_o.jpg' },
    { id: 4, name: 'Shoes', price: 2000, image: 'https://th.bing.com/th/id/OIP.t8hG66Lcp0N50NfKiBYNZQHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 5, name: 'Grocery', price: 250, image: 'https://th.bing.com/th/id/OIP.o9ZXjKV3ATuAS7_AGzS-YAHaHX?w=181&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.75' },
    { id: 6, name: 'Pants', price: 1200, image: 'https://th.bing.com/th/id/OIP.FnFsMe2nqPGHpOcQPSdCdwHaLW?w=136&h=209&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 7, name: 'Toys', price: 500, image: 'https://th.bing.com/th/id/OIP.25axB1kB6PAnO_ChT5FrJwHaG7?w=194&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 8, name: 'Smartphone', price: 18000, image: 'https://th.bing.com/th/id/OIP.4UGGNues-9TOrJDZtkhy9wHaE8?w=273&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 9, name: 'Laptop', price: 50000, image: 'https://th.bing.com/th/id/OIP.aaPVjKoD59ebkEeYAwtUXAHaE9?w=288&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 10,name: 'Sports', price: 500, image: 'https://th.bing.com/th/id/OIP.lNxc5zBf-vm8IKL6EkstTwHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' }
  ]);
  
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...existingProduct, quantity: existingProduct.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id);
    } else {
      setCart(cart.map(item => 
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ products, cart, addToCart, removeFromCart, updateQuantity, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};