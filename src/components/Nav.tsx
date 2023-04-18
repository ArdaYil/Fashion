import NavButton from "./NavButton";
import "../../cssDist/index.css";
import CartButton from "./CartButton";
import Title from "./Title";

export default function () {
  const handleNavClick = () => {};

  return (
    <nav className="nav-bar">
      <NavButton onClick={handleNavClick} />
      <Title />
      <CartButton />
    </nav>
  );
}
