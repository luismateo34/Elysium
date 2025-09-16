import React, { useEffect, useRef, useState } from "react";
import style from "./CardMain.module.css";
import {
  ObjMujer,
  ObjDBackend,
  ObjDormitorio,
  ObjTerminal,
  type ImageObj,
} from "./imageObjs";
import { cn } from "@src/functions/twclass";

//---------------------------------------------------
const arrObj = [ObjMujer, ObjDBackend, ObjDormitorio, ObjTerminal];
//----------------------------------------------------
const barclass = `${style.barclass}`;

//----------------------------------------------------
const fnConditional = (condition: boolean) => {
  return {
    "bg-black/15 border-b-2 border-b-black h-[50px] z-60 text-pink-600":
      condition,
    "bg-blue-950/80 text-yellow-300 h-12": !condition,
  };
};
//---------------------------------------------------
//---------------------------------------------------
export const CardMain = ({ className }: { className: string }) => {
  const [view, setView] = useState<boolean>(false);
  const width = useRef(globalThis.innerWidth);
  useEffect(() => {
    const screen = width.current;
    if (screen >= 768) {
      setView(true);
    }
  }, []);

  const [Img, setImg] = useState<ImageObj>(ObjMujer);
  //---------------------------
  return (
    <div className={className}>
      <ul className=" w-full  h-12 box-border flex flex-row justify-between gap-1.5">
        {arrObj.map((el, index) => {
          const objclass = fnConditional(el.id === Img.id);
          return (
            <li
              onClick={() => {
                setImg(el);
              }}
              key={el.id}
              className={cn(barclass, objclass, " rounded-t-sm")}
            >
              {view ? el.title : index}
            </li>
          );
        })}
      </ul>
      <div className={`bg-black/15  ${style.viewcontainer}`}>
        <div className={style.imgContainer} id="container-img">
          <img
            src={Img.src}
            alt={Img.description}
            className="object-contain h-full w-full"
          />
        </div>
        <div className={style.textContainer}>
          <article className={style.glass}>
            <h3 className="underline decoration-indigo-600 text-base md:text-lg text-pink-500">
              {Img.title}
            </h3>
            <p className="text-base md:text-lg text-amber-300">{Img.text}</p>
          </article>
        </div>
      </div>
    </div>
  );
};
