import {
  Building2,
  GraduationCap,
  HandHeart,
  HardHat,
  Landmark,
  PiggyBank,
} from "lucide-react";

const sectors = [
  {
    icon: Building2,
    title: "Listed & Public Entities",
    description:
      "ASX reporting discipline, continuous disclosure, and audit committees that expect rigour.",
  },
  {
    icon: Landmark,
    title: "Private & Family Groups",
    description:
      "Complex structures, related-party arrangements, and finance-ready reporting.",
  },
  {
    icon: HandHeart,
    title: "Charities & Not-for-Profits",
    description:
      "ACNC obligations, grant acquittals, and confidence for boards and funders.",
  },
  {
    icon: PiggyBank,
    title: "Superannuation Funds",
    description:
      "SIS compliance and member-money accountability, delivered on deadline.",
  },
  {
    icon: GraduationCap,
    title: "Education & Community",
    description:
      "Funding accountability and governance scrutiny handled with care.",
  },
  {
    icon: HardHat,
    title: "Property & Construction",
    description:
      "Turnover certifications, project revenue, and lender assurance.",
  },
];

const Industries = () => {
  return (
    <section id="industries" className="relative overflow-hidden bg-white">
      <div className="absolute left-[-10rem] bottom-0 h-[24rem] w-[24rem] rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24 lg:px-12 lg:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-blue-800">
            Sector Experience
          </p>

          <h2 className="font-serif text-4xl font-bold leading-[1.05] text-[#0B1F3A] md:text-5xl">
            Specialist understanding of regulated, accountable sectors.
          </h2>

          <p className="mt-6 max-w-2xl font-sans text-base leading-7 text-slate-600 md:text-lg">
            Assurance is not generic. Each sector carries its own regulators,
            reporting frameworks, and stakeholder expectations &mdash; and we
            have worked inside all of them.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.title}
                className="group rounded-2xl border border-slate-200 bg-[#faf8f5] p-7 transition-all duration-200 hover:border-blue-300 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white">
                  <Icon className="h-5 w-5 text-blue-800" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-serif text-2xl font-semibold leading-tight text-[#0B1F3A]">
                  {sector.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-6 text-slate-600">
                  {sector.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
