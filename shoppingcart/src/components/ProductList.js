import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductList = () => {
  const { products, addToCart } = useContext(CartContext);

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: Rs.{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;