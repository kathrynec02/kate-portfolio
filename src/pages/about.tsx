import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhotoGallery from "@/components/PhotoGallery";
import TechnicalSkills from "@/components/TechnicalSkills";
import Reveal from "@/components/Reveal";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main>
        <section className="relative px-6 pb-12 pt-36 sm:pt-44">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
            <div className="absolute right-0 top-40 h-64 w-64 rounded-full bg-coral/12 blur-3xl" />
          </div>

          <Reveal className="mx-auto max-w-2xl">
            <p className="font-mono text-sm text-coral">// about</p>
            <h1 className="mt-2 font-display text-5xl tracking-tight text-ink sm:text-6xl">
              hi, i&apos;m kate
            </h1>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                I&apos;m a frontend-focused full-stack engineer who loves crafting
                clean, modern, and intuitive interfaces — and the solid engineering
                that holds them together. I&apos;m currently in{" "}
                <span className="text-ink">Vanguard&apos;s Technology Leadership Program</span>{" "}
                and hold the AWS Cloud Practitioner certification.
              </p>
              <p>
                On the side I run{" "}
                <span className="text-ink">Canvas &amp; Kernel</span>, my web-design
                studio, and I&apos;m pursuing an MS in Computer Science at Georgia Tech.
              </p>
              <p>
                Outside of code, you&apos;ll find me at the gym, traveling, making art,
                and hunting down trendy coffee shops and bakeries. This site is my
                corner of the internet — welcome.
              </p>
            </div>
          </Reveal>
        </section>

        <TechnicalSkills />
        <PhotoGallery />
      </main>
      <Footer />
    </div>
  );
}
