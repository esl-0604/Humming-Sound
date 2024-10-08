import { atom } from "recoil";

export const ScrolledButton = atom<boolean>({
  key: "ScrolledButton",
  default: false,
});

export const ScrolledStylistButton = atom<boolean>({
  key: "ScrolledStylistButton",
  default: false,
});
