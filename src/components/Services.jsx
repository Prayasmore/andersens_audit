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
    <div className="flex h-full flex-col">
      <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-blue-900/75">
        {label}
      </p>

      <h3 className="mt-6 font-serif text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
        {heading}
      </h3>

      <p className="mt-5 max-w-xl font-sans text-base leading-7 text-slate-600 md:text-lg">
        {description}
      </p>

      <div className="mt-8 h-px w-full bg-gradient-to-r from-slate-300 via-slate-200 to-transparent" />

      <div className="mt-3 flex-1">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`grid min-h-24 gap-3 py-5 md:grid-cols-[minmax(160px,190px)_1fr] md:gap-6 ${
              index === 0 ? "" : "border-t border-slate-200/80"
            }`}
          >
            <p className="font-serif text-xl leading-tight text-slate-950 md:text-2xl">
              {service.title}
            </p>
            <p className="font-sans text-base leading-7 text-slate-600">
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
    <section
      id="services"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f6f1e8_0%,#ffffff_36%,#f8fafc_100%)]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      <div className="absolute left-[-10rem] top-10 h-[24rem] w-[24rem] rounded-full bg-slate-950/6 blur-3xl" />
      <div className="absolute right-[-8rem] bottom-0 h-[20rem] w-[20rem] rounded-full bg-amber-200/35 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:96px_96px] opacity-45 [mask-image:linear-gradient(180deg,rgba(255,255,255,0.95),rgba(255,255,255,0.55),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24 lg:px-12 lg:py-32">
        <div className="max-w-4xl">
          <p className="mb-4 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-blue-900/75">
            Services
          </p>

          <h2 className="font-serif text-4xl font-semibold leading-[1.02] text-slate-950 md:text-5xl lg:text-6xl">
            Audit and advisory services for organisations where confidence is
            non-negotiable.
          </h2>

          <p className="mt-8 max-w-2xl font-sans text-base leading-7 text-slate-600 md:text-lg">
            We focus on the work that carries the greatest weight with boards,
            regulators, investors, and leadership teams: independent assurance
            and commercially grounded advice.
          </p>
        </div>

        <div className="mt-14 h-px bg-gradient-to-r from-slate-300/0 via-slate-300 to-slate-300/0" />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-12 lg:items-start">
          <div className="lg:pr-6">
            <ServiceColumn
              label="Primary Service"
              heading="Audit & Assurance"
              description="Independent assurance delivered with technical rigor, direct partner involvement, and reporting that stands up to scrutiny."
              services={auditServices}
            />
          </div>

          <div className="lg:border-l lg:border-slate-200/80 lg:pl-6">
            <ServiceColumn
              label="Strategic Support"
              heading="Business Advisory"
              description="Focused advice for organisations navigating financial complexity, technical reporting issues, and strategic change."
              services={advisoryServices}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
