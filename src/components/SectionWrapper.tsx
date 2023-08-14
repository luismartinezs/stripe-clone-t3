import classnames from "classnames";
import React from "react";
import { Guides } from "~/components/Guides";
import { WidthWrapper } from "~/components/WidthWrapper";

export function SectionWrapper(
  props: React.ComponentPropsWithoutRef<"section"> & {
    withGuides?: boolean;
    bleed?: boolean;
    yClassName?: string;
  }
) {
  const { className, children, withGuides, bleed, yClassName, ...otherProps } =
    props;
  return (
    <section className={classnames("relative", className)} {...otherProps}>
      {withGuides && (
        <Guides
          className={classnames(WidthWrapper.className.block, "max-w-[66rem]")}
        />
      )}
      <WidthWrapper width={bleed ? "full" : "block"} className="px-4">
        <div className={classnames("py-16", yClassName)}>{children}</div>
      </WidthWrapper>
    </section>
  );
}
