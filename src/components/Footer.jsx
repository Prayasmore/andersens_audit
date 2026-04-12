const Footer = () => {
  return (
    <footer className="bg-[#0B1F3A] py-16 text-gray-400">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-base text-gray-400 md:text-lg">
            Speak with our team today.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="mb-4 font-serif text-2xl text-white">
              Andersens Audit NSW
            </h3>
            <p className="max-w-md text-sm leading-7 text-gray-400">
              Independent audit and advisory services delivering professional
              excellence, careful judgment, and practical commercial insight.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#leadership"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Leadership
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Contact</h4>
            <div className="space-y-3 text-sm leading-7 text-gray-400">
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
                  className="transition-colors hover:text-white"
                >
                  PranR@andersensassurance.com.au
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Andersens Audit NSW. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
