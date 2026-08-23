"use client";

import { motion } from "framer-motion";
import { services, toolIcons } from "@/data/home/content";

export default function Services() {
  return (
    <section id="services" className="services section-shell section-pad">
      <div className="services-layout">
        <div className="services-intro">
          <h2>What I help<br />you to <span>Shape...</span></h2>
          <p>Tools that I use</p>
          <div className="tool-row">
            {toolIcons.map(({ Icon, label }) => <span className="tool" key={label} title={label}><Icon size={18} /></span>)}
          </div>
        </div>
        <div className="service-stack">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              className={`service-card ${service.accent ? "service-accent" : ""}`}
              style={{ top: 118 + i * 18 }}
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ amount: 0.4 }}
              transition={{ duration: 0.55, delay: 0.03 * i }}
            >
              <div className="service-top"><span>{service.index}</span><h3>{service.title}</h3></div>
              <p>{service.description}</p>
              <div className="tag-row">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
