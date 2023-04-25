import Hero from "./components/hompage/Hero";
import ProductBrands from "./components/hompage/ProductBrands";
import Nav from "./components/Nav";
import NavSidebar from "./components/NavSidebar";

export default function Homepage() {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main>
        <ProductBrands />
      </main>
    </>
  );
}
