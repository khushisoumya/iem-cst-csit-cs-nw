import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.png";

const navLinkClass = ({ isActive }) =>
  `transition-all duration-300 ${
    isActive
      ? "text-white font-semibold"
      : "text-gray-200 hover:text-white"
  }`;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-[#081F5C] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-20 px-4 sm:px-6 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" onClick={closeMenu}>
          <img
            src={logo}
            alt="IEM Logo"
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold">

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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#081F5C] border-t border-white/10">

          <div className="flex flex-col py-4">

            <NavLink
              to="/"
              onClick={closeMenu}
              className="px-6 py-3 text-gray-200 hover:bg-white/10"
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMenu}
              className="px-6 py-3 text-gray-200 hover:bg-white/10"
            >
              About the Department
            </NavLink>

            <NavLink
              to="/faculty"
              onClick={closeMenu}
              className="px-6 py-3 text-gray-200 hover:bg-white/10"
            >
              Faculty
            </NavLink>

            <NavLink
              to="/events"
              onClick={closeMenu}
              className="px-6 py-3 text-gray-200 hover:bg-white/10"
            >
              Events
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className="px-6 py-3 text-gray-200 hover:bg-white/10"
            >
              Contact
            </NavLink>

          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;