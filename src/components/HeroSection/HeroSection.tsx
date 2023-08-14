import classnames from "classnames";
import { ArrowButton } from "~/components/ArrowButton";
import { HeroGraphic } from "~/components/HeroSection/HeroGraphic";
import { SectionWrapper } from "~/components/SectionWrapper";
import { StripeHeroEffect } from "~/components/StripeHeroEffect";
import { TextEffect } from "~/components/StripeHeroEffect/TextEffect";
import { WidthWrapper } from "~/components/WidthWrapper";

export function HeroSection() {
  return (
    <SectionWrapper
      className="mt-16 xl:mt-20"
      withGuides
      bleed
      yClassName="py-16 xl:pb-[200px] xl:pt-[100px]"
    >
      <div
        className={classnames(
          "isolate grid grid-cols-1 md:grid-cols-2",
          WidthWrapper.className.block
        )}
      >
        <div className="grid gap-y-[32px]">
          <StripeHeroEffect className={classnames("z-0")} />
          <TextEffect />
          <p className="z-10 max-w-[45ch] text-xl text-gray-700/90">
            Millions of businesses of all sizes—from startups to large
            enterprises—use Stripe&apos;s software and APIs to accept payments,
            send payouts, and manage their businesses online.
          </p>
          <div className="flex gap-6">
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
