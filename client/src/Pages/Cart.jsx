import { useState, useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
              <h4>{item.title}</h4>
              <p>${item.price}</p>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${getTotal()}</h3>
          <button onClick={() => alert("Mock Checkout Success!")}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;