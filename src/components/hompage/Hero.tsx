import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <img src="../../../public/images/products/nike/jordans/Nike Jordans Orange.webp" />
      <article>
        <h2>Check out our latest collection!</h2>
        <Link to="/">Check out</Link>
      </article>
    </section>
  );
}
