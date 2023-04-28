import ProductBrand from "./ProductBrand";
import { useContext } from "react";
import { CategoryContext } from "../../App";

const productBrands = [
  {
    brand: "Nike",
    src: "../../../public/images/products/nike/jordans/Red Nike Jordans.webp",
    alt: "",
  },
  {
    brand: "Adidas",
    src: "../../../public/images/products/adidas/barricade/Adidas Barricade Purple.webp",
    alt: "",
  },
  {
    brand: "Converse",
    src: "../../../public/images/products/converse/chuck taylor/Converse Chuck Taylor Black.webp",
    alt: "",
  },
  {
    brand: "New Balance",
    src: "../../../public/images/products/new balance/574/New Balance 574 Blue.webp",
    alt: "",
  },
];

export default function ProductBrands() {
  const handleCategoryChange = useContext(CategoryContext);

  return (
    <section className="product-brands">
      {productBrands.map((brand) => (
        <ProductBrand {...brand} onBuyClicked={handleCategoryChange} />
      ))}
    </section>
  );
}
