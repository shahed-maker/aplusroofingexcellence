import type { CSSProperties, ElementType, ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "scale";
  as?: ElementType;
  style?: CSSProperties;
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  as,
  style,
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      style={{ ["--reveal-delay" as string]: `${delay}ms`, ...style }}
      className={cn(variant === "scale" ? "reveal-scale" : "reveal", visible && "is-visible", className)}
    >
      {children}
    </Tag>
  );
}
