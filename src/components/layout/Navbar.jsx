import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/iem.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About the Department" },
  { to: "/faculty", label: "Faculty" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-20 px-4 sm:px-6 flex items-center justify-between">
        <NavLink to="/" onClick={closeMenu}>
          <img
            src={logo}
            alt="IEM Logo"
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </NavLink>

        <div className="hidden lg:flex items-center gap-8 text-sm font-sans font-semibold">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `relative pb-1 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-signal after:transition-all after:duration-300 ${
                  isActive
                    ? "text-ink after:w-full"
                    : "text-gray-600 hover:text-ink after:w-0"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-ink"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-ink border-t border-white/10">
          <div className="flex flex-col py-4 font-sans">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-6 py-3 transition-colors duration-300 border-l-2 ${
                    isActive
                      ? "text-white bg-white/10 border-signal"
                      : "text-gray-200 border-transparent hover:bg-white/10"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;