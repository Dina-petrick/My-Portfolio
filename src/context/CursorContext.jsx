import React, { useState, useEffect, createContext, useRef, useCallback, useMemo } from "react";

export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });

  const [cursorBG, setCursorBG] = useState("default");
  const [mobileViewportIsActive, setMobileViewportIsActive] = useState(() => 
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  
  const rafId = useRef(null);
  const lastTime = useRef(0);
  const throttleDelay = 16; // ~60fps

  useEffect(() => {
    const checkMobileViewport = () => {
      setMobileViewportIsActive(window.innerWidth < 768);
    };

    checkMobileViewport();
    window.addEventListener("resize", checkMobileViewport);

    if (!mobileViewportIsActive) {
      const move = (e) => {
        const now = performance.now();
        if (now - lastTime.current >= throttleDelay) {
          if (rafId.current) {
            cancelAnimationFrame(rafId.current);
          }
          
          rafId.current = requestAnimationFrame(() => {
            setCursorPos({
              x: e.clientX,
              y: e.clientY,
            });
            lastTime.current = now;
          });
        }
      };
      
      window.addEventListener("mousemove", move, { passive: true });
      
      return () => {
        window.removeEventListener("mousemove", move);
        window.removeEventListener("resize", checkMobileViewport);
        if (rafId.current) {
          cancelAnimationFrame(rafId.current);
        }
      };
    } else {
      setCursorBG("none");
      return () => {
        window.removeEventListener("resize", checkMobileViewport);
      };
    }
  }, [mobileViewportIsActive]);

  // cursor variants - calculate dynamically based on cursor position and state
  // Use useMemo to prevent recreation on every render
  const cursorVariants = useMemo(() => ({
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      width: 32,
      height: 32,
      backgroundColor: "#1a1a1a",
      mixBlendMode: "difference",
      transition: { type: "spring", stiffness: 500, damping: 28 },
    },
    text: {
      width: 120,
      height: 120,
      x: cursorPos.x - 60,
      y: cursorPos.y - 60,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
      transition: { type: "spring", stiffness: 500, damping: 28 },
    },
    none: {
      width: 0,
      height: 0,
      x: cursorPos.x,
      y: cursorPos.y,
      backgroundColor: "rgba(255,255,255, 1)",
      mixBlendMode: "normal",
    },
  }), [cursorPos]);

  // mouse enter handler - use useCallback to prevent unnecessary re-renders
  const mouseEnterHandler = useCallback(() => {
    setCursorBG("text");
  }, []);
  
  // mouse leave handler
  const mouseLeaveHandler = useCallback(() => {
    setCursorBG("default");
  }, []);

  return (
    <CursorContext.Provider
      value={{ 
        cursorVariants, 
        cursorBG, 
        mouseEnterHandler, 
        mouseLeaveHandler,
        mobileViewportIsActive 
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
