import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// On every page change, jump back to the top (or to the #section in the URL).
// "instant" matters: the stylesheet sets scroll-behavior: smooth, which would
// otherwise make the new page glide down from wherever the old one was.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
    if (target) target.scrollIntoView({ behavior: "instant" });
    else window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // Only react to page changes. Links to #explore on the home page are
    // handled by the browser itself.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}
