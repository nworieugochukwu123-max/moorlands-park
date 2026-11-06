import useInView from "../hooks/useInView.js";

// Fades and lifts its content in the first time it scrolls into view.
// Renders any element via `as` (div by default). `delay` is 0-3 and staggers
// neighbours in a grid or list.
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  style,
  children,
  ...rest
}) {
  const [ref, inView] = useInView(0.15);
  const classes = [className, "rv", inView && "in"].filter(Boolean).join(" ");

  return (
    <Tag ref={ref} className={classes} style={{ "--d": delay, ...style }} {...rest}>
      {children}
    </Tag>
  );
}
