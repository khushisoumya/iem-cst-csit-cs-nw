import { useState } from "react";
import { Send } from "lucide-react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire this up to an API/EmailJS/backend later
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="edge-card p-8 md:p-10">
      <h3 className="font-display text-2xl font-semibold text-ink mb-2">
        Send a Message
      </h3>
      <p className="text-body font-sans text-sm mb-8">
        Have a question? Fill out the form and we'll get back to you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block font-mono uppercase tracking-[1.5px] text-xs text-body mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-lg border border-line font-sans text-ink placeholder:text-body/60 focus:outline-none focus:border-ink focus:ring-1 focus:ring-ink transition-colors duration-300"
            />
          </div>

          <div>
            <label className="block font-mono uppercase tracking-[1.5px] text-xs text-body mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-line font-sans text-ink placeholder:text-body/60 focus:outline-none focus:border-ink focus:ring-1 focus:ring-ink transition-colors duration-300"
            />
          </div>
        </div>

        <div>
          <label className="block font-mono uppercase tracking-[1.5px] text-xs text-body mb-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="What is this regarding?"
            className="w-full px-4 py-3 rounded-lg border border-line font-sans text-ink placeholder:text-body/60 focus:outline-none focus:border-ink focus:ring-1 focus:ring-ink transition-colors duration-300"
          />
        </div>

        <div>
          <label className="block font-mono uppercase tracking-[1.5px] text-xs text-body mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Write your message here..."
            className="w-full px-4 py-3 rounded-lg border border-line font-sans text-ink placeholder:text-body/60 focus:outline-none focus:border-ink focus:ring-1 focus:ring-ink transition-colors duration-300 resize-none"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 bg-ink text-white px-6 py-3 rounded-lg font-sans font-semibold transition-all duration-300 hover:bg-ink/90 w-full sm:w-auto"
        >
          {submitted ? "Message Sent!" : "Send Message"}
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}

export default ContactForm;