import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Leadership", href: "#leadership" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-slate-950/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "py-3" : "py-5"
          }`}
        >
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-serif text-2xl font-bold text-white">
              Andersens
            </span>
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-blue-300">
              Audit&nbsp;NSW
            </span>
          </a>

          <nav className="hidden items-center space-x-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-sm bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Request a meeting
              <ArrowRight className="h-4 w-4" />
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 backdrop-blur-md lg:hidden">
          <div className="mx-auto max-w-7xl px-6 py-6 md:px-8 lg:px-12">
            <div className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-medium text-slate-300 transition-colors hover:text-white"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 rounded-sm bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
              >
                Request a meeting
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
