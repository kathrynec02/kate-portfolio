import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";

const photos = ["/IMG_2411.png", "/IMG_4498.png", "/IMG_5585.png", "/IMG_6230.png"];

export default function PhotoGallery() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((p) => (p - 1 + photos.length) % photos.length);
  const next = () => setCurrent((p) => (p + 1) % photos.length);

  return (
    <section className="px-6 pb-24 pt-8">
      <Reveal className="mx-auto max-w-xl text-center">
        <p className="font-mono text-sm text-coral">// off the clock</p>
        <h3 className="mt-2 font-display text-3xl tracking-tight text-ink">
          a few lattes from my favorite spots
        </h3>

        <div className="relative mx-auto mt-8 w-full">
          <div className="relative h-80 w-full overflow-hidden rounded-2xl border border-hairline shadow-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={photos[current]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={photos[current]}
                  alt={`Coffee photo ${current + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-surface/90 p-2 text-ink shadow-md transition-colors duration-300 hover:text-coral"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-surface/90 p-2 text-ink shadow-md transition-colors duration-300 hover:text-coral"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-4 flex justify-center gap-2" aria-hidden>
            {photos.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-coral" : "w-1.5 bg-hairline"
                }`}
              />
            ))}
          </div>
        </div>

        <p className="mt-4 font-mono text-xs text-muted">
          all photos taken by me — NYC, DC, and beyond.
        </p>
      </Reveal>
    </section>
  );
}
