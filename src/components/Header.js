import React, { useContext } from "react";

import { Link } from "react-router-dom";
import Socials from "./Socials";
import MobileNav from "./MobileNav";

import { CursorContext } from "../context/CursorContext";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <header 

    className="fixed w-full px-[30px] z-[60] py-[20px] flex items-center lg:px-[100px]">
      <div 
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="flex lg:flex-row lg:items-center w-full justify-between ">
        {/* logo */}

        <Link to={"/"} className="max-w-[200px]  ">
          <span className="font-primary font-bold text-[24px] hover:text-white transition-colors">Dk</span>
        </Link>

        {/* nav - initially hidden - show on desktop mode */}

        <nav

          className="hidden xl:flex gap-x-12 font-semibold"
        >
          <Link
            className="text-[#696c6d] hover:text-slate-200 transition hover:scale-125"
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="text-[#696c6d] hover:text-slate-200 transition hover:scale-125"
            to={"/about"}
          >
            About
          </Link>
          <Link
            className="text-[#696c6d] hover:text-slate-200 transition hover:scale-125"
            to={"/portfolio"}
          >
            Portfolio
          </Link>
          <Link
            className="text-[#696c6d] hover:text-slate-200 transition hover:scale-125"
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
