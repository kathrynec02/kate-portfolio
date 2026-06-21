import { useEffect, useRef, useState, ReactNode, ElementType } from "react";

type RevealProps = {
  children: ReactNode;
  /** stagger delay in ms */
  delay?: number;
  className?: string;
  as?: ElementType;
  /** render once visible and never hide again */
  once?: boolean;
};

/**
 * IntersectionObserver-driven scroll reveal.
 * opacity 0→1, translateY 20px→0, 600ms cubic-bezier(0.25,0.1,0.25,1).
 * Stagger by passing an incrementing `delay`.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
