import React, { useContext } from "react";

// import link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transitions";

//import image

import about from "../img/about/image.png";

import { CursorContext } from "../context/CursorContext";

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section "
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="container mx-auto h-full relative"
      >
        {/* text & img wrapper */}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          {/* image  */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden hidden lg:block ">
            <img src={about} alt="" />
          </div>
          {/* text  */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1  pt-36 pb-14 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">About Me</h1>
            <p className="mb-12 max-w-sm">
              Hi Everyone, I am
              <b> Dinakaran.</b> From Chennai, India
              <br />
              <br />
              I'm dedicated and highly motivated individual with a passion for
              technology and web development. Seeking a career change into the
              IT field as a React JS Developer. Skilled in HTML, CSS,
              JavaScript, and React JS, with a strong commitment to writing
              clean, maintainable code and creating user-friendly web
              applications.
            </p>
            <Link to="/portfolio" className="btn">
              View My Work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
