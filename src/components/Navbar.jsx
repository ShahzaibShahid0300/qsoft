import { useEffect, useState, useRef } from "react";
import logo from "../assets/qsoft logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
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
        isScrolled ? "bg-black/40 shadow-md" : "bg-transparent"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-4 md:px-8 lg:px-12 xl:px-16 py-4">
        {/* Logo link */}
        <Link to="/">
          <img src={logo} alt="QSoft ERP logo" className="h-10 md:h-12" />
        </Link>

        {/* Nav List */}
        <ul className="hidden lg:flex flex-1 justify-center gap-x-10 font-bold text-sm tracking-wide uppercase text-white whitespace-nowrap overflow-x-hidden">
          <li className="cursor-pointer py-3">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer py-3">
            <Link to="/about">About Us</Link>
          </li>
          <li className="cursor-pointer py-3">
            <Link to="/products">Products</Link>
          </li>
          <li className="cursor-pointer py-3">
            <Link to="/industries">Industries</Link>
          </li>
          <li className="cursor-pointer py-3">
            <Link to="/solutions">Solutions</Link>
          </li>
          <li className="cursor-pointer py-3">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div
          className="lg:hidden flex flex-col justify-between w-7 h-6 cursor-pointer z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`h-1 bg-white rounded transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-1 bg-white rounded transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-1 bg-white rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out bg-black text-white px-6 py-4 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 font-semibold uppercase text-sm sm:text-base lg:text-lg">
          <li className="py-1">
            <Link to="/">Home</Link>
          </li>
          <li className="py-1">
            <Link to="/about">About Us</Link>
          </li>
          <li className="py-1">
            <Link to="/products">Products</Link>
          </li>
          <li className="py-1">
            <Link to="/industries">Industries</Link>
          </li>
          <li className="py-1">
            <Link to="/solutions">Solutions</Link>
          </li>
          <li className="py-1">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
