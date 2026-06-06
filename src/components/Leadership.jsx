// Placeholder portrait (Unsplash) — replace with a real photo of Pran Rathod.
const PRAN_IMG =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=900&q=80";

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
    <section id="leadership" className="relative overflow-hidden bg-slate-950">
      <div className="absolute right-[-10rem] top-20 h-[24rem] w-[24rem] rounded-full bg-blue-700/12 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24 lg:px-12 lg:py-32">
        <div className="grid items-start gap-16 lg:grid-cols-[minmax(360px,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <div className="lg:pt-4">
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <img
                src={PRAN_IMG}
                alt="Pran Rathod, Director at Andersens Audit NSW"
                className="aspect-[4/5] h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.05)_0%,rgba(2,6,23,0.6)_100%)]" />
              <div className="absolute left-6 top-6">
                <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-white/85">
                  Director
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="mb-4 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-blue-400">
              Leadership
            </p>

            <h2 className="font-serif text-4xl font-bold leading-[1.05] text-white md:text-5xl lg:text-6xl">
              Pran Rathod
            </h2>

            <div className="mt-5 space-y-2">
              <p className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                BA, FCPA, Registered Company Auditor
              </p>
              <p className="font-sans text-lg leading-7 text-slate-300 md:text-xl">
                20+ years of experience across audit, investigations, and
                consulting, including Big 4 leadership.
              </p>
            </div>

            <blockquote className="mt-8 max-w-2xl border-l-2 border-blue-500 pl-6">
              <p className="font-serif text-2xl italic leading-tight text-slate-200 md:text-[2rem]">
                "Credibility is built when technical rigor is matched by clear
                judgment and direct senior accountability."
              </p>
            </blockquote>

            <p className="mt-8 max-w-2xl font-sans text-base leading-7 text-slate-400 md:text-lg">
              Pran brings deep experience in assurance, governance, and financial
              advisory work for organisations facing complex reporting and
              stakeholder expectations &mdash; combining technical depth with
              commercial clarity.
            </p>

            <div className="mt-12 h-px w-full max-w-3xl bg-gradient-to-r from-white/15 to-transparent" />

            <div className="mt-8 max-w-3xl">
              <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-slate-500">
                Areas of Specialisation
              </p>

              <div className="mt-4">
                {specialisations.map((item, index) => (
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

            <a
              href="#contact"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-sm bg-blue-600 px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-blue-500"
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
