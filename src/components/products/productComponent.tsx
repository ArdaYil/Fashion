import Colors, { getBackgroundColorStyle } from "../../Colors";
import ProductImageMapping from "../../ProductImageMapping";
import { useContext, useState } from "react";
import { Context } from "../../App";
interface Props {
  id: string;
  title: string;
  price: number;
  colors: Colors[];
}

export default function ProductComponent({ title, price, colors, id }: Props) {
  const { addProductToCart } = useContext(Context);
  const [currentColor, setCurrentColor] = useState<Colors>(colors[0]);
  const image = ProductImageMapping[id].get(currentColor);

  const handleColorChange = (color: Colors) => {
    setCurrentColor(color);
  };

  return (
    <article className="products__product">
      <h2 className="products__product__heading">{title}</h2>
      <img
        className="products__product__image"
        src={image}
        alt="An image of a sneaker"
      />
      <section className="products__product__lower-part">
        <p className="products__product__price">${price}</p>
        <div className="products__product__color-btn-container">
          {colors.map((color) => (
            <div
              onClick={() => handleColorChange(color)}
              className="products__product__color-btn"
              style={{ ...getBackgroundColorStyle(color) }}
            ></div>
          ))}
        </div>
        <button
          onClick={() => addProductToCart(id, currentColor)}
          className="products__product__add-to-cart btn--white--outline"
        >
          Add to Cart
        </button>
      </section>
    </article>
  );
}
