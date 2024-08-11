import React, { useState, useRef, useEffect } from "react";

export default function AudioRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    // 오디오 권한 요청 및 getUserMedia 지원 여부 확인
    const checkAudioPermission = async () => {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setError("This browser does not support audio recording.");
        return;
      }

      try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
      } catch (err) {
        setError("Microphone permission denied.");
      }
    };

    checkAudioPermission();
  }, []);

  const handleRecordClick = async () => {
    if (isRecording) {
      // 녹음 중지
      if (
        mediaRecorderRef.current &&
        mediaRecorderRef.current.state !== "inactive"
      ) {
        mediaRecorderRef.current.stop();
      }
      setIsRecording(false);
    } else {
      // 녹음 시작
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setError("This browser does not support audio recording.");
        return;
      }

      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        mediaRecorder.ondataavailable = (event: BlobEvent) => {
          audioChunksRef.current.push(event.data);
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, {
            type: "audio/wav",
          });
          audioChunksRef.current = []; // Clear the chunks for the next recording

          // Blob을 URL로 변환하여 audio 태그에 사용
          const url = URL.createObjectURL(audioBlob);
          setAudioURL(url);
        };

        mediaRecorder.start();
        setIsRecording(true);
      } catch (err) {
        setError("Error accessing microphone.");
        console.error("Error accessing microphone", err);
      }
    }
  };

  const RemoveRecordFile = () => {
    setAudioURL(null);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <button
        onTouchStart={handleRecordClick}
        className={`flex h-[40px] w-[150px] items-center justify-center rounded-[15px] px-4 py-2 ${isRecording ? "bg-red-600" : "bg-[#505050]"} text-white`}
      >
        {isRecording ? "Stop" : "Record"}
      </button>

      {audioURL && (
        <div className="relative mt-4 flex items-center justify-center">
          <audio controls src={audioURL} />
          <div
            className="absolute right-[-30px] flex h-[20px] w-[20px] cursor-pointer"
            onTouchStart={RemoveRecordFile}
          >
            <img src="/images/off.svg" className="cursor-pointer " />
          </div>
        </div>
      )}
    </div>
  );
}

// return (
//   <div className="audio-recorder">
//     <button
//       onClick={handleRecordClick}
//       className={`rounded-md px-4 py-2 ${isRecording ? "bg-red-600" : "bg-green-600"} text-white`}
//       disabled={isRecording} // Disable the button during recording
//     >
//       <img className="cursor-pointer" src="/images/AudioUpload.svg" />
//     </button>
//   </div>
// );
