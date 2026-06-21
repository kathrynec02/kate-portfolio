import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import ProjectCover from "@/components/ProjectCover";

type Project = {
  title: string;
  year: string;
  desc: string;
  href: string;
  tag: string;
  image?: string;
  variant?: "coral" | "gold" | "mix";
};

// ordered best/most-important → oldest/weakest
const projects: Project[] = [
  {
    title: "Canvas & Kernel",
    year: "2025",
    desc: "my web-design studio: bespoke, UX-led sites with real engineering",
    href: "https://canvasandkernel.com/",
    tag: "studio",
    variant: "coral",
  },
  {
    title: "jared",
    year: "2026",
    desc: "an AI chief-of-staff that plans my day from calendar, health & workload",
    href: "https://github.com/kathrynec02/jared",
    tag: "ai · next.js · supabase",
    variant: "mix",
  },
  {
    title: "closet-app",
    year: "2026",
    desc: "a wardrobe app to catalog clothes & build outfits (for funsies)",
    href: "https://github.com/kathrynec02/closet-app",
    tag: "react · vite",
    variant: "gold",
  },
  {
    title: "KatteLatte Studio",
    year: "2023",
    desc: "UX/UI design brand & digital storefront with coffee-themed coloring books and digital content",
    href: "https://www.etsy.com/shop/KatteLatte?ref=seller-platform-mcnav",
    tag: "design · brand",
    image: "/images/kattelattestudio.jpg",
  },
  {
    title: "gritGorilla",
    year: "2025",
    desc: "a strength-building & protein-tracking app (UX/UI prototype, WaterLlama-inspired)",
    href: "https://github.com/kathrynec02/gritGorilla",
    tag: "ios · prototype",
    image: "/images/gritGorilla.avif",
  },
  {
    title: "wordl-triv",
    year: "2024",
    desc: "Wordle clone with custom keyboard support, Redux state, animations & trivia integration",
    href: "https://github.com/kathrynec02/wordl-triv",
    tag: "react · redux",
    image: "/images/wordle.png",
  },
  {
    title: "HoosReview",
    year: "2022",
    desc: "a platform for UVA students to review clubs & organizations",
    href: "https://github.com/kathrynec02/uvaClubReview",
    tag: "web · postgres",
    image: "/images/hoosreview.jpg",
  },
];

export default function Projects() {
  const railRef = useRef<HTMLUListElement>(null);
  const [progress, setProgress] = useState(0);
  const [windowFraction, setWindowFraction] = useState(0.4);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const update = () => {
      const max = rail.scrollWidth - rail.clientWidth;
      setProgress(max <= 0 ? 0 : rail.scrollLeft / max);
      setWindowFraction(
        rail.scrollWidth === 0 ? 1 : Math.min(1, rail.clientWidth / rail.scrollWidth)
      );
    };

    update();
    rail.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      rail.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByCard = useCallback((dir: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>("li[data-card]");
    const amount = card ? card.offsetWidth + 20 : rail.clientWidth * 0.8;
    rail.scrollBy({ left: dir * amount, behavior: "smooth" });
  }, []);

  const thumbWidth = Math.max(0.18, Math.min(0.55, windowFraction)) * 100;
  const thumbLeft = progress * (100 - thumbWidth);

  return (
    <section id="projects" className="relative scroll-mt-24 py-24">
      {/* decorative halo behind header */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-12 h-56 w-56 rounded-full bg-gold/15 blur-3xl" />
      </div>

      <div className="mx-auto mb-12 flex max-w-5xl items-end justify-between px-6">
        <Reveal>
          <p className="font-mono text-sm text-coral">// 01 — work</p>
          <h2 className="mt-2 font-display text-4xl tracking-tight text-ink sm:text-5xl">
            selected projects
          </h2>
        </Reveal>

        <Reveal delay={120} className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous project"
            className="rounded-full border border-hairline bg-surface p-2.5 text-ink transition-colors duration-300 hover:border-coral hover:text-coral"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next project"
            className="rounded-full border border-hairline bg-surface p-2.5 text-ink transition-colors duration-300 hover:border-coral hover:text-coral"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </Reveal>
      </div>

      <ul
        ref={railRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-3 sm:px-8 lg:px-[max(2rem,calc((100%-64rem)/2))]"
        aria-label="Projects"
      >
        {projects.map((p) => (
          <li
            key={p.title}
            data-card
            className="shrink-0 snap-start basis-[82%] sm:basis-[48%] md:basis-[34%] lg:basis-[28%]"
          >
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-coral/50 hover:shadow-md"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden">
                {p.image ? (
                  <>
                    <Image
                      src={p.image}
                      alt={`${p.title} cover`}
                      fill
                      sizes="(min-width: 1024px) 28vw, (min-width: 768px) 34vw, 82vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-[#fffdf8]/90 px-3 py-1 font-mono text-[0.7rem] tracking-wide text-ink">
                      {p.tag}
                    </span>
                  </>
                ) : (
                  <ProjectCover title={p.title} tag={p.tag} variant={p.variant} />
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-2xl leading-tight text-ink">
                    {p.title}
                  </h3>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-coral" />
                </div>
                <p className="mt-1 font-mono text-xs text-muted">{p.year}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
              </div>
            </a>
          </li>
        ))}
        <li aria-hidden className="shrink-0 basis-2" />
      </ul>

      {/* scroll-progress thumb (replaces dots) */}
      <div className="mt-8 flex items-center justify-center px-6" aria-hidden>
        <div className="relative h-px w-48 bg-hairline md:w-64">
          <div
            className="absolute top-0 h-px bg-coral transition-[left] duration-150 ease-out"
            style={{ width: `${thumbWidth}%`, left: `${thumbLeft}%` }}
          />
        </div>
      </div>
    </section>
  );
}
