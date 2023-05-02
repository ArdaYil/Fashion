enum Colors {
  RED,
  YELLOW,
  BLUE,
  WHITE,
  GRAY,
  GREEN,
  CYAN,
  BEIGE,
  BLACK,
  MAGENTA,
  ORANGE,
  LIGHTBLUE,
  PINK,
}

interface BackgroundStyleInterface {
  backgroundColor: string;
}

const colorMap = new Map<Colors, BackgroundStyleInterface>();
colorMap.set(Colors.RED, { backgroundColor: "#FF3F3F" });
colorMap.set(Colors.YELLOW, { backgroundColor: "#FFFF00" });
colorMap.set(Colors.BLUE, { backgroundColor: "#0038FF" });
colorMap.set(Colors.WHITE, { backgroundColor: "#FFFFFF" });
colorMap.set(Colors.GRAY, { backgroundColor: "#373737" });
colorMap.set(Colors.GREEN, { backgroundColor: "#0D8D12" });
colorMap.set(Colors.CYAN, { backgroundColor: "#4DD4FF" });
colorMap.set(Colors.BEIGE, { backgroundColor: "#FFAD62" });
colorMap.set(Colors.BLACK, { backgroundColor: "#333333" });
colorMap.set(Colors.MAGENTA, { backgroundColor: "#8B1874" });
colorMap.set(Colors.ORANGE, { backgroundColor: "#F79540" });
colorMap.set(Colors.LIGHTBLUE, { backgroundColor: "#A6D0DD" });
colorMap.set(Colors.PINK, { backgroundColor: "#D864A9" });

const getBackgroundColorStyle = (color: Colors) => colorMap.get(color);

export default Colors;
export { getBackgroundColorStyle };
