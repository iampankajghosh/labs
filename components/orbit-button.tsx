"use client";

import { motion, type Variants, type Transition } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

const ORBIT_BUTTON_CONFIG = {
  BOX_SIZE: 40,
  ROTATION_DEGREES: 180,
  BOX_LEFT_OFFSET: 8,
  TEXT_OFFSET: 44,
  ANIMATION_DURATION: 0.2,
  BOX_Z_INDEX: 10,
  DOT_SIZE: 3,
  DOT_GAP: 0.125,
} as const;

const DOT_PATTERN = [
  [false, false, true, false, false],
  [false, false, false, true, false],
  [true, true, true, true, true],
  [false, false, false, true, false],
  [false, false, true, false, false],
] as const;

interface OrbitButtonProps {
  children: ReactNode;
  animationDuration?: number;
  rotationDegrees?: number;
  disableAnimations?: boolean;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

function Dot({ isActive }: { isActive: boolean }) {
  return (
    <span
      className={`rounded-full size-[3px] ${
        isActive ? 'bg-white' : 'bg-white/20'
      }`}
      aria-hidden="true"
    />
  );
}

function DotRow({ pattern }: { pattern: readonly boolean[] }) {
  return (
    <span className="grid grid-cols-5 gap-0.5">
      {pattern.map((isActive, index) => (
        <Dot key={index} isActive={isActive} />
      ))}
    </span>
  );
}

function OrbitingBox({
  parentWidth,
  animationVariants,
  transition
}: {
  parentWidth: number;
  animationVariants: Variants;
  transition: Transition;
}) {
  return (
    <motion.span
      className="bg-amber-300 size-10 rounded-[5px] inline-flex flex-col items-center justify-center gap-0.5 absolute left-0.5 z-10"
      layout
      variants={animationVariants}
      transition={transition}
      aria-hidden="true"
    >
      {DOT_PATTERN.map((rowPattern, index) => (
        <DotRow key={index} pattern={rowPattern} />
      ))}
    </motion.span>
  );
}

/**
 * OrbitButton - A beautifully animated button with an orbiting amber boxeffect
 */

function OrbitButton({
  children,
  animationDuration = ORBIT_BUTTON_CONFIG.ANIMATION_DURATION,
  rotationDegrees = ORBIT_BUTTON_CONFIG.ROTATION_DEGREES,
  disableAnimations = false,
  className,
  ...props
}: Readonly<OrbitButtonProps>) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [width, setWidth] = useState(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!buttonRef.current) return;

    const updateWidth = () => {
      try {
        setWidth(buttonRef.current?.offsetWidth ?? 0);
        setHasError(false);
      } catch (error) {
        setHasError(true);
      }
    };

    updateWidth();

    let resizeObserver: ResizeObserver | null = null;
    try {
      resizeObserver = new ResizeObserver(updateWidth);
      if (buttonRef.current) {
        resizeObserver.observe(buttonRef.current);
      }
    } catch (error) {}

    return () => {
      resizeObserver?.disconnect();
    };
  }, [children]);

  const boxVariants: Variants = {
    rest: {
      rotate: 0,
      x: 0
    },
    hover: {
      rotate: rotationDegrees,
      x: hasError ? 0 : Math.max(0, width - ORBIT_BUTTON_CONFIG.BOX_SIZE - ORBIT_BUTTON_CONFIG.BOX_LEFT_OFFSET)
    },
    focus: {
      rotate: rotationDegrees,
      x: hasError ? 0 : Math.max(0, width - ORBIT_BUTTON_CONFIG.BOX_SIZE - ORBIT_BUTTON_CONFIG.BOX_LEFT_OFFSET)
    },
    tap: {
      rotate: rotationDegrees,
      x: hasError ? 0 : Math.max(0, width - ORBIT_BUTTON_CONFIG.BOX_SIZE - ORBIT_BUTTON_CONFIG.BOX_LEFT_OFFSET)
    },
  };

  const textVariants: Variants = {
    rest: {
      x: 0,
      marginLeft: ORBIT_BUTTON_CONFIG.TEXT_OFFSET
    },
    hover: {
      x: -ORBIT_BUTTON_CONFIG.TEXT_OFFSET,
      marginLeft: ORBIT_BUTTON_CONFIG.TEXT_OFFSET
    },
    focus: {
      x: -ORBIT_BUTTON_CONFIG.TEXT_OFFSET,
      marginLeft: ORBIT_BUTTON_CONFIG.TEXT_OFFSET
    },
    tap: {
      x: -ORBIT_BUTTON_CONFIG.TEXT_OFFSET,
      marginLeft: ORBIT_BUTTON_CONFIG.TEXT_OFFSET
    },
  };

  const transition: Transition = {
    type: "tween",
    duration: animationDuration,
  };

  const baseClassName = "relative flex h-12 items-center justify-end cursor-pointer rounded-lg px-4 p-0.5 bg-zinc-900 border-2 border-zinc-700 transition-colors duration-200 ease-in-out hover:bg-zinc-950 focus:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-zinc-800";

  return (
    <motion.button
      ref={buttonRef}
      className={className ? `${baseClassName} ${className}` : baseClassName}
      initial={disableAnimations ? undefined : "rest"}
      whileHover={disableAnimations ? undefined : "hover"}
      whileFocus={disableAnimations ? undefined : "focus"}
      whileTap={disableAnimations ? undefined : "tap"}
      animate={disableAnimations ? undefined : "rest"}
      {...props}
    >
      {!disableAnimations && (
        <OrbitingBox
          parentWidth={width}
          animationVariants={boxVariants}
          transition={transition}
        />
      )}

      <motion.span
        variants={disableAnimations ? undefined : textVariants}
        transition={disableAnimations ? undefined : transition}
      >
        {children}
      </motion.span>
    </motion.button>
  );
}

export { OrbitButton };
export type { OrbitButtonProps };
