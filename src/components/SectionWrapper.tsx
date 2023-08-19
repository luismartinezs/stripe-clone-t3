import classnames from "classnames";
import React from "react";
import { Guides } from "~/components/Guides";
import { WidthWrapper } from "~/components/WidthWrapper";

export function SectionWrapper(
  props: React.ComponentPropsWithoutRef<"section"> & {
    withGuides?: boolean;
    bleed?: boolean;
    yClassName?: string;
    bgStyle?: "gray" | "dark";
    skew?: boolean;
  }
) {
  const {
    className,
    children,
    withGuides,
    bleed,
    yClassName,
    bgStyle,
    skew,
    ...otherProps
  } = props;
  const bgClassMap = {
    gray: "bg-[#F6F9FC]",
    dark: "bg-[#0a2540] text-white",
    default: "",
  };
  return (
    <section className={classnames("relative", className)} {...otherProps}>
      <div
        className={classnames(
          "absolute inset-0",
          className,
          bgClassMap[bgStyle ?? "default"],
          skew && "-skew-y-[6deg]"
        )}
      ></div>
      {withGuides && (
        <Guides
          className={classnames(WidthWrapper.className.block, "max-w-[66rem]")}
        />
      )}
      <WidthWrapper
        width={bleed ? "full" : "block"}
        className="relative z-10 px-4"
      >
        <div className={classnames("py-16", yClassName)}>{children}</div>
      </WidthWrapper>
    </section>
  );
}
