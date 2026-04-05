"use client";
import { cn } from "@/lib/utils";
import { motion, useInView, Variant, MotionProps } from "framer-motion";
import React, { ElementType, RefObject, useRef } from "react";

type AnimationVariants = {
  hidden: Variant;
  visible: (i: number) => Variant;
};

const defaultVariants: AnimationVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(8px)",
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.12,
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

type TimelineContentProps<T extends ElementType = "div"> = {
  as?: T;
  animationNum?: number;
  timelineRef?: RefObject<HTMLElement | null>;
  customVariants?: AnimationVariants;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children"> &
  Omit<MotionProps, "children">;

export function TimelineContent<T extends ElementType = "div">({
  as,
  animationNum = 0,
  timelineRef,
  customVariants,
  className,
  children,
  ...props
}: TimelineContentProps<T>) {
  const localRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(
    (timelineRef ?? localRef) as RefObject<Element>,
    { once: true, amount: 0.05 }
  );

  const variants = customVariants ?? defaultVariants;

  // Use motion.create for dynamic element types — works for any HTML tag
  const MotionEl = React.useMemo(
    () => motion.create((as ?? "div") as ElementType),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [as]
  );

  return (
    <MotionEl
      ref={!timelineRef ? localRef : undefined}
      className={cn(className)}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={animationNum}
      {...props}
    >
      {children}
    </MotionEl>
  );
}
