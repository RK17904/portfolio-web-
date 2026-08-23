import heroAccent from "@/assets/images/home/hero/hero-accent.png";
import heroAvatar from "@/assets/images/home/hero/ravindu-avatar.png";

import aboutPortrait from "@/assets/images/home/about/about-portrait.png";

import hoodverse from "@/assets/images/home/projects/hoodverse.png";
import auraRoast from "@/assets/images/home/projects/aura-roast.png";
import blueBlend from "@/assets/images/home/projects/blue-blend.png";
import novaSystems from "@/assets/images/home/projects/nova-systems.png";

export const imageAssets = {
  home: {
    hero: {
      accent: heroAccent,
      avatar: heroAvatar,
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