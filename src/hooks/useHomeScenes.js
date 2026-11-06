import { useEffect } from "react";
import { clamp, prefersReducedMotion } from "../lib/motion.js";

// Drives every scroll scene on the home page: hero parallax, the word scrub,
// the portal and sideways cards, the time-of-day scenes, the kinetic words,
// the floating leaves and the hills.
//
// It writes straight to element styles inside one requestAnimationFrame loop
// instead of using React state, so scrolling never triggers a re-render.
// Scroll position is eased (the `sy` value below) so the motion glides.
export default function useHomeScenes(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const $ = (s) => root.querySelector(s);
    const $$ = (s) => [...root.querySelectorAll(s)];
    const RM = prefersReducedMotion();

    const scr = $$(".scrub").map((el) => ({ el, w: [...el.querySelectorAll(".sw")] }));
    const track = $(".track");
    const cards = $$(".card");
    const portal = $(".portal");
    const pt = $(".pt");
    const hin = $(".hin");
    const hbg = $(".hbg");
    const ex = $(".explore");
    const day = $(".day");
    const scs = $$(".sc");
    const views = $(".views");
    const fr = $(".fr");
    const mqs = $$(".mq");
    const dls = $$(".dl");
    const hills = $$(".hill");
    const leaves = $$(".leaf");

    // Geometry cache, so the scroll loop never forces a layout.
    const G = new Map();
    const els = [...scr.map((s) => s.el), ex, day, views, fr, ...mqs, ...dls];

    let sy = window.scrollY;
    let ps = -1;
    let first = 3;
    let raf = 0;
    let resizeTimer = 0;
    let alive = true;
    let last = performance.now();

    function meas() {
      if (!alive) return;
      els.forEach((e) => {
        const r = e.getBoundingClientRect();
        G.set(e, { t: r.top + window.scrollY, h: r.height });
      });
      first = 3;
    }

    function scenes() {
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      const top = (e) => G.get(e).t - sy;
      const H = (e) => G.get(e).h;

      // hero
      hbg.style.transform = `translate3d(0,${sy * 0.2}px,0) scale(${1.06 + Math.min(sy / vh, 1) * 0.1})`;
      hin.style.transform = `translate3d(0,${sy * 0.28}px,0)`;

      // word scrub
      scr.forEach(({ el, w }) => {
        const p = clamp((vh * 0.8 - top(el)) / (H(el) + vh * 0.25));
        w.forEach((s, i) => {
          s.style.opacity = 0.12 + 0.88 * clamp(p * w.length * 1.1 - i);
        });
      });

      // portal + sideways cards
      let p = clamp(-top(ex) / (H(ex) - vh));
      portal.style.setProperty("--r", clamp(p / 0.16) * 160 + "%");
      pt.style.opacity = 1 - clamp(p / 0.12);
      pt.style.transform = `scale(${1 + p * 4})`;
      const tr = -clamp((p - 0.18) / 0.8) * (track.scrollWidth - vw);
      track.style.transform = `translate3d(${tr}px,0,0)`;
      cards.forEach((c) => {
        const d = (c.offsetLeft + c.offsetWidth / 2 + tr - vw / 2) / vw;
        const a = Math.min(Math.abs(d), 1);
        c.style.transform = `scale(${1 - a * 0.12}) rotateY(${d * -8}deg)`;
        c.style.opacity = 1 - a * 0.45;
      });

      // time of day
      p = clamp(-top(day) / (H(day) - vh));
      const q = clamp(p * 4, 0, 4);
      scs.forEach((s, i) => {
        const d = clamp(q - i - 0.5, -1, 1);
        s.style.opacity = i ? clamp((q - (i - 0.25)) * 2) : 1;
        s.firstElementChild.style.transform = `translate3d(0,${d * -60}px,0) scale(${1 - Math.abs(d) * 0.1})`;
      });

      // kinetic words
      dls.forEach((l) => {
        const k = clamp((vh - top(l)) / (vh + H(l)));
        l.style.transform = `translate3d(${(k - 0.5) * vw * 0.45 * l.dataset.d}px,0,0)`;
        l.style.setProperty("--f", clamp((k - 0.3) / 0.4) * 100 + "%");
      });

      // friends leaves
      p = clamp((vh - top(fr)) / (vh + H(fr)));
      leaves.forEach((l) => {
        l.style.transform = `translate3d(0,${(0.5 - p) * l.dataset.s * 200}px,0) rotate(${p * l.dataset.r}deg)`;
      });

      // views
      p = clamp((vh - top(views)) / (vh + H(views)));
      mqs.forEach((m) => {
        m.style.transform = `translate3d(${(p - 0.5) * vw * 0.9 * m.dataset.d}px,0,0)`;
      });
      hills.forEach((h) => {
        h.style.transform = `translate3d(0,${(0.5 - p) * h.dataset.s * 120}px,0)`;
      });
    }

    function loop(now) {
      const dt = Math.min(now - last, 50);
      last = now;
      sy += (window.scrollY - sy) * (RM ? 1 : 1 - Math.exp(-dt * 0.011));
      if (Math.abs(window.scrollY - sy) < 0.05) sy = window.scrollY;
      if (sy !== ps || first > 0) {
        scenes();
        ps = sy;
        if (first > 0) first--;
      }
      raf = requestAnimationFrame(loop);
    }

    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(meas, 150);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("load", meas);
    if (document.fonts) document.fonts.ready.then(meas);
    meas();
    raf = requestAnimationFrame(loop);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", meas);
    };
  }, [rootRef]);
}
