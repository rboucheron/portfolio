import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { useVideo } from "@/lib/store";

const PlayButton = () => {
  const { isPlay, setPlay } = useVideo();

  const handleToggleVideo = () => {
    setPlay(!isPlay);
  };

  return (
    <button
      className=" w-8 h-8  bg-slate-50 rounded-full flex items-center justify-center z-40 transition-opacity duration-300"
      onClick={handleToggleVideo}
    >
      {isPlay ? <FaPause /> : <FaPlay />}
    </button>
  );
};

export default PlayButton;
