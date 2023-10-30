import React, { useContext } from "react";
import CartContext from "../store/CartContext";

import "../../assets/styles/productList.css";

const ProductList = ({ item }) => {
  const { handleAddItem } = useContext(CartContext);

  const handleAddToCart = () => {
    handleAddItem(item, item.quantity);
  };

  return (
    <article className="productC">
      <section className="product-image-container">
        <img
          alt={item.title}
          src={item.thumbnail}
          className="product-image"
          onClick={handleAddToCart}
        />
        <section className="product-details">
          <h6>{item.title}</h6>
          <p>{item.description}</p>
          <p>Price: Rs.{item.price}</p>
        </section>
      </section>
    </article>
  );
};

export default ProductList;
