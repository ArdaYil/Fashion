import { Link } from "react-router-dom";
import Title from "./Title";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer__section">
        <Link to="/" className="footer__section__text">
          Contact Us
        </Link>
        <Link to="/" className="footer__section__text">
          About Us
        </Link>
      </section>
      <section className="footer__section">
        <Link to="/" className="footer__section__text">
          FAQ
        </Link>
        <Link to="/" className="footer__section__text">
          Returns & Exchanges
        </Link>
      </section>
      <section className="footer__section">
        <Link to="/" className="footer__section__text">
          Terms of Service
        </Link>
        <Link to="/" className="footer__section__text">
          Privacy Policy
        </Link>
        <Link to="/" className="footer__section__text">
          GDPR
        </Link>
      </section>
      <section className="footer__section footer__section-icon-container">
        <img className="footer__icon" src="../../public/icons/discord.png" />
        <img className="footer__icon" src="../../public/icons/twitter.png" />
        <img className="footer__icon" src="../../public/icons/facebook.png" />
        <img className="footer__icon" src="../../public/icons/instagram.png" />
      </section>
      <section className="footer__section footer__title-section">
        <Title className="nav-bar__title footer__title" />
        <Link to="/" className="footer__section__text">
          &copy; 2023 Fashion. All Rights Reserved
        </Link>
      </section>
    </footer>
  );
}
