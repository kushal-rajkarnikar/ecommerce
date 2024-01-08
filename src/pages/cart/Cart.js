import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";
import { PRODUCTS } from "../../products";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";

// import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="cart">
        <div>
          <h2>Your Cart Items</h2>
        </div>
        <div className="cart">
          {PRODUCTS.map((product) => {
            // check if cart is empty or not
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>

        {totalAmount > 0 ? (
          <div className="checkout">
            <p align="right"> Subtotal: ${totalAmount} </p>
            <button className="addToCartBttn" onClick={() => navigate("/")}>
              Continue Shopping
            </button>
            <button
              className="addToCartBttn"
              onClick={() => {
                checkout();
                navigate("/checkout");
              }}
            >
              Checkout
            </button>
          </div>
        ) : (
          <h4> Your Shopping Cart is Empty</h4>
        )}
      </div>
    </div>
  );
};
