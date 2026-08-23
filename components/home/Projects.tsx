"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/home/content";

export default function Projects() {
  return (
    <section id="projects" className="projects section-shell section-pad">
      <motion.h2 className="section-heading" initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.65 }}>
        Latest <span>Projects</span>
      </motion.h2>
      <div className="project-grid">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 46, rotate: i % 2 ? 1.2 : -1.2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.7, delay: i * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className={`project-visual ${project.className}`}>
              <Image
                src={project.image}
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="project-image"
                aria-hidden="true"
              />
              <span className="project-orb" />
              <span className="project-orb project-orb-b" />
              <div className="project-mark">{project.number}</div>
              <strong>{project.title}</strong>
            </div>
            <div className="project-meta">
              <div><strong>{project.title}</strong><span>{project.subtitle}</span></div>
              <button aria-label={`View ${project.title}`}><ArrowUpRight size={18} /></button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
