import { Mail } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 px-6 py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-56 w-72 -translate-x-1/2 rounded-full bg-coral/15 blur-3xl" />
      </div>

      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-sm text-coral">// say hello</p>
        <h2 className="mt-2 font-display text-4xl tracking-tight text-ink sm:text-5xl">
          let&apos;s build something
        </h2>
        <p className="mt-4 text-lg text-muted">
          A studio project, a hard problem, or just a hello → my inbox is open.
        </p>
        <a
          href="mailto:kechadwick02@gmail.com"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-medium text-[#fffdf8] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
        >
          <Mail className="h-4 w-4" /> kechadwick02@gmail.com
        </a>
      </Reveal>
    </section>
  );
}
