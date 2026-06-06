import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

// Placeholder photography (Unsplash) — replace with real imagery of Sydney/NSW,
// the Bella Vista office, or client work.
const HERO_IMG =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1900&q=80";

const stats = [
  { value: "20+", label: "Years' experience" },
  { value: "Big 4", label: "Senior background" },
  { value: "100%", label: "Partner-led" },
  { value: "Listed · NFP", label: "Clients served" },
];

const memberships = [
  "CPA Australia",
  "CA ANZ",
  "Registered Company Auditor",
  "ASIC",
];

const Hero = () => {
  return (
    <>
      <section id="top" className="relative min-h-[46rem] overflow-hidden bg-slate-950">
        <img
          src={HERO_IMG}
          alt="Modern corporate architecture in Sydney"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,#020617_0%,#020617cc_42%,#0b1f3a66_72%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />

        <div className="relative mx-auto max-w-7xl px-6 pt-36 pb-44 md:px-8 md:pt-44 lg:px-12">
          <p className="mb-6 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-blue-300">
            <Sparkles className="h-4 w-4" />
            Independent Audit &amp; Advisory · Sydney NSW
          </p>

          <h1 className="max-w-4xl font-serif text-5xl font-bold leading-[0.98] text-white md:text-7xl lg:text-[5.2rem]">
            Boardroom-grade assurance for organisations under scrutiny.
          </h1>

          <p className="mt-7 max-w-2xl font-sans text-lg leading-8 text-slate-300 md:text-xl">
            Independent audits and strategic advisory delivered with the
            discipline boards and regulators expect &mdash; and the direct senior
            attention you won't get from a Big 4 team.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-blue-600 px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-blue-500"
            >
              Request a meeting
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:text-blue-300"
            >
              Explore services
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* stats band overlapping bottom */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-t-2xl border border-white/10 bg-white/10 backdrop-blur-md md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-slate-950/40 px-6 py-7">
                  <p className="font-serif text-3xl font-bold text-white md:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-2 font-sans text-xs uppercase tracking-[0.16em] text-slate-300">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* membership / trust strip */}
      <section className="border-b border-white/5 bg-slate-900">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-8 md:flex-row md:justify-between md:px-8 lg:px-12">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Credentialed &amp; regulated
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {memberships.map((m) => (
              <span
                key={m}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-sans text-sm font-medium text-slate-200"
              >
                <ShieldCheck className="h-4 w-4 text-blue-400" />
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
