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
    guides?: JSX.Element;
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
    guides,
    ...otherProps
  } = props;
  const bgClassMap = {
    gray: "bg-[#F6F9FC]",
    dark: "bg-[#0a2540] text-white",
    default: "",
  };
  return (
    <section className={classnames("relative", className)} {...otherProps}>
      <div className="overflow-hidden">
        <div className="absolute h-full w-full overflow-visible">
          <div
            className={classnames(
              "relative left-0 top-0 h-full max-h-none w-full overflow-hidden",
              className,
              bgClassMap[bgStyle ?? "default"],
              skew && "-skew-y-[6deg]"
            )}
          >
            {withGuides && guides ? guides : <Guides />}
          </div>
        </div>

        <WidthWrapper
          width={bleed ? "full" : "block"}
          className="relative z-10 px-4"
        >
          <div className={classnames("py-16", yClassName)}>{children}</div>
        </WidthWrapper>
      </div>
    </section>
  );
}
