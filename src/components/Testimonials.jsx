import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Pran combines deep accounting and auditing expertise with a strong focus on governance and process improvement. His approach adds genuine value beyond the audit function.",
    name: "Adam Susz",
    designation: "Governance & Process Improvement Client",
  },
  {
    quote:
      "Diligent, professional, and constructive in his approach. Pran has consistently helped refine processes and strengthen financial reporting standards.",
    name: "Bill Maloukis",
    designation: "Financial Reporting Client",
  },
  {
    quote:
      "Pran provided invaluable technical advice and commercial insight during due diligence and valuation engagements. His professionalism and attention to detail were outstanding.",
    name: "Tau Kumar",
    designation: "Due Diligence & Valuation Client",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToIndex = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  const showPrevious = () => {
    setActiveIndex((current) =>
      (current - 1 + testimonials.length) % testimonials.length
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="bg-neutral-50 py-24 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Client Perspective
          </p>

          <h2 className="font-serif text-3xl font-semibold text-slate-900 md:text-4xl">
            Client Testimonials
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-center font-sans text-base leading-7 text-slate-600">
            A selection of client feedback on the quality of our audit and
            advisory work.
          </p>
        </div>

        <div className="border-t border-slate-200/80 pt-16 md:pt-20">
          <div
            className="relative mx-auto flex min-h-[28rem] max-w-4xl items-center justify-center md:min-h-[30rem] lg:min-h-[32rem]"
            role="region"
            aria-roledescription="carousel"
            aria-label="Client testimonials"
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
                    <p className="font-serif text-[3.25rem] leading-none text-slate-300 md:text-[4rem] lg:text-[4.5rem]">
                      "
                    </p>

                    <p className="mx-auto mt-6 max-w-3xl font-serif text-3xl leading-tight text-slate-950 md:text-4xl lg:text-5xl">
                      {testimonial.quote}
                    </p>

                    <div className="mx-auto mt-12 w-24 border-t border-slate-300/80" />

                    <div className="mt-8">
                      <p className="font-sans text-lg font-semibold text-slate-900">
                        {testimonial.name}
                      </p>
                      <p className="mt-2 font-sans text-sm uppercase tracking-[0.18em] text-slate-500">
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 md:mt-14">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Show previous testimonial"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-slate-300"
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
                      ? "h-2 w-10 bg-slate-900"
                      : "h-2 w-6 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={showNext}
              aria-label="Show next testimonial"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-slate-300"
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
