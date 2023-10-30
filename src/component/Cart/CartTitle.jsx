import React from "react";
import "../../assets/styles/Cart.css";
const CartTitle = () => {
  return (
    <>
      <header className="cart-row cart-header">
        <span className="cart-item  cart-column">ITEM</span>
        <span className="cart-price cart-column">PRICE</span>
        <span className="cart-quantity cart-column">QUANTITY</span>
      </header>
    </>
  );
};

export default CartTitle;
