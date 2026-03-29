import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { ImLinkedin, ImGithub } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://dinakaranr.in/",
    label: "Portfolio site",
    Icon: HiOutlineExternalLink,
    hoverClass: "hover:text-white",
  },
  {
    href: "https://www.linkedin.com/in/rdinakaran/",
    label: "LinkedIn",
    Icon: ImLinkedin,
    hoverClass: "hover:text-[#0A66C2]",
  },
  {
    href: "https://github.com/Dina-petrick",
    label: "GitHub",
    Icon: ImGithub,
    hoverClass: "hover:text-white",
  },
  {
    href: "https://www.instagram.com/dina_petrik_/",
    label: "Instagram",
    Icon: AiOutlineInstagram,
    hoverClass: "hover:text-[#E4405F]",
  },
];

const backdropVariants = {
  hidden: { opacity: 0, transition: { duration: 0.2 } },
  visible: { opacity: 1, transition: { duration: 0.22 } },
};

const drawerVariants = {
  hidden: {
    x: "100%",
    transition: { type: "tween", duration: 0.26, ease: [0.32, 0.72, 0, 1] },
  },
  visible: {
    x: 0,
    transition: { type: "tween", duration: 0.32, ease: [0.32, 0.72, 0, 1] },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [mounted, setMounted] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => setOpenMenu(false), []);

  useEffect(() => {
    close();
  }, [location.pathname, close]);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openMenu]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    if (openMenu) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openMenu, close]);

  /** Portal to document.body so position:fixed is not clipped by header backdrop-filter / stacking contexts */
  const overlay =
    mounted &&
    createPortal(
      <AnimatePresence>
        {openMenu && (
          <>
            <motion.div
              key="mobile-backdrop"
              role="presentation"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={backdropVariants}
              transition={{ duration: 0.22 }}
              className="fixed inset-0 z-[100] bg-black/45 backdrop-blur-[2px]"
              onClick={close}
            />

            <motion.div
              id="mobile-menu-drawer"
              key="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={drawerVariants}
              transition={{ type: "tween", duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 z-[110] flex h-[100dvh] max-h-[100dvh] w-[min(20rem,100vw)] flex-col border-l border-white/10 bg-[#141414] text-white shadow-2xl"
              style={{
                paddingTop: "max(0.75rem, env(safe-area-inset-top))",
                paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
              }}
            >
              <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-5 pb-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={close}
                  className="flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  aria-label="Close menu"
                >
                  <IoMdClose className="text-3xl" />
                </button>
              </div>

              <ul className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto overscroll-contain px-3 py-6">
                {navLinks.map(({ path, label }) => {
                  const active = location.pathname === path;
                  return (
                    <li key={path}>
                      <Link
                        to={path}
                        onClick={close}
                        className={`block rounded-xl px-4 py-3.5 text-lg font-semibold tracking-wide transition-colors ${
                          active
                            ? "bg-white/10 text-white"
                            : "text-white/85 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {label}
                        {active && (
                          <span className="mt-2 block h-0.5 w-10 rounded-full bg-white/85" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="shrink-0 border-t border-white/10 px-5 py-5">
                <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
                  Connect
                </p>
                <ul className="flex items-center justify-center gap-5">
                  {socialLinks.map(({ href, label, Icon, hoverClass }) => (
                    <li key={href}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={close}
                        className={`flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white/90 transition-colors ${hoverClass} focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40`}
                        aria-label={label}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>,
      document.body
    );

  return (
    <nav className="xl:hidden" aria-label="Mobile navigation">
      <button
        type="button"
        onClick={() => setOpenMenu(true)}
        aria-expanded={openMenu}
        aria-controls="mobile-menu-drawer"
        className="flex h-11 w-11 items-center justify-center rounded-lg text-primary transition-colors hover:bg-black/5 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-label="Open menu"
      >
        <CgMenuRight className="text-3xl" />
      </button>
      {overlay}
    </nav>
  );
};

export default MobileNav;
