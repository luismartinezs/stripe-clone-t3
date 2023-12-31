import classnames from "classnames";

function Title() {
  return (
    <span>
      Payments
      <br />
      infrastructure
      <br />
      <span className="whitespace-nowrap">for the internet</span>
    </span>
  );
}

const textClass = "text-[7vh] sm:text-[77px] lg:text-[94px]";

const titleClasses =
  "absolute lg:mt-[100px] sm:mt-[70px] mt-[60px] flex items-end tracking-[-0.10rem] max-w-[10ch] font-semibold leading-[1.04]";
const titleOverlayClasses = "mix-blend-[revert] z-[2] text-[#111] opacity-10";

export function TextEffect({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="relative h-[260px] sm:h-[320px] lg:h-[398px]">
        <h1
          className={classnames(
            titleClasses,
            textClass,
            "text-[hsl(180,_20%,_20%)] opacity-90 mix-blend-color-burn"
          )}
        >
          {<Title />}
        </h1>
        <div
          aria-hidden
          className={classnames(titleClasses, textClass, titleOverlayClasses)}
        >
          {<Title />}
        </div>
        <div
          aria-hidden
          className={classnames(titleClasses, textClass, titleOverlayClasses)}
        >
          {<Title />}
        </div>
      </div>
    </div>
  );
}
