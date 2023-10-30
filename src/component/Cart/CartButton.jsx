import React from "react";
import "../../assets/styles/Cart.css";
const CartButton = ({ clearCart1, handlePurchase }) => {
  return (
    <footer className="btnn">
      <span className="purch_span">
        <button className="purchase" onClick={handlePurchase}>
          Process
        </button>
      </span>
      <span className="cancle_span">
        <button onClick={clearCart1} className="cancle">
          Cancle
        </button>
      </span>
    </footer>
  );
};

export default CartButton;
