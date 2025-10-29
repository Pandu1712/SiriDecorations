import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/gallery/SiriPoster.jpg"; // 🖼️ Replace with your actual logo path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/gallery", name: "Gallery" },
    { path: "/services", name: "Services" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* ✅ Logo Section */}
        <Link to="/" className="flex items-center gap-3 text-2xl font-bold">
          <img
            src={logo}
            alt="Siri Decorations Logo"
            className="w-12 h-12 rounded-full object-cover"
          />
          <span className="whitespace-nowrap">Siri Decorations</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-yellow-300 transition ${
                    isActive ? "text-yellow-300" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-pink-600 to-purple-700 text-white shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)} // Close after click
                  className={({ isActive }) =>
                    `hover:text-yellow-300 transition ${
                      isActive ? "text-yellow-300" : ""
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
