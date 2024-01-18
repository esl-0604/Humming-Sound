import {
  contentsType,
  stylistData,
  stylistType,
} from "@/app/utils/atom/stylistTestData";
import ContentsCard from "./ContentsCard";
import { useRecoilState } from "recoil";

export default function ContentsBox() {
  const [stylists, setStylists] = useRecoilState<stylistType>(stylistData);
  return (
    <div className="flex w-full flex-col items-center overflow-scroll px-[30px] pb-[60px]">
      {stylists["testStylist"]?.contentsList.map(
        (content: contentsType, idx: number) => {
          return (
            <ContentsCard
              key={idx}
              id={content.id}
              title={content.title}
              text={content.text}
              type={content.type}
              image={content.image}
              link={content.link}
            />
          );
        },
      )}
    </div>
  );
}
