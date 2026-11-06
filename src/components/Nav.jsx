import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../data/site.js";

export default function Nav() {
  const isHome = useLocation().pathname === "/";

  return (
    <nav>
      <b>{isHome ? "Moorlands Park" : <Link to="/">Moorlands Park</Link>}</b>
      <span>
        {isHome && <a href="#explore">Explore</a>}
        {navLinks.map((l) => (
          // NavLink sets aria-current="page" on the active link, which the
          // stylesheet uses for the underline.
          <NavLink key={l.to} to={l.to}>
            {l.label}
          </NavLink>
        ))}
      </span>
    </nav>
  );
}
