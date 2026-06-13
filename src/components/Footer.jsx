const Footer = () => {
  return (
    <footer className="bg-[#0B1F3A] py-16 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
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
                { label: "Industries", href: "#industries" },
                { label: "About", href: "#about" },
                { label: "Leadership", href: "#leadership" },
                { label: "How We Engage", href: "#process" },
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
              <p>
                <a
                  href="https://www.linkedin.com/in/pran-rathod-973537256/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                  </svg>
                  Connect on LinkedIn
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
