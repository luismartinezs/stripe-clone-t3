// partly based on this https://www.youtube.com/watch?v=neD6rV70Mlk
import { useEffect, useRef } from "react";
import classnames from "classnames";
import styles from "./StripeHeroEffect.module.css";

import { gradient } from "~/utils/gradient";
import { config } from "~/config";

const title = "Payments infrastructure for the internet";

const textClass = "text-[70px] sm:text-[77px] lg:text-[94px]";

export function StripeHeroEffect(props: React.ComponentPropsWithoutRef<"div">) {
  const { className, ...otherProps } = props;
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvas.current && !config.disableHeroAnimation) {
      gradient(canvas.current)();
    }
  }, []);

  return (
    <div
      className={classnames(styles.hero, className)}
      id="hero"
      {...otherProps}
    >
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={classnames(styles.title, textClass, styles.titleMain)}>
            {title}
          </h1>
          <div
            aria-hidden
            className={classnames(styles.title, textClass, styles.titleOverlay)}
          >
            {title}
          </div>
          <div
            aria-hidden
            className={classnames(styles.title, textClass, styles.titleOverlay)}
          >
            {title}
          </div>
        </div>
        <div
          className={classnames(
            styles.canvasContainer,
            config.disableHeroAnimation &&
              "bg-gradient-to-tr from-orange-500 via-purple-500 to-pink-500"
          )}
        >
          <canvas
            ref={canvas}
            id="gradientCanvas"
            className={styles.canvas}
            width="32"
            height="32"
          ></canvas>
        </div>
      </div>
    </div>
  );
}
