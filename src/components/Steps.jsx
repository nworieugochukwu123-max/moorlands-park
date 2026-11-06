import { useRef } from "react";
import useScrollFrame from "../hooks/useScrollFrame.js";
import Reveal from "./Reveal.jsx";
import { clamp } from "../lib/motion.js";

// A vertical timeline whose line fills as you scroll down the list.
export default function Steps({ items }) {
  const ref = useRef(null);

  useScrollFrame(() => {
    const s = ref.current;
    if (!s) return;
    const r = s.getBoundingClientRect();
    s.style.setProperty("--p", clamp((window.innerHeight * 0.7 - r.top) / r.height));
  });

  return (
    <ol className="steps" ref={ref}>
      {items.map((item, i) => (
        <Reveal as="li" key={item.title} delay={i % 4}>
          <b>{item.title}</b>
          {item.text}
        </Reveal>
      ))}
    </ol>
  );
}
