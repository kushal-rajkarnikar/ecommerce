import { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../products";

//create a store in our application
export const ShopContext = createContext(null);

//using context, we can use and modify its data in both Shop and Cart components
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

// let a = 0;

// a+=6;

// a = a + 6;

// 1: 10;
// 2: 9;
// 3: 1;
// 4: 0;
// 5: 0;
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        // console.log(item);
        // console.log(Number(item));
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
        totalAmount = totalAmount + (cartItems[item] * itemInfo.price);
      }
    }
    return totalAmount;
  };

  // function addToCart(itemId) {
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    console.log(cartItems);
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    console.log(cartItems);
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
