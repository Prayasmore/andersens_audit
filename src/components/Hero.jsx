import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import cpaBadge from "../assets/Untitled-1.webp";
import rocBadge from "../assets/logo-inverse.webp";
import thirdBadge from "../assets/Untitled-2.webp";
import heroVideo from "../assets/hero_bg_video.mp4";

// Background video: "Business people signing a contract and shaking hands".
const HERO_VIDEO = heroVideo;

const stats = [
  { value: "20+", label: "Years' experience" },
  { value: "Big 4", label: "Senior background" },
  { value: "100%", label: "Partner-led" },
  { value: "Listed · NFP", label: "Clients served" },
];

const Hero = ({ onMediaReady }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Browsers pause background/occluded video; resume when visible again.
    const tryPlay = () => video.play().catch(() => {});
    tryPlay();
    document.addEventListener("visibilitychange", tryPlay);
    return () => document.removeEventListener("visibilitychange", tryPlay);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !onMediaReady) return;

    // The hero video is the heaviest above-the-fold asset; dismiss the loader
    // once it can render its first frame (or immediately if already buffered).
    if (video.readyState >= 3) {
      onMediaReady();
      return;
    }
    video.addEventListener("canplay", onMediaReady, { once: true });
    video.addEventListener("error", onMediaReady, { once: true });
    return () => {
      video.removeEventListener("canplay", onMediaReady);
      video.removeEventListener("error", onMediaReady);
    };
  }, [onMediaReady]);

  return (
    <>
      <section id="top" className="relative min-h-[44rem] overflow-hidden bg-[#0B1F3A]">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(6,18,36,0.92)_0%,rgba(8,23,44,0.78)_45%,rgba(11,31,58,0.55)_75%,rgba(11,31,58,0.35)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B1F3A]/80 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 pt-36 pb-40 md:px-8 md:pt-44 lg:px-12">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-blue-100 backdrop-blur-sm">
            Independent Audit &amp; Advisory · Sydney NSW
          </p>

          <h1 className="max-w-3xl font-serif text-5xl font-bold leading-[1.02] text-white md:text-6xl lg:text-7xl">
            Assurance your board can rely on. Delivered by the partner, not
            passed down.
          </h1>

          <p className="mt-7 max-w-2xl font-sans text-lg leading-8 text-slate-200 md:text-xl">
            Independent audits and strategic advisory with the discipline boards
            and regulators expect &mdash; and the direct senior attention you
            won't get from a Big 4 team.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-white px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-[#0B1F3A] transition-colors hover:bg-blue-50"
            >
              Request a confidential consultation
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:text-blue-200"
            >
              Explore services
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* stats band overlapping bottom */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-t-2xl border border-white/20 bg-white/15 backdrop-blur-md md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-[#0B1F3A]/35 px-6 py-6">
                  <p className="font-serif text-3xl font-bold text-white md:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1.5 font-sans text-xs uppercase tracking-[0.16em] text-blue-100">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* credentials / trust strip — real badges */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-9 md:px-8 lg:flex-row lg:justify-between lg:px-12">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Credentialed &amp; regulated
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            <img
              src={cpaBadge}
              alt="Andersens Assurance Pty. Ltd. is a CPA Practice"
              className="h-14 w-auto md:h-16"
            />
            <img
              src={rocBadge}
              alt="Australian Government — Registered Organisations Commission"
              className="h-10 w-auto md:h-12"
            />
            <img
              src={thirdBadge}
              alt="Andersens Assurance credential"
              className="h-12 w-auto md:h-14"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
