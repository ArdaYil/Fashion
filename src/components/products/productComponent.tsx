import Colors, { getBackgroundColorStyle } from "../../Colors";
import ProductImageMapping from "../../ProductImageMapping";
import { useContext, useState } from "react";
import { Context } from "../../App";
import { useRef } from "react";
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
  const select = useRef<HTMLSelectElement>(null);

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
              key={color}
              onClick={() => handleColorChange(color)}
              className="products__product__color-btn"
              style={{ ...getBackgroundColorStyle(color) }}
            ></div>
          ))}
        </div>
        <button
          onClick={() => {
            const size = select?.current?.value || "43";
            addProductToCart(id, currentColor, size);
          }}
          className="products__product__add-to-cart btn--white--outline"
        >
          Add to Cart
        </button>
        <select ref={select} className="products__product__size-input">
          <option>42</option>
          <option>43</option>
          <option>44</option>
          <option>45</option>
          <option>46</option>
          <option>47</option>
          <option>48</option>
        </select>
      </section>
    </article>
  );
}
