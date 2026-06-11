import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Confidential scoping",
    description:
      "A direct conversation with the partner about your obligations, deadlines, and risk profile. No sales team, no obligation.",
  },
  {
    number: "02",
    title: "Risk-focused planning",
    description:
      "Scope built around what is material to your organisation — with fees agreed upfront, not discovered later.",
  },
  {
    number: "03",
    title: "Partner-led fieldwork",
    description:
      "The partner leads the work and stands behind every judgment, with minimal disruption to your team.",
  },
  {
    number: "04",
    title: "Board-ready reporting",
    description:
      "Findings in plain English, recommendations you can act on, and an opinion that withstands scrutiny.",
  },
];

const Process = () => {
  return (
    <section id="process" className="relative overflow-hidden bg-[#faf8f5]">
      <div className="absolute right-[-10rem] top-10 h-[24rem] w-[24rem] rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24 lg:px-12 lg:py-32">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-blue-800">
              How We Engage
            </p>

            <h2 className="font-serif text-4xl font-bold leading-[1.05] text-[#0B1F3A] md:text-5xl">
              A disciplined path from first conversation to signed opinion.
            </h2>

            <p className="mt-6 max-w-md font-sans text-base leading-7 text-slate-600 md:text-lg">
              Most audit relationships fail on process: surprise fees, junior
              teams, late reporting. Ours is built to remove exactly those
              risks.
            </p>

            <a
              href="#contact"
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-sm bg-[#0B1F3A] px-7 py-4 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-blue-900"
            >
              Request a confidential consultation
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div>
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`grid gap-4 py-8 md:grid-cols-[72px_1fr] md:gap-8 ${
                  index === 0 ? "" : "border-t border-slate-200"
                }`}
              >
                <p className="font-serif text-3xl font-semibold leading-none text-blue-800/60 md:text-4xl">
                  {step.number}
                </p>
                <div>
                  <h3 className="font-serif text-2xl font-semibold leading-tight text-[#0B1F3A] md:text-[1.7rem]">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xl font-sans text-base leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
