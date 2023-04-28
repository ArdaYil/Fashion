import Navigation from "./components/Navigation";
import ProductInCartInterface from "./interfaces/ProductInCartInterface";

interface Props {
  cart: ProductInCartInterface[];
}

export default function Cart({ cart }: Props) {
  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
}
