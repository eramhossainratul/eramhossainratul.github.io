"use client";
import { useEffect } from "react";
import {
  motion,
  stagger,
  useAnimate,
  useInView,
  useReducedMotion,
} from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Aceternity "text generate effect" adapted for this site: words fade in when
 * the block scrolls into view (not on mount), text styling is fully
 * controlled by the caller via className, and prefers-reduced-motion shows
 * the text immediately.
 */
export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  staggerDelay = 0.12,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  staggerDelay?: number;
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (!isInView) return;
    if (reduce) {
      animate("span", { opacity: 1, filter: "none" }, { duration: 0 });
      return;
    }
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ?? 1,
        delay: stagger(staggerDelay),
      }
    );
  }, [isInView, animate, filter, duration, staggerDelay, reduce]);

  return (
    <motion.div ref={scope} className={cn(className)}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className={cn(reduce && "opacity-100")}
          style={{
            opacity: reduce ? 1 : 0,
            filter: reduce ? "none" : filter ? "blur(10px)" : "none",
          }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );
};
