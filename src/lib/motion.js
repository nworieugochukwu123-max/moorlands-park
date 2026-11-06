// Small helpers shared by the scroll and reveal effects.

export const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
