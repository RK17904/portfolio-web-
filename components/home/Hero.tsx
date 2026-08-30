"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type { MouseEvent } from "react";

import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import gsap from "gsap";

import { imageAssets } from "@/assets/imageAssets";

const roles = [
  "Full-Stack Developer",
  "Freelance Developer",
  "UI/UX Designer",
];

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);

  const [roleIndex, setRoleIndex] = useState(0);

  /* ======================================================
     DYNAMIC ROLE TEXT
  ====================================================== */

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((current) =>
        (current + 1) % roles.length
      );
    }, 2800);

    return () => window.clearInterval(interval);
  }, []);

  /* ======================================================
     GSAP HERO ANIMATION
  ====================================================== */

  useLayoutEffect(() => {
    const hero = root.current;
    const character = characterRef.current;

    if (!hero || !character) return;

    const prefersReducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      tl.from(".hero-intro", {
        y: 45,
        opacity: 0,
        duration: 0.9,
      })
        .from(
          ".hero-role-wrap",
          {
            y: 45,
            opacity: 0,
            duration: 0.9,
          },
          "-=0.62"
        )
        .from(
          ".hero-description",
          {
            y: 24,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.52"
        )
        .from(
          ".hero-actions",
          {
            y: 20,
            opacity: 0,
            duration: 0.65,
          },
          "-=0.48"
        )
        .from(
          ".hero-character-parallax",
          {
            x: 70,
            opacity: 0,
            scale: 0.92,
            duration: 1.15,
          },
          "-=0.85"
        )
        .from(
          ".hero-rule",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.85,
          },
          "-=0.65"
        );

      /*
       * Continuous subtle floating effect.
       * This acts on an INNER wrapper so it doesn't
       * conflict with cursor parallax.
       */
      gsap.to(".hero-character-float", {
        y: -10,
        rotate: 0.7,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, root);

    /* ====================================================
       CHARACTER CURSOR PARALLAX
    ==================================================== */

    const coarsePointer =
      window.matchMedia("(pointer: coarse)").matches;

    if (coarsePointer) {
      return () => ctx.revert();
    }

    const moveX = gsap.quickTo(character, "x", {
      duration: 0.65,
      ease: "power3.out",
    });

    const moveY = gsap.quickTo(character, "y", {
      duration: 0.65,
      ease: "power3.out",
    });

    const handlePointerMove = (
      event: PointerEvent
    ) => {
      const rect = hero.getBoundingClientRect();

      const normalizedX =
        (event.clientX - rect.left) /
          rect.width -
        0.5;

      const normalizedY =
        (event.clientY - rect.top) /
          rect.height -
        0.5;

      moveX(normalizedX * 18);
      moveY(normalizedY * 10);
    };

    const handlePointerLeave = () => {
      moveX(0);
      moveY(0);
    };

    hero.addEventListener(
      "pointermove",
      handlePointerMove
    );

    hero.addEventListener(
      "pointerleave",
      handlePointerLeave
    );

    return () => {
      hero.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      hero.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );

      ctx.revert();
    };
  }, []);

  /* ======================================================
     SECTION NAVIGATION
  ====================================================== */

  const scrollToSection = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();

    const section =
      document.getElementById(sectionId);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(
      null,
      "",
      `#${sectionId}`
    );
  };

  return (
    <section
      ref={root}
      id="home"
      className="hero section-shell"
    >
      <div className="hero-stage">
        {/* ================================================
            LEFT CONTENT
        ================================================= */}

        <div className="hero-content">
          <div className="hero-heading">
            <div className="hero-intro">
              <span>Hi, I&apos;m Ravindu.</span>
            </div>

            <div className="hero-role-wrap">
              <AnimatePresence initial={false}>
                <motion.span
                  key={roles[roleIndex]}
                  className="hero-role"
                  initial={{
                    opacity: 0,
                    y: 22,
                    filter: "blur(7px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -18,
                    filter: "blur(7px)",
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <p className="hero-description">
            I design thoughtful interfaces and build
            reliable digital products from frontend
            to backend.
          </p>

          <div className="hero-actions">
            <a
              href="#contact"
              className="hero-primary-button"
              onClick={(event) =>
                scrollToSection(event, "contact")
              }
            >
              Get in touch
              <ArrowUpRight size={17} />
            </a>

            <a
              href="#work"
              className="hero-secondary-button"
              onClick={(event) =>
                scrollToSection(event, "work")
              }
            >
              See my work
              <ArrowDownRight size={17} />
            </a>
          </div>
        </div>

        {/* ================================================
            RIGHT CHARACTER IMAGE
        ================================================= */}

        <div className="hero-character-area">
          <div className="hero-character-glow" />

          <div
            ref={characterRef}
            className="hero-character-parallax"
          >
            <div className="hero-character-float">
              <Image
                src={
                  imageAssets.home.hero.character
                }
                alt="Ravindu Kaveesha digital character"
                className="hero-character-image"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-rule" />
    </section>
  );
}