import { atom } from "recoil";

export const ContentId = atom<number>({
  key: "ContentId",
  default: 0,
});
