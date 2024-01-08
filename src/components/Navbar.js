import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="flex justify-between align-items-center">
          <div className="shopTitle">
            <h1>GadgetBytes Nepal</h1>
          </div>
          <div className="links">
            <Link to="/"> Shop </Link>
            {/* <Link to="/contact"> Contact </Link> */}
            <Link to="/cart">
              <ShoppingCart size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
