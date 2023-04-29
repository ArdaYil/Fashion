import ProductInCartInterface from "../../interfaces/ProductInCartInterface";
import { Context } from "../../App";
import { useContext } from "react";

interface Props {
  product: ProductInCartInterface;
}

export default function CartProduct({ product }: Props) {
  const { title, amount, price, size, imgPath } = product;
  const { removeProductFromCart } = useContext(Context);

  return (
    <article className="cart__product">
      <img className="cart__product__image" src={imgPath} />
      <img
        onClick={() => removeProductFromCart(product)}
        src="../../../public/icons/close.png"
        alt="An image of an X for a close button"
        className="cart__product__close"
      />
      <p className="cart__product__title">{title}</p>
      <p className="cart__product__amount">Amount: {amount}</p>
      <p className="cart__product__price">Price: ${price}</p>
      <p className="cart__product__size">Size: {size}</p>
    </article>
  );
}
