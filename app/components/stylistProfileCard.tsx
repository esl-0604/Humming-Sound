import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { stylistData, stylistType } from "@/app/utils/atom/stylistTestData";

interface StylistProfileCardProps {
  stylistKey: string;
  stylistName: string;
  stylistComment: string;
}
export default function StylistProfileCard({
  stylistKey,
  stylistName,
  stylistComment,
}: StylistProfileCardProps) {
  const router = useRouter();

  const [stylists, setStylists] = useRecoilState<stylistType>(stylistData);
  const stylist = stylists[stylistKey];

  const previewImages =
    stylist.personalImageList.length >= 3
      ? stylist.personalImageList.slice(0, 3)
      : stylist.personalImageList.length == 2
        ? [
            stylist.personalImageList[0],
            stylist.personalImageList[1],
            stylist.personalImageList[0],
          ]
        : [
            stylist.personalImageList[0],
            stylist.personalImageList[0],
            stylist.personalImageList[0],
          ];

  return (
    <div
      onClick={() => router.push(`/stylist?stylistKey=${stylistKey}`)}
      className="relative z-0 mb-[10px] flex h-fit w-full cursor-pointer flex-col bg-[#161616] px-[21.5px]"
    >
      <div className="relative flex h-full w-full flex-row justify-between gap-[2.5%]">
        {previewImages.map((current, index) => {
          return (
            <div
              key={index}
              className="relative flex h-[250px] w-full flex-col items-start overflow-hidden rounded-[5px]"
            >
              <img className="h-[250px] w-full object-cover" src={current} />
            </div>
          );
        })}
        {/* <div className="mr-[2.5%] flex h-full w-full items-center justify-center overflow-hidden rounded-[5px]">
          <img
            className="h-full w-full object-cover"
            src="/images/stylistImage.svg"
          />
        </div>
        <div className="mr-[2.5%] flex h-full w-full items-center justify-center overflow-hidden rounded-[5px]">
          <img
            className="h-full w-full object-cover"
            src="/images/stylistImage.svg"
          />
        </div>
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[5px]">
          <img
            className="h-full w-full object-cover"
            src="/images/stylistImage.svg"
          />
        </div> */}

        <div className="absolute bottom-[20px] left-[10px] z-30">
          <p className="text-start font-highlight text-[15px] text-white">
            {stylistName} <span className="font-default">스타일리스트</span>
          </p>
          <p className="text-start font-main text-[10px] text-white">
            {stylistComment}
          </p>
        </div>
        <div className="absolute bottom-[10px] right-[10px] z-30 flex h-[15px] w-[100px] flex-row items-center justify-between rounded-[15px]">
          <p className="right-[20px] z-20 flex h-[15px] w-[30px] items-center justify-center rounded-[50px] border-[0.462px] border-[#E8E8E8] font-main text-[5px] text-[#E8E8E8]">
            따듯한
          </p>
          <p className="right-[20px] z-20 flex h-[15px] w-[30px] items-center justify-center rounded-[50px] border-[0.462px] border-[#E8E8E8] font-main text-[5px] text-[#E8E8E8]">
            귀여운
          </p>
          <p className="right-[20px] z-20 flex h-[15px] w-[30px] items-center justify-center rounded-[50px] border-[0.462px] border-[#E8E8E8] font-main text-[5px] text-[#E8E8E8]">
            포근한
          </p>
        </div>
      </div>
      <div className="to-[#161616]-0% absolute left-[21.5px] right-[21.5px] top-0 z-20 h-full w-[full] bg-gradient-to-t from-[#161616]" />
    </div>
  );
}
