import "../../assets/styles/productList.css";
import ProductList from "./productList";
import { productsArr } from "./data";

const Product = () => {
  return (
    <>
      <article className="inRow">
        {productsArr.slice(0, 50).map((item) => {
          return <ProductList key={item.id} item={item} />;
        })}
      </article>
    </>
  );
};

export default Product;
