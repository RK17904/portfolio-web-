"use client";

import { Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -18, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <a className="nav-brand" href="#top" aria-label="Home">
        <span className="nav-dot">R</span>
        <span>Ravindu K.</span>
      </a>
      <div className="nav-links">
        <a href="#projects">Work</a>
        <a href="#services">Services</a>
        <a className="nav-contact" href="/contact">Contact</a>
      </div>
      <button className="nav-menu" aria-label="Open menu"><Menu size={17} /></button>
    </motion.nav>
  );
}
