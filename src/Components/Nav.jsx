import React from "react";
import { headerLogo } from "../assets/images";

import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/index";
const Nav = () => {
  return (
    <header className="bg-slate-800 padding-x py-8  w-full absolute z-10 ">
      <nav className="flex justify-between items-center max-container">
        <a
          href="/"
          className="opacity-90 hover:scale-110 transition-all hover:opacity-100 cursor-pointer"
        >
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((link) => {
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray
                  hover:text-white hover:scale-110 transition-all
                  "
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
        <a href="/">
          <img
            className="xl:hidden cursor-pointer"
            src={hamburger}
            alt="menu"
            width={25}
            height={25}
          />
        </a>
      </nav>
    </header>
  );
};

export default Nav;
