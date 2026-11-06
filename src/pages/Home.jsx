import { useRef } from "react";
import SplitText from "../components/SplitText.jsx";
import ScrubText from "../components/ScrubText.jsx";
import SiteFooter from "../components/Footer.jsx";
import useHomeScenes from "../hooks/useHomeScenes.js";
import usePageTitle from "../hooks/usePageTitle.js";
import { homeNote } from "../data/site.js";

// pos / z position and zoom the shared sunset photo differently on each card.
const cards = [
  { title: "Picnic spots", text: "Open lawns and shaded edges. Bring a blanket and nowhere to be.", pos: "8% 100%", z: "240%" },
  { title: "Lodges", text: "A roof for the longer stay, for gatherings, or for when the sky changes its mind.", pos: "30% 62%", z: "210%" },
  { title: "Quiet corners", text: "Benches off the path and slopes made for lying back and doing nothing.", pos: "88% 100%", z: "220%" },
  { title: "Big views", text: "Find the best bench and let the city unroll beneath you.", pos: "56% 38%", z: "180%" },
];

const times = [
  { title: "Morning", text: "Dew on the grass and the paths nearly empty. The best time to have the view to yourself." },
  { title: "Afternoon", text: "Blankets out, baskets open, and the whole slope becomes a living room." },
  { title: "Evening", text: "Long shadows, low light, and the valley at its best." },
  { title: "Night", text: "Quiet again. The grass settles and waits for tomorrow." },
];

// d is the direction each word slides in.
const words = [
  { word: "Picnic", d: 1 },
  { word: "Wander", d: -1 },
  { word: "Linger", d: 1 },
  { word: "Gather", d: -1 },
  { word: "Breathe", d: 1 },
];

// s is how fast and which way a leaf drifts, r is how far it spins.
const leaves = [
  { s: 1.2, r: 140, size: 90, left: "6%", top: "12%" },
  { s: -0.8, r: -90, size: 60, left: "22%", top: "70%" },
  { s: 1.6, r: 200, size: 120, left: "78%", top: "8%" },
  { s: -1.1, r: 110, size: 70, left: "88%", top: "62%" },
  { s: 0.7, r: -160, size: 50, left: "48%", top: "4%" },
  { s: -1.4, r: 80, size: 100, left: "60%", top: "80%" },
];

const hills = [
  { s: -1.2, height: "80%", fill: "var(--g3)", d: "M0 200 C240 80 480 260 760 150 S1200 60 1440 170 V400 H0Z" },
  { s: -0.6, height: "62%", fill: "var(--g1)", d: "M0 170 C300 260 520 60 820 150 S1240 250 1440 120 V400 H0Z" },
  { s: 0, height: "42%", fill: "var(--g2)", d: "M0 120 C260 40 560 240 860 130 S1260 40 1440 140 V400 H0Z" },
];

const footerLinks = [
  { to: "/visit", title: "Visit", text: "Plan your trip to the park." },
  { to: "/hire", title: "Hire", text: "Gathering somewhere special? See what’s available." },
  { to: "/friends", title: "Join the Friends", text: "Help keep the park clean, green and loved." },
];

const viewsText = "VIEWS VIEWS VIEWS VIEWS VIEWS VIEWS";

export default function Home() {
  const root = useRef(null);
  usePageTitle();
  useHomeScenes(root);

  return (
    <>
      <main ref={root}>
        <header className="hero">
          <div className="hin">
            <h1 aria-label="Moorlands Park">
              <SplitText text="Moorlands" />
              <SplitText text="Park" start={9} />
            </h1>
            <p className="sub">
              Picnics, lodges, quiet corners and outstanding views. A green space in Bath that the neighbourhood looks after together.
            </p>
          </div>
          <div className="hbg" role="img" aria-label="Green grass hills under a blue sky" />
          <div className="cue">scroll down</div>
        </header>

        <section className="mani">
          <ScrubText>
            Bring a blanket and a flask. Spread out on the grass, slip away to a quiet corner, shelter in a lodge when the weather turns, and let the view do the rest.
          </ScrubText>
        </section>

        <section className="explore" id="explore">
          <div className="stage">
            <div className="portal" />
            <div className="pt">Wander</div>
            <div className="track">
              {cards.map((c) => (
                <article key={c.title} className="card" style={{ "--pos": c.pos, "--z": c.z }}>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="day" id="day">
          <div className="dst">
            {times.map((t, i) => (
              <div key={t.title} className={`sc s${i}`}>
                <h2>{t.title}</h2>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="do" id="do">
          {words.map((w) => (
            <div key={w.word} className="dl" data-d={w.d}>
              {w.word}
            </div>
          ))}
        </section>

        <section className="fr" id="friends">
          {leaves.map((l, i) => (
            <span
              key={i}
              className="leaf"
              data-s={l.s}
              data-r={l.r}
              style={{ "--z": `${l.size}px`, left: l.left, top: l.top }}
            />
          ))}
          <ScrubText>
            The Friends of Moorlands Park keep it clean, well maintained and pleasant for everyone who visits. Come and join in.
          </ScrubText>
        </section>

        <section className="views" id="views">
          <div className="mq" data-d="1">{viewsText}</div>
          <div className="mq o" data-d="-1">{viewsText}</div>
          <p className="vt">Some spots are made for lingering. Find your bench, your slope, your sunset.</p>
          <div className="hills" id="hills">
            {hills.map((h, i) => (
              <svg
                key={i}
                className="hill"
                data-s={h.s}
                style={{ height: h.height, fill: h.fill }}
                viewBox="0 0 1440 400"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d={h.d} />
              </svg>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter id="join" heading="Come and see it for yourself." links={footerLinks} note={homeNote} />
    </>
  );
}
