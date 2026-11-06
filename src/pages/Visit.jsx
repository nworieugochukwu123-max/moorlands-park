import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import FeatureCard from "../components/FeatureCard.jsx";
import KineticWord from "../components/KineticWord.jsx";
import Steps from "../components/Steps.jsx";
import Address from "../components/Address.jsx";
import ExternalLink from "../components/ExternalLink.jsx";
import { ExploreFooter } from "../components/Footer.jsx";
import usePageTitle from "../hooks/usePageTitle.js";
import { links, councilPages } from "../data/links.js";

const features = [
  { title: "Open green space", text: "Room for recreation, picnics and informal sports." },
  { title: "Mature trees and woodland", text: "Spectacular established trees, with new plantings of cherry and native species." },
  { title: "Bulbs and wildflowers", text: "Spring bulbs and wildflower areas that change with the season." },
  { title: "Wildlife corners", text: "Scrubland left wild for foxes, badgers and other wildlife." },
  { title: "Children’s play area", text: "A play area for younger children." },
  { title: "Benches everywhere", text: "Conventional benches, plus informal seats made from tree trunks." },
  { title: "Walkways", text: "Paths linking the park to Moorlands School, Englishcombe House and Baskervilles Gym." },
];

// Equipment listed by the council for Moorlands Recreation Ground, Englishcombe Lane.
const playEquipment = [
  "Inclusive multi-play unit",
  "Low rotator",
  "Rocking chairs",
  "Seating",
  "Swings",
];

const gettingHere = [
  { title: "By bus", text: "Take the number 8 from Bath city centre to Moorfields Road." },
  { title: "By car", text: "Head for Englishcombe Lane or Chantry Mead. Park outside the park, or in the small car park through the eastern entrance off Englishcombe Lane." },
  { title: "On foot", text: "Walk in from Englishcombe Lane, Chantry Mead or Moorfields Road." },
  { title: "Step-free access", text: "Use the eastern entrance off Englishcombe Lane." },
];

export default function Visit() {
  usePageTitle("Visit");

  return (
    <>
      <main>
        <PageHero
          title="Visit"
          lead="A park with magnificent views over Bath, its historic crescents and the green, wooded spaces around it."
        />

        <section className="wrap">
          <Reveal as="h2">What you’ll find</Reveal>
          <div className="fg">
            {features.map((f, i) => (
              <FeatureCard key={f.title} title={f.title} delay={i % 4}>
                {f.text}
              </FeatureCard>
            ))}
          </div>
        </section>

        <section className="wrap">
          <Reveal as="h2">The play area</Reveal>
          <Reveal as="p">
            Younger children have a play area of their own. The council’s listing for Moorlands Recreation Ground on Englishcombe Lane gives its equipment:
          </Reveal>
          <ul className="tags">
            {playEquipment.map((item, i) => (
              <Reveal as="li" key={item} delay={i % 4}>
                {item}
              </Reveal>
            ))}
          </ul>
        </section>

        <section className="kw">
          <KineticWord dir={1}>Open all year</KineticWord>
          <KineticWord dir={-1}>Free to enter</KineticWord>
        </section>

        <section className="wrap">
          <Reveal as="h2">Opening and admission</Reveal>
          <Reveal as="p">Moorlands Park is open throughout the year, and there is no charge for admission.</Reveal>
          <Reveal as="p" delay={1} style={{ marginTop: "1rem" }}>
            There are no catering facilities or public toilets, so bring your own picnic.
          </Reveal>
        </section>

        <section className="wrap">
          <Reveal as="h2">Getting here</Reveal>
          <Steps items={gettingHere} />
        </section>

        <section className="wrap">
          <Reveal as="h2">Find us</Reveal>
          <Address />
          <Reveal className="acts">
            <ExternalLink className="btn" href={links.map}>Open in Google Maps</ExternalLink>
            <ExternalLink className="btn ghost" href={councilPages[0].href}>Read the council’s page</ExternalLink>
          </Reveal>
        </section>
      </main>

      <ExploreFooter current="visit" />
    </>
  );
}
