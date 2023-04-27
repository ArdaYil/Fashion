import Colors, { getBackgroundColorStyle } from "../../Colors";
import ProductImageMapping from "../../ProductImageMapping";
import { useState } from "react";
interface Props {
  id: string;
  title: string;
  price: number;
  colors: Colors[];
}

export default function ProductComponent({ title, price, colors, id }: Props) {
  const [currentColor, setCurrentColor] = useState<Colors>(colors[0]);
  const image = ProductImageMapping[id].get(currentColor);

  const handleColorChange = () => {};

  return (
    <article className="products__product">
      <h2 className="products__product__heading">{title}</h2>
      <img src={image} alt="An image of a sneaker" />
      <section className="products__product__lower-part">
        <p className="products__product__price">${price}</p>
        {colors.map((color) => (
          <div
            className="products__product__color-btn"
            style={{ ...getBackgroundColorStyle(color) }}
          ></div>
        ))}
        <button className="products__product__add-to-cart">Add to Cart</button>
      </section>
    </article>
  );
}
