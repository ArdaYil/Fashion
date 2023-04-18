import { useState } from "react";
import Nav from "./Nav";
import NavSidebar from "./NavSidebar";

export default function Navigation() {
  const [navSidebarOpen, setNavSidebarOpen] = useState<boolean>(false);
  const handleNavSidebarOpen = () => setNavSidebarOpen(true);
  const handleNavSidebarClose = () => setNavSidebarOpen(false);

  return (
    <>
      <Nav onNavSidebarOpen={handleNavSidebarOpen} />
      <NavSidebar
        onNavSidebarClose={handleNavSidebarClose}
        isOpen={navSidebarOpen}
      />
    </>
  );
}
