import * as React from "react";
import { ListItem } from "./listItem";
import { type Items } from "./typesObj.d";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@src/components/ui/navigation-menu";

export const GenericItem = ({
  titleItem,
  arrAnchor,
  key,
}: Items & { key: string }) => {
  return (
    <NavigationMenuItem key={key}>
      <NavigationMenuTrigger className="bg-blue-950/85 text-amber-300">
        {titleItem}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="bg-slate-700/70">
        <ul className="grid w-14 md:w-52 gap-2 grid-cols-1 z-40 ">
          {arrAnchor.map((el) => (
            <ListItem key={crypto.randomUUID()} path={el.path} text={el.text} />
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
