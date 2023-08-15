import classnames from "classnames";
import { useEffect, useRef } from "react";
import { config } from "~/config";
import { gradient } from "~/utils/gradient";

export function GradientEffect() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvas.current && !config.disableHeroAnimation) {
      gradient(canvas.current)();
    }
  }, []);

  return (
    <div
      className={classnames(
        "absolute left-0 top-auto z-[-1] h-[min(76vh,_max(450px,_50vw))] w-screen origin-[-1000px_100%] skew-y-[-11deg] overflow-hidden",
        config.disableHeroAnimation &&
          "bg-gradient-to-tr from-orange-500 via-purple-500 to-pink-500"
      )}
    >
      <canvas
        ref={canvas}
        id="gradientCanvas"
        className="h-full w-full"
        width="32"
        height="32"
      ></canvas>
    </div>
  );
}
