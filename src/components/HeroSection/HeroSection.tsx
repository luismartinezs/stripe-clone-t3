import { SectionWrapper } from "~/components/SectionWrapper";

export function HeroSection() {
  return (
    <SectionWrapper className="xl:mt-20">
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-[94px] font-semibold leading-[97px] tracking-tighter">
            Financial
            <br />
            infrastructure
            <br />
            for the internet
          </h1>
          <p className="mt-8 text-xl text-gray-700/90">
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe&apos;s software and APIs to accept payments, send payouts,
            and manage their businesses online.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
