import logo from "../assets/logo.webp";

const Loader = ({ visible }) => {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-hidden={!visible}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-500 ease-out ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex flex-col items-center gap-7">
        <img
          src={logo}
          alt="Andersens Assurance"
          className="h-12 w-auto animate-pulse md:h-14"
        />
        <span className="h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-[#0B1F3A]" />
        <span className="sr-only">Loading…</span>
      </div>
    </div>
  );
};

export default Loader;
