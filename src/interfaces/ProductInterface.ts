import Colors from "../Colors";

export default interface ProductInterface {
  id: string;
  title: string;
  price: number;
  colors: Colors[];
}
