import ProductBrand from "./ProductBrand";
import { useContext } from "react";
import { Context } from "../../App";

const productBrands = [
  {
    brand: "Nike",
    src: "/images/products/nike/jordans/Red Nike Jordans.webp",
    alt: "",
  },
  {
    brand: "Adidas",
    src: "/images/products/adidas/ultraboost/Adidas Ultraboost Red.webp",
    alt: "",
  },
  {
    brand: "Converse",
    src: "/images/products/converse/chuck taylor/Converse Chuck Taylor Black.webp",
    alt: "",
  },
  {
    brand: "NewBalance",
    src: "/images/products/new balance/574/New Balance 574 Blue.webp",
    alt: "",
  },
];

export default function ProductBrands() {
  const { handleCategoryChange } = useContext(Context);

  return (
    <section className="product-brands">
      {productBrands.map((brand) => (
        <ProductBrand
          key={brand.brand}
          {...brand}
          onBuyClicked={handleCategoryChange}
        />
      ))}
    </section>
  );
}
