import { useEffect, useCallback } from "react";

export function useScrollSpy() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.15 }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const scrollContato = useCallback(() => {
    scrollTo("#contato");
  }, [scrollTo]);

  return { scrollTo, scrollContato };
}
