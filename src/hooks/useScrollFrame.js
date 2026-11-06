import { useEffect, useRef } from "react";

// Calls `callback` once on mount, then on scroll (once per animation frame)
// and on resize. Pass a different `key` to force an extra run, for example
// when the route changes and the page height changes with it.
export default function useScrollFrame(callback, key) {
  const latest = useRef(callback);

  useEffect(() => {
    latest.current = callback;
  });

  useEffect(() => {
    let queued = false;
    let raf = 0;
    const run = () => {
      queued = false;
      latest.current();
    };
    const onScroll = () => {
      if (!queued) {
        queued = true;
        raf = requestAnimationFrame(run);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    latest.current();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [key]);
}
