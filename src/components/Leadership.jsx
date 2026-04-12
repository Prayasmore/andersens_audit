const specialisations = [
  {
    title: "External Audit",
    description:
      "Independent audit and assurance for organisations under formal scrutiny.",
  },
  {
    title: "Control Reviews",
    description:
      "Assessment of governance, oversight, and internal reporting frameworks.",
  },
  {
    title: "Valuations",
    description:
      "Commercially grounded valuation support across transaction and reporting contexts.",
  },
  {
    title: "Due Diligence",
    description:
      "Financial investigation and analysis to support strategic decision-making.",
  },
  {
    title: "Technical Accounting",
    description:
      "Advice on complex standards, interpretation, and practical application.",
  },
];

const Leadership = () => {
  return (
    <section
      id="leadership"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      <div className="absolute left-[-10rem] top-20 h-[22rem] w-[22rem] rounded-full bg-blue-950/6 blur-3xl" />
      <div className="absolute right-[-8rem] bottom-0 h-[18rem] w-[18rem] rounded-full bg-amber-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24 lg:px-12 lg:py-32">
        <div className="grid items-start gap-16 lg:grid-cols-[minmax(360px,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <div className="lg:pt-4">
            <div className="relative">
              <div className="absolute inset-0 translate-x-4 translate-y-4 border border-slate-200 bg-[#f4efe7]" />

              <div className="relative aspect-[4/5] overflow-hidden bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
                  alt="Pran Rathod, Director at Andersens Audit NSW"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.06)_0%,rgba(15,23,42,0.18)_100%)]" />
                <div className="absolute inset-0 border border-slate-200/70" />

                <div className="absolute left-6 top-6">
                  <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-white/85">
                    Director
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="mb-4 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-blue-900/75">
              Leadership
            </p>

            <h2 className="font-serif text-4xl font-semibold leading-[1.05] text-slate-950 md:text-5xl lg:text-6xl">
              Pran Rathod
            </h2>

            <div className="mt-5 space-y-2">
              <p className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                BA, FCPA, Registered Company Auditor
              </p>
              <p className="font-sans text-lg leading-7 text-slate-700 md:text-xl">
                20+ years of experience across audit, investigations, and
                consulting, including Big 4 leadership.
              </p>
            </div>

            <blockquote className="mt-8 max-w-2xl border-l border-slate-300 pl-6">
              <p className="font-serif text-2xl italic leading-tight text-slate-700 md:text-[2rem]">
                "Credibility is built when technical rigor is matched by clear
                judgment and direct senior accountability."
              </p>
            </blockquote>

            <div className="mt-10 space-y-6">
              <p className="max-w-2xl font-sans text-base leading-7 text-slate-600 md:text-lg">
                Pran Rathod brings deep experience in assurance, governance, and
                financial advisory work for organisations facing complex
                reporting and stakeholder expectations.
              </p>

              <p className="max-w-2xl font-serif text-2xl leading-tight text-slate-950 md:text-[2rem]">
                His approach combines technical depth with commercial clarity,
                helping clients navigate complexity with confidence.
              </p>

              <p className="max-w-2xl font-sans text-base leading-7 text-slate-600 md:text-lg">
                Clients value direct access to senior expertise, clear
                communication, and advice that translates complex technical
                matters into practical action.
              </p>
            </div>

            <div className="mt-12 h-px w-full max-w-3xl bg-gradient-to-r from-slate-300 via-slate-200 to-transparent" />

            <div className="mt-8 max-w-3xl">
              <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-slate-500">
                Areas of Specialisation
              </p>

              <div className="mt-6">
                {specialisations.map((item, index) => (
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

            <a
              href="#contact"
              className="mt-10 inline-flex items-center justify-center rounded-sm bg-slate-950 px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
