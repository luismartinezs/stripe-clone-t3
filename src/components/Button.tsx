import classnames from "classnames";

import { Spinner } from "~/components/Spinner";

const variantMap = {
  primary: "bg-primary-500 hover:bg-primary-600",
  secondary: "bg-gray-500 hover:bg-primary-600",
};

export function Button(
  props: React.ComponentPropsWithoutRef<"button"> & {
    variant?: "primary" | "secondary";
    isLoading?: boolean;
  }
) {
  const { className, variant, isLoading, children, ...otherProps } = props;
  const color = variantMap[variant ?? "primary"];

  return (
    <button
      {...otherProps}
      className={classnames(
        "outline-primary-400 flex items-center justify-center gap-2 rounded px-4 py-2 text-white outline-offset-2 hover:translate-y-px focus:outline disabled:bg-gray-500",
        color,
        className
      )}
    >
      {isLoading && <Spinner />}
      {children}
    </button>
  );
}
