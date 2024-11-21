import React from "react";
import { headerLogo } from "./../assets/images";
const Nav = () => {
  return (
    <header>
      <a href="/">
        <img src={headerLogo} alt="" />
      </a>
    </header>
  );
};

export default Nav;
