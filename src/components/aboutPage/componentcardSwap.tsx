import React, { type JSX } from "react";
import CardSwap, { Card } from "../CardSwap";
import { SiReact, SiPython } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import style from "./glass.module.css";

export const ComponentCardSwap = ({
  className,
}: {
  className: string;
}): JSX.Element => {
  return (
    <div
      className={`${className}${style.glass}`}
      style={{ height: "600px", position: "relative" }}
    >
      <CardSwap
        cardDistance={60}
        verticalDistance={70}
        delay={5000}
        pauseOnHover={false}
      >
        <Card>
          <h3>React</h3>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <SiReact className="w-10/12 h-10/12" />
          </div>
        </Card>
        <Card>
          <h3>Python</h3>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <SiPython className="w-10/12 h-10/12" />
          </div>
        </Card>
        <Card>
          <h3>Nodejs</h3>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <FaNodeJs className="w-10/12 h-10/12" />
          </div>
        </Card>
      </CardSwap>
    </div>
  );
};
