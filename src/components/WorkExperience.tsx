import Reveal from "@/components/Reveal";

type Role = {
  title: string;
  meta: string;
  points: string[];
};

const roles: Role[] = [
  {
    title: "Application Developer III, iOS @ Vanguard",
    meta: "Aug 2024 – Present · Charlotte, NC",
    points: [
      "Redesigned a Daily Portfolio Management (DPM) tool for 30+ stakeholders handling 800K+ transactions.",
      "Led accessibility testing via Cypress and NVDA, raising compliance from ~60% to 100%.",
      "Built an AWS Lambda + DynamoDB dashboard to auto-log errors and reduce Jira ticket resolution time by 35%.",
    ],
  },
  {
    title: "Associate Software Engineer @ EduAvenues",
    meta: "Dec 2022 – Present · Fairfax, VA",
    points: [
      "Built an OpenAI-integrated Flask platform to review 26K+ essays, cutting manual review by 65%.",
      "Developed a Python data pipeline for 1K+ student reports using Google APIs; 88% time saved.",
      "Engineered a proctoring dashboard for 200+ users; reduced instructor load by 50%.",
    ],
  },
  {
    title: "Software Engineer Intern @ Workiva (NYSE: WK)",
    meta: "May 2023 – May 2024 · Remote",
    points: [
      "Migrated legacy UI to MUI with Dart, React, Redux; improved load speeds and performance.",
      "Added search + filtering for dependency tracking; 25% faster engineer productivity.",
      "Refactored a SaaS platform into micro-frontends to reduce merge conflicts by ~40%.",
    ],
  },
  {
    title: "Software Engineer Intern @ ST Engineering iDirect",
    meta: "May 2022 – Aug 2022 · Herndon, VA",
    points: [
      "Automated QoS profile setup using Python + Jenkins; cut manual steps by 75%.",
      "Wrote Python scripts to back up 10+ network nodes; reduced risk and manual recovery effort by 85%.",
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
          <p className="font-mono text-sm text-coral">// 02 — experience</p>
          <h2 className="mt-2 font-display text-4xl tracking-tight text-ink sm:text-5xl">
            where i&apos;ve worked
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
