import PortfolioLink from "../components/PortfolioLink";
import Netflix from "../img/portfolio/netflix.PNG";
import Ecommerce from "../img/portfolio/e-commerce.PNG";
import Umail from "../img/portfolio/umail.PNG";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const Portfolio = () => {
  const projects = [
    {
      heading: "E-commerce Clothing Store",
      subheading: "React.js • Firebase • Redux • Production-ready platform serving 500+ daily active users",
      imgSrc: Ecommerce,
      href: "https://ecommerce-clothing-store.vercel.app/",
    },
    {
      heading: "Netflix Clone",
      subheading: "React.js • TypeScript • Entertainment platform with optimized streaming experience",
      imgSrc: Netflix,
      href: "https://netflix-site.vercel.app/",
    },
    {
      heading: "Umail",
      subheading: "React.js • Modern email client with real-time updates and intuitive UI",
      imgSrc: Umail,
      href: "https://umail.vercel.app/",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={transition1}
      className="w-full px-6 md:px-12 lg:px-24 pt-32 md:pt-36 pb-16 md:pb-24 max-w-6xl mx-auto relative"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition1, delay: 0.2 }}
        className="mb-20"
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-primary font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
          Portfolio
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed">
          A selection of projects showcasing modern web development practices, 
          performance optimization, and user-centric design.
        </p>
      </motion.div>

      <div className="space-y-2 w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...transition1, delay: 0.3 + index * 0.1 }}
            className="w-full"
          >
            <PortfolioLink
              heading={project.heading}
              subheading={project.subheading}
              imgSrc={project.imgSrc}
              href={project.href}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Portfolio;
