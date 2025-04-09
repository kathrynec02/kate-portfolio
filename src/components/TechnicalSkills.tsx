import { Badge } from "@/components/ui/Badge";

export default function TechnicalSkills() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Technical Skills</h2>

      <div className="flex flex-wrap justify-center gap-4 text-sm">
        <Badge>React</Badge>
        <Badge>Next.js</Badge>
        <Badge>TypeScript</Badge>
        <Badge>JavaScript</Badge>
        <Badge>Python</Badge>
        <Badge>Flask</Badge>
        <Badge>Django</Badge>
        <Badge>HTML/CSS</Badge>
        <Badge>Tailwind CSS</Badge>
        <Badge>Bootstrap</Badge>
        <Badge>Redux</Badge>
        <Badge>PostgreSQL</Badge>
        <Badge>MongoDB</Badge>
        <Badge>AWS (Lambda, DynamoDB)</Badge>
        <Badge>Git & GitHub</Badge>
        <Badge>Figma</Badge>
        <Badge>OpenAI API</Badge>
        <Badge>NVDA/Cypress Testing</Badge>
      </div>
    </section>
  );
}
