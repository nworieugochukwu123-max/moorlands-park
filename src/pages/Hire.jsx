import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import FeatureCard from "../components/FeatureCard.jsx";
import Counter from "../components/Counter.jsx";
import KineticWord from "../components/KineticWord.jsx";
import Address from "../components/Address.jsx";
import ExternalLink from "../components/ExternalLink.jsx";
import { ExploreFooter } from "../components/Footer.jsx";
import usePageTitle from "../hooks/usePageTitle.js";
import { links, councilPages } from "../data/links.js";

const suitability = [
  { title: "Event size", text: "Best for small events." },
  { title: "Suited to", text: "Leisure activities, community events and outdoor cinema." },
  { title: "Access", text: "Wheelchair access, with step-free entry from the eastern gate off Englishcombe Lane." },
  { title: "On site", text: "No catering facilities or public toilets, so plan for both." },
];

const siteAccess = [
  { title: "By bus", text: "Take the number 8 from Bath city centre to Moorfields Road." },
  { title: "By car", text: "Head for Englishcombe Lane or Chantry Mead. Park outside the park, or in the small car park through the eastern entrance off Englishcombe Lane." },
  { title: "On foot", text: "Entrances are off Englishcombe Lane, Chantry Mead and Moorfields Road." },
  { title: "Disabled access", text: "Use the eastern entrance off Englishcombe Lane." },
];

export default function Hire() {
  usePageTitle("Hire");

  return (
    <>
      <main>
        <PageHero
          title="Hire"
          lead="Community fetes and the occasional open-air cinema have found a home here. Small events are welcome."
        />

        <section className="wrap">
          <Reveal as="h2">How to enquire</Reveal>
          <div className="fg">
            <FeatureCard title="The council’s events team">
              Thinking of Moorlands Park as a venue for a small-scale event? Enquire with the council’s events team.
              <br />
              <br />
              <ExternalLink className="btn" href={links.enquiry}>Make an enquiry</ExternalLink>
            </FeatureCard>
            <FeatureCard title="The Friends of Moorlands Park" delay={1}>
              Or arrange an event with the Friends. They don’t charge, but ask for a donation to support their volunteer work.
              <br />
              <br />
              <Link className="btn" to="/friends">Meet the Friends</Link>
            </FeatureCard>
          </div>
        </section>

        <section className="wrap">
          <Reveal as="h2">Hire prices</Reveal>
          <div className="fg">
            <Reveal>
              <Counter value={882} />
              Commercial day rate
            </Reveal>
            <Reveal delay={1}>
              <Counter value={441.6} decimals={2} />
              Charity day rate
            </Reveal>
          </div>
          <Reveal as="p" style={{ marginTop: "2rem" }}>
            The rates are the same from April to September and from October to March. These are the council’s 2025–26 prices for parks and open spaces, so the current figures may differ. For the latest rates, see the <ExternalLink href={links.prices}>council’s price list</ExternalLink> for parks and open spaces.
          </Reveal>
        </section>

        <section className="kw">
          <KineticWord dir={1}>Fetes</KineticWord>
          <KineticWord dir={-1}>Open-air cinema</KineticWord>
        </section>

        <section className="wrap">
          <Reveal as="h2">Is it right for your event?</Reveal>
          <div className="fg">
            {suitability.map((s, i) => (
              <FeatureCard key={s.title} title={s.title} delay={i % 4}>
                {s.text}
              </FeatureCard>
            ))}
          </div>
          <Reveal as="p" style={{ marginTop: "2rem" }}>
            Getting there? See <Link to="/visit">how to reach the park</Link>.
          </Reveal>
          <Reveal as="p" style={{ marginTop: "1rem" }}>
            Comparing venues? Browse the council’s <ExternalLink href={links.venuesList}>list</ExternalLink> or <ExternalLink href={links.venuesMap}>map</ExternalLink> of outdoor venues, or <ExternalLink href={councilPages[1].href}>read the council’s page on Moorlands Park</ExternalLink>.
          </Reveal>
        </section>

        <section className="wrap">
          <Reveal as="h2">Site access</Reveal>
          <div className="fg">
            {siteAccess.map((s, i) => (
              <FeatureCard key={s.title} title={s.title} delay={i % 4}>
                {s.text}
              </FeatureCard>
            ))}
          </div>
          <Address style={{ marginTop: "3rem" }} />
        </section>
      </main>

      <ExploreFooter current="hire" />
    </>
  );
}
