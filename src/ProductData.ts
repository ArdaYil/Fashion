import Colors from "./Colors";
import ProductInterface from "./interfaces/ProductInterface";

interface ProductDataInterface {
  [key: string]: { [key: string]: ProductInterface };
}

const productData: ProductDataInterface = {
  nike: {
    "Nike Jordans High": {
      id: "nike-jordans-1-high",
      title: "Nike Jordan 1 High",
      price: 420,
      colors: [Colors.RED, Colors.YELLOW, Colors.BLUE],
    },

    "Nike Airforce 1": {
      title: "Nike Jordan 1 Low",
      id: "nike-airforce-1",
      price: 120,
      colors: [Colors.BLUE, Colors.GREEN],
    },

    "Nike Air Max": {
      title: "Nike Air Max",
      id: "nike-air-max",
      price: 220,
      colors: [Colors.BLACK, Colors.WHITE],
    },

    "Nike Mercurial Vaper": {
      title: "Nike Mercurial Vapor",
      id: "nike-mercurial-vaper",
      price: 320,
      colors: [Colors.CYAN, Colors.BLUE],
    },
  },
  adidas: {
    "Adidas Gazelle": {
      id: "adidas-gazelle",
      title: "Adidas Gazelle",
      price: 420,
      colors: [Colors.CYAN, Colors.GREEN, Colors.RED],
    },

    "Adidas Stan Smith": {
      title: "Adidas Stan Smith",
      id: "adidas-stan-smith",
      price: 120,
      colors: [Colors.BLUE, Colors.GREEN, Colors.ORANGE],
    },

    "Adidas Superstar": {
      title: "Adidas Superstar",
      id: "adidas-superstar",
      price: 220,
      colors: [Colors.BEIGE, Colors.GRAY, Colors.WHITE],
    },

    "Adidas Ultraboost": {
      title: "Adidas Ultraboost",
      id: "adidas-ultraboost",
      price: 320,
      colors: [Colors.BLUE, Colors.RED, Colors.WHITE],
    },
  },
  converse: {
    "Converse Chuck Taylor": {
      id: "converse-chuck-taylor",
      title: "Converse Chuck Taylor",
      price: 420,
      colors: [Colors.BLACK, Colors.MAGENTA, Colors.RED],
    },

    "Converse Jack Purcel": {
      title: "Converse Jack Purcel",
      id: "converse-jack-purcel",
      price: 120,
      colors: [Colors.WHITE],
    },

    "Converse One Star": {
      title: "Converse One Star",
      id: "converse-one-star",
      price: 220,
      colors: [Colors.GREEN, Colors.WHITE],
    },

    "Converse Pro Leather": {
      title: "Converse Pro Leather",
      id: "converse-pro-leather",
      price: 320,
      colors: [Colors.BEIGE],
    },
  },
  newbalance: {
    "New Balance 574": {
      id: "new-balance-574",
      title: "New Balance 574",
      price: 420,
      colors: [Colors.BLUE, Colors.GREEN, Colors.ORANGE],
    },

    "New Balance 991": {
      title: "New Balance 991",
      id: "new-balance-991",
      price: 120,
      colors: [Colors.LIGHTBLUE, Colors.PINK],
    },

    "New Balance 997": {
      title: "New Balance 997",
      id: "new-balance-997",
      price: 220,
      colors: [Colors.BEIGE, Colors.BLUE, Colors.GREEN],
    },

    "New Balance 2002": {
      title: "New Balance 2002",
      id: "new-balance-2002",
      price: 320,
      colors: [Colors.BEIGE, Colors.BLUE],
    },
  },
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
