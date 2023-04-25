import { Link } from "react-router-dom";

interface Props {
  src: string;
  brand: string;
  alt: string;
}

export default function ProductBrand({ src, brand, alt }: Props) {
  return (
    <article className="product-brands__brand">
      <h1 className="product-brands__brand__heading">{`New ${brand} Products`}</h1>
      <img src={src} alt={alt} className="product-brands__brand__image" />
      <Link to="/" className="btn--orange product-brands__brand__buy">
        Buy Now!
      </Link>
    </article>
  );
}
