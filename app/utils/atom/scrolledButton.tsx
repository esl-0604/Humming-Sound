import { atom } from "recoil";

export const ScrolledButton = atom<boolean>({
  key: "ScrolledButton",
  default: false,
});
