import { useState } from "react";
import { CheckCircle2, Landmark, Mail, Phone } from "lucide-react";

// Enquiries are delivered by FormSubmit (formsubmit.co) — no account needed.
// The random string is FormSubmit's alias for the target inbox (currently
// pbmcognizant@gmail.com); it keeps the raw email address out of the page
// source. To change the destination, generate a new alias by submitting once
// to https://formsubmit.co/ajax/<new-email> and activating from that inbox.
const FORM_ENDPOINT =
  "https://formsubmit.co/ajax/29380783c03d9aafcc2fd17c7d2c4ef0";

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
      <a href="tel:+61423870751" className="transition-colors hover:text-[#0B1F3A]">
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
        className="break-all transition-colors hover:text-[#0B1F3A]"
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
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          organisation: formData.organisation,
          message: formData.message,
          // Unique subject per enquiry so each lands as its own email thread.
          _subject: `Website enquiry — ${formData.fullName}${
            formData.organisation ? ` (${formData.organisation})` : ""
          }`,
          _template: "table",
        }),
      });
      const result = await response.json();
      if (!response.ok || result.success === "false" || result.success === false) {
        throw new Error(result.message || "Request failed");
      }
      setStatus("success");
      setFormData(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#faf8f5] py-24">
      <div className="absolute left-1/2 top-0 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="grid items-start gap-12 md:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-blue-800">
              Request a consultation
            </p>

            <h2 className="font-serif text-4xl font-bold text-[#0B1F3A] md:text-5xl">
              Start with a confidential conversation.
            </h2>

            <p className="mt-5 font-sans text-base leading-7 text-slate-600 md:text-lg">
              We welcome the opportunity to discuss your audit, assurance, and
              advisory needs. Speak directly with senior leadership about your
              organisation, reporting obligations, and next steps.
            </p>

            <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-blue-800">
                What happens next
              </p>
              <ol className="mt-4 space-y-3">
                {[
                  "We respond within one business day.",
                  "You speak directly with Pran — not a sales team.",
                  "You receive a clear scope and fixed-fee proposal.",
                ].map((item, index) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-blue-300 bg-blue-50 font-sans text-xs font-semibold text-blue-800">
                      {index + 1}
                    </span>
                    <span className="font-sans text-sm leading-6 text-slate-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8 space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4"
                  >
                    <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-800" />
                    <div>
                      <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-400">
                        {item.label}
                      </p>
                      <div className="mt-1 font-sans text-base leading-7 text-slate-700">
                        {item.content}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md md:p-10">
            {status === "success" ? (
              <div className="flex min-h-[26rem] flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-16 w-16 text-blue-700" />
                <h3 className="mt-5 font-serif text-3xl font-bold text-[#0B1F3A]">
                  Request received.
                </h3>
                <p className="mt-3 max-w-sm font-sans text-slate-600">
                  Your enquiry has reached Pran directly. Expect a reply within
                  one business day to arrange a confidential discussion.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-blue-800"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif text-2xl font-bold text-[#0B1F3A]">
                  Send an enquiry
                </h3>
                <p className="font-sans text-sm leading-6 text-slate-600">
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
                    className="mb-2 block font-sans text-sm font-medium text-slate-700"
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
                    className="w-full rounded-xl border border-slate-200 bg-[#faf8f5] px-4 py-3 font-sans text-base text-slate-900 outline-none transition focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  />
                </div>

                {status === "error" && (
                  <p className="font-sans text-sm text-red-600">
                    Something went wrong sending your enquiry. Please try again,
                    or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-sm bg-[#0B1F3A] px-6 py-4 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-blue-900 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send enquiry"}
                </button>

                <p className="text-center font-sans text-xs text-slate-400">
                  Confidential. Liability limited by a scheme approved under
                  professional standards legislation.
                </p>
              </form>
            )}
          </div>
        </div>

        <div className="mt-20 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
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
      className="mb-2 block font-sans text-sm font-medium text-slate-700"
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
      className="w-full rounded-xl border border-slate-200 bg-[#faf8f5] px-4 py-3 font-sans text-base text-slate-900 outline-none transition focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
    />
  </div>
);

export default Contact;
