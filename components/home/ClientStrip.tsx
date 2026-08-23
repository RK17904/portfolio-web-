"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function ClientStrip() {
  return (
    <motion.section className="client-strip section-shell" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }}>
      <div className="client-proof">
        <div className="mini-avatars"><span>R</span><span>K</span><span>+</span></div>
        <div><strong>20+ happy clients</strong><div className="stars">{[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}</div></div>
      </div>
      <div className="logo-row"><span>ONVO</span><span>SAASFRAME</span><span>MINIMAL</span><span>ARC</span><span>STUDIO+</span></div>
    </motion.section>
  );
}
