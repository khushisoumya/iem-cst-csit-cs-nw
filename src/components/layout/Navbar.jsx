import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const navLinkClass = ({ isActive }) =>
  `pb-1 transition-all duration-300 ${
    isActive
      ? "border-b-2 border-blue-500 text-white"
      : "text-gray-200 hover:text-white hover:-translate-y-0.5"
  }`;

function Navbar() {
  return (
    <nav className="bg-[#081F5C] h-20 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        
        {/* Logo */}
        <NavLink to="/">
          <img
            src={logo}
            alt="IEM Logo"
            className="h-14 w-auto object-contain"
          />
        </NavLink>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-sm font-semibold">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About the Department
          </NavLink>

          <NavLink to="/faculty" className={navLinkClass}>
            Faculty
          </NavLink>

          <NavLink to="/events" className={navLinkClass}>
            Events
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;