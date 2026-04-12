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

const statistics = [
  { value: "20+", label: "Years Experience" },
  { value: "Big 4", label: "Background" },
  { value: "Listed & Private", label: "Clients Served" },
  { value: "NFP & SME", label: "Sector Expertise" },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      <div className="absolute left-[-10rem] top-16 h-[22rem] w-[22rem] rounded-full bg-blue-950/6 blur-3xl" />
      <div className="absolute right-[-8rem] bottom-0 h-[20rem] w-[20rem] rounded-full bg-amber-200/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24 lg:px-12 lg:py-32">
        <div className="grid items-start gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:gap-20">
          <div className="max-w-3xl">
            <p className="mb-4 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-blue-900/75">
              About the Firm
            </p>

            <h2 className="font-serif text-4xl font-semibold leading-[1.05] text-slate-950 md:text-5xl lg:text-6xl">
              Senior audit and advisory support shaped by rigor, judgment, and
              trust.
            </h2>

            <p className="mt-8 max-w-2xl font-sans text-base leading-7 text-slate-600 md:text-lg">
              Andersens Audit NSW is a specialist practice focused on assurance
              work and practical commercial advice for organisations operating
              in complex or highly accountable environments.
            </p>

            <div className="mt-10 space-y-6">
              <p className="max-w-2xl font-serif text-2xl leading-tight text-slate-950 md:text-[2rem]">
                We bring the discipline expected by boards, regulators, and
                stakeholders, with direct senior attention throughout the
                engagement.
              </p>

              <p className="max-w-2xl font-serif text-2xl leading-tight text-slate-950 md:text-[2rem]">
                Our work is designed to create confidence beyond compliance,
                combining technical precision with clear commercial judgment.
              </p>
            </div>

            <p className="mt-10 max-w-2xl font-sans text-base leading-7 text-slate-600 md:text-lg">
              We support listed entities, private companies, charities, and
              not-for-profit organisations with reporting, governance, and
              decision-making matters that require experienced oversight and
              careful execution.
            </p>

            <div className="mt-12 h-px w-full max-w-3xl bg-gradient-to-r from-slate-300 via-slate-200 to-transparent" />

            <div className="mt-8 max-w-3xl">
              {proofPoints.map((item, index) => (
                <div
                  key={item.title}
                  className={`grid gap-2 py-5 md:grid-cols-[200px_1fr] md:gap-8 ${
                    index === 0 ? "" : "border-t border-slate-200/80"
                  }`}
                >
                  <p className="font-serif text-2xl leading-tight text-slate-950">
                    {item.title}
                  </p>
                  <p className="font-sans text-base leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pt-6">
            <div className="relative">
              <div className="absolute inset-0 translate-x-4 translate-y-4 border border-slate-200 bg-[#f4efe7]" />

              <div className="relative overflow-hidden bg-slate-200 aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80"
                  alt="Professional leadership at Andersens Audit NSW"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.18)_100%)]" />
                <div className="absolute left-0 top-0 h-full w-full border border-slate-200/70" />

                <div className="absolute left-6 top-6">
                  <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-white/85">
                    Independent Assurance
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-14">
              <div className="grid grid-cols-2 gap-x-10 gap-y-10">
                {statistics.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`${index > 1 ? "pt-2" : ""}`}
                  >
                    <p className="font-serif text-3xl leading-none text-slate-950 md:text-[2.5rem]">
                      {stat.value}
                    </p>
                    <p className="mt-3 font-sans text-sm uppercase tracking-[0.18em] text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
