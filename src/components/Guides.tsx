import classnames from "classnames";
import React from "react";

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

function Dashed() {
  return (
    <div className="pointer-events-none h-full w-px bg-[linear-gradient(180deg,rgba(66,71,112,0.09),rgba(66,71,112,0.09)_50%,transparent_0,transparent)] bg-[length:1px_8px] bg-repeat"></div>
  );
}

export function Guides(props: React.ComponentPropsWithoutRef<"div">) {
  const { className, ...otherProps } = props;
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-4 inset-y-0"
    >
      <div
        className={classnames(
          "relative grid h-full w-full grid-cols-1 grid-rows-[1fr] px-[5px] sm:grid-cols-2 md:grid-cols-4",
          className
        )}
        {...otherProps}
      >
        <Solid />
        <Dashed />
        <Dashed />
        <Dashed />
        <Solid className="absolute right-0 top-0" />
      </div>
    </div>
  );
}
