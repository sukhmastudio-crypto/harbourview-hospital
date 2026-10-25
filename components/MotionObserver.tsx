"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Scroll-reveal ([data-rv]) and count-up ([data-count]). Skipped when the visitor prefers reduced motion. */
export default function MotionObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const fmt = (v: number, suffix: string) => v.toLocaleString("en-AU") + suffix;

    const counters = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target as HTMLElement;
        const end = Number(el.dataset.count);
        const suffix = el.dataset.suffix || "";
        const t0 = performance.now();
        const step = (t: number) => {
          const p = Math.min((t - t0) / 1400, 1);
          el.textContent = fmt(Math.round(end * (1 - Math.pow(1 - p, 3))), suffix);
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        counters.unobserve(el);
      });
    });
    document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
      el.textContent = fmt(0, el.dataset.suffix || "");
      counters.observe(el);
    });

    const timers: number[] = [];
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const el = en.target as HTMLElement;
          el.classList.add("in");
          reveal.unobserve(el);
          const wait = 1000 + parseInt(el.style.getPropertyValue("--d") || "0", 10);
          timers.push(window.setTimeout(() => el.removeAttribute("data-rv"), wait));
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll<HTMLElement>("[data-rv]").forEach((el) => {
      const idx = el.parentElement ? Array.from(el.parentElement.children).indexOf(el) : 0;
      el.style.setProperty("--d", `${Math.min(idx, 6) * 80}ms`);
      reveal.observe(el);
    });

    return () => {
      counters.disconnect();
      reveal.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [pathname]);

  return null;
}
