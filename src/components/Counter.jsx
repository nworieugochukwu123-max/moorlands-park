import { useEffect, useState } from "react";
import useInView from "../hooks/useInView.js";
import { clamp, prefersReducedMotion } from "../lib/motion.js";

const format = (n, decimals) => "\u00a3" + n.toFixed(decimals);

// A price that counts up from £0 once it is mostly on screen.
export default function Counter({ value, decimals = 0, duration = 1400 }) {
  const [ref, inView] = useInView(0.6);
  const [text, setText] = useState(() => format(value, decimals));

  useEffect(() => {
    if (!inView || prefersReducedMotion()) return;
    let raf = 0;
    const t0 = performance.now();
    const frame = (t) => {
      const p = clamp((t - t0) / duration);
      setText(format(value * (1 - Math.pow(1 - p, 3)), decimals));
      if (p < 1) raf = requestAnimationFrame(frame);
    };
    frame(t0);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, decimals, duration]);

  return (
    <div className="pr" ref={ref}>
      {text}
    </div>
  );
}
