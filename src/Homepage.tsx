import Hero from "./components/hompage/Hero";
import ProductBrands from "./components/hompage/ProductBrands";

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
