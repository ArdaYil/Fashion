import { Link } from "react-router-dom";

export default function NavLinks() {
  return (
    <div className="nav-bar__nav-links">
      <Link className="nav-bar__nav-link" to="/">
        Login
      </Link>
      <Link className="nav-bar__nav-link" to="/">
        Register
      </Link>
      <Link className="nav-bar__nav-link" to="/">
        Blog
      </Link>
      <Link className="nav-bar__nav-link" to="/">
        Products
      </Link>
    </div>
  );
}
