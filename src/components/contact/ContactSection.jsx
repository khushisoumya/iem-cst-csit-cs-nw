import {
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

function ContactSection() {
  return (
    <section className="py-20 bg-[#f8fafc]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-[#081F5C]">
            Contact Us
          </h2>

          <p className="text-gray-500 mt-3">
            Get in touch with the Department of CSE & CSIT.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          <div className="bg-white rounded-xl shadow p-8 text-center">

            <MapPin className="mx-auto text-[#2563EB]" size={34} />

            <h3 className="font-semibold mt-5">
              Address
            </h3>

            <p className="text-gray-600 mt-3">
              IEM, Newtown
              <br />
              Kolkata - 700156
            </p>

          </div>

          <div className="bg-white rounded-xl shadow p-8 text-center">

            <Mail className="mx-auto text-[#2563EB]" size={34} />

            <h3 className="font-semibold mt-5">
              Email
            </h3>

            <p className="text-gray-600 mt-3">
              cse.co@iem.edu.in
            </p>

          </div>

          <div className="bg-white rounded-xl shadow p-8 text-center">

            <Phone className="mx-auto text-[#2563EB]" size={34} />

            <h3 className="font-semibold mt-5">
              Landline
            </h3>

            <p className="text-gray-600 mt-3">
              033-2341-8440
              <br />
              033-2341-6412
            </p>

          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-14">

          <div className="bg-white rounded-xl shadow p-8">

            <h3 className="text-2xl font-bold text-[#081F5C]">
              Campus Directions
            </h3>

            <p className="mt-5 text-gray-600 leading-7">
              Located in the vibrant Newtown area, Kolkata, well connected by
              road, metro and bus.
            </p>

            <button className="mt-6 bg-[#2563EB] text-white px-6 py-3 rounded-lg">
              Open in Google Maps
            </button>

          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow">

            <iframe
              title="IEM"
              src="https://maps.google.com/maps?q=Institute%20of%20Engineering%20Management%20Kolkata&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[340px]"
            />

          </div>

        </div>

      </div>

    </section>
  );
}


export default ContactSection;


