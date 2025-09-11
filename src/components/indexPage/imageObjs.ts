import dormitoro from "@src/assets/ilustracion-arte-conceptual-dormitorio-futurista-cyberpunk.jpg";
import terminal from "@src/assets/hacker-cyberpunk.jpg";
import backend from "@src/assets/technology-7978107_1280-876233898.jpg";
import mujer from "@src/assets/mujer-joven-que-usa-casco-realidad-virtual.jpg";

export interface ImageObj {
  src: string;
  description?: string;
  title: string;
  text: string;
  id: `${string}-${string}-${string}-${string}-${string}`;
}
//-----------------------------------------
export const ObjDormitorio: ImageObj = {
  src: dormitoro.src,
  title: "comodidad",
  text: "example",
  id: crypto.randomUUID(),
  description: "imagen de dormitorio",
};
//-----------------------------------
export const ObjTerminal: ImageObj = {
  src: terminal.src,
  title: "seguridad",
  text: "example",
  id: crypto.randomUUID(),
  description: "imagen de terminal",
};
//--------------------------------------
export const ObjDBackend: ImageObj = {
  src: backend.src,
  title: "banguardia tecnologica",
  text: "example",
  id: crypto.randomUUID(),
  description: "imagen de backend",
};
//---------------------------------------------
export const ObjMujer: ImageObj = {
  src: mujer.src,
  title: "experiencia de usuario",
  text: "example",
  id: crypto.randomUUID(),
  description:"imagen de mujer",
};
