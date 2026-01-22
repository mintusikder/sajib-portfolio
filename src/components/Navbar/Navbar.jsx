import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  // Scroll detect (ONLY matters on home page)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    if (isHome) {
      window.addEventListener("scroll", handleScroll);
    } else {
      setScrolled(true); // force white navbar on other pages
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[70px] px-6 md:px-16 lg:px-24 xl:px-32
      flex items-center justify-between z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-white text-gray-800 shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      {/* Logo */}
      <NavLink to="/" className="font-bold text-xl">
        LOGO
      </NavLink>

      {/* Desktop Menu */}
      <ul className="md:flex hidden items-center gap-10 font-medium">
        {["Home", "About", "Experience", "Contact", "Pricing"].map((item) => (
          <li key={item}>
            <NavLink
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-500"
                }`
              }
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-[70px] left-0 w-full bg-white text-gray-800 p-6 md:hidden shadow-md"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="flex flex-col gap-4 text-lg">
              {["Home", "About", "Experience", "Contact", "Pricing"].map(
                (item) => (
                  <li key={item}>
                    <NavLink
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-blue-500 transition"
                    >
                      {item}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
