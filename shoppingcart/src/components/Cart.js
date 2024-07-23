import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Price: Rs.{item.price}</p> {/* Price below the name */}
              <input 
                type="number" 
                value={item.quantity} 
                min="1" 
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              />
            </div>
            <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button> {/* Class added for specific styling */}
          </div>
        ))
      )}
      <h3>Total Price: Rs.{totalPrice}</h3>
    </div>
  );
};

export default Cart;
