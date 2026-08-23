import { Boxes, Brush, Code2, Figma, Layers3, PenTool, Sparkles } from "lucide-react";
import { imageAssets } from "@/assets/imageAssets";

export const projects = [
  { title: "HOODVERSE", subtitle: "Branding & Visual Identity", className: "project-purple", number: "01", image: imageAssets.home.projects.hoodverse },
  { title: "AURA ROAST", subtitle: "Packaging & Brand System", className: "project-coffee", number: "02", image: imageAssets.home.projects.auraRoast },
  { title: "BLUE BLEND", subtitle: "Digital Campaign", className: "project-lilac", number: "03", image: imageAssets.home.projects.blueBlend },
  { title: "NOVA SYSTEMS", subtitle: "Product Experience", className: "project-blue", number: "04", image: imageAssets.home.projects.novaSystems },
];

export const services = [
  {
    index: "01",
    title: "Design Strategy",
    description: "Clarifying direction, positioning and the system behind a memorable experience.",
    tags: ["Research", "Direction", "Strategy"],
  },
  {
    index: "02",
    title: "Brand Identity",
    description: "Creating strong visual systems that communicate clearly and stay consistent across touchpoints.",
    tags: ["Logo Design", "Visual Identity System", "Typography"],
    accent: true,
  },
  {
    index: "03",
    title: "UI/UX Design",
    description: "Designing usable, responsive digital products with a focus on flow, hierarchy and interaction.",
    tags: ["Web Design", "Wireframes", "Prototyping", "Design Systems"],
  },
  {
    index: "04",
    title: "Packaging Design",
    description: "Building packaging concepts that feel distinctive, premium and aligned with the brand story.",
    tags: ["Packaging", "Mockups", "Print Systems"],
    accent: true,
  },
  {
    index: "05",
    title: "Digital Design",
    description: "Creating versatile web and social assets with a consistent visual language across platforms.",
    tags: ["Social Media", "Art Direction", "Content Design", "Campaign Visuals"],
  },
];

export const testimonials = [
  { quote: "Strong, high-quality designs with clear thinking behind them. Attention to detail really stood out.", name: "Arjun Mehta", role: "Founder & Product Lead" },
  { quote: "Loved the fast problem-solving, clean execution, and well-organized process from start to finish.", name: "Nadine Rowe", role: "Marketing Director" },
  { quote: "Great collaboration and communication throughout. The final work felt premium and purposeful.", name: "Kiran Nair", role: "Creative Strategist" },
  { quote: "The work balanced visual impact with usability. Everything felt intentional and carefully considered.", name: "Maya Shah", role: "Brand Manager" },
];

export const faqs = [
  ["How do we get started?", "We start with a quick conversation where you share your idea, goals and what you need. From there, I suggest the right approach and next steps."],
  ["Will I be involved in the design process?", "Yes. Feedback checkpoints are built into the process so decisions stay aligned with your goals."],
  ["How many changes can I request?", "A clear revision structure is defined before the project begins, so expectations stay transparent."],
  ["Do you only design, or also help with ideas?", "Both. I can help shape the concept, information hierarchy and visual direction before production starts."],
  ["How long does a typical project take to complete?", "Timing depends on scope, but you will receive a clear delivery plan before the work starts."],
];

export const toolIcons = [
  { Icon: Brush, label: "Ps" },
  { Icon: PenTool, label: "Ai" },
  { Icon: Layers3, label: "Fr" },
  { Icon: Figma, label: "Fg" },
  { Icon: Sparkles, label: "AI" },
  { Icon: Code2, label: "Dev" },
  { Icon: Boxes, label: "3D" },
];
