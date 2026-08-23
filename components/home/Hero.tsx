"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";
import gsap from "gsap";
import { imageAssets } from "@/assets/imageAssets";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".hero-avatar", { y: 36, scale: 0.72, opacity: 0, rotate: -3, duration: 1.05 })
        .from(".hero-copy", { y: 22, opacity: 0, duration: 0.7 }, "-=0.45")
        .from(".hero-word span", { yPercent: 105, opacity: 0, stagger: 0.06, duration: 0.85 }, "-=0.42")
        .from(".hero-cta", { x: 18, opacity: 0, duration: 0.55 }, "-=0.55")
        .from(".hero-rule", { scaleX: 0, transformOrigin: "left", duration: 0.8 }, "-=0.45");
      gsap.to(".hero-avatar", { y: -8, duration: 2.8, yoyo: true, repeat: -1, ease: "sine.inOut" });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="top" className="hero section-shell">
      <div className="hero-stage">
        <Image src={imageAssets.home.hero.accent} alt="" fill priority className="hero-accent-image" aria-hidden="true" />
        <div className="hero-copy">
          <p>I help brands turn<br />ideas into structured,<br />meaningful experiences</p>
        </div>

        <div className="hero-title" aria-label="Think creatively">
          <div className="hero-word hero-word-light">
            {"THINK".split("").map((letter, i) => <span key={`t-${i}`}>{letter}</span>)}
          </div>
          <div className="hero-word hero-word-red">
            {"CREATIVELY".split("").map((letter, i) => <span key={`c-${i}`}>{letter}</span>)}
          </div>
        </div>

        <div className="hero-avatar" aria-hidden="true">
          <div className="avatar-hair" />
          <div className="avatar-ear left" />
          <div className="avatar-ear right" />
          <div className="avatar-face">
            <span className="brow brow-left" /><span className="brow brow-right" />
            <span className="eye eye-left" /><span className="eye eye-right" />
            <span className="glasses glasses-left" /><span className="glasses glasses-right" /><span className="bridge" />
            <span className="nose" /><span className="smile" /><span className="beard" />
          </div>
        </div>

        <div className="hero-actions"><a className="hero-cta pill-button" href="/contact">Book a call with me <ArrowUpRight size={15} /></a><a className="hero-cv" href="/documents/Ravindu-Kaveesha-CV.pdf" download>CV <Download size={14} /></a></div>
      </div>
      <div className="hero-rule" />
    </section>
  );
}
