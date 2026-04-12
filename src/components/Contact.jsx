import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const contactItems = [
  {
    icon: MapPin,
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
      <a href="tel:+61423870751" className="transition-colors hover:text-gray-900">
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
        className="break-all transition-colors hover:text-gray-900"
      >
        PranR@andersensassurance.com.au
      </a>
    ),
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organisation: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="grid items-start gap-12 md:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Get in touch
            </p>

            <h2 className="font-serif text-3xl font-semibold text-gray-900 md:text-4xl">
              Let's discuss your requirements
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg">
              We welcome the opportunity to discuss your audit, assurance, and
              advisory needs. Speak directly with senior leadership about your
              organisation, reporting obligations, and next steps.
            </p>

            <div className="mt-10 space-y-6">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700">
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
                        {item.label}
                      </p>
                      <div className="mt-2 text-base leading-7 text-gray-700">
                        {item.content}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <h3 className="font-serif text-2xl font-semibold text-gray-900">
              Send an enquiry
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Share a few details and we will get back to you to arrange a
              confidential discussion.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Full name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="organisation"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Organisation
                </label>
                <input
                  id="organisation"
                  name="organisation"
                  type="text"
                  value={formData.organisation}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-slate-950 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
              >
                Send message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 overflow-hidden rounded-2xl border border-gray-200">
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

export default Contact;
