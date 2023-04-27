import Navigation from "./components/Navigation";
import ProductComponent from "./components/products/ProductComponent";
import ProductData from "./ProductData";
import _ from "lodash";

interface Props {
  category: string;
}

export default function Products({ category }: Props) {
  const productsObject = ProductData[category];
  const products = Object.values(productsObject);

  return (
    <div>
      <Navigation />
      <h1>Products</h1>
      <section className="products">
        {products.map((product) => (
          <ProductComponent {...product} />
        ))}
      </section>
    </div>
  );
}
