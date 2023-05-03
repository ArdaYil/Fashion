import Colors from "./Colors";

const nikeJordans1HighMapping = new Map<Colors, string>();
const nikeAirForce1Mapping = new Map<Colors, string>();
const nikeAirMaxMapping = new Map<Colors, string>();
const nikeMercurialVaper = new Map<Colors, string>();

const adidasGazelle = new Map<Colors, string>();
const adidasStanSmith = new Map<Colors, string>();
const adidasSuperstar = new Map<Colors, string>();
const adidasUltraboost = new Map<Colors, string>();

const converseChuckTaylor = new Map<Colors, string>();
const converseJackPurcel = new Map<Colors, string>();
const converseOneStar = new Map<Colors, string>();
const converseProLeather = new Map<Colors, string>();

const newBalance574 = new Map<Colors, string>();
const newBalance991 = new Map<Colors, string>();
const newBalance997 = new Map<Colors, string>();
const newBalance2002 = new Map<Colors, string>();

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
  Colors.BLACK,
  "../public/images/products/nike/airmax/Black Nike Air Max.webp"
);
nikeAirMaxMapping.set(
  Colors.WHITE,
  "../public/images/products/nike/airmax/White Nike Air Max.webp"
);
nikeMercurialVaper.set(
  Colors.CYAN,
  "../public/images/products/nike/mercurial vapor/Cyan Nike Mercurial Vapor.webp"
);
nikeMercurialVaper.set(
  Colors.BLUE,
  "../public/images/products/nike/mercurial vapor/Blue Nike Mercurial Vepor.webp"
);

nikeMercurialVaper.set(
  Colors.BLUE,
  "../public/images/products/nike/mercurial vapor/Blue Nike Mercurial Vepor.webp"
);

adidasGazelle.set(
  Colors.CYAN,
  "../public/images/products/adidas/gazelle/Adidas Gazelle Cyan.webp"
);
adidasGazelle.set(
  Colors.GREEN,
  "../public/images/products/adidas/gazelle/Adidas Gazelle Green.webp"
);
adidasGazelle.set(
  Colors.RED,
  "../public/images/products/adidas/gazelle/Adidas Gazelle Red.webp"
);

adidasStanSmith.set(
  Colors.BLUE,
  "../public/images/products/adidas/stan smith/Adidas Stan Smith Blue.webp"
);
adidasStanSmith.set(
  Colors.GREEN,
  "../public/images/products/adidas/stan smith/Adidas Stan Smith Green.webp"
);
adidasStanSmith.set(
  Colors.ORANGE,
  "../public/images/products/adidas/stan smith/Adidas Stan Smith Orange.webp"
);

adidasSuperstar.set(
  Colors.BEIGE,
  "../public/images/products/adidas/superstar/Adidas Superstar Beige.webp"
);
adidasSuperstar.set(
  Colors.GRAY,
  "../public/images/products/adidas/superstar/Adidas Superstar Gray.webp"
);
adidasSuperstar.set(
  Colors.WHITE,
  "../public/images/products/adidas/superstar/Adidas Superstar White.webp"
);

adidasUltraboost.set(
  Colors.BLUE,
  "../public/images/products/adidas/ultraboost/Adidas Ultraboost Blue.webp"
);
adidasUltraboost.set(
  Colors.RED,
  "../public/images/products/adidas/ultraboost/Adidas Ultraboost Red.webp"
);
adidasUltraboost.set(
  Colors.WHITE,
  "../public/images/products/adidas/ultraboost/Adidas Ultraboost White.webp"
);

converseChuckTaylor.set(
  Colors.BLACK,
  "../public/images/products/converse/chuck taylor/Converse Chuck Taylor Black.webp"
);
converseChuckTaylor.set(
  Colors.MAGENTA,
  "../public/images/products/converse/chuck taylor/Converse Chuck Taylor Magenta.webp"
);
converseChuckTaylor.set(
  Colors.RED,
  "../public/images/products/converse/chuck taylor/Converse Chuck Taylor Red.webp"
);

converseJackPurcel.set(
  Colors.WHITE,
  "../public/images/products/converse/jack purcel/Converse Jack Purcel.webp"
);

converseOneStar.set(
  Colors.GREEN,
  "../public/images/products/converse/one star/Converse One Star Green.webp"
);
converseOneStar.set(
  Colors.WHITE,
  "../public/images/products/converse/one star/Converse One Star White.webp"
);

converseProLeather.set(
  Colors.BEIGE,
  "../public/images/products/converse/pro leather/Converse Pro Leather Beige.webp"
);

newBalance574.set(
  Colors.BLUE,
  "../public/images/products/new balance/574/New Balance 574 Blue.webp"
);
newBalance574.set(
  Colors.GREEN,
  "../public/images/products/new balance/574/New Balance 574 Green.webp"
);
newBalance574.set(
  Colors.ORANGE,
  "../public/images/products/new balance/574/New Balance 574 Orange.webp"
);

newBalance991.set(
  Colors.LIGHTBLUE,
  "../public/images/products/new balance/991/New Balance 991 LightBlue.webp"
);
newBalance991.set(
  Colors.PINK,
  "../public/images/products/new balance/991/New Balance 991 Pink.webp"
);

newBalance997.set(
  Colors.BEIGE,
  "../public/images/products/new balance/997/New Balance 997 Beige.webp"
);
newBalance997.set(
  Colors.BLUE,
  "../public/images/products/new balance/997/New Balance 997 Blue.webp"
);
newBalance997.set(
  Colors.GREEN,
  "../public/images/products/new balance/997/New Balance 997 Green.webp"
);

newBalance2002.set(
  Colors.BEIGE,
  "../public/images/products/new balance/2002/New Balance 2002RD Beige.webp"
);
newBalance2002.set(
  Colors.BLUE,
  "../public/images/products/new balance/2002/New Balance 2002RD Blue.webp"
);
interface ImageMappingInterface {
  [key: string]: Map<Colors, string>;
}

const ProductImageMapping: ImageMappingInterface = {
  "nike-jordans-1-high": nikeJordans1HighMapping,
  "nike-airforce-1": nikeAirForce1Mapping,
  "nike-air-max": nikeAirMaxMapping,
  "nike-mercurial-vaper": nikeMercurialVaper,

  "adidas-gazelle": adidasGazelle,
  "adidas-stan-smith": adidasStanSmith,
  "adidas-superstar": adidasSuperstar,
  "adidas-ultraboost": adidasUltraboost,

  "converse-chuck-taylor": converseChuckTaylor,
  "converse-jack-purcel": converseJackPurcel,
  "converse-one-star": converseOneStar,
  "converse-pro-leather": converseProLeather,

  "new-balance-574": newBalance574,
  "new-balance-991": newBalance991,
  "new-balance-997": newBalance997,
  "new-balance-2002": newBalance2002,
};

export default ProductImageMapping;
