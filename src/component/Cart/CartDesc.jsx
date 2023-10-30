import React from "react";
import "../../assets/styles/Cart.css";
const CartDesc = ({ cart, tax, handleInputChange, input }) => {
  return (
    <section>
      <table className="footer">
        <tbody>
          <tr>
            Sub Total
            <td>Rs.{tax.totalAmount}</td>
            <td>{cart.length} items</td>
          </tr>

          <tr>
            VAT (%):
            <td>
              <input
                type="text"
                name="vat"
                value={input.vat}
                onChange={handleInputChange}
                disabled={cart.length === 0}
              />
            </td>
            <td>{tax.vatT}</td>
          </tr>
          <tr>
            Discount (%):
            <td>
              <input
                type="text"
                name="discount"
                value={input.discount}
                onChange={handleInputChange}
                disabled={cart.length === 0}
              />
            </td>
            <td>{tax.disc}</td>
          </tr>
          <tr>
            Total:
            <td>
              <b>Rs.{tax.finalTotal}</b>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default CartDesc;
