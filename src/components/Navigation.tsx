import { useState } from "react";
import Nav from "./Nav";
import NavSidebar from "./NavSidebar";
import ProductInCartInterface from "../interfaces/ProductInCartInterface";

interface Props {
  cart: ProductInCartInterface[];
}

export default function Navigation({ cart }: Props) {
  const [navSidebarOpen, setNavSidebarOpen] = useState<boolean>(false);
  const handleNavSidebarOpen = () => setNavSidebarOpen(true);
  const handleNavSidebarClose = () => setNavSidebarOpen(false);

  return (
    <>
      <Nav cart={cart} onNavSidebarOpen={handleNavSidebarOpen} />
      <NavSidebar
        onNavSidebarClose={handleNavSidebarClose}
        isOpen={navSidebarOpen}
      />
    </>
  );
}
