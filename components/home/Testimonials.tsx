"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/home/content";

export default function Testimonials() {
  return (
    <section className="testimonials section-shell section-pad">
      <motion.h2 className="testimonial-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        Hear from what my<br /><span>clients have to say.</span>
      </motion.h2>
      <div className="testimonial-track">
        {testimonials.map((item, i) => (
          <motion.article key={item.name} initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: i * 0.06, duration: 0.6 }}>
            <span className="quote-mark">“</span>
            <p>{item.quote}</p>
            <div className="review-stars">{[1,2,3,4,5].map(n => <Star key={n} size={11} fill="currentColor" />)}</div>
            <div className="reviewer"><span className="reviewer-avatar">{item.name[0]}</span><div><strong>{item.name}</strong><small>{item.role}</small></div></div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
