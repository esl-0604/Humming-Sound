import { atom } from "recoil";

export const stylistViewType = atom<string>({
  key: "stylistViewType",
  default: "소개",
});
