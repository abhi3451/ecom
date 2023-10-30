import React from "react";
import "../../assets/styles/Invoice.css";

const InvoiceModal = ({
  cart,
  totalAmount,
  finalTotal,
  istrue,
  closeModal,
  vat,
  discount,
}) => {
  const currentDateTime = new Date();

  const formattedDateTime = `${currentDateTime.toLocaleDateString()} ${currentDateTime.toLocaleTimeString()}`;

  const randomNumber = Math.floor(1000 + Math.random() * 9000);

  return (
    <section className={`invoice-modal ${istrue ? "open" : ""}`}>
      <article className="invoice-content">
        <h6 className="head">Invoice</h6>
        <p className="date-time-sale">Sale No:- {randomNumber}</p>
        <p className="date-time">Date and Time: {formattedDateTime}</p>
        <table className="invoice-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>Rs.{item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <section className="invoice-summary">
          <article className="summary-item">
            <span className="text">Total Item:</span>
            <span>{cart.length}</span>
          </article>
          <article className="summary-item">
            <span className="text">VAT:</span>
            <span>{vat}%</span>
          </article>
          <article className="summary-item">
            <span className="text">Discount:</span>
            <span>{discount}%</span>
          </article>
          <article className="summary-item">
            <span className="text">Sub Total:</span>
            <span>Rs.{totalAmount}</span>
          </article>
          <article className="summary-item total">
            <span className="text">Total:</span>
            <span>Rs.{finalTotal}</span>
          </article>
        </section>
        <div className="butn">
          <button onClick={closeModal} className="butto">
            Close
          </button>
        </div>
      </article>
    </section>
  );
};

export default InvoiceModal;
