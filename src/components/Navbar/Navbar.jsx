import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center pt-4">
      <div
        className={`w-[90%] lg:w-[70%] rounded-2xl transition-all duration-300
        ${
          isScrolled
            ? "bg-[#050414]/80 backdrop-blur-xl shadow-[0_20px_80px_rgba(99,102,241,0.25)]"
            : "bg-[#050414]/40 backdrop-blur-md"
        }`}
      >
        {/* Animated gradient bar */}
        <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse rounded-t-2xl" />

        <div className="px-8 py-4 flex justify-between items-center text-white">
          {/* Logo */}
          <div className="text-lg font-bold tracking-wider text-white">
            <span className="text-blue-500">&lt;</span>
            <span className="drop-shadow-[0_0_12px_#6366f1]">Adarsh</span>
            <span className="text-purple-500">/</span>
            <span className="drop-shadow-[0_0_12px_#a855f7]">Raj</span>
            <span className="text-pink-500">&gt;</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`px-4 py-2 rounded-full transition-all
                  ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="hidden md:flex gap-3">
            {[FaGithub, FaLinkedin].map((Icon, i) => (
              <a
                key={i}
                href={
                  i === 0
                    ? "https://github.com/Adarshraj15"
                    : "https://www.linkedin.com/in/adarsh-raj-14841234a/"
                }
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Mobile Icon */}
          <div className="md:hidden">
            {isOpen ? (
              <FiX
                className="text-3xl text-purple-400"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-3xl text-purple-400"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-6 pb-6">
            <ul className="flex flex-col gap-4 text-center">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`py-2 rounded-xl transition
                  ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
