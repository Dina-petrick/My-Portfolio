import React, { useState } from "react";

// import icons
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

// router Dom
import { Link } from "react-router-dom";

//framer motion

import { motion } from "framer-motion";

//variants

const menuVariant = {
  hidden: { x: "100%" },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const listVariant = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="text-primary xl:hidden">
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer hover:text-white transition-colors"
      >
        <CgMenuRight />
      </div>
      <motion.div
        variants={menuVariant}
        initial="hidden"
        animate={openMenu ? "show" : "hidden"}
        className="bg-[#dddddd] shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-[70] "
      >
        {/* icons  */}
        <div>
          <IoMdClose
            onClick={() => setOpenMenu(false)}
            className="text-4xl absolute z-[70] left-4 top-14 text-primary cursor-pointer "
          />
        </div>
        {/* menu list  */}
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary  font-bold text-3xl">
          <motion.li variants={listVariant}>
            <Link onClick={() => {setOpenMenu(false)}} to="/">Home</Link>
          </motion.li>
          <motion.li variants={listVariant}>
            <Link onClick={() => {setOpenMenu(false)}} to="/about">About</Link>
          </motion.li>
          <motion.li variants={listVariant}>
            <Link onClick={() => {setOpenMenu(false)}} to="/portfolio">Portfolio</Link>
          </motion.li>
          <motion.li variants={listVariant}>
            <Link onClick={() => {setOpenMenu(false)}} to="/contact">Contact</Link>
          </motion.li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
