import React from "react";
import { FaReact } from "react-icons/fa";

export const LogoIcon = () => {
  return (
    <div className="z-20 absolute  top-0 left-0 hidden md:flex flex-row justify-between gap-2 p-2 h-11 w-auto bg-gradient-to-tr from-[#22c55e] via-[#0e7490] to-[#3b82f6] rounded-br-3xl ">
      <FaReact className="h-8 w-8" />
      <span className="flex flex-row text-amber-500">
        FullStack Developer Service
      </span>
    </div>
  );
};
