"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="contact-hero section-shell">
      <motion.p
        className="contact-eyebrow"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        Start a project
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      >
        LET&apos;S BUILD<br /><span>SOMETHING GREAT.</span>
      </motion.h1>
      <motion.p
        className="contact-intro"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.12 }}
      >
        Tell me what you&apos;re building, where you need help and what success looks like. I&apos;ll reply with the best next step.
      </motion.p>
    </section>
  );
}
