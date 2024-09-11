"use client";
import VideoNav from "./nav/VideoNav";
import { useVideo } from "@/lib/store";

export const ProjectVideo = ({
  src,
  title,
  banner,
  width,
  height,
  type,
}: {
  src: string;
  title: string;
  banner: string;
  width: number;
  height: number;
  type: string;
}) => {
  return (
    <div className="fixed w-full h-screen bg-black dark:bg-white dark:bg-opacity-60 bg-opacity-60 top-0 left-0 z-50">
      <div className="w-3/4 m-auto">
        <video width={`${width}`} height={`${height}`}>
          <source src={process.env.NEXT_PUBLIC_API_URL + src} type={type} />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
