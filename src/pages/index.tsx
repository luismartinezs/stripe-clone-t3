import Head from "next/head";
import { GlobalSection } from "~/components/GlobalSection";
import { HeroSection } from "~/components/HeroSection/HeroSection";
import { LogosSection } from "~/components/LogosSection";
import { PlatformSection } from "~/components/PlatformSection";
import { PageLayout } from "~/layouts/PageLayout";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Stripe | Payment Processing Platform for the Internet</title>
        <meta
          name="description"
          content="Stripe is a suite of APIs powering online payment processing and commerce solutions for internet businesses of all sizes. Accept payments and scale faster."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <HeroSection />
        <LogosSection />
        <PlatformSection />
        <GlobalSection />
      </PageLayout>
    </>
  );
}
