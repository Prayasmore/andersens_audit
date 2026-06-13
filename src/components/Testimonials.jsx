import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import aipaLogo from "../assets/aipa_testimonial.webp";
import csLogo from "../assets/cs_testimonial.webp";
import tavuniLogo from "../assets/tavuni_testimonial.webp";

const testimonials = [
  {
    quote:
      "Pran combines deep accounting and auditing expertise with a strong focus on governance and process improvement. His approach adds genuine value beyond the audit function.",
    name: "Adam Susz",
    designation: "Former Treasurer, Australian & International Pilots Association",
    logo: aipaLogo,
    logoAlt: "AIPA — Australian & International Pilots Association",
  },
  {
    quote:
      "Diligent, professional, and constructive in his approach. Pran has consistently helped refine processes and strengthen financial reporting standards.",
    name: "Bill Maloukis",
    designation: "Director & General Manager, Construction Specialist",
    logo: csLogo,
    logoAlt: "Construction Specialist",
  },
  {
    quote:
      "Pran provided invaluable technical advice and commercial insight during due diligence and valuation engagements. His professionalism and attention to detail were outstanding.",
    name: "Tau Kumar",
    designation: "CEO, Tavuni Capital",
    logo: tavuniLogo,
    logoAlt: "Tavuni Capital",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToIndex = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  const showPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const touchStartX = useRef(null);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    const swipeThreshold = 50;
    if (deltaX <= -swipeThreshold) {
      showNext();
    } else if (deltaX >= swipeThreshold) {
      showPrevious();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-24 md:py-28 lg:py-32"
    >
      <div className="absolute left-1/2 top-0 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 md:px-8 lg:px-12">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-blue-800">
            Client Perspective
          </p>

          <h2 className="font-serif text-3xl font-bold text-[#0B1F3A] md:text-4xl">
            Trusted by the people who sign off.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-center font-sans text-base leading-7 text-slate-600">
            Direct feedback from directors, executives, and finance leaders on
            engagements led personally by Pran.
          </p>
        </div>

        <div className="border-t border-slate-200 pt-14 md:pt-16">
          <div
            className="relative mx-auto flex min-h-[26rem] max-w-4xl touch-pan-y items-center justify-center md:min-h-[28rem]"
            role="region"
            aria-roledescription="carousel"
            aria-label="Client testimonials"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex;

              return (
                <article
                  key={testimonial.name}
                  aria-hidden={!isActive}
                  className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-400 ease-out ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0"
                  }`}
                >
                  <div className="mx-auto max-w-3xl">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
                      <img
                        src={testimonial.logo}
                        alt={testimonial.logoAlt}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>

                    <p className="mx-auto mt-8 max-w-3xl font-serif text-2xl leading-snug text-[#0B1F3A] md:text-3xl lg:text-4xl">
                      "{testimonial.quote}"
                    </p>

                    <div className="mx-auto mt-10 w-24 border-t border-slate-300" />

                    <div className="mt-6">
                      <p className="font-sans text-lg font-semibold text-[#0B1F3A]">
                        {testimonial.name}
                      </p>
                      <p className="mt-2 font-sans text-sm uppercase tracking-[0.14em] text-slate-500">
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 md:mt-12">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Show previous testimonial"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors duration-200 hover:bg-slate-50 hover:text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2} />
            </button>

            <div className="flex items-center gap-3">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => goToIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-pressed={index === activeIndex}
                  className={`rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "h-2 w-10 bg-[#0B1F3A]"
                      : "h-2 w-6 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={showNext}
              aria-label="Show next testimonial"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors duration-200 hover:bg-slate-50 hover:text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
