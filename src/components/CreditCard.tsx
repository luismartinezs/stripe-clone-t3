import Image from "next/image";
import classNames from "classnames";
import { getCardStyles } from "~/utils/getCardStyles";

export function SmallCard({
  size,
  src,
  name,
  className,
}: {
  size: number;
  src: string;
  name: string;
  className?: string;
}) {
  return (
    <div
      className={classNames(
        "flex items-center justify-center border border-gray-200 bg-white",
        className
      )}
      style={getCardStyles(size)}
    >
      <Image
        src={src}
        alt={name ? `${name} logo` : ""}
        width={size}
        height={(size / 3.37) * 2.125}
      />
    </div>
  );
}

function LargeCard({
  size,
  className,
  orientation,
  children,
}: {
  size: number;
  className?: string;
  orientation?: "vertical" | "horizontal";
  children?: React.ReactNode;
}) {
  return (
    <div
      style={getCardStyles(size, orientation)}
      className={classNames(className, "border border-gray-200")}
    >
      {children}
    </div>
  );
}

export const CreditCard = {
  Small: SmallCard,
  Large: LargeCard,
};
