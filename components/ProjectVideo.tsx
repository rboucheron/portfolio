"use client";
import VideoNav from "./nav/VideoNav";
import { useVideo } from "@/lib/store";
import { useEffect, useRef } from "react";

export const ProjectVideo = ({
  src,
  title,
  banner,
  width,
  height,
  isPlay,
}: {
  src: string;
  title: string;
  banner: string;
  width: number;
  height: number;
  isPlay: boolean;
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { updateVideo } = useVideo();

  useEffect(() => {
    if (videoRef.current) {
      updateVideo({
        isPlay: false,
        duration: videoRef.current.duration,
        title: title,
        banner: banner,
        elapsedTime: 0,
      });
    }
  }, []);

  return (
    <>
      {isPlay && (
        <div className="fixed w-full h-screen bg-black  top-0 left-0 z-50">
          <div className="w-screen ">
            <video
            className="w-screen h-screen"
              width={`${width}`}
              height={`${height}`}
              src={process.env.NEXT_PUBLIC_API_URL + 'img/' + src}
              ref={videoRef}
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <VideoNav />
        </div>
      )}
    </>
  );
};
