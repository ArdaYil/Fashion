import { Link } from "react-router-dom";
import ProductInCartInterface from "../interfaces/ProductInCartInterface";

interface Props {
  cart: ProductInCartInterface[];
}

export default function CartButton({ cart }: Props) {
  const cartClassName = cart.length > 0 ? " cart-circle" : "";

  return (
    <Link className={cartClassName} to="/cart">
      <img className="sm" src="/images/cart.png" />
    </Link>
  );
}
