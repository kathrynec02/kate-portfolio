import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
                I&apos;m a full-stack engineer who builds at the seam of design and
                code. Two years in, I&apos;ve shipped high-scale web and mobile —
                Java, Python, TypeScript/React, AWS. The interface and the
                engineering underneath it. Both, or it doesn&apos;t count.
              </p>
              <p>
                Right now I&apos;m in{" "}
                <span className="text-ink">Vanguard&apos;s Technology Leadership Program</span>,
                heading into iOS and building AI developer tooling — the kind that
                collapses the design-to-dev handoff instead of adding another step to
                it. I think AI is an amplifier, not a replacement. It clears the busywork
                so the human gets to do the thing only a human can. The small details
                of an experience matter → so I spend my time there.
              </p>
              <p>
                On the side I founded{" "}
                <span className="text-ink">Canvas &amp; Kernel</span>, a web-design
                studio for solo experts who&apos;ve outgrown the template. I&apos;m also
                pursuing an{" "}
                <span className="text-ink">M.S. in HCI at Georgia Tech</span>, and I hold
                a B.A. in Computer Science from{" "}
                <span className="text-ink">UVA</span>, Magna Cum Laude. AWS Cloud
                Practitioner along the way.
              </p>
            </div>

            <div className="mt-12">
              <p className="font-mono text-sm text-coral">// off the clock</p>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
                <p>
                  I train for Ironman and triathlon — former State Rowing Champion, so
                  the early mornings aren&apos;t new. When I&apos;m not training, I&apos;m
                  pulling latte art and hunting down the next good coffee shop. I make
                  art too — digital and acrylic (Scholastic Art &amp; Writing Gold Key).
                  And there&apos;s an aussiedoodle who supervises all of it.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        <TechnicalSkills />
      </main>
      <Footer />
    </div>
  );
}
