import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, Github, Linkedin } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-36 pb-24 sm:pt-44">
      {/* decorative warm halos */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-coral/20 blur-3xl dark:bg-coral/15" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-gold/20 blur-3xl dark:bg-gold/15" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-coral/10 blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1.25fr_0.85fr]"
      >
        <div>
          <motion.p
            variants={item}
            className="font-mono text-sm tracking-tight text-coral"
          >
            // hi, i&apos;m kate
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl"
          >
            building at the{" "}
            <span className="italic text-coral">seam</span> of
            <br className="hidden sm:block" /> design{" "}
            <span className="text-gold">+</span> code
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg text-muted">
            ios engineer @ vanguard · ms cs @ georgia tech · founder,{" "}
            <span className="text-ink">canvas &amp; kernel</span>
          </motion.p>

          {/* credential chips */}
          <motion.div variants={item} className="mt-7 flex flex-wrap gap-3">
            <span className="rounded-full border border-gold/50 bg-gold/10 px-4 py-1.5 font-mono text-xs text-ink">
              GT MS · in progress · Dec 2026
            </span>
            <a
              href="https://www.credly.com/badges/9d85fadb-b928-463f-a4a3-190b4b015964/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-coral/50 bg-coral/10 px-4 py-1.5 font-mono text-xs text-ink transition-colors duration-300 hover:bg-coral/20"
            >
              AWS Cloud Practitioner ↗
            </a>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <a
              href="/Kathryn-Chadwick-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-medium text-[#fffdf8] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <FileText className="h-4 w-4" /> resume
            </a>
            <a
              href="https://github.com/kathrynec02"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-5 py-2.5 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-coral hover:text-coral"
            >
              <Github className="h-4 w-4" /> github
            </a>
            <a
              href="https://www.linkedin.com/in/kathrynec/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-5 py-2.5 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-coral hover:text-coral"
            >
              <Linkedin className="h-4 w-4" /> linkedin
            </a>
          </motion.div>
        </div>

        {/* profile image — soft gold offset frame */}
        <motion.div variants={item} className="mx-auto md:mx-0">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border border-gold/60"
            />
            <div className="absolute -left-3 -bottom-3 h-24 w-24 rounded-full bg-coral/15 blur-2xl" aria-hidden />
            <div className="relative h-64 w-64 overflow-hidden rounded-[2rem] ring-2 ring-gold/40 shadow-lg sm:h-72 sm:w-72">
              <Image
                src="/Kathryn Chadwick Profile.png"
                alt="Kate Chadwick"
                fill
                priority
                sizes="288px"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
