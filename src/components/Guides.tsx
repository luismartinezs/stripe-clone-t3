import classnames from "classnames";
import React from "react";
import { WidthWrapper } from "~/components/WidthWrapper";

function Solid({ className }: { className?: string }) {
  return (
    <div
      className={classnames(
        "pointer-events-none h-full w-px bg-[#4247700f]",
        className
      )}
    ></div>
  );
}

function Dashed({ className }: { className?: string }) {
  return (
    <div
      className={classnames(
        "pointer-events-none h-full w-px bg-[linear-gradient(180deg,rgba(66,71,112,0.09),rgba(66,71,112,0.09)_50%,transparent_0,transparent)] bg-[length:1px_8px] bg-repeat",
        className
      )}
    ></div>
  );
}

function Guides(props: React.ComponentPropsWithoutRef<"div">) {
  const { className, children, ...otherProps } = props;
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-4 inset-y-0"
    >
      <div
        className={classnames(
          "relative grid h-full w-full max-w-[66rem] grid-cols-1 grid-rows-[1fr] px-[5px] sm:grid-cols-2 md:grid-cols-4",
          WidthWrapper.className.block,
          className
        )}
        {...otherProps}
      >
        {children ?? (
          <>
            <Solid />
            <Dashed />
            <Dashed />
            <Dashed />
            <Solid className="absolute right-0 top-0" />
          </>
        )}
      </div>
    </div>
  );
}

Guides.Solid = Solid;
Guides.Dashed = Dashed;

export { Guides };
