import Link from "next/link";

export function Footer() {
  return (
    <footer className="container mx-auto max-w-7xl px-2 py-2 lg:px-0">
      Created by{" "}
      <Link
        href="https://www.webdevluis.com/"
        target="_blank"
        className="text-primary-400 hover:underline"
      >
        Luis Martinez
      </Link>
    </footer>
  );
}
