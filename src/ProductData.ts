import Colors from "./Colors";
import ProductInterface from "./interfaces/ProductInterface";

interface ProductDataInterface {
  [key: string]: ProductDataInterface;
}

export default {
  nike: {
    "Nike Jordans 1 High": {
      id: "nike-jordans-1-high",
      title: "Nike Jordans 1 High",
      price: 420,
      colors: [Colors.RED, Colors.YELLOW, Colors.BLUE],
    },

    "Nike Airforce 1": {
      title: "Nike Airforce 1",
      price: 120,
      colors: [Colors.WHITE, Colors.GRAY],
    },

    "Nike Air Max": {
      title: "Nike Airforce 1",
      price: 220,
      colors: [Colors.RED, Colors.GREEN, Colors.BLUE],
    },

    "Nike Mercurial Vaper": {
      title: "Nike Airforce 1",
      price: 320,
      colors: [Colors.CYAN, Colors.BEIGE],
    },
  },
  adidas: {},
  converse: {},

  "new balance": {},
};
