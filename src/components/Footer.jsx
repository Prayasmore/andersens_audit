const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-16 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 font-sans text-base text-slate-400 md:text-lg">
            Speak directly with the partner who'll do the work.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex items-center justify-center rounded-sm bg-blue-600 px-7 py-3.5 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-blue-500"
          >
            Request a meeting
          </a>
        </div>

        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="mb-4 font-serif text-2xl text-white">
              Andersens Audit NSW
            </h3>
            <p className="max-w-md font-sans text-sm leading-7 text-slate-400">
              Independent audit and advisory services delivering professional
              excellence, careful judgment, and practical commercial insight.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-sans text-sm font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-3 font-sans text-sm">
              {[
                { label: "Services", href: "#services" },
                { label: "About", href: "#about" },
                { label: "Leadership", href: "#leadership" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-sans text-sm font-semibold text-white">
              Contact
            </h4>
            <div className="space-y-3 font-sans text-sm leading-7 text-slate-400">
              <p>
                Suite 7, Level 5, 5 Celebration Drive
                <br />
                Bella Vista NSW 2153
              </p>
              <p>
                <a
                  href="tel:+61423870751"
                  className="transition-colors hover:text-white"
                >
                  +61 423 870 751
                </a>
              </p>
              <p>
                <a
                  href="mailto:PranR@andersensassurance.com.au"
                  className="break-all transition-colors hover:text-white"
                >
                  PranR@andersensassurance.com.au
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-2 border-t border-white/10 pt-6 text-center font-sans text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Andersens Audit NSW. All rights
            reserved.
          </p>
          <p className="text-xs">
            Liability limited by a scheme approved under professional standards
            legislation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
