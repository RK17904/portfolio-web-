"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { faqs } from "@/data/home/content";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="faq section-shell section-pad">
      <h2>FAQs</h2>
      <div className="faq-layout">
        <div className="accordion">
          {faqs.map(([q,a], i) => {
            const active = open === i;
            return (
              <div className={`faq-item ${active ? "active" : ""}`} key={q}>
                <button onClick={() => setOpen(active ? -1 : i)}>
                  <span className="faq-num">0{i + 1}</span><span>{q}</span>{active ? <Minus size={15} /> : <Plus size={15} />}
                </button>
                <AnimatePresence initial={false}>
                  {active && <motion.div className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}><p>{a}</p></motion.div>}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        <motion.aside className="discovery-card" initial={{ opacity: 0, rotate: 3, y: 28 }} whileInView={{ opacity: 1, rotate: 0, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
          <span className="discovery-avatar">RK</span>
          <h3>Still not sure?<br />Book a free<br />discovery call.</h3>
          <p>If you want to make sure we&apos;re a good fit, we should talk.</p>
          <a href="/contact">Schedule Now <ArrowUpRight size={15} /></a>
        </motion.aside>
      </div>
    </section>
  );
}
