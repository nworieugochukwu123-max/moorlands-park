import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop.jsx";
import ScrollProgress from "./ScrollProgress.jsx";
import Nav from "./Nav.jsx";

// Shared shell: progress bar and navigation stay put while pages swap.
export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <Nav />
      <Outlet />
    </>
  );
}
