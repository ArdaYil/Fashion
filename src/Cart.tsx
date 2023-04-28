import CartProduct from "./components/cart/CartProduct";
import Navigation from "./components/Navigation";
import ProductInCartInterface from "./interfaces/ProductInCartInterface";

interface Props {
  cart: ProductInCartInterface[];
}

export default function Cart({ cart }: Props) {
  const renderCart = () => {
    return cart.map((product) => <CartProduct product={product} />);
  };

  const renderEmptyCart = () => <h1 className="empty-cart">Cart is empty</h1>;

  return (
    <section className="cart-page">
      {cart.length == 0 ? renderEmptyCart() : renderCart()}
    </section>
  );
}
