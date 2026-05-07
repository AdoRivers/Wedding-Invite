/**
 * Wrapper centralizado de GSAP.
 * - Registra ScrollTrigger una sola vez (idempotente).
 * - Expone `prefersReducedMotion` para que cada componente lo respete.
 * - Defaults consistentes (ease, duration) en todo el proyecto.
 *
 * Uso desde un <script> de Astro:
 *   import { gsap, ScrollTrigger, prefersReducedMotion, EASE } from "../lib/gsap.client";
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Defaults globales — cualquier tween hereda estos a menos que se sobreescriban.
gsap.defaults({
  ease: "power3.out",
  duration: 0.9,
});

export const EASE = {
  out: "power3.out",
  inOut: "power3.inOut",
  expoOut: "expo.out",
};

export const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export { gsap, ScrollTrigger };