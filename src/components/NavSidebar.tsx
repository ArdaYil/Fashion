import { Link } from "react-router-dom";
import Title from "./Title";

export default function NavSidebar() {
  return (
    <aside>
      <Title />
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/">Register</Link>
        </li>
        <li>
          <Link to="/"></Link>
        </li>
      </ul>
    </aside>
  );
}
