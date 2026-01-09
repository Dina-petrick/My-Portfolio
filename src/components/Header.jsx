import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Socials from "./Socials";
import MobileNav from "./MobileNav";
import { CursorContext } from "../context/CursorContext";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed w-full top-0 left-0 z-50 glass border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-4 md:py-5 flex items-center justify-between w-full">
        {/* Logo */}
        <Link
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          to="/"
          className="font-primary font-bold text-xl md:text-2xl text-primary hover:text-secondary transition-all duration-300 relative group"
        >
          <span className="relative z-10">Dinakaran R</span>
          <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 relative px-2 py-1 rounded-md ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-text-secondary hover:text-primary hover:bg-white/30"
              }`}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          <Socials />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
