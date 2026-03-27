import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ring = useRef(null);

  useEffect(() => {
    document.body.classList.add("has-custom-cursor");

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let rafId;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      if (ring.current) {
        ring.current.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    const onEnter = () => ring.current?.classList.add("cursor-ring--hover");
    const onLeave = () => ring.current?.classList.remove("cursor-ring--hover");

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, .card, .stat-badge").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    rafId = requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={ring} className="cursor-ring" />;
}