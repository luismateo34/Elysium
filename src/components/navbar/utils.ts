import { animate, utils } from "animejs";

export const SetCss = (cssSelector: string) => {
  utils.set(cssSelector, {
    "--y": "-16.5rem",
    translateY: "var(--y)",
  });
};
export const ClicKaction = (cssSelector: string) => {
  animate(cssSelector, {
    "--y": "0rem",
  });
};
export const MouseLeave = (
  cssSelector: string,
  element: HTMLDetailsElement,
) => {
  element.open = false;
  animate(cssSelector, {
    "--y": "-16.5rem",
  });
};
