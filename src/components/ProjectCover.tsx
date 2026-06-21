type ProjectCoverProps = {
  title: string;
  tag: string;
  /** color scheme for the generated cover */
  variant?: "coral" | "gold" | "mix";
};

const gradients: Record<NonNullable<ProjectCoverProps["variant"]>, string> = {
  coral:
    "from-[#1f5d4c] via-[#2c7d5f] to-[#b98a3e] dark:from-[#13352a] dark:via-[#1f5d4c] dark:to-[#6e5326]",
  gold: "from-[#b98a3e] via-[#9c8c4a] to-[#1f5d4c] dark:from-[#6e5326] dark:via-[#4a5a32] dark:to-[#13352a]",
  mix: "from-[#1f5d4c] via-[#3a7d57] to-[#b98a3e] dark:from-[#13352a] dark:via-[#2a5a40] dark:to-[#6e5326]",
};

/**
 * Branded gradient cover for projects without a real screenshot.
 * Shares the 3:2 aspect ratio with image covers so the carousel stays uniform.
 */
export default function ProjectCover({
  title,
  tag,
  variant = "coral",
}: ProjectCoverProps) {
  return (
    <div
      className={`relative flex h-full w-full flex-col justify-between overflow-hidden bg-gradient-to-br p-6 ${gradients[variant]}`}
    >
      {/* texture: faint diagonal hairlines + halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fffdf8 0 1px, transparent 1px 14px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/30 to-transparent"
      />
      <span className="relative font-mono text-[0.7rem] tracking-[0.18em] uppercase text-[#fffdf8]/90">
        {tag}
      </span>
      <p className="relative font-display text-3xl leading-tight text-[#fffdf8] drop-shadow-sm">
        {title}
      </p>
    </div>
  );
}
