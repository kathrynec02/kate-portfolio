import { Badge } from "@/components/ui/Badge";
import Reveal from "@/components/Reveal";

type Group = {
  label: string;
  skills: string[];
};

const groups: Group[] = [
  {
    label: "languages",
    skills: ["Java", "Python", "JavaScript/TypeScript", "Swift", "SQL"],
  },
  {
    label: "ai & backend",
    skills: [
      "OpenAI/LLM APIs",
      "Model Context Protocol (MCP)",
      "Pandas/NumPy",
      "Spring Boot",
      "Node/Express",
      "AWS (Lambda, DynamoDB, S3, API Gateway)",
      "PostgreSQL",
    ],
  },
  {
    label: "frontend & tooling",
    skills: [
      "React",
      "Angular",
      "SwiftUI",
      "Next.js",
      "Tailwind",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Figma",
    ],
  },
];

export default function TechnicalSkills() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <Reveal className="mb-10 text-center">
          <p className="font-mono text-sm text-coral">// the toolkit</p>
          <h2 className="mt-2 font-display text-4xl tracking-tight text-ink">
            what i build with
          </h2>
        </Reveal>

        <div className="space-y-8">
          {groups.map((group, i) => (
            <Reveal key={group.label} delay={i * 90}>
              <p className="mb-3 font-mono text-xs text-muted">// {group.label}</p>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
