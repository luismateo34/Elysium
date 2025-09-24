import React from "react";
import FlowingMenu from "@src/components/FlowingMenu";
import mail from "@src/assets/mail.png";
import Ig from "@src/assets/instagram.jpg";
import github from "@src/assets/codigo.jpg";
import linkedin from "@src/assets/linkedin.jpg";

const githubUrl = import.meta.env.PUBLIC_GITHUB_URL;
const email = import.meta.env.PUBLIC_EMAIL;
const demoItems = [
  {
    link: "https://www.linkedin.com/in/luis-mateo-piñeiro-34arg/",
    text: "Linkedin",
    image: linkedin.src,
  },
  {
    link: "https://www.instagram.com/elysiums_tech/",
    text: "instagram",
    image: Ig.src,
  },
  {
    link: githubUrl,
    text: "github",
    image: github.src,
  },
  {
    link: "#",
    text: email,
    image: mail.src,
  },
];

export const MenuContact = () => {
  return (
    <div className="h-10/12 md:h-[600px] relative">
      <FlowingMenu items={demoItems} />
    </div>
  );
};
