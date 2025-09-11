import React from "react";
import { NavigationMenuLink } from "@src/components/ui/navigation-menu";
import { type Anchor } from "./typesObj.d";
//-----------------------------------

export const ListItem = ({
  path,
  text,
  key,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & Anchor) => {
  return (
    <li key={key} {...props}>
      <NavigationMenuLink asChild>
        <a href={path}>{text}</a>
      </NavigationMenuLink>
    </li>
  );
};
