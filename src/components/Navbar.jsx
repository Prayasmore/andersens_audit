import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../assets/logo.webp";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "About", href: "#about" },
  { name: "Leadership", href: "#leadership" },
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

  const solid = isScrolled || isOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            solid ? "py-3" : "py-5"
          }`}
        >
          <a href="#top" className="flex items-center">
            {solid ? (
              <img
                src={logo}
                alt="Andersens Audit NSW"
                className="h-11 w-auto"
              />
            ) : (
              <span className="flex items-baseline gap-2">
                <span className="font-serif text-2xl font-bold text-white">
                  Andersens
                </span>
                <span className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-blue-200">
                  Audit&nbsp;NSW
                </span>
              </span>
            )}
          </a>

          <nav className="hidden items-center space-x-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-sans text-sm font-medium transition-colors ${
                  solid
                    ? "text-slate-600 hover:text-[#0B1F3A]"
                    : "text-slate-100 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className={`inline-flex items-center gap-2 rounded-sm px-5 py-2.5 font-sans text-sm font-semibold transition-colors ${
                solid
                  ? "bg-[#0B1F3A] text-white hover:bg-blue-900"
                  : "bg-white text-[#0B1F3A] hover:bg-blue-50"
              }`}
            >
              Request a consultation
              <ArrowRight className="h-4 w-4" />
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors lg:hidden ${
              solid
                ? "border-slate-200 bg-white text-[#0B1F3A] hover:bg-slate-50"
                : "border-white/30 bg-white/10 text-white hover:bg-white/20"
            }`}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white/95 backdrop-blur-md lg:hidden">
          <div className="mx-auto max-w-7xl px-6 py-6 md:px-8 lg:px-12">
            <div className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block font-sans text-sm font-medium text-slate-600 transition-colors hover:text-[#0B1F3A]"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 rounded-sm bg-[#0B1F3A] px-5 py-2.5 font-sans text-sm font-semibold text-white transition-colors hover:bg-blue-900"
              >
                Request a consultation
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
