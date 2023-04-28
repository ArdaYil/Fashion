import Colors from "../Colors";

export default interface ProductInCartInterface {
  title: string;
  id: string;
  amount: number;
  price: string;
  size: number;
  imgPath: string;
  color: Colors;
}
