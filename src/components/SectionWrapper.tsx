import classnames from "classnames";
import React from "react";
import { Guides } from "~/components/Guides";
import { WidthWrapper } from "~/components/WidthWrapper";

export function SectionWrapper(
  props: React.ComponentPropsWithoutRef<"section"> & {
    withGuides?: boolean;
    bleed?: boolean;
  }
) {
  const { className, children, withGuides, bleed, ...otherProps } = props;
  return (
    <div>
      <WidthWrapper className="relative" width={bleed ? "full" : "block"}>
        {withGuides && <Guides />}
        <section
          className={classnames("py-12 xl:mb-32 xl:mt-16", className)}
          {...otherProps}
        >
          {children}
        </section>
      </WidthWrapper>
    </div>
  );
}
