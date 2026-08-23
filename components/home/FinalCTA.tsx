"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Mail, Github, Linkedin } from "lucide-react";

const words = ["design", "build", "create"];

export default function FinalCTA() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setIndex(v => (v + 1) % words.length), 1800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <footer id="contact" className="final-cta section-shell section-pad">
      <div className="cta-toggle"><span className="active"><Mail size={15} /> Email</span><span><Linkedin size={15} /> LinkedIn</span></div>
      <h2>Lets <span className="animated-word"><AnimatePresence mode="wait"><motion.em key={words[index]} initial={{ y: 28, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -28, opacity: 0 }} transition={{ duration: 0.32 }}>{words[index]}</motion.em></AnimatePresence></span><br />incredible work together.</h2>
      <div className="contact-grid">
        <div><span>Email</span><a href="mailto:ravindu.kaveesha2001@gmail.com">ravindu.kaveesha2001@gmail.com</a></div>
        <div><span>Based in</span><strong>Sri Lanka</strong></div>
        <div className="contact-social"><a href="#"><Github size={18} /></a><a href="#"><Linkedin size={18} /></a><a href="/contact"><ArrowUpRight size={18} /></a></div>
      </div>
      <div className="mega-name">RAVINDU.</div>
    </footer>
  );
}
