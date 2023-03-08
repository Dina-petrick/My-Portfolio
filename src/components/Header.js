import React, { useContext } from "react";

import { Link } from "react-router-dom";
import logo from "../img/header/logo.png";
import Socials from "./Socials";
import MobileNav from "./MobileNav";

import { CursorContext } from "../context/CursorContext";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-[60] h-[100px] flex items-center">
      <div className="flex lg:flex-row lg:items-center w-full justify-between">
        {/* logo */}

        <Link to={"/"} className="max-w-[200px]">
          <img src={logo} alt="" />
        </Link>

        {/* nav - initially hidden - show on desktop mode */}

        <nav
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="hidden xl:flex gap-x-12 font-semibold"
        >
          <Link
            className="text-[#696c6d] hover:text-primary transition hover:scale-125"
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="text-[#696c6d] hover:text-primary transition hover:scale-125"
            to={"/about"}
          >
            About
          </Link>
          <Link
            className="text-[#696c6d] hover:text-primary transition hover:scale-125"
            to={"/portfolio"}
          >
            Portfolio
          </Link>
          <Link
            className="text-[#696c6d] hover:text-primary transition hover:scale-125"
            to={"/contact"}
          >
            Contact
          </Link>
        </nav>
        <Socials />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
