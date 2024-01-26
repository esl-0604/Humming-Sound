import { atom } from "recoil";

export interface userDataType {
  user_id: string;
  email: string;
  kakao_id: number;
  nickName: string;
  is_reserved: boolean;
}

export const userData = atom<userDataType | null>({
  key: "UserData",
  default: null,
});
