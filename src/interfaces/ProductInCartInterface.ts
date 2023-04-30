import Colors from "../Colors";

export default interface ProductInCartInterface {
  title: string;
  id: string;
  amount: number;
  price: number;
  size: string;
  imgPath: string;
  color: Colors;
}
