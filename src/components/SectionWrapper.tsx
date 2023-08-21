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
    skew?: "top" | "bottom" | "both";
    guides?: JSX.Element;
    background?: JSX.Element;
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
    background,
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
        {/* background */}
        <div className="absolute h-full w-full overflow-visible">
          <div className="relative h-full w-full overflow-hidden">
            <div
              className={classnames(
                "absolute left-0 top-0 h-full max-h-none w-full origin-top-right overflow-hidden",
                className,
                bgClassMap[bgStyle ?? "default"],
                skew === "top" && "-skew-y-[6deg]"
              )}
            >
              {/* background */}
              {background ?? (
                <div
                  className={classnames(
                    "absolute left-0 top-0 m-0 h-full w-full",
                    skew === "top" && "skew-y-[6deg]"
                  )}
                >
                  {background}
                </div>
              )}
              {/* guides */}
              {withGuides && guides ? guides : <Guides />}
            </div>
          </div>
        </div>
        {/* content */}
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
