"use client";

import Image from "next/image";
import { Linkedin, Instagram, Github } from "lucide-react";
import { motion } from "framer-motion";
import { imageAssets } from "@/assets/imageAssets";

export default function About() {
  return (
    <section className="about section-shell section-pad">
      <motion.h2 className="about-heading" initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        Designing experiences<br /><span>that make sense.</span>
      </motion.h2>
      <div className="about-grid">
        <motion.div className="portrait-card" initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="portrait-figure">
            <Image
              src={imageAssets.home.about.portrait}
              alt="Ravindu Kaveesha portrait placeholder"
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              className="portrait-image"
            />
          </div>
          <div className="portrait-social"><Linkedin size={16} /><Instagram size={16} /><Github size={16} /></div>
          <div className="portrait-name"><strong>Ravindu K.</strong><span>Designer / Developer</span></div>
        </motion.div>
        <motion.div className="about-copy" initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p>I started my journey by turning ideas into practical digital experiences. What began as visual experimentation quickly grew into a process built around structure, usability and technology.</p>
          <p>With time, I found myself equally drawn to interface craft and engineering — shaping both how products feel and how they work.</p>
          <p>Now I focus on building clear, useful and memorable experiences with thoughtful visual systems and reliable implementation.</p>
          <div className="work-row"><div><span>Now</span><strong>Building digital products</strong></div><div><span>Focus</span><strong>Design + Full Stack</strong></div></div>
        </motion.div>
      </div>
    </section>
  );
}
