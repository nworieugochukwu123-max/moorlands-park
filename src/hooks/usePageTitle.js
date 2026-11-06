import { useEffect } from "react";

const SITE = "Moorlands Park, Bath";

// usePageTitle("Visit") -> "Visit | Moorlands Park, Bath"; usePageTitle() -> "Moorlands Park, Bath"
export default function usePageTitle(page) {
  useEffect(() => {
    document.title = page ? `${page} | ${SITE}` : SITE;
  }, [page]);
}
