// partly based on this https://www.youtube.com/watch?v=neD6rV70Mlk
import classnames from "classnames";
import styles from "./StripeHeroEffect.module.css";

import { gradient } from "~/utils/gradient";
import { useEffect, useRef } from "react";

const title = "Payments infrastructure for the internet";

export function StripeHeroEffect() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvas.current) {
      gradient(canvas.current)();
    }
  }, []);

  return (
    <section className={classnames(styles.hero, "")} id="hero">
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={classnames(styles.title, styles.titleMain)}>
            {title}
          </h1>
          <div
            aria-hidden
            className={classnames(styles.title, styles.titleOverlay)}
          >
            {title}
          </div>
          <div
            aria-hidden
            className={classnames(styles.title, styles.titleOverlay)}
          >
            {title}
          </div>
        </div>
        <div className={styles.canvasContainer}>
          <canvas
            ref={canvas}
            id="canv"
            className={styles.canvas}
            width="32"
            height="32"
          ></canvas>
        </div>
      </div>
    </section>
  );
}