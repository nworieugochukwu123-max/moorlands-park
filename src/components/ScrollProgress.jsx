import { useRef } from "react";
import { useLocation } from "react-router-dom";
import useScrollFrame from "../hooks/useScrollFrame.js";
import { clamp } from "../lib/motion.js";

// The thin green-to-blue bar across the top that fills as you scroll.
export default function ScrollProgress() {
  const ref = useRef(null);
  const { pathname } = useLocation();

  useScrollFrame(() => {
    const el = ref.current;
    if (!el) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    el.style.transform = `scaleX(${max > 0 ? clamp(window.scrollY / max) : 0})`;
  }, pathname);

  return <div className="bar" ref={ref} />;
}
