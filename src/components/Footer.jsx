import GlowLink from "./GlowLink.jsx";
import ExternalLink from "./ExternalLink.jsx";
import { exploreLinks, pageNote } from "../data/site.js";
import { councilPages } from "../data/links.js";

// `sources` (optional) adds a row of links to the council pages the content came from.
export default function SiteFooter({ id, heading, links, note, sources }) {
  return (
    <footer className="join" id={id}>
      <h2>{heading}</h2>
      <div className="links">
        {links.map((l) => (
          <GlowLink key={l.to} to={l.to}>
            <b>{l.title}</b>
            {l.text}
          </GlowLink>
        ))}
      </div>
      {sources && (
        <p className="src">
          <span>Council pages:</span>
          {sources.map((s) => (
            <ExternalLink key={s.href} href={s.href}>
              {s.label}
            </ExternalLink>
          ))}
        </p>
      )}
      <small>{note}</small>
    </footer>
  );
}

// The footer used on Visit, Hire and Friends: links to the other two
// pages plus Home. `current` is the page it is shown on.
export function ExploreFooter({ current }) {
  const links = ["visit", "hire", "friends"]
    .filter((k) => k !== current)
    .map((k) => exploreLinks[k]);

  return (
    <SiteFooter
      heading="Keep exploring."
      links={[...links, exploreLinks.home]}
      note={pageNote}
      sources={councilPages}
    />
  );
}
