import Link from "next/link";
import { ArrowButton } from "~/components/ArrowButton";
import { PlatformGraphic } from "~/components/PlatformSection/PlatformGraphic";

import { SectionWrapper } from "~/components/SectionWrapper";

export function PlatformSection() {
  return (
    <SectionWrapper withGuides bgStyle="gray">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold text-indigo-500">
            Unified platform
          </h3>
          <h2 className="mt-8 text-4xl font-semibold text-slate-800">
            A fully integrated suite of payments products
          </h2>
        </div>
        <div>{/* Spacer for grid */}</div>
        <div>
          <p className="text-xl">
            We bring together everything that&apos;s required to build websites
            and apps that accept payments and send payouts globally.
            Stripe&apos;s products power payments for{" "}
            <Link className="link" href="https://stripe.com/en-es/payments">
              online and in-person retailers
            </Link>
            ,{" "}
            <Link className="link" href="https://stripe.com/en-es/billing">
              businesses
            </Link>
            ,{" "}
            <Link className="link" href="https://stripe.com/en-es/connect">
              software platforms and marketplaces
            </Link>
            , and everything in between.
          </p>
        </div>
        <p className="text-xl">
          We also help companies{" "}
          <Link className="link" href="https://stripe.com/en-es/radar">
            beat fraud
          </Link>
          ,{" "}
          <Link className="link" href="https://stripe.com/en-es/invoicing">
            send invoices
          </Link>
          ,{" "}
          <Link className="link" href="">
            issue virtual and physical cards
          </Link>
          ,{" "}
          <Link className="link" href="">
            reduce friction at checkout
          </Link>
          ,{" "}
          <Link className="link" href="">
            get financing
          </Link>
          ,{" "}
          <Link className="link" href="">
            manage business spend
          </Link>
          , and much more.
        </p>
        <div>
          <ArrowButton className="max-w-min whitespace-nowrap bg-indigo-500  py-1 pl-4 pr-2 font-semibold text-white hover:bg-slate-900">
            Start with payments
          </ArrowButton>
        </div>
      </div>
      <PlatformGraphic />
    </SectionWrapper>
  );
}
