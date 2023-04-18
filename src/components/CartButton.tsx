import { Link } from "react-router-dom";

export default function CartButton() {
  return (
    <Link to="/cart">
      <img className="sm" src="../../public/images/cart.png" />
    </Link>
  );
}
