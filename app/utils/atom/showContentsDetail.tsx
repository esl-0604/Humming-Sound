import { atom } from "recoil";

export interface ShowContentsDetailType {
  stylistId: string;
  contentId: number;
}

export const ShowContentsDetail = atom<ShowContentsDetailType>({
  key: "ShowContentsDetail",
  default: {
    stylistId: "",
    contentId: 0,
  },
});
