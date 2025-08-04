import { useContext } from "react";

// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transitions";

import { CursorContext } from "../context/CursorContext";

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <section className="sm:w-[90%] md:w-[100%] mx-auto h-[100vh] flex sm:flex-col md:flex-row sm:pt-[80px] md:pt-[0] justify-center items-center md:gap-[50px]">
      <div className="sm:w-[100%] md:w-[50%] flex flex-col md:items-end font-secondary uppercase text-end sm:text-[40px] md:text-[70px] xl:text-[104px] ">
        <div className="flex flex-col max-w-[300px]">
          <motion.span
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: "-50%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-50%" }}
            transition={{ transition1, duration: 1 }}
            className=""
          >
            who
          </motion.span>
          <motion.span
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: "-50%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-50%" }}
            transition={{ transition1, duration: 1.5 }}
          >
            am
          </motion.span>
          <motion.span
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: "-50%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-50%" }}
            transition={{ transition1, duration: 2 }}
          >
            i
          </motion.span>
        </div>
      </div>
      <div className="md:w-[50%] h-[80%] sm:mr-auto capitalize font-primary font-medium tracking-tighter">
        <motion.div
          initial={{ opacity: 0, x: "-50%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-10%" }}
          transition={{ transition1, duration: 0.5 }}
          className="max-w-[400px] h-[100%] flex flex-col  justify-evenly text-[18x] lg:text-[22px] text-slate-700"
        >
          <p onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            Hey! I'm Dinakaran
          </p>
          <span className="w-[5px] h-[5px] inline-block rounded bg-slate-700"></span>
          <p onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            A passionate Front-End Developer specializing in React.js
          </p>
          <span className="w-[5px] h-[5px] inline-block rounded bg-slate-700"></span>
          <p onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            Building modern web experiences with 3+ years of hands-on experience
          </p>
          <span className="w-[5px] h-[5px] inline-block rounded bg-slate-700"></span>
          <p onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            Enthusiastic about leveraging the latest technologies to craft
            responsive, user-centric web apps
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
