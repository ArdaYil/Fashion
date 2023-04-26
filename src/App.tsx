import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Homepage from "./Homepage";
import Products from "./Products";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import React, { useState } from "react";

export const CategoryContext = React.createContext<(value: string) => void>(
  (value) => {}
);

function App() {
  const [category, setCurrentCategory] = useState<string>("zibbi");

  const handleCategoryChange = (value: string) => setCurrentCategory(value);

  return (
    <>
      <Navigation />
      <CategoryContext.Provider value={handleCategoryChange}>
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products category={category} />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </CategoryContext.Provider>
      <Footer />
    </>
  );
}

export default App;
