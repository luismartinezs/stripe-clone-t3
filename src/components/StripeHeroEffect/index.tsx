// partly based on this https://www.youtube.com/watch?v=neD6rV70Mlk
import classnames from "classnames";

import { GradientEffect } from "~/components/StripeHeroEffect/GradientEffect";
export { TextEffect } from "~/components/StripeHeroEffect/TextEffect";

export function StripeHeroEffect(
  props: React.ComponentPropsWithoutRef<"div"> & {
    titleClass?: string;
  }
) {
  const { className, ...otherProps } = props;

  return (
    <div className={classnames(className)} id="hero" {...otherProps}>
      <div className="isolate">
        <GradientEffect />
      </div>
    </div>
  );
}

export { GradientEffect };
