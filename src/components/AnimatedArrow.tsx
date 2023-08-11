import { BiChevronRight } from "react-icons/bi";

export function AnimatedArrow() {
  return (
    <BiChevronRight
      size={22}
      className="transition-transform group-hover:translate-x-[3px]"
    />
  );
}
