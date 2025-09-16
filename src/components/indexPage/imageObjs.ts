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
  text: "testing, documentación para facilitar el desarrollo y mantenimiento de proyectos a lo largo del ciclo de vida del producto",
  id: crypto.randomUUID(),
  description: "imagen de dormitorio",
};
//-----------------------------------
export const ObjTerminal: ImageObj = {
  src: terminal.src,
  title: "seguridad",
  text: "buenas practicas y estandares para evitar  hackeos y filtraciones de informacion",
  id: crypto.randomUUID(),
  description: "imagen de terminal",
};
//--------------------------------------
export const ObjDBackend: ImageObj = {
  src: backend.src,
  title: "banguardia tecnologica",
  text: "tecnologia de punta para desarrollar soluciones optimas",
  id: crypto.randomUUID(),
  description: "imagen de backend",
};
//---------------------------------------------
export const ObjMujer: ImageObj = {
  src: mujer.src,
  title: "experiencia de usuario",
  text: "tecnologias frontend que facilitan crear interfaces de usuario intuitivas y atractivas",
  id: crypto.randomUUID(),
  description: "imagen de mujer",
};
