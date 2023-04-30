export default class Number {
  public static priceFormat(price: number): string {
    const [main, decimal = ""] = price.toString().split(".");

    if (main.length <= 3) return `${main}.${decimal}`;

    let result = "";
    let counter = 1;
    let hasPassedStart = false;
    let index = 1;
    const start = main.length % 3;
    console.log(start);

    for (let i of main.split("")) {
      const comma =
        ((counter == start && hasPassedStart == false) || counter % 3 == 0) &&
        index != main.length
          ? ","
          : "";

      result += i + comma;

      counter++;
      index++;

      if (counter > start && hasPassedStart == false) {
        hasPassedStart = true;
        counter = 1;
      }
    }

    return result;
  }
}
