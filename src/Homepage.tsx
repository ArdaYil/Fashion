import Hero from "./components/hompage/Hero";
import Nav from "./components/Nav";
import Navigation from "./components/Navigation";
import NavSidebar from "./components/NavSidebar";

export default function Homepage() {
  return (
    <>
      <header>
        <Navigation />
        <Hero />
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}
