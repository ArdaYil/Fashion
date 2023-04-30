import CartProduct from "./components/cart/CartProduct";
import Navigation from "./components/Navigation";
import ProductInCartInterface from "./interfaces/ProductInCartInterface";
import Number from "./services/Number";

interface Props {
  cart: ProductInCartInterface[];
}

export default function Cart({ cart }: Props) {
  const renderCart = () => {
    return (
      <>
        <h2 className="cart__heading">{`Amount of products: ${cart.length}`}</h2>
        <div className="cart">
          {cart.map((product) => (
            <CartProduct
              key={
                product.id.toString() +
                product.color +
                product.amount +
                product.size
              }
              product={product}
            />
          ))}
        </div>
        <h3 className="cart__price">
          Total Price: $
          {Number.priceFormat(cart.reduce((a, b) => a + b.price * b.amount, 0))}
        </h3>
        <button className="btn--white--outline cart__checkout">Checkout</button>
      </>
    );
  };

  const renderEmptyCart = () => <h1 className="empty-cart">Cart is empty</h1>;

  return (
    <section className="cart-page">
      {cart.length == 0 ? renderEmptyCart() : renderCart()}
    </section>
  );
}
