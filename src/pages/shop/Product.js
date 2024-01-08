import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";
export const Product = (props) => {
  const { id, productName, productImage, price } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
