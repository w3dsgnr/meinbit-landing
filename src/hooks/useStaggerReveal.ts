import { useEffect } from "react";

/*
  Adds the `.visible` class to elements with `.si` as they enter the viewport,
  staggered by index inside their parent. Mirrors the legacy IntersectionObserver
  script from the original index-v2.html.
*/
export function useStaggerReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = document.querySelectorAll<HTMLElement>(".si");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const parent = entry.target.parentElement;
          if (!parent) return;
          const siblings = Array.from(parent.querySelectorAll<HTMLElement>(".si"));
          const idx = siblings.indexOf(entry.target as HTMLElement);
          setTimeout(() => entry.target.classList.add("visible"), idx * 80);
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);
}
