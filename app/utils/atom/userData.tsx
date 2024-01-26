import { atom } from "recoil";

export interface userDataType {
  user_id: string;
  email: string;
  kakao_id: number;
  nickname: string;
  is_reserved: boolean;
}

export const userData = atom<userDataType | null>({
  key: "userData",
  default: null,
});

export const stylistIdData = atom<string>({
  key: "stylistIdData",
  default: "",
});
