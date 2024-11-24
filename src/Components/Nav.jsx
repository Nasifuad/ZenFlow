import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/index";
import Sidebar from "./Sidebar";

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="padding-x py-8 w-full absolute z-10 shadow-xl">
      <nav className="flex justify-between items-center max-container w-full">
        {/* Logo */}
        <a
          href="/"
          className="opacity-90 hover:scale-110 transition-all hover:opacity-100 cursor-pointer"
        >
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray
                hover:text-slate-900 hover:scale-110 transition-all"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <img
          onClick={handleClick}
          className="xl:hidden cursor-pointer"
          src={hamburger}
          alt="menu"
          width={25}
          height={25}
        />
      </nav>

      {isSidebarOpen && <Sidebar navLinks={navLinks} onClose={handleClick} />}
    </header>
  );
};

export default Nav;
