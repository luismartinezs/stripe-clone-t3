import { SectionWrapper } from "~/components/SectionWrapper";

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
  props: React.ComponentPropsWithoutRef<"section">
) {
  return (
    // TODO Fix guides not showing up and not extending to edge if section is skewed
    <SectionWrapper withGuides bgStyle="dark" skew {...props}>
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
      <ul className="mt-16 grid grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <li key={kpi.id} className="col-span-1 space-y-3 px-4 py-8">
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
