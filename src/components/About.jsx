// Placeholder photography (Unsplash) — replace with a real image of the team / office.
const ABOUT_IMG =
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1100&q=80";

const proofPoints = [
  {
    title: "Partner-led delivery",
    description: "Senior involvement from planning through to final reporting.",
  },
  {
    title: "Technical depth",
    description:
      "Strong audit, regulatory, and accounting expertise across complex engagements.",
  },
  {
    title: "Risk-focused approach",
    description:
      "Work scoped around material issues, governance priorities, and stakeholder expectations.",
  },
  {
    title: "Trusted relationships",
    description:
      "Long-term support for listed entities, private groups, charities, and not-for-profits.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-900">
      <div className="absolute left-[-10rem] top-16 h-[24rem] w-[24rem] rounded-full bg-blue-700/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24 lg:px-12 lg:py-32">
        <div className="grid items-start gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:gap-20">
          <div className="max-w-3xl">
            <p className="mb-4 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-blue-400">
              About the Firm
            </p>

            <h2 className="font-serif text-4xl font-bold leading-[1.05] text-white md:text-5xl lg:text-6xl">
              Senior audit and advisory support shaped by rigor, judgment, and
              trust.
            </h2>

            <p className="mt-8 max-w-2xl font-sans text-base leading-7 text-slate-400 md:text-lg">
              Andersens Audit NSW is a specialist practice focused on assurance
              work and practical commercial advice for organisations operating
              in complex or highly accountable environments.
            </p>

            <p className="mt-6 max-w-2xl font-serif text-2xl leading-tight text-white md:text-[2rem]">
              We bring the discipline expected by boards, regulators, and
              stakeholders, with direct senior attention throughout the
              engagement.
            </p>

            <div className="mt-12 h-px w-full max-w-3xl bg-gradient-to-r from-white/15 to-transparent" />

            <div className="mt-6 max-w-3xl">
              {proofPoints.map((item, index) => (
                <div
                  key={item.title}
                  className={`grid gap-2 py-5 md:grid-cols-[200px_1fr] md:gap-8 ${
                    index === 0 ? "" : "border-t border-white/10"
                  }`}
                >
                  <p className="font-serif text-2xl leading-tight text-white">
                    {item.title}
                  </p>
                  <p className="font-sans text-base leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pt-6">
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <img
                src={ABOUT_IMG}
                alt="Andersens Audit NSW advisory team at work"
                className="aspect-[4/5] h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.1)_0%,rgba(2,6,23,0.55)_100%)]" />
              <div className="absolute left-6 top-6">
                <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-white/85">
                  Independent Assurance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
