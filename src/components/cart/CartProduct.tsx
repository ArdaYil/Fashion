import ProductInCartInterface from "../../interfaces/ProductInCartInterface";

interface Props {
  cart: ProductInCartInterface[];
}

export default function CartProduct({ cart }: Props) {
  return (
    <article className="cart__product">
      <img className="cart__product__image" />
      <p className="cart__product__title"></p>
      <p className="cart__product__title"></p>
      <p className="cart__product__title"></p>
    </article>
  );
}
