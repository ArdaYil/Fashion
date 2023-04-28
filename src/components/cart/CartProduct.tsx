import ProductInCartInterface from "../../interfaces/ProductInCartInterface";

interface Props {
  product: ProductInCartInterface;
}

export default function CartProduct({ product }: Props) {
  const { title, amount, price, size, imgPath } = product;

  return (
    <article className="cart__product">
      <img className="cart__product__image" src={imgPath} />
      <p className="cart__product__title">{title}</p>
      <p className="cart__product__amount">{amount}</p>
      <p className="cart__product__price">{price}</p>
      <p className="cart__product__size">{size}</p>
    </article>
  );
}
