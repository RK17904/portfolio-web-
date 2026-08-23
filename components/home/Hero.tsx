"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";
import gsap from "gsap";

import { imageAssets } from "@/assets/imageAssets";
import AnimatedFace from "./hero/AnimatedFace";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      /*
       * Avatar enters first.
       */
      tl.from(".hero-avatar", {
        y: 45,
        scale: 0.72,
        opacity: 0,
        rotate: -3,
        duration: 1.05,
      })

        /*
         * Supporting copy.
         */
        .from(
          ".hero-copy",
          {
            y: 22,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.45"
        )

        /*
         * Giant THINK / CREATIVELY lettering.
         */
        .from(
          ".hero-word span",
          {
            yPercent: 105,
            opacity: 0,
            stagger: 0.06,
            duration: 0.85,
          },
          "-=0.42"
        )

        /*
         * CTA entrance.
         */
        .from(
          ".hero-actions",
          {
            x: 18,
            opacity: 0,
            duration: 0.55,
          },
          "-=0.55"
        )

        /*
         * Bottom line reveal.
         */
        .from(
          ".hero-rule",
          {
            scaleX: 0,
            transformOrigin: "left",
            duration: 0.8,
          },
          "-=0.45"
        );

      /*
       * Very subtle idle movement.
       *
       * The whole avatar floats gently.
       * AnimatedFace handles the eyes independently.
       */
      gsap.to(".hero-avatar", {
        y: -8,
        duration: 2.8,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="home"
      className="hero section-shell"
    >
      <div className="hero-stage">
        {/* =================================================
            BACKGROUND ACCENT
        ================================================== */}

        <Image
          src={imageAssets.home.hero.accent}
          alt=""
          fill
          priority
          className="hero-accent-image"
          aria-hidden="true"
        />

        {/* =================================================
            SUPPORTING COPY
        ================================================== */}

        <div className="hero-copy">
          <p>
            I help brands turn
            <br />
            ideas into structured,
            <br />
            meaningful experiences
          </p>
        </div>

        {/* =================================================
            HERO TITLE
        ================================================== */}

        <div
          className="hero-title"
          aria-label="Think creatively"
        >
          <div className="hero-word hero-word-light">
            {"THINK".split("").map((letter, index) => (
              <span key={`think-${index}`}>
                {letter}
              </span>
            ))}
          </div>

          <div className="hero-word hero-word-red">
            {"CREATIVELY".split("").map(
              (letter, index) => (
                <span key={`creative-${index}`}>
                  {letter}
                </span>
              )
            )}
          </div>
        </div>

        {/* =================================================
            DIGITAL AVATAR

            Positioned over / within the red CREATIVELY
            typography using CSS.
        ================================================== */}

        <div className="hero-avatar">
          <AnimatedFace />
        </div>

        {/* =================================================
            ACTIONS
        ================================================== */}

        <div className="hero-actions">
          <a
            className="hero-cta pill-button"
            href="/contact"
          >
            Book a call with me
            <ArrowUpRight size={15} />
          </a>

          <a
            className="hero-cv"
            href="/documents/Ravindu-Kaveesha-CV.pdf"
            download
          >
            CV
            <Download size={14} />
          </a>
        </div>
      </div>

      <div className="hero-rule" />
    </section>
  );
}