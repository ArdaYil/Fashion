import { Route, Routes, Navigate } from "react-router-dom";
import Cart from "./Cart";
import Homepage from "./Homepage";
import Products from "./Products";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import React, { useState } from "react";
import ProductInCartInterface from "./interfaces/ProductInCartInterface";
import Colors from "./Colors";
import { getProductDataFromId } from "./ProductData";
import ProductImageMapping from "./ProductImageMapping";
import NotFound from "./NotFound";

interface ContextInterface {
  handleCategoryChange: (value: string) => void;
  addProductToCart: (id: string, color: Colors) => void;
  removeProductFromCart: (product: ProductInCartInterface) => void;
}

export const Context = React.createContext<ContextInterface>({
  handleCategoryChange: () => {},
  addProductToCart: () => {},
  removeProductFromCart: () => {},
});

function App() {
  const [category, setCurrentCategory] = useState<string>("");
  const [cart, updateCart] = useState<ProductInCartInterface[]>([]);

  const handleCategoryChange = (value: string) => setCurrentCategory(value);

  const findProductWithCombination = (filter: any) => {
    for (let i in cart) {
      const product: { [key: string]: any } = cart[i];
      let found = true;

      for (let property in filter) {
        const value = filter[property];

        if (product[property] != value) found = false;
      }

      if (found) return parseInt(i);
    }

    return -1;
  };

  const addProductToCart = (id: string, color: Colors) => {
    const index = findProductWithCombination({ id, color });
    if (index != -1) {
      const product = { ...cart[index] };
      product.amount++;

      const newCart = [...cart];
      newCart[index] = product;

      updateCart(newCart);

      return;
    }

    const productData = getProductDataFromId(id);

    if (!productData) return;

    const image = ProductImageMapping[id].get(color);

    if (!image) return;

    const newProduct = {
      title: productData.title,
      id: id,
      amount: 1,
      price: productData.price.toString(),
      size: 43,
      imgPath: image,
      color: color,
    };

    updateCart([...cart, newProduct]);
  };

  const removeProductFromCart = (product: ProductInCartInterface) => {
    updateCart(cart.filter((p) => p != product));
  };

  const contextObject = {
    handleCategoryChange,
    addProductToCart,
    removeProductFromCart,
  };

  return (
    <>
      <Navigation cart={cart} />
      <Context.Provider value={contextObject}>
        <Routes>
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/products" element={<Navigate to="/not-found" />} />
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Context.Provider>
      <Footer />
    </>
  );
}

export default App;
