import NavButton from "./NavButton";
import "../../cssDist/index.css";
import CartButton from "./CartButton";
import Title from "./Title";

interface Props {
  onNavSidebarOpen: () => void;
}

export default function ({ onNavSidebarOpen }: Props) {
  return (
    <nav className="nav-bar">
      <NavButton onClick={onNavSidebarOpen} />
      <Title className="nav-bar__title" />
      <CartButton />
    </nav>
  );
}
