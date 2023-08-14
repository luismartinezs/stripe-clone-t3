type TOrientation = "vertical" | "horizontal";

export function getCardStyles(size: number, orientation: TOrientation = "horizontal") {
  const isHorizontal = orientation === "horizontal";
  const yFactor = 2.125;
  const xFactor = 3.37;

  return {
    width: isHorizontal ? size : (size / xFactor) * yFactor,
    height: isHorizontal ? (size / xFactor) * yFactor : size,
    borderRadius: (size / xFactor) * 0.18,
  };
}
