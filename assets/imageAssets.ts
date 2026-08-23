import heroAccent from "@/assets/images/home/hero/hero-accent.png";
import aboutPortrait from "@/assets/images/home/about/about-portrait.png";
import hoodverse from "@/assets/images/home/projects/hoodverse.png";
import auraRoast from "@/assets/images/home/projects/aura-roast.png";
import blueBlend from "@/assets/images/home/projects/blue-blend.png";
import novaSystems from "@/assets/images/home/projects/nova-systems.png";

/**
 * Central image registry for the whole portfolio.
 *
 * Keep page images grouped by page name. Future pages can be added like:
 * imageAssets.about, imageAssets.projects, imageAssets.contact, etc.
 * Components should import images only from this registry.
 */
export const imageAssets = {
  home: {
    hero: {
      accent: heroAccent,
    },
    about: {
      portrait: aboutPortrait,
    },
    projects: {
      hoodverse,
      auraRoast,
      blueBlend,
      novaSystems,
    },
  },
} as const;
