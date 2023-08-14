import classnames from "classnames";

const widthClasses = {
  block: "max-w-5xl px-6 lg:px-0 mx-auto",
  text: "max-w-prose px-4 sm:px-6 md:px-0 mx-auto",
  full: "",
};

export function WidthWrapper({
  children,
  className = "",
  width = "block",
}: {
  children: React.ReactNode;
  className?: string;
  width?: "text" | "block" | "full";
}) {
  // width-wrapper is for easily identifying the component in the DOM
  const baseClass = "h-full width-wrapper";

  const widthClass = () => {
    return widthClasses[width];
  };

  return (
    <div className={classnames(baseClass, widthClass(), className)}>
      {children}
    </div>
  );
}

WidthWrapper.className = {} as {
  block: string;
  text: string;
  full: string;
};

WidthWrapper.className = widthClasses;
