import React, { useContext } from "react";

import { CursorContext } from "../context/CursorContext";

import { ImLinkedin, ImGithub } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <div className="hidden xl:flex">
      <ul className="flex gap-x-4 items-center">
        <li>
          <a 
            href="https://www.linkedin.com/in/rdinakaran/" 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="text-text-secondary hover:text-[#0A66C2] transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <ImLinkedin className="w-5 h-5" />
          </a>
        </li>
        <li>
          <a 
            href="https://github.com/Dina-Petrick" 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="text-text-secondary hover:text-primary transition-colors duration-300"
            aria-label="GitHub"
          >
            <ImGithub className="w-5 h-5" />
          </a>
        </li>
        <li>
          <a 
            href="https://www.instagram.com/dina_petrik_/" 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="text-text-secondary hover:text-[#E4405F] transition-colors duration-300"
            aria-label="Instagram"
          >
            <AiOutlineInstagram className="w-5 h-5" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;

