import React from "react";
import LogoLoop from "./LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiNestjs,
  SiExpo,
  SiJest,
  SiVitess,
  SiFastapi,
  SiMongodb,
  SiDocker,
  SiAstro,
  SiPostgresql,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <FaNodeJs />, title: "nodejs", href: "https://nodejs.org/en" },
  { node: <FaGolang />, title: "golang", href: "https://go.dev/" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org/" },
  { node: <SiJest />, title: "Jest", href: "https://jestjs.io/" },
  { node: <SiVitess />, title: "Vitest", href: "https://vitest.dev/" },
  {
    node: <SiFastapi />,
    title: "Fastapi",
    href: "https://fastapi.tiangolo.com/",
  },
  { node: <SiAstro />, title: "Astro", href: "https://astro.build/" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com/" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com/" },
  {
    node: <SiPostgresql />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org/docs/",
  },
  {
    node: <SiExpo />,
    title: "expo react native",
    href: "https://docs.expo.dev/",
  },
  { node: <SiNestjs />, title: "Nest.js", href: "https://nestjs.com/" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

export const Footerloop = () => {
  return (
    <div className="h-full w-full relative overflow-hidden">
      <LogoLoop
        logos={techLogos}
        speed={75}
        direction="left"
        logoHeight={35}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
};
