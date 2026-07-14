import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/faculty", label: "Faculty" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
];

const socials = [
  { Icon: FaFacebookF, label: "Facebook" },
  { Icon: FaLinkedinIn, label: "LinkedIn" },
  { Icon: FaInstagram, label: "Instagram" },
  { Icon: FaTwitter, label: "Twitter" },
  { Icon: FaYoutube, label: "YouTube" },
];

function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="text-center md:text-left">
          <h2 className="font-display text-2xl font-semibold mb-4">
            Department of CSE & CSIT
          </h2>

          <p className="text-blue-100 leading-7 text-sm font-sans">
            Institute of Engineering & Management
            <br />
            New Town, Kolkata - 700160
          </p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="font-mono text-xs uppercase tracking-[3px] text-blue-300 mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-blue-100 font-sans">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="font-mono text-xs uppercase tracking-[3px] text-blue-300 mb-4">
            Follow Us
          </h3>

          <div className="flex justify-center md:justify-start gap-4">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 hover:text-blue-200 transition duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 text-center text-sm text-blue-100 font-sans">
          © 2026 Department of Cyber Security, Institute of Engineering &
          Management. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;