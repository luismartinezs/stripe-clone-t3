import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import { FaStripe } from "react-icons/fa";

import { PrimaryLink } from "~/components/PrimaryLink";
import { BurgerButton } from "~/components/BurgerButton";
import { AnimatedArrow } from "~/components/AnimatedArrow";
import classnames from "classnames";

const links = [
  {
    label: "Products",
    href: "#",
  },
  {
    label: "Solutions",
    href: "#",
  },
  {
    label: "Developers",
    href: "#",
  },
  {
    label: "Resources",
    href: "#",
  },
  {
    label: "Pricing",
    href: "#",
  },
];

function LogoLink() {
  return (
    <PrimaryLink href="/" className="flex items-center gap-3 hover:opacity-70">
      <FaStripe size={60} />
    </PrimaryLink>
  );
}

export function Header(props: React.ComponentPropsWithoutRef<"header">) {
  const { className, ...otherProps } = props;
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(false);
  }, [router.pathname]);

  return (
    <header
      className={classnames("absolute left-0 right-0 top-0", className)}
      {...otherProps}
    >
      <nav className="px-4 text-white lg:px-6">
        <div className="relative mx-auto flex max-w-screen-xl flex-wrap items-center justify-between py-2">
          <div className="flex items-center lg:order-2">
            <BurgerButton onClick={toggleMenu} />
          </div>
          <div className="hidden w-full items-center justify-between gap-12 lg:order-1 lg:flex lg:w-auto">
            <LogoLink />
            <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              {links.map((link) => (
                <li key={link.label}>
                  <PrimaryLink href={link.href}>{link.label}</PrimaryLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden w-full items-center justify-between lg:order-2 lg:flex lg:w-auto">
            <ul className="mt-4 flex flex-col items-center font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              <li>
                <PrimaryLink href="#" className="group flex items-center gap-1">
                  <span>Contact sales</span>
                  <AnimatedArrow />
                </PrimaryLink>
              </li>
              <li>
                <PrimaryLink
                  href="#"
                  className="group flex items-center gap-1 rounded-full bg-white/25 py-[6px] pl-[18px] pr-[10px] transition-opacity hover:bg-white/40 hover:opacity-100"
                >
                  <span>Sign in</span>
                  <AnimatedArrow />
                </PrimaryLink>
              </li>
            </ul>
          </div>
          {/* MOBILE NAV BAR */}
          {open && (
            <div
              className="fixed inset-0 w-full bg-gray-900 p-10 lg:hidden"
              id="mobile-menu"
            >
              <div className="flex flex-col items-center gap-4">
                <button
                  onClick={toggleMenu}
                  className="dark:hover:bg-primary-900 self-end rounded-xl p-2"
                >
                  <AiOutlineClose
                    color="white"
                    style={{
                      width: 35,
                      height: 35,
                    }}
                    className="dark:hover:bg-primary-900 dark:focus:ring-primary-600 inline-flex  items-center rounded-lg text-sm text-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-200"
                  />
                </button>
                <LogoLink />
                <ul className="mt-4 flex flex-col items-center gap-5 text-2xl">
                  {links.map((link) => (
                    <li key={link.label}>
                      <PrimaryLink href={link.href}>{link.label}</PrimaryLink>
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-col items-center gap-5 text-2xl"></ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
