export interface Anchor {
  path: string;
  text: string;
  key: string;
}
type AnchorWithoutKey = Omit<Anchor, "key">;

export interface Items {
  titleItem: string;
  arrAnchor: AnchorWithoutKey[];
}
