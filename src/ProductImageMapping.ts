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

nikeAirForce1Mapping.set(Colors.WHITE, "");
nikeAirForce1Mapping.set(Colors.GRAY, "");
nikeAirMaxMapping.set(Colors.RED, "");
nikeAirMaxMapping.set(Colors.GREEN, "");
nikeAirMaxMapping.set(Colors.BLUE, "");
nikeMercurialVaper.set(Colors.CYAN, "");
nikeMercurialVaper.set(Colors.BEIGE, "");

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
