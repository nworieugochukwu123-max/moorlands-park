import SplitText from "./SplitText.jsx";

export default function PageHero({ title, lead }) {
  return (
    <header className="phero">
      <h1 aria-label={title}>
        <SplitText text={title} />
      </h1>
      <p className="lead">{lead}</p>
    </header>
  );
}
