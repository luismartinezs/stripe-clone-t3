import classnames from "classnames";
import Link, { type LinkProps } from "next/link";
import React from "react";

export function PrimaryLinkButton(
  props: LinkProps & { children: React.ReactNode; className?: string }
) {
  const { className, ...otherProps } = props;

  return (
    <Link
      {...otherProps}
      className={classnames(
        "rounded bg-primary-500 px-4 py-2 text-white outline-offset-2 outline-primary-400 hover:translate-y-px hover:bg-primary-600 focus:outline",
        className
      )}
    >
      {props.children}
    </Link>
  );
}
