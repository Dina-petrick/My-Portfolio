import React, { useContext } from "react";

import { CursorContext } from "../context/CursorContext";

import { ImLinkedin, ImGithub } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <div className="hidden xl:flex ml-24">
      <ul
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="flex gap-x-4"
      >
        <li>
          <a href="https://www.linkedin.com/in/dinakaran-r/" target="_blank">
            <ImLinkedin className=" rounded-full w-[30px] h-[30px] hover:text-[#0A66C2] hover:rounded-none transition duration-300" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Dina-Petrick " target="_blank">
            <ImGithub className=" rounded-full w-[30px] h-[30px] hover:rounded-md hover:bg-black hover:text-white transition duration-300 " />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/dina_petrik_/" target="_blank">
            <AiOutlineInstagram className=" rounded-full w-[30px] bg-primary text-white h-[30px] hover:rounded-md hover:bg-gradient-to-r from-rose-500 to-indigo-600 hover:white  hover:text-white transition duration-300" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
