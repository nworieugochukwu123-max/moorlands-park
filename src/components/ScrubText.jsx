// A big paragraph whose words light up one by one as you scroll past
// (driven by useHomeScenes on the home page).
export default function ScrubText({ children }) {
  const text = String(children).trim();

  return (
    <p className="scrub" aria-label={text}>
      {text.split(/\s+/).map((word, i) => (
        <span key={i} className="sw" aria-hidden="true">
          {word}
        </span>
      ))}
    </p>
  );
}
