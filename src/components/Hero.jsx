import { ArrowRight, BadgeCheck, PhoneCall } from "lucide-react";
import firmMark from "../assets/AA+logo.webp";

const credibilityItems = [
  {
    label: "20+ years experience",
    detail: "Audit, investigations, and advisory leadership",
  },
  {
    label: "Big 4 background",
    detail: "Senior experience shaped in high-scrutiny environments",
  },
  {
    label: "Listed, private & NFP",
    detail: "Credible across complex, regulated organisations",
  },
];

const assuranceSignals = [
  "Direct partner involvement",
  "Risk-focused methodology",
  "Clear, board-ready reporting",
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f4ee_0%,#ffffff_58%,#f8fafc_100%)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      <div className="absolute left-[-10rem] top-[-14rem] h-[28rem] w-[28rem] rounded-full bg-blue-950/10 blur-3xl" />
      <div className="absolute right-[-8rem] top-12 h-[22rem] w-[22rem] rounded-full bg-amber-200/25 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:88px_88px] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.55),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:px-8 md:py-[7.5rem] lg:px-12 lg:py-36">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(420px,0.92fr)] lg:gap-[4.5rem]">
          <div className="max-w-3xl">
            <p className="mb-6 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-blue-900/85">
              Independent Audit &amp; Advisory
            </p>

            <h1 className="max-w-2xl font-serif text-5xl font-semibold leading-[0.95] text-slate-950 sm:text-6xl md:text-7xl">
              Boardroom-level assurance for organisations that value judgment,
              rigor, and trust.
            </h1>

            <p className="mt-7 max-w-2xl font-sans text-lg leading-8 text-slate-700 md:text-xl">
              We deliver independent audits and strategic advisory work with the
              discipline expected by boards, regulators, and stakeholders, and
              the direct senior attention clients rarely get elsewhere.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-slate-950 px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-200 hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
              >
                Schedule Consultation
                <PhoneCall className="h-4 w-4" strokeWidth={2} />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-slate-900 transition-colors duration-200 hover:text-blue-900 focus:outline-none focus:underline"
              >
                Review Services
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>

            <div className="mt-12 border-y border-slate-200/80 py-6">
              <div className="grid gap-5 sm:grid-cols-3 sm:gap-6">
                {credibilityItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <BadgeCheck
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-900"
                      strokeWidth={2}
                    />
                    <div>
                      <p className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
                        {item.label}
                      </p>
                      <p className="mt-1 font-sans text-sm leading-6 text-slate-600">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-10 hidden h-28 w-28 rounded-full border border-blue-900/15 lg:block" />
            <div className="absolute -right-6 bottom-12 hidden h-40 w-40 rounded-full border border-slate-300/70 lg:block" />

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-[linear-gradient(160deg,#0f172a_0%,#13213f_55%,#1e3a8a_100%)] p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.55)] md:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(191,219,254,0.14),transparent_28%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:76px_76px] opacity-40" />

              <div className="relative flex min-h-[430px] flex-col justify-between">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-blue-100/80">
                    Risk-Focused Assurance
                  </span>

                  <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                    <span className="font-sans text-xs font-medium uppercase tracking-[0.16em] text-slate-100/90">
                      Sydney / NSW
                    </span>
                  </div>
                </div>

                <div className="relative mx-auto flex aspect-square w-full max-w-[360px] items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0)_68%)]" />
                  <div className="absolute inset-5 rounded-full border border-white/14" />
                  <div className="absolute inset-14 rounded-full border border-white/10" />
                  <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                  <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                  <div className="relative flex h-40 w-40 items-center justify-center rounded-[1.75rem] border border-white/15 bg-white/10 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-md">
                    <img
                      src={firmMark}
                      alt="Andersens Audit NSW emblem"
                      className="h-full w-full object-contain opacity-95"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr] md:items-end">
                  <div>
                    <p className="font-serif text-3xl leading-tight text-white">
                      Independent. Partner-led. Built for scrutiny.
                    </p>
                    <p className="mt-3 max-w-md font-sans text-sm leading-6 text-slate-300">
                      A premium practice for listed entities, private groups,
                      charities, and not-for-profits that need reliable
                      assurance with commercial clarity.
                    </p>
                  </div>

                  <ul className="space-y-3 border-t border-white/12 pt-5 md:border-t-0 md:border-l md:pl-6 md:pt-0">
                    {assuranceSignals.map((signal) => (
                      <li
                        key={signal}
                        className="font-sans text-sm font-medium uppercase tracking-[0.14em] text-slate-100/90"
                      >
                        {signal}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
