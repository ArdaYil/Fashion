import Navigation from "./components/Navigation";
import ProductData from "./ProductData";

interface Props {
  category: string;
}

export default function Products({ category }: Props) {
  //const products = ProductData[category];
  console.log(category);

  return (
    <div>
      <Navigation />
      <h1>Products</h1>
    </div>
  );
}
