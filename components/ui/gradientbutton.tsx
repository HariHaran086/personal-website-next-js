"use client";
import React from "react";

export const GradientButton = ({
  text,
  onclickHandler,
  icon,
  position
}: {
  text: string;
  onclickHandler?: () => void;
  icon?: React.ReactNode;
  position?: "left" | "right";
}) => {
  return (<>
  <button className="group relative inline-flex h-12 overflow-hidden rounded-lg p-[1px]" onClick={onclickHandler}>
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] group-hover:animate-[spin_0.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-8 text-sm font-medium text-white backdrop-blur-3xl">
    {position === "left" && icon}
    {text}
    {position === "right" && icon}
  </span>
</button>
</>);
};
