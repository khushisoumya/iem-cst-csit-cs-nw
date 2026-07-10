import {
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

function ContactSection() {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#081F5C]">
            Contact Us
          </h2>

          <p className="text-gray-500 mt-3">
            Get in touch with the Department of CSE & CSIT.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {/* Address */}
          <div className="group premium-card p-8 text-center">
            <MapPin
              className="mx-auto text-[#2563EB] transition-all duration-500 group-hover:scale-110"
              size={34}
            />

            <h3 className="font-semibold mt-5">
              Address
            </h3>

            <p className="mt-3">
              Institute of Engineering & Management
              <br />
              New Town, Kolkata - 700160
            </p>
          </div>

          {/* Email */}
          <div className="group premium-card p-8 text-center">
            <Mail
              className="mx-auto text-[#2563EB] transition-all duration-500 group-hover:scale-110"
              size={34}
            />

            <h3 className="font-semibold mt-5">
              Email
            </h3>

            <p className="mt-3">
              cse.co@iem.edu.in
            </p>
          </div>

          {/* Phone */}
          <div className="group premium-card p-8 text-center">
            <Phone
              className="mx-auto text-[#2563EB] transition-all duration-500 group-hover:scale-110"
              size={34}
            />

            <h3 className="font-semibold mt-5">
              Landline
            </h3>

            <p className="mt-3">
              033-2341-8440
              <br />
              033-2341-6412
            </p>
          </div>

        </div>

        {/* Directions */}
        <div className="grid lg:grid-cols-2 gap-8 mt-14">

          <div className="group premium-card p-8">

            <h3 className="text-2xl font-bold text-[#081F5C]">
              Campus Directions
            </h3>

            <p className="mt-5 leading-7">
              Located in the vibrant New Town area of Kolkata, the campus is
              well connected by road, metro and public transport, making it
              easily accessible from all parts of the city.
            </p>

            <a
              href="https://www.google.com/maps/place/Institute+of+Engineering+%26+Management,+New+Town/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                mt-6
                bg-[#2563EB]
                text-white
                px-6
                py-3
                rounded-lg
                transition-all
                duration-300
                hover:bg-white
                hover:text-[#081F5C]
                hover:scale-105
              "
            >
              Open in Google Maps
            </a>

          </div>

          <div className="premium-card overflow-hidden">

            <iframe
              title="IEM Campus"
              src="https://maps.google.com/maps?q=Institute%20of%20Engineering%20Management%20New%20Town%20Kolkata&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[340px]"
              loading="lazy"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactSection;