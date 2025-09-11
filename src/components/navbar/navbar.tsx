import * as React from "react";
import { GenericItem } from "./GenericItem";
import { type Items } from "./typesObj.d";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@src/components/ui/navigation-menu";
const arrItems: Items[] = [
  {
    titleItem: "home",
    arrAnchor: [
      { path: "/", text: "home" },
      { path: "/#tecnologies", text: "tecnologies" },
    ],
  },
  {
    titleItem: "/about",
    arrAnchor: [
      { path: "/about", text: "about" },
      { path: "/#projects", text: "projects" },
    ],
  },
  {
    titleItem: "/contact",
    arrAnchor: [{ path: "/contact", text: "contact" }],
  },
];

export function MenuNavBar({ className }: { className: string }) {
  return (
    <NavigationMenu className={`${className}`} viewport={false}>
      <NavigationMenuList>
        {arrItems.map((el) => (
          <GenericItem
            arrAnchor={el.arrAnchor}
            titleItem={el.titleItem}
            key={crypto.randomUUID()}
          />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
