import Colors from "./Colors";

const nikeJordans1HighMapping = new Map<Colors, string>();
const nikeAirForce1Mapping = new Map<Colors, string>();
const nikeAirMaxMapping = new Map<Colors, string>();
const nikeMercurialVaper = new Map<Colors, string>();

nikeJordans1HighMapping.set(
  Colors.RED,
  "../public/images/products/nike/jordans/Red Nike Jordans.webp"
);

nikeJordans1HighMapping.set(
  Colors.YELLOW,
  "../public/images/products/nike/jordans/Yellow Nike Jordans.webp"
);

nikeJordans1HighMapping.set(
  Colors.BLUE,
  "../public/images/products/nike/jordans/Blue Nike Jordans.webp"
);

nikeAirForce1Mapping.set(
  Colors.BLUE,
  "../public/images/products/nike/airforce 1/Blue Nike Airforce 1.webp"
);
nikeAirForce1Mapping.set(
  Colors.GREEN,
  "../public/images/products/nike/airforce 1/Green Nike Airforce 1.webp"
);
nikeAirMaxMapping.set(
  Colors.RED,
  "../public/images/products/nike/airmax/Red Nike Air Max.webp"
);
nikeAirMaxMapping.set(
  Colors.YELLOW,
  "../public/images/products/nike/airmax/Yellow Nike Air Max.webp"
);
nikeAirMaxMapping.set(
  Colors.CYAN,
  "../public/images/products/nike/airmax/Cyan Nike Air Max.webp"
);
nikeMercurialVaper.set(
  Colors.CYAN,
  "../public/images/products/nike/mercurial vapor/Cyan Nike Mercurial Vapor.webp"
);
nikeMercurialVaper.set(
  Colors.BLUE,
  "../public/images/products/nike/mercurial vapor/Blue Nike Mercurial Vepor.webp"
);

interface ImageMappingInterface {
  [key: string]: Map<Colors, string>;
}

const ProductImageMapping: ImageMappingInterface = {
  "nike-jordans-1-high": nikeJordans1HighMapping,
  "nike-airforce-1": nikeAirForce1Mapping,
  "nike-air-max": nikeAirMaxMapping,
  "nike-mercurial-vaper": nikeMercurialVaper,
};

export default ProductImageMapping;
