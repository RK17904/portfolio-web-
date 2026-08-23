"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function QuoteBreak() {
  return (
    <section className="quote-break section-shell section-pad-sm">
      <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <Quote size={24} />
        <p>Thoughtful approach transformed the way our ideas came together — clear direction, strong craft, and a result that felt intentional.</p>
        <span>— Product client</span>
      </motion.div>
    </section>
  );
}
