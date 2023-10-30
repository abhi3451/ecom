import React, { useReducer } from "react";
import CartContext from "./CartContext";

const init = {
  cart: [],
  isEmpty: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return {
        ...state,
        cart: [...state.cart, action.payload.item],
      };
    case "Remove":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "ClearCart":
      return {
        ...state,
        cart: [],
      };
    case "Fetch":
      return {
        ...state,
        cart: action.payload,
      };

    case "Increment":
      const { updatedCart } = action.payload;
      return {
        ...state,
        cart: updatedCart,
      };
    case "decrement":
      const { upcart } = action.payload;
      return {
        ...state,
        cart: upcart,
      };
    default:
      return state;
  }
};

const CartProvider = (props) => {
  const [arr, dispatch] = useReducer(reducer, init);

  const handleAddItem = (item) => {
    try {
      const itemExists = arr.cart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (itemExists > -1) {
        alert("item already added");
        return;
      } else {
        dispatch({ type: "Add", payload: { item } });

        const updatedCart = [...arr.cart, item];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemoveItem = (id) => {
    try {
      dispatch({ type: "Remove", payload: { id } });

      const updatedCart = arr.cart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } catch (err) {
      console.log(err);
    }
  };

  const clearCart = () => {
    try {
      dispatch({ type: "ClearCart" });

      localStorage.removeItem("cart");

      toast.success(`Thank you for shopping!!!`);
    } catch (err) {
      console.log(err);
    }
  };

  const increaseCartItem = (id) => {
    try {
      const cartItem = arr.cart.find((item) => item.id === id);
      if (!cartItem) return;

      const updatedItem = {
        ...cartItem,
        quantity: cartItem.quantity + 1,
      };

      const updatedCart = arr.cart.map((item) =>
        item.id === id ? updatedItem : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      dispatch({ type: "Increment", payload: { updatedCart } });
    } catch (error) {
      console.log(error.message);
    }
  };

  const decreaseCart = (id) => {
    try {
      const cartpro = arr.cart.find((item) => item.id === id);
      if (!cartpro) return;

      const updatecart = {
        ...cartpro,
        quantity: cartpro.quantity - 1,
      };

      const upcart = arr.cart.map((item) =>
        item.id === id ? updatecart : item
      );
      localStorage.setItem("cart", JSON.stringify(upcart));

      dispatch({ type: "decrement", payload: { upcart } });
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchCartItems = () => {
    try {
      const cartData = JSON.parse(localStorage.getItem("cart")) || [];

      dispatch({ type: "Fetch", payload: cartData });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart: arr.cart,
        handleAddItem,
        handleRemoveItem,
        clearCart,
        fetchCartItems,
        increaseCartItem,
        decreaseCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
