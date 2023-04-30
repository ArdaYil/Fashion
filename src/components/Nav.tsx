import NavButton from "./NavButton";
import "../../cssDist/index.css";
import CartButton from "./CartButton";
import Title from "./Title";
import ProductInCartInterface from "../interfaces/ProductInCartInterface";
import NavLinks from "./NavLinks";

interface Props {
  onNavSidebarOpen: () => void;
  cart: ProductInCartInterface[];
}

export default function ({ onNavSidebarOpen, cart }: Props) {
  return (
    <nav className="nav-bar">
      <NavButton onClick={onNavSidebarOpen} />
      <NavLinks />
      <Title className="nav-bar__title" />
      <CartButton cart={cart} />
    </nav>
  );
}
