export default function Footer() {
  return (
    <footer className="border-t border-hairline px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-coral" />
          <span className="font-display text-lg text-ink">kate chadwick</span>
        </div>
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} · designed &amp; built with care
        </p>
        <div className="flex gap-4 font-mono text-xs">
          <a
            href="https://github.com/kathrynec02"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors duration-300 hover:text-coral"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/kathrynec/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors duration-300 hover:text-coral"
          >
            linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}
