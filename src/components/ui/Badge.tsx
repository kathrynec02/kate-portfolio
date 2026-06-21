import { motion } from "framer-motion";

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      whileHover={{ y: -2 }}
      className="inline-block rounded-full border border-hairline bg-surface px-3 py-1.5 font-mono text-xs text-ink transition-colors duration-300 hover:border-coral hover:text-coral"
    >
      {children}
    </motion.span>
  );
}
