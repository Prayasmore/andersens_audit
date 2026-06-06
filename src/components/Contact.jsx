import { useState } from "react";
import { CheckCircle2, Landmark, Mail, Phone } from "lucide-react";

// Where enquiries are sent. Leave empty to run in demo mode (shows the success
// state without a network call). Set to a form endpoint (e.g. a Cloudflare
// Worker route, Formspree, or Web3Forms URL) to deliver real emails.
const FORM_ENDPOINT = "";

const contactItems = [
  {
    icon: Landmark,
    label: "Address",
    content: (
      <>
        Suite 7, Level 5, 5 Celebration Drive
        <br />
        Bella Vista NSW 2153
      </>
    ),
  },
  {
    icon: Phone,
    label: "Phone",
    content: (
      <a href="tel:+61423870751" className="transition-colors hover:text-white">
        +61 423 870 751
      </a>
    ),
  },
  {
    icon: Mail,
    label: "Email",
    content: (
      <a
        href="mailto:PranR@andersensassurance.com.au"
        className="break-all transition-colors hover:text-white"
      >
        PranR@andersensassurance.com.au
      </a>
    ),
  },
];

const initialForm = { fullName: "", email: "", organisation: "", message: "" };

const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      if (FORM_ENDPOINT) {
        const response = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error("Request failed");
      } else {
        // Demo mode: no endpoint configured yet.
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
      setStatus("success");
      setFormData(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute left-1/2 top-0 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-blue-700/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="grid items-start gap-12 md:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">
              Request a meeting
            </p>

            <h2 className="font-serif text-4xl font-bold text-white md:text-5xl">
              Start with a confidential conversation.
            </h2>

            <p className="mt-5 font-sans text-base leading-7 text-slate-400 md:text-lg">
              We welcome the opportunity to discuss your audit, assurance, and
              advisory needs. Speak directly with senior leadership about your
              organisation, reporting obligations, and next steps.
            </p>

            <div className="mt-10 space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4"
                  >
                    <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
                    <div>
                      <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {item.label}
                      </p>
                      <div className="mt-1 font-sans text-base leading-7 text-slate-200">
                        {item.content}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10">
            {status === "success" ? (
              <div className="flex min-h-[26rem] flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-16 w-16 text-blue-400" />
                <h3 className="mt-5 font-serif text-3xl font-bold text-white">
                  Request received.
                </h3>
                <p className="mt-3 max-w-sm font-sans text-slate-400">
                  Your enquiry has reached Pran directly. Expect a reply within
                  one business day to arrange a confidential discussion.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-blue-400"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif text-2xl font-bold text-white">
                  Send an enquiry
                </h3>
                <p className="font-sans text-sm leading-6 text-slate-400">
                  Share a few details and we will get back to you to arrange a
                  confidential discussion.
                </p>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Full name"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  <Field
                    label="Organisation"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                  />
                </div>

                <Field
                  label="Email address"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-sans text-sm font-medium text-slate-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 font-sans text-base text-white outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {status === "error" && (
                  <p className="font-sans text-sm text-red-400">
                    Something went wrong sending your enquiry. Please try again,
                    or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-sm bg-blue-600 px-6 py-4 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send enquiry"}
                </button>

                <p className="text-center font-sans text-xs text-slate-500">
                  Confidential. Liability limited by a scheme approved under
                  professional standards legislation.
                </p>
              </form>
            )}
          </div>
        </div>

        <div className="mt-20 overflow-hidden rounded-2xl border border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.7947396486545!2d150.94847831521165!3d-33.73788808071124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129b6c0c5e3a5f%3A0x5017d681632e850!2s5%20Celebration%20Dr%2C%20Bella%20Vista%20NSW%202153!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau"
            loading="lazy"
            title="Andersens Audit NSW Office Location"
            className="h-[360px] w-full md:h-[420px]"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, name, type = "text", required, value, onChange }) => (
  <div>
    <label
      htmlFor={name}
      className="mb-2 block font-sans text-sm font-medium text-slate-300"
    >
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 font-sans text-base text-white outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
    />
  </div>
);

export default Contact;
