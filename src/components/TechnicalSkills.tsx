import { Badge } from "@/components/ui/Badge";
import Reveal from "@/components/Reveal";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Python",
  "Flask",
  "Django",
  "HTML/CSS",
  "Tailwind CSS",
  "Bootstrap",
  "Redux",
  "PostgreSQL",
  "MongoDB",
  "AWS (Lambda, DynamoDB)",
  "Git & GitHub",
  "Figma",
  "OpenAI API",
  "NVDA/Cypress Testing",
];

export default function TechnicalSkills() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <Reveal className="mb-8 text-center">
          <p className="font-mono text-sm text-coral">// toolkit</p>
          <h2 className="mt-2 font-display text-4xl tracking-tight text-ink">
            technical skills
          </h2>
        </Reveal>
        <Reveal delay={100} className="flex flex-wrap justify-center gap-3">
          {skills.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
