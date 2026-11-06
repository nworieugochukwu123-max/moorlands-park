// A link to another website. Opens in a new tab and says so to screen readers.
export default function ExternalLink({ href, className, children }) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr"> (opens in a new tab)</span>
    </a>
  );
}
