import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <img
        className="hero__image"
        src="/images/products/nike/jordans/Nike Jordans Orange.webp"
      />
      <article className="hero__content">
        <h2 className="hero__heading heading-1">
          Check out our latest collection!
        </h2>
        <Link className="btn--black--outline hero__check-out" to="/">
          Check out
        </Link>
      </article>
    </section>
  );
}
