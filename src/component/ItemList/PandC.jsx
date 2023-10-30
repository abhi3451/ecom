import "../../assets/styles/PandC.css";

import Cart from "../Cart/Cart";
import Product from "./product";

const Section = () => {
  return (
    <main className="side-Layout">
      <left className="cart">
        <Cart />
      </left>
      <right className="plist">
        <Product />
      </right>
    </main>
  );
};

export default Section;
