import React, { useRef, useState } from "react";

// Props 타입 정의
interface AudioPlayerProps {
  src: string;
  title?: string;
  artist?: string;
}

export default function CustomAudioPlayer({
  src,
  title = "Untitled",
  artist = "Unknown Artist",
}: any) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(50);
  const [duration, setDuration] = useState(100);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleProgressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (audio) {
      const newTime = Number(event.target.value);
      audio.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <div className="sticky bottom-[100px] flex h-[100px] w-full items-center rounded-[15px] bg-[#2D2D2D] px-[10px] py-[15px]">
      <div className="mr-[15px] flex h-full w-[70px] rounded-[7px] bg-white" />

      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="flex h-full w-full flex-col items-start justify-start">
            <div className="mb-[5px] flex items-center text-[15px] font-bold text-white">
              Untitled
            </div>

            <div className="flex items-center whitespace-pre-wrap pr-[50px] text-[10px] font-normal text-white">
              Cinematic042
            </div>
          </div>

          <div className="flex h-full flex-row items-center gap-[8px]">
            <div
              className="flex h-[30px] w-[30px] items-center justify-center"
              onClick={togglePlayPause}
            >
              <img className="cursor-pointer" src="/images/Backward.svg" />
            </div>
            <div
              className="flex h-[30px] w-[30px] items-center justify-center"
              onClick={togglePlayPause}
            >
              <img className="cursor-pointer" src="/images/Pause.svg" />
            </div>
            <div
              className="flex h-[30px] w-[30px] items-center justify-center"
              onClick={togglePlayPause}
            >
              <img className="cursor-pointer" src="/images/Forward.svg" />
            </div>
          </div>
        </div>

        <div className="mt-[10px] flex items-center">
          <span className="text-[10px] text-gray-400">
            {formatTime(currentTime)}
          </span>
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleProgressChange}
            className="mx-[5px] flex h-[5px] w-full"
          />
          <span className="text-[10px] text-gray-400">
            {formatTime(duration)}
          </span>
        </div>
      </div>

      {/* 오디오 엘리먼트 */}
      <audio ref={audioRef} className="hidden">
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className="absolute right-[10px] top-[10px]"></div>
    </div>
  );
}
