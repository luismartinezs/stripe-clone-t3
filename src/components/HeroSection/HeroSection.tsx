import { ArrowButton } from "~/components/ArrowButton";
import { HeroGraphic } from "~/components/HeroSection/HeroGraphic";
import { SectionWrapper } from "~/components/SectionWrapper";
import { StripeHeroEffect } from "~/components/StripeHeroEffect";

export function HeroSection() {
  return (
    <SectionWrapper className="mt-16 xl:mt-20" withGuides bleed>
      <div className="isolate grid grid-cols-1 md:grid-cols-2">
        <div className="grid gap-y-[32px]">
          <StripeHeroEffect
            className="z-0 h-[350px] lg:h-[400px]"
            titleClassName="mx-8 lg:ml-[100px] lg:mr-0 xl:ml-[200px]"
          />
          <p className="z-10 mx-8 max-w-[45ch] text-xl text-gray-700/90 lg:ml-[100px] lg:mr-0 xl:ml-[200px]">
            Millions of businesses of all sizes—from startups to large
            enterprises—use Stripe&apos;s software and APIs to accept payments,
            send payouts, and manage their businesses online.
          </p>
          <div className="mx-8 flex gap-6 lg:ml-[100px] lg:mr-0 xl:ml-[200px]">
            <ArrowButton className="bg-slate-700 py-1 pl-4 pr-2 font-semibold text-white hover:bg-slate-500">
              Start now
            </ArrowButton>
            <ArrowButton className=" font-semibold text-slate-700 hover:text-slate-600">
              Contact sales
            </ArrowButton>
          </div>
        </div>
        <HeroGraphic className="z-10 hidden md:block" />
      </div>
    </SectionWrapper>
  );
}
