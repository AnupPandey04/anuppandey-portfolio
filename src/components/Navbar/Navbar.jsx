import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "achievements", label: "Achievements" },
    { id: "certificates", label: "Certificates" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-6 md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#050414]/60 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* MAIN NAVBAR */}
      <div className="text-white py-5 flex items-center w-full">

        {/* LOGO (LEFT) */}
        <div className="text-lg font-semibold cursor-pointer flex-shrink-0">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Anup</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Pandey</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* MENU (CENTER) */}
        <ul className="hidden md:flex flex-1 justify-center space-x-6 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] transition ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE (ICONS + MOBILE MENU) */}
        <div className="flex items-center ml-auto space-x-4">

          {/* DESKTOP ICONS */}
          <div className="hidden md:flex space-x-4">
            <a
              href="https://github.com/AnupPandey04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec] transition"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/anup-pandey-/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec] transition"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* MOBILE MENU ICON */}
          <div className="md:hidden">
            {isOpen ? (
              <FiX
                className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414]/90 backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}

            {/* SOCIAL ICONS */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://github.com/AnupPandey04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/anup-pandey-/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;