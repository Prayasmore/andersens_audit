import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.webp";

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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "py-3" : "py-5"
          }`}
        >
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Andersens Audit NSW"
              className={`w-auto transition-all duration-300 ${
                isScrolled ? "h-12" : "h-14"
              }`}
            />
          </Link>

          <nav className="hidden items-center space-x-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-lg bg-[#0B1F3A] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#0A1A2F]"
            >
              Schedule Consultation
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 transition-colors hover:bg-gray-50 lg:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-gray-100 bg-white/90 backdrop-blur-md lg:hidden">
          <div className="mx-auto max-w-7xl px-6 py-6 md:px-8 lg:px-12">
            <div className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex rounded-lg bg-[#0B1F3A] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#0A1A2F]"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
