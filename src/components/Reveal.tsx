"use client";

import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
}

/** Fade-up wrapper that animates in when scrolled into view. */
export function Reveal({ children, className, as: Tag = "div", delay = 0 }: RevealProps) {
  const ref = useReveal<HTMLElement>();
  return (
    <Tag
      ref={ref}
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

/** Splits text into words that fade grey→ink when the block enters view. */
export function WordFade({ text, className }: { text: string; className?: string }) {
  const ref = useReveal<HTMLSpanElement>();
  const words = text.split(" ");
  return (
    <span ref={ref} className={cn("word-fade", className)}>
      {words.map((w, i) => (
        <span key={i} className="w" style={{ transitionDelay: `${i * 55}ms` }}>
          {w}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
