import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./Product";
import "./shop.css";

// export default function Shop() {
export const Shop = () => {
  return (
    <div className="container">
      <div className="shop">
        <div className="products">
          {PRODUCTS.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
