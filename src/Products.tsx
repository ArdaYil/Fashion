import ProductComponent from "./components/products/productComponent";
import ProductData from "./ProductData";
import _ from "lodash";
import { useParams } from "react-router";

export default function Products() {
  const { id } = useParams();
  const productsObject = id ? ProductData[id] : {};
  const products = Object.values(productsObject);

  return (
    <div>
      <section className="products">
        {products.map((product) => (
          <ProductComponent key={product.id} {...product} />
        ))}
      </section>
    </div>
  );
}
