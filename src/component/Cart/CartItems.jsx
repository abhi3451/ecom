import React, { Fragment, useContext } from "react";
import CartContext from "../store/CartContext";
import { RiDeleteBin6Fill } from "react-icons/ri";
import "../../assets/styles/CartItemsmain.css";
const CartItem = ({ item }) => {
  const { handleRemoveItem, increaseCartItem, decreaseCart } =
    useContext(CartContext);

  const handleRemoveFromCart = () => {
    handleRemoveItem(item.id);
  };
  const handleIncrease = () => {
    increaseCartItem(item.id);
  };
  const handleDecrease = () => {
    if (item.quantity > 1) {
      decreaseCart(item.id);
    } else {
      handleRemoveItem(item.id);
    }
  };

  return (
    <Fragment>
      <article className="cart-item1">
        <section className="cart-img-container">
          <img src={item.thumbnail} alt={item.title} className="cart-img" />
        </section>
        <section className="cart-item1-details">
          <h6>{item.title}</h6>
          <p>
            Rs.{item.price} x {item.quantity}
          </p>
        </section>
        <section className="cart-actions">
          <div className="cart-quantity">
            <button onClick={handleDecrease}>-</button>
            <span>{item.quantity}</span>
            <button onClick={handleIncrease}>+</button>
          </div>
          <div className="cart-remove">
            <button onClick={handleRemoveFromCart}>
              <RiDeleteBin6Fill />
            </button>
          </div>
        </section>
      </article>
    </Fragment>
  );
};

export default CartItem;
