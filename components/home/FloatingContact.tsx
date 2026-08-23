"use client";

import { CalendarDays, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingContact() {
  return (
    <motion.div className="floating-contact" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.6 }}>
      <a href="/contact"><Mail size={15} /><span>Speak to me</span></a>
      <a href="/contact"><CalendarDays size={15} /></a>
    </motion.div>
  );
}
