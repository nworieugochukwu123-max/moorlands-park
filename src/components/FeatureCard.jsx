import Reveal from "./Reveal.jsx";

export default function FeatureCard({ title, delay = 0, children }) {
  return (
    <Reveal className="fc" delay={delay}>
      <b>{title}</b>
      {children}
    </Reveal>
  );
}
