// One line of a big headline, split into letters that rise in one by one.
// `start` is the index of the first letter, so a second line can continue
// the stagger where the first one stopped.
export default function SplitText({ text, start = 0 }) {
  return (
    <span className="line" aria-hidden="true">
      {[...text].map((c, i) => (
        <span key={i} className="ch" style={{ "--i": start + i }}>
          {c === " " ? "\u00a0" : c}
        </span>
      ))}
    </span>
  );
}
