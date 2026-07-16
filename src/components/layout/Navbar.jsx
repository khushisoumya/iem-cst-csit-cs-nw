import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/iem.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About the Department" },
  { to: "/programmes", label: "Programmes" },
  { to: "/faculty", label: "Faculty" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-3">
        <NavLink to="/" onClick={closeMenu} className="flex items-center gap-2.5">
          <img src={logo} alt="IEM Logo" className="h-10 sm:h-12 w-auto object-contain" />
        </NavLink>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-50 text-brand-blue"
                    : "text-gray-600 hover:text-navy hover:bg-gray-50"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
<a
        
          href="https://exam.iem.edu.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-1.5 bg-brand-blue hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-md text-white text-sm font-medium px-3.5 xl:px-4 py-2.5 rounded-md transition-all duration-200"
        >
          Admissions Open
          <span className="text-base leading-none">→</span>
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex lg:hidden items-center justify-center rounded-md border border-gray-200 p-2 text-navy transition-colors hover:bg-gray-50"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {menuOpen ? <X className="h-5 w-5" strokeWidth={2} /> : <Menu className="h-5 w-5" strokeWidth={2} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 text-brand-blue"
                      : "text-gray-700 hover:bg-gray-50 hover:text-navy"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="https://exam.iem.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-brand-blue px-4 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md"
            >
              Admissions Open
              <span className="text-base leading-none">→</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;