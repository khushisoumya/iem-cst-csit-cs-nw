import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../../assets/iem.png";

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
  { Icon: FaYoutube, label: "YouTube" },
];

function Footer() {
  return (
    <footer className="bg-navy text-white pt-12 sm:pt-14 lg:pt-16 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] gap-8 lg:gap-10 pb-10 sm:pb-12 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <img src={logo} alt="IEM Logo" className="h-9 w-9 object-contain" />
            <div className="leading-tight">
              <div className="font-bold text-sm">Cyber Security</div>
              <div className="text-gray-400 text-[11px]">Dept. of Cyber Security, IEM</div>
            </div>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-5">
            Institute of Engineering &amp; Management, New Town, Kolkata — 700160.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Icon className="w-3.5 h-3.5 text-white" strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2.5">
            {links.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-gray-400 text-xs sm:text-sm hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4">Contact Us</h4>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-2 text-gray-400 text-xs sm:text-sm leading-relaxed">
              <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" strokeWidth={2} />
              New Town, Kolkata, West Bengal 700160
            </li>
            <li className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
              <Phone className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
              +91-33-2357-0930
            </li>
            <li className="flex items-start gap-2 text-gray-400 text-xs sm:text-sm break-all">
              <Mail className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
              info@iem.edu.in
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-center sm:text-left text-gray-500 text-xs sm:text-sm">
        <span>© 2026 Department of Cyber Security, IEM. All rights reserved.</span>
        <span>Institute of Engineering &amp; Management, Kolkata</span>
      </div>
    </footer>
  );
}

export default Footer;