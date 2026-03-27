import { useEffect, useRef, useCallback, useState } from "react";

const SECTION_IDS = ["sobre", "projetos", "stack", "contato"];

export function useScrollSpy() {
  const [activeId, setActiveId] = useState("");
  const contatoRef = useRef(null);

  useEffect(() => {
    contatoRef.current = document.getElementById("contato");
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.15, rootMargin: "-80px 0px -30% 0px" }
    );

    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    sections.forEach((el) => observer.observe(el));
    return () => sections.forEach((el) => observer.unobserve(el));
  }, []);

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const scrollContato = useCallback(() => {
    contatoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return { scrollTo, scrollContato, activeId };
}
