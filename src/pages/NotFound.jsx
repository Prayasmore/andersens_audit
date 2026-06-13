import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B1F3A] px-6 py-24">
      {/* ambient glow to match the hero treatment */}
      <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/30 to-transparent" />

      <div className="relative mx-auto max-w-2xl text-center">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-blue-100 backdrop-blur-sm">
          Error 404 · Page not found
        </p>

        <h1 className="font-serif text-7xl font-bold leading-none text-white md:text-8xl lg:text-9xl">
          404
        </h1>

        <h2 className="mt-8 font-serif text-3xl font-bold leading-tight text-white md:text-4xl">
          This page isn&apos;t on the record.
        </h2>

        <p className="mx-auto mt-5 max-w-xl font-sans text-lg leading-8 text-slate-300">
          The page you&apos;re looking for may have moved, been retired, or never
          existed. Let&apos;s get you back to solid ground.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-white px-7 py-3.5 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-[#0B1F3A] transition-colors hover:bg-blue-50"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2} />
            Back to home
          </Link>

          <Link
            to="/#contact"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/30 px-7 py-3.5 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/10"
          >
            Contact us
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
