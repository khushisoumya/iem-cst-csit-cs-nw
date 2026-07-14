import { MapPin, Mail, Phone } from "lucide-react";
import ContactForm from "./ContactForm";

const details = [
  {
    icon: MapPin,
    label: "Address",
    value: (
      <>
        Institute of Engineering & Management
        <br />
        New Town, Kolkata - 700160
      </>
    ),
  },
  {
    icon: Mail,
    label: "Email",
    value: "cse.co@iem.edu.in",
  },
  {
    icon: Phone,
    label: "Landline",
    value: (
      <>
        033-2341-8440
        <br />
        033-2341-6412
      </>
    ),
  },
];

function ContactSection() {
  return (
    <section className="py-20 bg-paper">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p className="font-mono uppercase tracking-[3px] text-[11px] text-ink mb-3">
            Get in Touch
          </p>
          <h2 className="font-display text-4xl font-semibold text-ink">
            Contact Us
          </h2>
        </div>

        {/* Contact info strip */}
        <div className="edge-card p-8 md:p-10 mb-8">
          <div className="grid sm:grid-cols-3 gap-8">
            {details.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <Icon className="text-ink flex-shrink-0 mt-1" size={22} />
                <div>
                  <h3 className="font-mono uppercase tracking-[1.5px] text-xs text-body">
                    {label}
                  </h3>
                  <p className="mt-1.5 font-sans text-ink leading-7">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://www.google.com/maps/place/Institute+of+Engineering+%26+Management,+New+Town/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center mt-8 bg-ink text-white px-6 py-3 rounded-lg font-sans font-semibold transition-all duration-300 hover:bg-ink/90"
          >
            Open in Google Maps
          </a>
        </div>

        {/* Form + map side by side */}
        <div className="grid lg:grid-cols-2 gap-8">
          <ContactForm />

          <div className="edge-card overflow-hidden">
            <iframe
              title="IEM Campus"
              src="https://maps.google.com/maps?q=Institute%20of%20Engineering%20Management%20New%20Town%20Kolkata&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[420px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;