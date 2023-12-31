import classnames from "classnames";
import { Guides } from "~/components/Guides";
import { SectionWrapper } from "~/components/SectionWrapper";
import styles from "./GlobalSection.module.css";

const kpis = [
  {
    id: "1",
    metric: "250M+",
    text: "API requests per day, peaking at 13,000 requests a second.",
  },
  {
    id: "2",
    metric: "135",
    text: "Supported currencies and payment methods.",
  },
  {
    id: "3",
    metric: "195",
    text: "Countries and territories supported.",
  },
  {
    id: "4",
    metric: "1.5M",
    text: "Businesses using Stripe globally.",
  },
];

export function GlobalSection(
  props: React.ComponentPropsWithoutRef<typeof SectionWrapper>
) {
  const { className, ...otherProps } = props;
  return (
    <SectionWrapper
      withGuides
      bgStyle="dark"
      skew="top"
      guides={
        <Guides>
          <Guides.Solid className="bg-[rgba(66,71,112,0.3)]" />
          <Guides.Dashed className="bg-[linear-gradient(180deg,rgba(66,71,112,0.3),rgba(66,71,112,0.3)_50%,transparent_0,transparent)]" />
          <Guides.Dashed className="bg-[linear-gradient(180deg,rgba(66,71,112,0.3),rgba(66,71,112,0.3)_50%,transparent_0,transparent)]" />
          <Guides.Dashed className="bg-[linear-gradient(180deg,rgba(66,71,112,0.3),rgba(66,71,112,0.3)_50%,transparent_0,transparent)]" />
          <Guides.Solid className="absolute right-0 top-0 bg-[rgba(66,71,112,0.3)]" />
        </Guides>
      }
      yClassName="pt-[247px] pb-[128px]"
      className={classnames(className, styles.section)}
      {...otherProps}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-10">
        <div>
          <h3 className="text-xl font-semibold text-[#00D4FF]">Global scale</h3>
          <h2 className="mt-8 text-4xl font-semibold text-white">
            The backbone for global commerce
          </h2>
          <p className="mt-8 text-xl text-slate-400">
            Stripe makes moving money as easy and programmable as moving data.
            Our teams are based in offices around the world and we process
            hundreds of billions of euros each year for ambitious businesses of
            all sizes.
          </p>
        </div>
      </div>
      <ul className="mt-8 grid grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-2 md:grid-cols-4">
        {kpis.map((kpi) => (
          <li key={kpi.id} className="col-span-1">
            <div className="relative text-2xl font-semibold text-white before:absolute before:-left-4 before:top-0 before:h-full before:w-px before:border-l before:border-[#00D4FF] before:content-['']">
              {kpi.metric}
            </div>
            <div className="mt-3 font-medium text-slate-400">{kpi.text}</div>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
