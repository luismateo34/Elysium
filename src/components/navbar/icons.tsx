import React from "react";
import { SiReact } from "react-icons/si";
import { cn } from "@src/functions/twclass";

//----------------------
const style =
  "absolute px-2 top-0 left-0  hidden md:flex flex-row justify-between items-center h-9 w-56 gap-2 bg-gradient-to-r from-[#2dd4bf]  to-[#1f2937] ";

export const Icons = () => {
  return (
    <div className={cn(style)}>
      <SiReact className="h-8 w-8" />
      <span className=" inline-flex"> fullstack developer</span>
    </div>
  );
};
