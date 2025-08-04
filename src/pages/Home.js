import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import profile from "../img/home/Profile.jpg";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="flex sm:flex-col sm:justify-center sm:items-center sm:w-[90%] sm:pt-[80px] md:max-w-[98%] lg:max-w-[90%] mx-auto md:flex-row md:justify-between md:gap-20 md:items-center md:h-[100vh] md:overflow-hidden capitalize"
    >
      {/* Left Content */}
      <motion.ul
        initial={{ opacity: 0, x: "-50%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-50%" }}
        transition={transition1}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="md:w-[30%] max-w-[400px]"
      >
        <li className="sm:mb-[22px] md:mb-[20px] lg:mb-[40px]">
          <h3 className="sm:mb-[10px] md:mb-[5px] lg:mb-[15px] text-[20px] uppercase font-semibold lg:text-[28px]">
            About Me
          </h3>
          <p>
            Front-End Engineer with 3+ years' experience building scalable web
            apps and SDKs using React and TypeScript.
          </p>
        </li>
        <li className="sm:mb-[22px] md:mb-[20px]">
          <h3 className="sm:mb-[10px] md:mb-[5px] lg:mb-[15px] md:text-[20px] uppercase font-semibold lg:text-[28px]">
            Tech Stack
          </h3>
          <p>
            Expert in React, TypeScript, Redux, Firebase, REST APIs, WebSockets,
            Tailwind, Sass, and Git.
          </p>
        </li>
        <li>
          <h3 className="sm:mb-[10px] md:mb-[5px] lg:mb-[15px] md:text-[20px] uppercase font-semibold lg:text-[28px]">
            Skills
          </h3>
          <ul className="flex flex-wrap gap-[5px] capitalize">
            {[
              "React JS",
              "TypeScript",
              "JavaScript",
              "Tailwind CSS",
              "SASS",
              "Git",
              "Redux",
              "Webpack",
            ].map((skill) => (
              <li
                key={skill}
                className="w-fit px-[10px] py-[2px] rounded-[10px] border-[1px] border-primary cursor-pointer"
              >
                {skill}
              </li>
            ))}
          </ul>
        </li>
      </motion.ul>

      {/* Center Image */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={transition1}
        className="h-[60%] sm:my-[20px] md:min-w-[300px] md:min-h-[300px] max-h-[700px] sm:border-[5px] sm:rounded-[30px] border-white md:border-[20px] md:w-[30%] max-w-[400px] md:rounded-t-[38%] md:rounded-b-[38%] md:overflow-hidden"
      >
        <img
          className="w-[100%] sm:rounded-[25px] md:object-cover object-center h-[100%] md:hover:scale-[1.4] md:transition-transform"
          src={profile}
          alt="profile"
        />
      </motion.div>

      {/* Right Content */}
      <motion.ul
        initial={{ opacity: 0, x: "50%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "50%" }}
        transition={transition1}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="md:w-[30%] max-w-[400px] text-end"
      >
        <li className="sm:mb-[22px] md:mb-[20px] lg:mb-[40px]">
          <h3 className="sm:mb-[10px] md:mb-[5px] lg:mb-[15px] md:text-[20px] uppercase font-semibold lg:text-[28px]">
            Experience
          </h3>
          <p>
            Currently at Resulticks, previously at FULL Creative and Blend Labs.
          </p>
        </li>
        <li className="sm:mb-[22px] md:mb-[20px]">
          <h3 className="sm:mb-[10px] md:mb-[5px] lg:mb-[15px] md:text-[20px] uppercase font-semibold lg:text-[28px]">
            Interests
          </h3>
          <ul className="flex justify-end flex-wrap gap-[5px] capitalize">
            {["Coding", "Traveling", "E-sports", "Anime", "Badminton"].map(
              (hobby) => (
                <li
                  key={hobby}
                  className="cursor-pointer w-fit px-[10px] py-[2px] rounded-[10px] border-[1px] border-primary"
                >
                  {hobby}
                </li>
              )
            )}
          </ul>
        </li>
        <li>
          <h3 className="sm:mb-[10px] md:mb-[10px] lg:mb-[15px] md:text-[20px] uppercase font-semibold lg:text-[28px]">
            Projects
          </h3>
          <Link
            to={"/portfolio"}
            className="border-[5px] border-double rounded-[5px] p-[5px] border-primary md:hover:border-solid md:hover:border-[2px] md:transition-all"
          >
            View Portfolio
          </Link>
        </li>
      </motion.ul>
    </motion.section>
  );
};

export default Home;
