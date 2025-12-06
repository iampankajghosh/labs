"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface BoxProps {
  parrentWidth: number;
}

interface ButtonProps {
  children: React.ReactNode;
  as?: "button" | "a";
  href?: string;
  target?: string;
}

function Box({ parrentWidth }: Readonly<BoxProps>) {
  return (
    <motion.span
      className="bg-amber-300 size-9 rounded-lg inline-flex flex-col items-center justify-center gap-0.5 absolute left-0.5 z-10"
      layout
      variants={{
        rest: { rotate: 0, x: 0 },
        hover: { rotate: 360, x: parrentWidth - 44.5 },
      }}
      transition={{
        type: "tween",
        duration: 0.2,
      }}
    >
      <span className="grid grid-cols-5 gap-0.5">
        <span className="rounded-full size-0.5 bg-white/30"></span>
        <span className="rounded-full size-0.5 bg-white/30"></span>
        <span className="rounded-full size-0.5 bg-white"></span>
        <span className="rounded-full size-0.5 bg-white/30"></span>
        <span className="rounded-full size-0.5 bg-white/30"></span>
      </span>

      <span className="grid grid-cols-5 gap-0.5">
        <span className="rounded-full size-0.5 bg-white/30"></span>
        <span className="rounded-full size-0.5 bg-white/30"></span>
        <span className="rounded-full size-0.5 bg-white/30"></span>
        <span className="rounded-full size-0.5 bg-white"></span>
        <span className="rounded-full size-0.5 bg-white/30"></span>
      </span>

      <span className="grid grid-cols-5 gap-0.5">
        <span className="rounded-full size-0.5 bg-white"></span>
        <span className="rounded-full size-0.5 bg-white"></span>
        <span className="rounded-full size-0.5 bg-white"></span>
        <span className="rounded-full size-0.5 bg-white"></span>
        <span className="rounded-full size-0.5 bg-white"></span>
      </span>

      <span className="grid grid-cols-5 gap-0.5">
        <span className="rounded-full size-0.5 bg-white/30"></span>
        <span className="rounded-full size-0.5 bg-white/30"></span>
        <span className="rounded-full size-0.5 bg-white/30"></span>
        <span className="rounded-full size-0.5 bg-white"></span>
        <span className="rounded-full size-0.5 bg-white/30"></span>
      </span>

      <span className="grid grid-cols-5 gap-0.5">
        <span className="rounded-full size-0.5 bg-white/30"></span>
        <span className="rounded-full size-0.5 bg-white/30"></span>
        <span className="rounded-full size-0.5 bg-white"></span>
        <span className="rounded-full size-0.5 bg-white/30"></span>
        <span className="rounded-full size-0.5 bg-white/30"></span>
      </span>
    </motion.span>
  );
}

function Button({
  children,
  as = "button",
  href,
  ...props
}: Readonly<ButtonProps>) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const anchorRef = useRef<HTMLAnchorElement | null>(null);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = as === "a" ? anchorRef.current : buttonRef.current;
    if (el) {
      setWidth(el.offsetWidth);
    }
  }, [children, as]);

  if (as === "a") {
    return (
      <motion.a
        href={href || "#"}
        ref={anchorRef}
        className="border-2 border-zinc-600 bg-zinc-800 hover:bg-zinc-900 font-medium p-0.5 rounded-xl cursor-pointer h-11 relative flex items-center justify-end px-4 shadow-sm shadow-zinc-800/50 transition-colors duration-200 ease-in-out"
        initial="rest"
        whileHover="hover"
        animate="rest"
        {...props}
      >
        <Box parrentWidth={width} />
        <motion.span
          variants={{
            rest: { x: 0, marginLeft: 32 },
            hover: { x: -32, marginLeft: 32 },
          }}
        >
          {children}
        </motion.span>
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={buttonRef}
      className="border-2 border-zinc-600 bg-zinc-800 hover:bg-zinc-900 font-medium p-0.5 rounded-xl cursor-pointer h-11 relative flex items-center justify-end px-4 shadow-sm shadow-zinc-800/50 transition-colors duration-200 ease-in-out"
      initial="rest"
      whileHover="hover"
      animate="rest"
      {...props}
    >
      <Box parrentWidth={width} />
      <motion.span
        variants={{
          rest: { x: 0, marginLeft: 32 },
          hover: { x: -32, marginLeft: 32 },
        }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
}

export { Button };
export type { ButtonProps, BoxProps };
