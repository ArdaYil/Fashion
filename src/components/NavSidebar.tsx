import { useState } from "react";
import { Link } from "react-router-dom";
import CloseButton from "./CloseButton";
import Title from "./Title";

interface Props {
  isOpen: boolean;
  onNavSidebarClose: () => void;
}

export default function NavSidebar({ isOpen, onNavSidebarClose }: Props) {
  const activeClass = isOpen ? " active" : "";

  return (
    <aside className={"nav-sidebar" + activeClass}>
      <header className="nav-sidebar__header">
        <Title className="nav-sidebar__title" noLink />
        <CloseButton
          className="nav-sidebar__close-btn"
          onClick={onNavSidebarClose}
        />
      </header>
      <ul className="nav-sidebar__body list">
        <li>
          <Link className="nav-sidebar__body-item" to="/">
            Login
          </Link>
        </li>
        <li>
          <Link className="nav-sidebar__body-item" to="/">
            Register
          </Link>
        </li>
        <li>
          <Link className="nav-sidebar__body-item" to="/">
            Blog
          </Link>
        </li>
        <li>
          <Link className="nav-sidebar__body-item" to="/">
            Products
          </Link>
        </li>
      </ul>
    </aside>
  );
}
