import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import FeatureCard from "../components/FeatureCard.jsx";
import KineticWord from "../components/KineticWord.jsx";
import Address from "../components/Address.jsx";
import ExternalLink from "../components/ExternalLink.jsx";
import { ExploreFooter } from "../components/Footer.jsx";
import usePageTitle from "../hooks/usePageTitle.js";
import { links, councilPages } from "../data/links.js";

const whatTheyDo = [
  { title: "Well maintained", text: "Volunteers help keep the park cared for, season after season." },
  { title: "Clean", text: "A tidy green space that locals and visitors can enjoy." },
  { title: "Pleasant, with outstanding views", text: "They look after the whole mix of features the community loves." },
];

export default function Friends() {
  usePageTitle("Friends");

  return (
    <>
      <main>
        <PageHero
          title="Friends"
          lead="The neighbours who keep Moorlands Park clean, well maintained and pleasant, with outstanding views."
        />

        <section className="wrap">
          <Reveal as="h2">What they do</Reveal>
          <div className="fg">
            {whatTheyDo.map((w, i) => (
              <FeatureCard key={w.title} title={w.title} delay={i % 4}>
                {w.text}
              </FeatureCard>
            ))}
          </div>
        </section>

        <section className="kw">
          <KineticWord dir={1}>Volunteers</KineticWord>
          <KineticWord dir={-1}>Neighbours</KineticWord>
        </section>

        <section className="wrap">
          <Reveal as="h2">Join in</Reveal>
          <Reveal as="p">
            To find out what the group is up to and how you can get involved, look up the Friends of Moorlands Park page on Facebook.
          </Reveal>
          <Reveal className="acts">
            <ExternalLink className="btn" href={links.facebook}>Friends of Moorlands Park on Facebook</ExternalLink>
            <ExternalLink className="btn ghost" href={councilPages[2].href}>Read the council’s page</ExternalLink>
          </Reveal>
        </section>

        <section className="wrap">
          <Reveal as="h2">Planning an event?</Reveal>
          <Reveal as="p">
            The Friends can help you arrange one. They don’t charge, but they’d appreciate a donation towards their volunteer work. See the <Link to="/hire">hire page</Link> for the full picture.
          </Reveal>
        </section>

        <section className="wrap">
          <Reveal as="h2">Find us</Reveal>
          <Address />
        </section>
      </main>

      <ExploreFooter current="friends" />
    </>
  );
}
