import classNames from "classnames";
import Image from "next/image";
import { BsCreditCard2Back } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { AiFillApple } from "react-icons/ai";
import { FiWind } from "react-icons/fi";

import styles from "./HeroGraphic.module.css";

type TOrientation = "vertical" | "horizontal";

function getCardStyles(size: number, orientation: TOrientation = "horizontal") {
  const isHorizontal = orientation === "horizontal";
  const yFactor = 2.125;
  const xFactor = 3.37;

  return {
    width: isHorizontal ? size : (size / xFactor) * yFactor,
    height: isHorizontal ? (size / xFactor) * yFactor : size,
    borderRadius: (size / xFactor) * 0.18,
  };
}

function CreditCard({
  size,
  src,
  name,
  className,
}: {
  size: number;
  src: string;
  name: string;
  className?: string;
}) {
  return (
    <div
      className={classNames(
        "flex items-center justify-center border border-gray-200 bg-white",
        className
      )}
      style={getCardStyles(size)}
    >
      <Image
        src={src}
        alt={name ? `${name} logo` : ""}
        width={size}
        height={(size / 3.37) * 2.125}
      />
    </div>
  );
}

function LargeCard({
  size,
  className,
  orientation,
  children,
}: {
  size: number;
  className?: string;
  orientation?: "vertical" | "horizontal";
  children?: React.ReactNode;
}) {
  return (
    <div
      style={getCardStyles(size, orientation)}
      className={classNames("bg-pink-500", className, styles.bgPattern)}
    >
      {children}
    </div>
  );
}

function MobileGraphic(props: React.ComponentPropsWithoutRef<"div">) {
  const { className, ...otherProps } = props;
  return (
    <div
      className={classNames(
        "mt-[60px] flex h-[533px] w-[264px] flex-col items-center justify-center gap-2 rounded-[36px] bg-[#f6f9fc] bg-origin-padding p-[8px] text-center text-[16px] shadow-graphic",
        className
      )}
      {...otherProps}
    >
      <div className="relative flex h-full flex-col items-center justify-center rounded-[29px] bg-white px-[16px] py-[24px] text-center text-[0.75rem] text-slate-500">
        <div className="relative isolate mb-4">
          <LargeCard size={70} orientation="vertical" className="shadow" />

          <div className="absolute left-[10px] top-[10px] z-10">
            <LargeCard size={70} orientation="vertical" className="shadow-lg" />
          </div>
        </div>
        <div className="mt-1">
          <div className="font-semibold">Increment Magazine</div>
          <div>$14 per quarter</div>
        </div>
        <div className="mt-4 flex w-full items-center justify-center rounded bg-slate-700 py-1 text-center text-white">
          <AiFillApple className="-mt-[2px]" />
          <span>Pay</span>
        </div>
        <div className="mt-4 grid grid-cols-[60px,1fr,60px] items-center gap-2">
          <div className="h-px bg-gray-200"></div>
          <div className="whitespace-nowrap">Or pay with card</div>
          <div className="h-px bg-gray-200"></div>
        </div>
        {/* FORM */}
        <div className="mt-3 flex w-full flex-col gap-3 text-left">
          <div>
            <div>Email</div>
            <div className="mt-1 h-[1.2rem] rounded border border-gray-200 shadow shadow-slate-700/20"></div>
          </div>
          <div>
            <div>Card Information</div>
            <div className="mt-1 h-[2.4rem] rounded border border-gray-200 shadow shadow-slate-700/20">
              <div className="flex h-[1.2rem] items-center justify-between border-b border-gray-200 px-1 py-1 text-[0.7rem]">
                <div className="text-slate-400">Number</div>
                <div className="flex gap-1">
                  <CreditCard
                    src="/images/Visa_Inc.-Logo.wine.svg"
                    size={16}
                    name="Visa"
                  />
                  <CreditCard
                    src="/images/Mastercard-Logo.wine.svg"
                    size={16}
                    name="Mastercard"
                    className="bg-[#2A1D50]"
                  />
                  <CreditCard
                    src="/images/American_Express-Logo.wine.svg"
                    size={16}
                    name="American Express"
                  />
                </div>
              </div>
              <div className="flex h-[1.2rem] items-center justify-between text-[0.7rem] text-slate-400">
                <div className="w-[50%] border-r border-gray-200 px-1 py-1">
                  <div>MM / YY</div>
                </div>
                <div className="flex w-[50%] items-center justify-between px-1 py-1">
                  <span>CVC</span>
                  <BsCreditCard2Back className=" text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>Country or region</div>
            <div className="mt-1 h-[2.4rem] rounded border border-gray-200 text-slate-400 shadow shadow-slate-700/20">
              <div className="flex h-[1.2rem] items-center justify-between border-b border-gray-200 px-1 py-1 text-[0.7rem]">
                <div>United States</div>
                <div className="flex gap-1">
                  <BiChevronDown size={18} className="-mr-1 text-gray-400" />
                </div>
              </div>
              <div className="flex h-[1.2rem] items-center justify-between px-1 py-1 text-[0.7rem]">
                <div>ZIP</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7 w-full rounded bg-slate-700 py-1 text-center text-white">
          Pay
        </div>
      </div>
    </div>
  );
}

function DesktopGraphic(props: React.ComponentPropsWithoutRef<"div">) {
  const { className, ...otherProps } = props;
  return (
    <div
      className={classNames(
        "grid-rows-auto grid w-[929px] grid-cols-[152px_1fr] gap-[24px] rounded-[8px] p-[24px] text-[11px] font-light leading-[14px] tracking-[.2px] text-[#425466]",
        styles.desktopGraphic,
        className
      )}
      {...otherProps}
    >
      {/* sidebar */}
      <div className="grid grid-cols-[auto-flow,max-content] grid-rows-[max-content] items-center gap-[8px] font-semibold text-white">
        <div className="flex items-center gap-2">
          <div className="max-w-min rounded-full bg-white p-1">
            <FiWind size={18} className="text-pink-500/50" />
          </div>
          <span className="font-bold tracking-wider">ROCKET RIDES</span>
          <BiChevronDown size={18} />
        </div>
      </div>
      {/* Main */}
      <div className="h-[489px] rounded bg-white p-4 text-slate-500 shadow">
        To do: fill in with mock dashboard
      </div>
    </div>
  );
}

export function HeroGraphic(props: React.ComponentPropsWithoutRef<"div">) {
  const { className, ...otherProps } = props;
  return (
    <div
      className={classNames("relative isolate select-none", className)}
      {...otherProps}
    >
      <DesktopGraphic
        className="absolute left-[230px] top-0 z-0"
        aria-hidden="true"
      />
      <MobileGraphic
        className="absolute left-[140px] z-10"
        aria-hidden="true"
      />
    </div>
  );
}
