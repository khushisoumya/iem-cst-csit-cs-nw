import { Link } from "react-router-dom";
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

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Department */}
        <div className="text-center md:text-left">
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
        <div className="text-center md:text-left">
          <h3 className="font-semibold mb-4 text-lg">
            Quick Links
          </h3>

          <ul className="space-y-3 text-blue-100">

            <li>
              <Link
                to="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/faculty"
                className="hover:text-white transition-colors duration-300"
              >
                Faculty
              </Link>
            </li>

            <li>
              <Link
                to="/events"
                className="hover:text-white transition-colors duration-300"
              >
                Events
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* Social */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold mb-4 text-lg">
            Follow Us
          </h3>

          <div className="flex justify-center md:justify-start gap-4">

            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-blue-600 transition duration-300"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-blue-600 transition duration-300"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-blue-600 transition duration-300"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-blue-600 transition duration-300"
            >
              <FaTwitter size={18} />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-blue-600 transition duration-300"
            >
              <FaYoutube size={18} />
            </a>

          </div>
        </div>

      </div>

      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 text-center text-sm text-blue-100">
          © 2025 Department of CSE & CSIT, Institute of Engineering &
          Management. All Rights Reserved.
        </div>
      </div>

    </footer>
  );
}

export default Footer;