const auditServices = [
  {
    title: "Financial Audits",
    description: "For listed entities and complex organisations.",
  },
  {
    title: "Regulatory Assurance",
    description: "Across ASIC, ACNC, and superannuation obligations.",
  },
  {
    title: "Special Purpose Audits",
    description: "For grants, turnover reviews, and targeted engagements.",
  },
  {
    title: "Controls & Governance",
    description: "For reporting processes, oversight, and risk frameworks.",
  },
];

const advisoryServices = [
  {
    title: "Capital Advisory",
    description: "For financing decisions, structuring, and growth planning.",
  },
  {
    title: "Technical Accounting",
    description: "For complex standards, treatment, and disclosures.",
  },
  {
    title: "Forecasting & Planning",
    description: "For budgeting, performance visibility, and planning.",
  },
  {
    title: "Valuations & Due Diligence",
    description: "For transactions, reporting, and strategic decisions.",
  },
];

const ServiceColumn = ({ label, heading, description, services }) => {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
      <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-blue-400">
        {label}
      </p>

      <h3 className="mt-6 font-serif text-3xl font-bold leading-tight text-white md:text-4xl">
        {heading}
      </h3>

      <p className="mt-5 max-w-xl font-sans text-base leading-7 text-slate-400 md:text-lg">
        {description}
      </p>

      <div className="mt-8 h-px w-full bg-gradient-to-r from-white/15 to-transparent" />

      <div className="mt-2 flex-1">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`grid min-h-24 gap-3 py-5 md:grid-cols-[minmax(160px,190px)_1fr] md:gap-6 ${
              index === 0 ? "" : "border-t border-white/10"
            }`}
          >
            <p className="font-serif text-xl leading-tight text-white md:text-2xl">
              {service.title}
            </p>
            <p className="font-sans text-base leading-7 text-slate-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="relative overflow-hidden bg-slate-950">
      <div className="absolute right-[-10rem] top-10 h-[26rem] w-[26rem] rounded-full bg-blue-700/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24 lg:px-12 lg:py-32">
        <div className="max-w-4xl">
          <p className="mb-4 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-blue-400">
            Services
          </p>

          <h2 className="font-serif text-4xl font-bold leading-[1.02] text-white md:text-5xl lg:text-6xl">
            Audit and advisory for organisations where confidence is
            non-negotiable.
          </h2>

          <p className="mt-8 max-w-2xl font-sans text-base leading-7 text-slate-400 md:text-lg">
            We focus on the work that carries the greatest weight with boards,
            regulators, investors, and leadership teams: independent assurance
            and commercially grounded advice.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:gap-8 lg:items-stretch">
          <ServiceColumn
            label="Primary Service"
            heading="Audit & Assurance"
            description="Independent assurance delivered with technical rigor, direct partner involvement, and reporting that stands up to scrutiny."
            services={auditServices}
          />
          <ServiceColumn
            label="Strategic Support"
            heading="Business Advisory"
            description="Focused advice for organisations navigating financial complexity, technical reporting issues, and strategic change."
            services={advisoryServices}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
