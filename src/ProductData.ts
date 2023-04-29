import Colors from "./Colors";
import ProductInterface from "./interfaces/ProductInterface";

interface ProductDataInterface {
  [key: string]: { [key: string]: ProductInterface };
}

const productData: ProductDataInterface = {
  nike: {
    "Nike Jordans 1 High": {
      id: "nike-jordans-1-high",
      title: "Nike Jordans 1 High",
      price: 420,
      colors: [Colors.RED, Colors.YELLOW, Colors.BLUE],
    },

    "Nike Airforce 1": {
      title: "Nike Airforce 1",
      id: "nike-airforce-1",
      price: 120,
      colors: [Colors.BLUE, Colors.GREEN],
    },

    "Nike Air Max": {
      title: "Nike Air Max",
      id: "nike-air-max",
      price: 220,
      colors: [Colors.RED, Colors.YELLOW, Colors.CYAN],
    },

    "Nike Mercurial Vaper": {
      title: "Nike Mercurial Vapor",
      id: "nike-mercurial-vaper",
      price: 320,
      colors: [Colors.CYAN, Colors.BLUE],
    },
  },
  adidas: {},
  converse: {},
  newBalance: {},
};

const getProductDataFromId = (id: string) => {
  for (let i in productData) {
    for (let y in productData[i]) {
      if (productData[i][y].id == id) return productData[i][y];
    }
  }
};

export default productData;

export { ProductDataInterface, getProductDataFromId };
