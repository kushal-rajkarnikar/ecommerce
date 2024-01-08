import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";
export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem flex align-items-center">
      <div className="cartItemImage">
        <img src={productImage} />
      </div>
      <div className="cartItemName">{productName}</div>
      <div className="cartItemPrice">{price}</div>
      <div className="cartItemQty">
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
