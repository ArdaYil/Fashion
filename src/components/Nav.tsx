import NavButton from "./NavButton";
import "../../cssDist/index.css";

export default function () {
  const handleNavClick = () => {};

  return (
    <nav className="nav-bar">
      <NavButton onClick={handleNavClick} />
      <h1>Fashion</h1>
      <img src="../../public/images/cart.png" />
    </nav>
  );
}
