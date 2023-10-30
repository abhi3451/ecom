import React, { useContext, useEffect, useState } from "react";
import CartContext from "../store/CartContext";
import CartItem from "./CartItems";

import "../../assets/styles/Cart.css";
import InvoiceModal from "./Invoicemodal";
import CartTitle from "./CartTitle";
import CartDesc from "./CartDesc";
import CartButton from "./CartButton";

const Cart = () => {
  const { cart, clearCart, fetchCartItems } = useContext(CartContext);
  const [input, setInput] = useState({
    vat: 0,
    discount: 0,
  });
  const [tax, setTax] = useState({
    totalAmount: 0,
    finalTotal: 0,
    disc: 0,
    vatT: 0,
    istrue: false,
  });

  console.log("input", input.vat);

  const handlePurchase = () => {
    setTax((prevTax) => ({
      ...prevTax,
      istrue: !prevTax.istrue,
    }));
  };
  const clearCart1 = () => {
    clearCart();
    setInput({ vat: 0, discount: 0 });
  };
  const closeModal = () => {
    setTax({ istrue: false });
    clearCart();
    setInput({ vat: 0, discount: 0 });
  };

  useEffect(() => {
    const subTotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const vatT = (subTotal * (parseFloat(input.vat) || 0)) / 100;
    const discou = (subTotal * (parseFloat(input.discount) || 0)) / 100;

    const finalTotal = (subTotal + vatT - discou).toFixed(2);
    setTax({
      totalAmount: subTotal,
      finalTotal: finalTotal,
      disc: discou,
      vatT: vatT,
    });
  }, [cart, input]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  useEffect(() => {
    fetchCartItems();
  }, []);
  return (
    <>
      <container className="cart-container">
        <CartTitle />
        <main className="scroll-item">
          {cart.length === 0 ? (
            <p className="para">THERE ARE NO PRODUCTS</p>
          ) : (
            cart.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </main>
        <CartDesc
          cart={cart}
          tax={tax}
          handleInputChange={handleInputChange}
          input={input}
        />
        <CartButton clearCart1={clearCart1} handlePurchase={handlePurchase} />
      </container>

      <InvoiceModal
        cart={cart}
        totalAmount={tax.totalAmount}
        finalTotal={tax.finalTotal}
        istrue={tax.istrue}
        closeModal={closeModal}
        vat={input.vat}
        discount={input.discount}
      />
    </>
  );
};

export default Cart;
