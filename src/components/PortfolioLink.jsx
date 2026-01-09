import React, { useRef, useContext } from "react";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { CursorContext } from "../context/CursorContext";

const PortfolioLink = ({heading, subheading, imgSrc, href}) => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  }

  return (
    <motion.a
      target="_blank"
      rel="noreferrer"
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b border-gray-200 py-10 md:py-14 px-4 md:px-6 rounded-xl transition-all duration-300 hover:border-primary hover:bg-white/50 hover:shadow-lg w-full backdrop-blur-sm"
    >
      <div className="flex-1 relative z-10 pr-4">
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-3xl md:text-4xl lg:text-5xl font-primary font-bold text-primary transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-4 block text-sm md:text-base text-text-secondary transition-colors duration-300 group-hover:text-text-primary leading-relaxed max-w-2xl">
          {subheading}
        </span>
      </div>

      <motion.div
        style={{
          position: 'absolute',
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
          pointerEvents: 'none',
          willChange: 'transform',
          zIndex: 20,
          maxWidth: '90vw',
          maxHeight: '50vh',
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg", opacity: 0 },
          whileHover: { scale: 1, rotate: "12.5deg", opacity: 1 },
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <img
          src={imgSrc}
          className="h-32 w-44 rounded-xl object-cover md:h-56 md:w-72 shadow-2xl border-2 border-white/50 max-w-full max-h-full"
          alt={`Image representing ${heading} project`}
          loading="lazy"
        />
      </motion.div>

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative z-10 p-4 flex items-center justify-center flex-shrink-0"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300"
        >
          <FiArrowRight className="text-2xl md:text-3xl text-primary group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
        </motion.div>
      </motion.div>
    </motion.a>
  )
}

export default PortfolioLink;

