import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#081F5C] text-white mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-3 gap-12">

        {/* Department */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            Department of CSE & CSIT
          </h2>

          <p className="text-blue-100 leading-7 text-sm">
            Institute of Engineering & Management
            <br />
            New Town, Kolkata - 700160
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">
            Quick Links
          </h3>

          <ul className="space-y-3 text-blue-100">
            <li>Home</li>
            <li>About</li>
            <li>Faculty</li>
            <li>Events</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">
            Follow Us
          </h3>

          <div className="flex gap-4">

            <div className="p-2 rounded-full bg-white/10 hover:bg-blue-600 transition">
              <FaFacebookF size={18} />
            </div>

            <div className="p-2 rounded-full bg-white/10 hover:bg-blue-600 transition">
              <FaLinkedinIn size={18} />
            </div>

            <div className="p-2 rounded-full bg-white/10 hover:bg-blue-600 transition">
              <FaInstagram size={18} />
            </div>

            <div className="p-2 rounded-full bg-white/10 hover:bg-blue-600 transition">
              <FaTwitter size={18} />
            </div>

            <div className="p-2 rounded-full bg-white/10 hover:bg-blue-600 transition">
              <FaYoutube size={18} />
            </div>

          </div>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-8 py-5 flex flex-col md:flex-row justify-between text-sm text-blue-100">

          <p>
            © 2025 IEM. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;