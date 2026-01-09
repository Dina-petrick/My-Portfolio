import React, { useContext } from "react";
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";

import { CursorContext } from "./context/CursorContext";

const App = () => {
  const { cursorVariants, cursorBG, mobileViewportIsActive } = useContext(CursorContext);
  
  return (
    <Router>
      <div className="w-full">
        <Header />
        <AnimRoutes />

      {/* Custom Cursor */}
      {!mobileViewportIsActive && cursorVariants && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full will-change-transform"
          style={{
            x: cursorVariants[cursorBG]?.x || 0,
            y: cursorVariants[cursorBG]?.y || 0,
            width: `${cursorVariants[cursorBG]?.width || 32}px`,
            height: `${cursorVariants[cursorBG]?.height || 32}px`,
          }}
          animate={{
            width: `${cursorVariants[cursorBG]?.width || 32}px`,
            height: `${cursorVariants[cursorBG]?.height || 32}px`,
            backgroundColor: cursorVariants[cursorBG]?.backgroundColor || '#1a1a1a',
            mixBlendMode: cursorVariants[cursorBG]?.mixBlendMode || 'difference',
          }}
          transition={cursorVariants[cursorBG]?.transition || { type: "spring", stiffness: 500, damping: 28 }}
        />
      )}
      </div>
    </Router>
  );
};

export default App;
