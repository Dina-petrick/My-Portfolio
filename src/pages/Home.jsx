import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import profile from "../img/home/Profile.jpg";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const skills = [
    "React.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "Node.js",
    "WebSockets",
    "Redux",
    "GraphQL",
    "Firebase",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Git",
    "Webpack",
    "Vite",
  ];

  // Duplicate skills for seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="w-full relative overflow-hidden min-h-screen">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition1}
        className="w-full flex flex-col lg:flex-row items-start lg:items-start justify-center px-6 md:px-12 lg:px-24 pt-32 md:pt-36 pb-16 md:pb-24 gap-12 lg:gap-20 max-w-[90rem] mx-auto relative z-10"
      >

        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-3xl"></div>
        </div>

      {/* Left Content - Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition1, delay: 0.2 }}
        className="flex-1 max-w-2xl space-y-8 md:space-y-10 z-10 py-8 md:py-0"
      >
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition1, delay: 0.3 }}
            className="space-y-2"
          >
            <span className="text-sm uppercase tracking-widest text-text-muted font-medium">Hello, I'm</span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition1, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-primary font-bold leading-[1.1] tracking-tight relative"
            >
              <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Frontend Software
              </span>
              <span className="block text-primary">Engineer</span>
            </motion.h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition1, delay: 0.5 }}
            className="text-lg md:text-xl lg:text-2xl text-text-secondary font-light leading-relaxed max-w-xl"
          >
            Building scalable web applications and real-time SDKs with React.js & TypeScript
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition1, delay: 0.6 }}
          className="space-y-4"
        >
          <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-xl">
            Results-driven engineer with <span className="font-semibold text-primary">3+ years</span> of experience architecting enterprise solutions. 
            Delivered <span className="font-semibold text-primary">40% performance improvement</span>, 
            <span className="font-semibold text-primary"> 20% increase in engagement</span>, and 
            <span className="font-semibold text-primary"> 99.9% system uptime</span> through 
            advanced optimization techniques and modern frontend architectures.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition1, delay: 0.8 }}
          className="flex flex-wrap gap-4 pt-2"
        >
          <Link
            to="/portfolio"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="btn inline-block text-center"
          >
            View Work
          </Link>
          <Link
            to="/contact"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="px-8 py-4 text-sm font-medium tracking-wide uppercase border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Get In Touch
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Content - Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ ...transition1, delay: 0.5 }}
        className="flex-1 flex justify-center lg:justify-start z-10 py-0 lg:pt-0 w-full lg:items-start"
      >
        <div className="relative w-full max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
          {/* Animated gradient background */}
          <motion.div
            animate={{
              rotate: [0, 3, -3, 0],
              scale: [1, 1.02, 1, 1.02, 1],
            }}
            transition={{
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              },
              scale: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent rounded-3xl transform"
          ></motion.div>
          
          {/* Pulsing glow effect */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent rounded-3xl blur-xl"
          ></motion.div>
          
          {/* Main image container */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ 
              scale: 1.05, 
              y: -8,
              rotateY: 5,
              rotateX: -2,
            }}
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 cursor-pointer"
          >
            {/* Animated border glow */}
            <motion.div
              animate={{
                borderColor: [
                  "rgba(255, 255, 255, 0.2)",
                  "rgba(10, 10, 10, 0.3)",
                  "rgba(255, 255, 255, 0.2)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-3xl border-2 pointer-events-none"
            ></motion.div>
            
            <motion.img
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="w-full h-auto object-cover relative z-10"
              src={profile}
              alt="Dinakaran R - Frontend Software Engineer"
              style={{
                transform: "translateZ(20px)",
              }}
            />
            
            {/* Shimmer effect overlay */}
            <motion.div
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none z-20"
              style={{
                transform: "translateZ(30px)",
              }}
            ></motion.div>
          </motion.div>
          
          {/* Floating particles effect */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
              className="absolute w-2 h-2 bg-primary/30 rounded-full blur-sm"
              style={{
                top: `${20 + i * 30}%`,
                left: `${10 + i * 20}%`,
              }}
            ></motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>

    {/* Technologies - Three Lines of Infinite Scrolling - Full Width */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...transition1, delay: 0.7 }}
      className="w-full px-6 md:px-12 lg:px-24 pb-16 md:pb-24 relative z-10 space-y-6"
    >
      <p className="text-xs uppercase tracking-widest text-text-muted font-semibold text-center">Technologies</p>
      
      {/* Line 1 - Left to Right */}
      <div className="w-full overflow-hidden py-2">
        <motion.div
          className="flex gap-6 items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <motion.div
              key={`line1-${index}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-sm text-text-secondary hover:border-primary hover:text-primary hover:shadow-md flex-shrink-0 whitespace-nowrap font-medium cursor-pointer"
              style={{ transformOrigin: "center" }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Line 2 - Right to Left */}
      <div className="w-full overflow-hidden py-2">
        <motion.div
          className="flex gap-6 items-center"
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <motion.div
              key={`line2-${index}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="px-5 py-2.5 bg-gradient-to-r from-primary/15 via-primary/10 to-secondary/15 backdrop-blur-sm border border-primary/30 rounded-full text-sm font-semibold text-primary hover:shadow-lg flex-shrink-0 whitespace-nowrap cursor-pointer"
              style={{ transformOrigin: "center" }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Line 3 - Left to Right */}
      <div className="w-full overflow-hidden py-2">
        <motion.div
          className="flex gap-6 items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <motion.div
              key={`line3-${index}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="px-5 py-2.5 bg-white/70 backdrop-blur-sm border border-gray-200/70 rounded-full text-sm text-text-secondary hover:border-primary hover:text-primary hover:shadow-md flex-shrink-0 whitespace-nowrap font-medium cursor-pointer"
              style={{ transformOrigin: "center" }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
    </div>
  );
};

export default Home;
