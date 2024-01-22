import { atom } from "recoil";

export interface PopUpType {
  pop: boolean;
  type: string;
}

export const popUp = atom<PopUpType>({
  key: "popUp",
  default: { pop: false, type: "필수" },
});
