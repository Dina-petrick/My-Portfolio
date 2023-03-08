import React, { useContext } from "react";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import { transition1 } from "../transitions";

//img
import portfolio from "../img/portfolio/portfolio.png";
import portfolio1 from "../img/portfolio/portfolio-1.png";
import portfolio2 from "../img/portfolio/portfolio-2.png";

import { CursorContext } from "../context/CursorContext";

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <section className="section">
      <div className=" container mx-auto h-full relative">
        <div className="flex flex-col justify-center items-center lg:flex-row gap-x-10  pt-[5rem] xl:pt-[10rem]">
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: "80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "80%" }}
            transition={transition1}
            className="flex-1 flex flex-col gap-y-2 mb-5 lg:mb-0 lg:ml-[4.5rem] xl:ml-[10rem]"
          >
            {/* text */}
            <h2 className="h2  leading-tight ">My Latest work</h2>
            <p className=" max-w-sm mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae autem impedit quae explicabo aspernatur repellat
              recusandae deleniti quasi vitae obcaecati.
            </p>
            <div className="w-full text-center lg:text-start">
              <button className="bg-black text-white px-2 py-2 w-[150px] mb-9 ">
                <a href="https://github.com/Dina-Petrick" target="_blank">
                  View All Projects
                </a>
              </button>
            </div>
            {/* image  */}
            <div className="group relative max-w-sm overflow-hidden border-2 border-black/50 rounded-xl">
              {/* overlay  */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-20 transition-all duration-300"></div>
              {/* img  */}
              <img
                className="group-hover:scale-125 transition-all duration-300 h-[250px] object-cover w-full"
                src={portfolio}
                alt=""
              />
              {/* pretitle  */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40">
                <span className="text-white text-2xl font-bold">Chat App </span>
              </div>
              {/* title  */}
              <div className="absolute -bottom-full left-11 group-hover:bottom-11 transition-all duration-700 z-40 ">
                <button className="bg-black p-1 px-4 text-lg text-white mr-5 font-secondary tracking-wider">
                  <a
                    href="https://chat-room-project.vercel.app/"
                    target="_blank"
                  >
                    Demo
                  </a>
                </button>
                <button className="bg-black p-1 px-4 text-lg text-white mr-5 font-secondary ">
                  <a
                    href="https://github.com/Dina-petrick/chat-app.git"
                    target="_blank"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={transition1}
            className=" hidden flex-1 lg:flex flex-col gap-y-10 "
          >
            {/* image  */}
            <div className="group relative max-w-sm overflow-hidden border-2 border-black/50 rounded-xl">
              {/* overlay  */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-20 transition-all duration-300"></div>
              {/* img  */}
              <img
                className="group-hover:scale-125 transition-all duration-300 object-cover h-[250px] w-full"
                src={portfolio1}
                alt=""
              />
              {/* pretitle  */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40">
                <span className="text-white text-2xl font-bold">
                  Restaurant Website
                </span>
              </div>
              {/* title  */}
              <div className="absolute -bottom-full left-11 group-hover:bottom-11 transition-all duration-700 z-40 ">
                <button className="bg-black p-1 px-4 text-lg text-white mr-5 font-secondary tracking-wider">
                  <a href="https://the-rosa-site.netlify.app" target="_blank">
                    Demo
                  </a>
                </button>
                <button className="bg-black p-1 px-4 text-lg text-white mr-5 font-secondary ">
                  <a
                    href="https://github.com/Dina-petrick/The_Rosa.git"
                    target="_blank"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>

            {/* image  */}

            <div className="group relative max-w-sm overflow-hidden border-2 border-black/50 rounded-xl">
              {/* overlay  */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-20 transition-all duration-300"></div>
              {/* img  */}
              <img
                className="group-hover:scale-125 transition-all duration-300 object-cover h-[250px] w-full"
                src={portfolio2}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40">
                <span className="text-white text-2xl font-bold">
                  Shopping Cart{" "}
                </span>
              </div>
              {/* title  */}
              <div className="absolute -bottom-full left-11 group-hover:bottom-11 transition-all duration-700 z-40 ">
                <button className="bg-black p-1 px-4 text-lg text-white mr-5 font-secondary tracking-wider">
                  <a
                    href="https://iphone-case-shopping-cart.vercel.app/"
                    target="_blank"
                  >
                    Demo
                  </a>
                </button>
                <button className="bg-black p-1 px-4 text-lg text-white mr-5 font-secondary ">
                  <a
                    href="https://github.com/Dina-petrick/shopping-cart.git"
                    target="_blank"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
