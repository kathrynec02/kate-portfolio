import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const photos = [
  "/IMG_2411.png",
  "/IMG_4498.png",
  "/IMG_5585.png",
  "/IMG_6230.png",
];

export default function PhotoGallery() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev - 1 + photos.length) % photos.length);
  const next = () => setCurrent((prev) => (prev + 1) % photos.length);

  return (
    <section className="mt-16 text-center">
      <h3 className="text-2xl font-semibold mb-4">A few lattes from my favorite coffee spots ☕</h3>
      <div className="relative w-full max-w-xl mx-auto">
        <div className="w-full h-80 relative rounded-xl overflow-hidden shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={photos[current]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-80 relative rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={photos[current]}
              alt={`Coffee photo ${current + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 700px"
              priority
            />
          </motion.div>
        </AnimatePresence>
        </div>
        <motion.button
          onClick={prev}
          className="absolute top-1/2 left-2 -translate-y-1/2 p-2 bg-white/70 rounded-full shadow-md"
        >
          <motion.div whileHover={{ scale: 1.3 }} className="w-6 h-6 flex items-center justify-center">
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </motion.div>
        </motion.button>

        <motion.button
          onClick={next}
          className="absolute top-1/2 right-2 -translate-y-1/2 p-2 bg-white/70 rounded-full shadow-md"
        >
          <motion.div whileHover={{ scale: 1.3 }} className="w-6 h-6 flex items-center justify-center">
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </motion.div>
        </motion.button>
      </div>
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">All photos taken by me – NYC, DC, and beyond.</p>
    </section>
  );
}
