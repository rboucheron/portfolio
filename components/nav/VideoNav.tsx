"use client";

import { BiSkipNext } from "react-icons/bi";
import { MdSkipPrevious } from "react-icons/md";
import { useVideo } from "@/lib/store";
import { VideoProgress } from "../button/VideoProgress";
import PlayButton from "../button/PlayButton";
import Image from "next/image";

const VideoNav = () => {
  const { title, banner } = useVideo();

  return (
    <div className="w-full z-50 absolute bottom-0 bg-black left-0 right-0  pt-4 pb-4 grid grid-cols-3">
      <div>
        <div className="flex space-x-4 ml-4">
          <div className=" w-16 rounded-xl">
            <Image src={ '/img/' + banner} alt={title} width={100} height={100} />
          </div>
          <div className="flex flex-col ">
            <h1 className="text-sm text-white font-semibold">{title}</h1>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="flex items-center justify-center mb-2 space-x-4">
          <MdSkipPrevious className="text-white text-3xl" />
          <PlayButton />
          <BiSkipNext className="text-white text-4xl" />
        </div>
        < VideoProgress />
      </div>
    </div>
  );
};
export default VideoNav;
