import { HeroGraphic } from "~/components/HeroSection/HeroGraphic";
import { SectionWrapper } from "~/components/SectionWrapper";
import { StripeHeroEffect } from "~/components/StripeHeroEffect";

export function HeroSection() {
  return (
    <SectionWrapper className="xl:mt-20">
      <div className="isolate grid grid-cols-2">
        <div>
          <StripeHeroEffect className="z-0" />
          <p className="mt-8 text-xl text-gray-700/90">
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe&apos;s software and APIs to accept payments, send payouts,
            and manage their businesses online.
          </p>
        </div>
        <HeroGraphic className="z-10" />
      </div>
    </SectionWrapper>
  );
}
