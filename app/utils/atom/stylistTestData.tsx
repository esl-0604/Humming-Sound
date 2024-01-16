import { stylistDB } from "@/app/stylistDB/stylistData";
import { atom } from "recoil";

export interface stylistType {
  [stylistId: string]: {
    thumbnail: string;
    profile: string;
    name: string;
    comment: string;
    avgGrade: string;
    consultingAmount: string;
    aboutMe: string[];
    forWho: string[];
    phillosophy: string[];
    personalImageList: string[];
    reviewList: reviewType[];
    contentsList: contentsType[];
  };
}
export interface reviewType {
  reviewer: string;
  date: string;
  grade: string;
  comment: string;
  imageList: string[];
}

export interface contentsType {
  id: number;
  title: string;
  text: string;
  type: string;
  image: string;
  link: string;
}

export const stylistData = atom<stylistType>({
  key: "stylistData",
  default: stylistDB,
});
