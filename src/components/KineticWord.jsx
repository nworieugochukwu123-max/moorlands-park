import { useRef } from "react";
import useScrollFrame from "../hooks/useScrollFrame.js";
import { clamp } from "../lib/motion.js";

// A huge outlined word that slides sideways and fills with green as it
// passes through the viewport. dir = 1 slides one way, -1 the other.
export default function KineticWord({ dir = 1, children }) {
  const ref = useRef(null);

  useScrollFrame(() => {
    const l = ref.current;
    if (!l) return;
    const vh = window.innerHeight;
    const vw = window.innerWidth;
    const r = l.getBoundingClientRect();
    const p = clamp((vh - r.top) / (vh + r.height));
    l.style.transform = `translate3d(${(p - 0.5) * vw * 0.45 * dir}px,0,0)`;
    l.style.setProperty("--f", clamp((p - 0.3) / 0.4) * 100 + "%");
  });

  return (
    <div className="dl" ref={ref}>
      {children}
    </div>
  );
}
