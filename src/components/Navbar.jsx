import { useEffect, useState, useRef } from "react";
import logo from "../assets/qsoft logo.png";
import { Link } from "react-router-dom";

export default function Navbar({ toggleTheme, theme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const triggered = useRef(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let timeoutId = null;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollY;

      setIsScrolled(currentY > 50);

      if (scrollingDown && currentY < 100 && !triggered.current) {
        setIsVisible(false);
        triggered.current = true;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setIsVisible(true);
        }, 400);
      }

      if (currentY < 10) {
        triggered.current = false;
      }

      lastScrollY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-black/40 shadow-md dark:bg-[#1e3e62]" : "bg-transparent"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-4 md:px-8 lg:px-12 xl:px-16 py-4">
        {/* Logo link */}
        <Link to="/">
          <img src={logo} alt="QSoft ERP logo" className="h-10 md:h-12" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex flex-1 justify-center gap-x-10 font-bold text-sm tracking-wide uppercase text-white dark:text-[#cbd5e1] whitespace-nowrap overflow-x-hidden">
          <li className="cursor-pointer py-3 hover:text-[#00aeef] transition">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer py-3 hover:text-[#00aeef] transition">
            <Link to="/about">About Us</Link>
          </li>
          <li className="cursor-pointer py-3 hover:text-[#00aeef] transition">
            <Link to="/products">Products</Link>
          </li>
          <li className="cursor-pointer py-3 hover:text-[#00aeef] transition">
            <Link to="/industries">Industries</Link>
          </li>
          <li className="cursor-pointer py-3 hover:text-[#00aeef] transition">
            <Link to="/solutions">Solutions</Link>
          </li>
          <li className="cursor-pointer py-3 hover:text-[#00aeef] transition">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Toggle + Hamburger (Mobile Right Side) */}
        <div className="flex items-center gap-2 lg:gap-4 ml-2 sm:ml-6">
          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-full shadow-md bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300 active:scale-90"
          >
            {theme === "light" ? "☀️" : "🌙"}
          </button>

          {/* Hamburger Icon */}
          <div
            className="lg:hidden flex flex-col justify-between w-7 h-6 cursor-pointer z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`h-1 rounded transition-all duration-300 ${
                menuOpen
                  ? "rotate-45 translate-y-2 bg-black dark:bg-white"
                  : "bg-white"
              }`}
            />
            <span
              className={`h-1 rounded transition-all duration-300 ${
                menuOpen ? "opacity-0" : "bg-white"
              }`}
            />
            <span
              className={`h-1 rounded transition-all duration-300 ${
                menuOpen
                  ? "-rotate-45 -translate-y-2 bg-black dark:bg-white"
                  : "bg-white"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "block" : "hidden"
        } bg-white dark:bg-black text-black dark:text-white px-6 py-4`}
      >
        <ul className="flex flex-col items-center gap-4 font-semibold uppercase text-sm sm:text-base lg:text-lg">
          <li className="py-1 hover:text-[#00aeef] transition">
            <Link to="/">Home</Link>
          </li>
          <li className="py-1 hover:text-[#00aeef] transition">
            <Link to="/about">About Us</Link>
          </li>
          <li className="py-1 hover:text-[#00aeef] transition">
            <Link to="/products">Products</Link>
          </li>
          <li className="py-1 hover:text-[#00aeef] transition">
            <Link to="/industries">Industries</Link>
          </li>
          <li className="py-1 hover:text-[#00aeef] transition">
            <Link to="/solutions">Solutions</Link>
          </li>
          <li className="py-1 hover:text-[#00aeef] transition">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
