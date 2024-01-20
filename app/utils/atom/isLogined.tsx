import { atom } from "recoil";

export const IsLogined = atom<boolean>({
  key: "IsLogined",
  default: false,
});
