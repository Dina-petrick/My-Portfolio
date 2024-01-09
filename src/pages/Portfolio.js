import { useContext } from "react";

import PortfolioLink from "../components/PortfolioLink";

import Netflix from "../img/portfolio/netflix.PNG";
import Ecommerce from "../img/portfolio/e-commerce.PNG";
import Umail from "../img/portfolio/umail.PNG";

// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transitions";

import { CursorContext } from "../context/CursorContext";

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      initial={{ opacity: 0, x: "-50%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-50%" }}
      transition={{ transition1, duration: 1.5 }}
      className="sm:pt-[100px] flex flex-col w-[100vw] h-[90vh] justify-center"
    >
      <PortfolioLink
        heading="Clothing Store"
        subheading="E-commerce site"
        imgSrc={Ecommerce}
        href="https://ecommerce-clothing-store.vercel.app/"
      />

      <PortfolioLink
        heading="Netflix Clone"
        subheading="Entertainment site"
        imgSrc={Netflix}
        href="https://netflix-site.vercel.app/"
      />

      <PortfolioLink
        heading="Umail"
        subheading="Web App"
        imgSrc={Umail}
        href="https://umail.vercel.app/"
      />
    </motion.section>
  );
};

export default Portfolio;
