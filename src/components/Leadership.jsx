import { BadgeCheck, Linkedin } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/in/pran-rathod-973537256/";

// Placeholder portrait (Unsplash) — replace with a real photo of Pran Rathod.
const PRAN_IMG =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=900&q=80";

const credentials = [
  "FCPA",
  "Registered Company Auditor",
  "Big 4 Alumni",
  "20+ Years in Assurance",
];

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
    <section id="leadership" className="relative overflow-hidden bg-white">
      <div className="absolute right-[-10rem] top-20 h-[24rem] w-[24rem] rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24 lg:px-12 lg:py-32">
        <div className="grid items-start gap-16 lg:grid-cols-[minmax(360px,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <div className="lg:pt-4">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-md">
              <img
                src={PRAN_IMG}
                alt="Pran Rathod, Director at Andersens Audit NSW"
                className="aspect-[4/5] h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,31,58,0.03)_0%,rgba(11,31,58,0.28)_100%)]" />
              <div className="absolute left-6 top-6">
                <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-white">
                  Director
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="mb-4 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-blue-800">
              Leadership
            </p>

            <h2 className="font-serif text-4xl font-bold leading-[1.05] text-[#0B1F3A] md:text-5xl lg:text-6xl">
              Pran Rathod
            </h2>

            <div className="mt-5 space-y-2">
              <p className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Director &mdash; BA, FCPA, Registered Company Auditor
              </p>
              <p className="font-sans text-lg leading-7 text-slate-600 md:text-xl">
                20+ years of experience across audit, investigations, and
                consulting, including Big 4 leadership.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {credentials.map((credential) => (
                <span
                  key={credential}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-[#faf8f5] px-4 py-2 font-sans text-sm font-medium text-slate-700"
                >
                  <BadgeCheck className="h-4 w-4 text-blue-800" />
                  {credential}
                </span>
              ))}
            </div>

            <blockquote className="mt-8 max-w-2xl border-l-2 border-blue-800 pl-6">
              <p className="font-serif text-2xl italic leading-tight text-slate-700 md:text-[2rem]">
                "Credibility is built when technical rigor is matched by clear
                judgment and direct senior accountability."
              </p>
            </blockquote>

            <p className="mt-8 max-w-2xl font-sans text-base leading-7 text-slate-600 md:text-lg">
              Pran brings deep experience in assurance, governance, and financial
              advisory work for organisations facing complex reporting and
              stakeholder expectations &mdash; combining technical depth with
              commercial clarity.
            </p>

            <div className="mt-12 h-px w-full max-w-3xl bg-gradient-to-r from-slate-300 to-transparent" />

            <div className="mt-8 max-w-3xl">
              <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-slate-500">
                Areas of Specialisation
              </p>

              <div className="mt-4">
                {specialisations.map((item, index) => (
                  <div
                    key={item.title}
                    className={`grid gap-2 py-5 md:grid-cols-[200px_1fr] md:gap-8 ${
                      index === 0 ? "" : "border-t border-slate-200"
                    }`}
                  >
                    <p className="font-serif text-2xl leading-tight text-[#0B1F3A]">
                      {item.title}
                    </p>
                    <p className="font-sans text-base leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#0B1F3A] px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-blue-900"
              >
                Speak with Pran directly
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-slate-300 bg-white px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-[#0B1F3A] transition-colors hover:border-blue-700 hover:text-blue-800"
              >
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
