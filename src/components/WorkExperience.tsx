import Reveal from "@/components/Reveal";

type Role = {
  title: string;
  meta: string;
  points: string[];
};

const roles: Role[] = [
  {
    title: "Vanguard — Technology Leadership Program",
    meta: "Aug 2024 – Present · Charlotte, NC",
    points: [
      "Software Engineer III, iOS Development — begins Aug 2026.",
      "Specialist, Technology Leadership Program — Sep 2025 – Aug 2026.",
      "Senior Associate, Technology Leadership Program — Aug 2024 – Sep 2025.",
      "Built an internal MCP server that turns a pasted Figma URL into design-system-compliant UI code, collapsing the design-to-dev handoff — slated for org-wide rollout.",
      "Extended it to audit existing UIs and flag non-compliant or AI-hallucinated components.",
      "Shipped an iOS Transact flow in SwiftUI with analytics and accessibility baked in.",
      "Re-architected a Daily Portfolio Management portal (Angular + AWS Lambda/DynamoDB) serving 800K+ accounts a day — 15% faster.",
      "Instrumented a real-time error dashboard (Lambda → Jira) that cut incident triage 35%.",
    ],
  },
  {
    title: "EduAvenues — Software Engineer, Associate → Senior",
    meta: "Dec 2022 – Present · Fairfax, VA",
    points: [
      "Built GPTComment (Python/Flask/GPT-4) giving line-level feedback on 26K+ essays — cut manual review 65%.",
      "Shipped an exam-report pipeline (NumPy/Pandas → Google API) for 1K+ students in under 3 min — a 88% drop.",
    ],
  },
  {
    title: "Workiva (NYSE: WK) — Software Engineer Intern",
    meta: "May 2023 – May 2024 · Ames, IA",
    points: [
      "Migrated 20+ UI modules from legacy Webskin to Material-UI (React/Dart) — 30% faster load.",
      "Split a monolith into micro-frontends — 40% fewer merge conflicts.",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section className="relative px-6 py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-16 h-56 w-56 rounded-full bg-coral/12 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl">
        <Reveal className="mb-12 text-center">
          <p className="font-mono text-sm text-coral">// the work</p>
          <h2 className="mt-2 font-display text-4xl tracking-tight text-ink sm:text-5xl">
            where i&apos;ve shipped
          </h2>
        </Reveal>

        <div className="relative space-y-10 border-l border-hairline pl-8">
          {roles.map((role, i) => (
            <Reveal key={role.title} delay={i * 90}>
              <div className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[2.6rem] top-1.5 h-3 w-3 rounded-full border-2 border-canvas bg-coral"
                />
                <h3 className="font-display text-2xl leading-tight text-ink">
                  {role.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-muted">{role.meta}</p>
                <ul className="mt-3 space-y-2">
                  {role.points.map((pt) => (
                    <li key={pt} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
