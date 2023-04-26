import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Homepage from "./Homepage";
import Products from "./Products";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [category, setCurrentCategory] = useState<string>("");

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products category={} />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
