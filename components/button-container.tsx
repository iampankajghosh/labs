"use client";

import { twMerge } from "tailwind-merge";

function Plus({ className }: { className?: string }) {
  return (
    <div
      className={twMerge(
        "absolute flex items-center justify-center w-8 h-8",
        className,
      )}
    >
      <div className="relative w-7 h-7">
        <span className="absolute inset-x-0 top-1/2 h-px bg-white -translate-y-1/2" />
        <span className="absolute inset-y-0 left-1/2 w-px bg-white -translate-x-1/2" />
      </div>
    </div>
  );
}

function ButtonContainer({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative w-full max-w-[1200px] h-[630px] border border-white/8 flex items-center justify-center">
      <Plus className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
      <Plus className="top-0 right-0 translate-x-1/2 -translate-y-1/2" />
      <Plus className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
      <Plus className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />

      {children}
    </div>
  );
}

export { ButtonContainer };
