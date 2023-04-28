import ProductComponent from "./components/products/productComponent";
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
      <section className="products">
        {products.map((product) => (
          <ProductComponent {...product} />
        ))}
      </section>
    </div>
  );
}
