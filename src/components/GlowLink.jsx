import { Link } from "react-router-dom";

// A footer link whose background glow follows the pointer.
export default function GlowLink({ children, ...props }) {
  const onPointerMove = (e) => {
    const a = e.currentTarget;
    const r = a.getBoundingClientRect();
    a.style.setProperty("--mx", e.clientX - r.left + "px");
    a.style.setProperty("--my", e.clientY - r.top + "px");
  };

  return (
    <Link {...props} onPointerMove={onPointerMove}>
      {children}
    </Link>
  );
}
