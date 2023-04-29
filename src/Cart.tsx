import CartProduct from "./components/cart/CartProduct";
import Navigation from "./components/Navigation";
import ProductInCartInterface from "./interfaces/ProductInCartInterface";

interface Props {
  cart: ProductInCartInterface[];
}

export default function Cart({ cart }: Props) {
  const renderCart = () => {
    return (
      <>
        <h1 className="cart__heading">{`Amount of products: ${cart.length}`}</h1>
        <div className="cart">
          {cart.map((product) => (
            <CartProduct
              key={product.id + product.color + product.amount}
              product={product}
            />
          ))}
        </div>
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
