import classnames from "classnames";

export function WidthWrapper({
  children,
  className = "",
  width = "block",
}: {
  children: React.ReactNode;
  className?: string;
  width?: "text" | "block" | "full";
}) {
  const baseClass = "h-full mx-auto width-wrapper";

  const widthClass = () => {
    let _widthClass = "";

    const widthMap = {
      text: "max-w-prose",
      block: "max-w-5xl",
      full: "",
    };

    _widthClass = widthMap[width];

    const paddingMap = {
      text: "px-4 sm:px-6 md:px-0 max-w-xl mx-auto",
      block: "px-6 lg:px-0 max-w-2xl mx-auto",
      full: "",
    };

    _widthClass += ` ${paddingMap[width]}`;

    return _widthClass;
  };

  return (
    <div className={classnames(baseClass, widthClass(), className)}>
      {children}
    </div>
  );
}
