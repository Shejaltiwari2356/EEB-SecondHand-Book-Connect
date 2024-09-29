import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useAuth } from "../store/auth";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const token = localStorage.getItem("token"); // Retrieve token from local storage
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchCartItems = async () => {
      if (!user) {
        console.error("User is not logged in.");
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:5001/api/cart/${user._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include token in headers
            },
          }
        );

        // Debugging: Check the data received
        console.log("Cart items fetched:", response.data);

        setCartItems(response.data.products || []);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, [user, token]); // Depend on user and token

  const handleRemoveItem = async (productId) => {
    try {
      const response = await axios.delete(
        "http://localhost:5001/api/cart/remove",
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in headers
          },
          data: { userId: user._id, productId },
        }
      );
      console.log("Remove item response:", response.data);
      if (response.status === 200) {
        setCartItems((prevItems) =>
          prevItems.filter((item) => item.productId._id !== productId)
        );
      } else {
        console.error("Failed to remove item from cart:", response);
      }
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const handleQuantityChange = async (productId, newQuantity) => {
    if (newQuantity < 1) return; // Prevent setting quantity less than 1
    try {
      const response = await axios.put(
        "http://localhost:5001/api/cart/update",
        { userId: user._id, productId, quantity: newQuantity },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in headers
          },
        }
      );
      if (response.status === 200) {
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.productId._id === productId
              ? { ...item, quantity: newQuantity }
              : item
          )
        );
      } else {
        console.error("Failed to update item quantity:", response);
      }
    } catch (error) {
      console.error("Error updating item quantity:", error);
    }
  };

  const calculateTotals = () => {
    const subtotal = cartItems.reduce((total, item) => {
      const offerpriceString = item.productId.offerprice || "0"; // Fallback to "0" if offerprice is undefined
      let offerprice = parseFloat(offerpriceString.replace(/[^0-9.-]+/g, ""));

      // Check if offerprice is valid, otherwise set it to 0
      if (isNaN(offerprice)) {
        console.error(
          "Invalid offerprice detected, setting to 0:",
          offerpriceString
        );
        offerprice = 0;
      }

      const quantity = parseInt(item.quantity, 10);

      return total + offerprice * quantity;
    }, 0);

    const tax = subtotal * 0.18; // Example tax rate
    const shipping = subtotal > 1000 ? 0 : 50; // Free shipping for orders over 1000
    const grandTotal = subtotal + tax + shipping;

    console.log({ subtotal, tax, shipping, grandTotal }); // Debugging totals
    return { subtotal, tax, shipping, grandTotal };
  };

  const { subtotal, tax, shipping, grandTotal } = calculateTotals();

  const handleCheckout = () => {
    // Navigate to payment page
    navigate("/payment", { state: { grandTotal, cartItems } });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div className="cart-item" key={item.productId._id}>
              <img
                src={item.productId.image}
                alt={item.productId.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h2 className="cart-item-name">{item.productId.name}</h2>
                <div className="cart-item-price">
                  {item.productId.offerprice}
                </div>
                <div className="cart-item-quantity">
                  <button
                    className="quantity-button"
                    onClick={() =>
                      handleQuantityChange(
                        item.productId._id,
                        item.quantity - 1
                      )
                    }
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(
                        item.productId._id,
                        Number(e.target.value)
                      )
                    }
                    min="1"
                    className="quantity-input"
                  />
                  <button
                    className="quantity-button"
                    onClick={() =>
                      handleQuantityChange(
                        item.productId._id,
                        item.quantity + 1
                      )
                    }
                  >
                    +
                  </button>
                </div>
                <div className="cart-item-subtotal">
                  Subtotal: ₹
                  {(
                    parseFloat(
                      item.productId.offerprice.replace(/[^0-9.-]+/g, "")
                    ) * item.quantity
                  ).toFixed(2)}
                </div>
                <button
                  className="remove-item-button"
                  onClick={() => handleRemoveItem(item.productId._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="empty-cart-message">Your cart is empty.</p>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h2>Cart Summary</h2>
          <div className="summary-item">
            <span>Subtotal:</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-item">
            <span>Tax (18%):</span>
            <span>₹{tax.toFixed(2)}</span>
          </div>
          <div className="summary-item">
            <span>Shipping:</span>
            <span>₹{shipping}</span>
          </div>
          <div className="summary-item summary-total">
            <span>Total:</span>
            <span>₹{grandTotal.toFixed(2)}</span>
          </div>
          <button className="checkout-button" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
