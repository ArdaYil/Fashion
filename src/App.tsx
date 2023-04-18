import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Homepage from "./Homepage";
import Products from "./Products";

function App() {
  return (
    <Routes>
      <Route path="/cart" element={<Cart />} />
      <Route path="/products" element={<Products />} />
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}

export default App;
