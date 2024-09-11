"use client"
import { useVideo } from "@/lib/store";
import React, { useState, useRef, useEffect } from "react";



export const VideoProgress = () => {
  const [isDragging, setIsDragging] = useState(false);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const { elapsedTime, duration, setElapsedTime } = useVideo();

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateProgress(e);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      updateProgress(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateProgress = (e: MouseEvent | React.MouseEvent) => {
    if (progressBarRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const newTime = (offsetX / rect.width) * duration;
      setElapsedTime(newTime);
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const progressTime = (duration / elapsedTime) * 100;

  return (
    <div className="h-4 relative w-full rounded grid grid-cols-5 bg-opacity-10 gap-4">
      <div className="right-0 mr-2 text-white text-sm text-end select-none">
        {formatTime(duration)}
      </div>

      <div className="col-span-3 mt-2" ref={progressBarRef}>
        <div className="h-2 bg-[#686868] w-full rounded relative flex items-center">
          <div
            style={{ width: `${progressTime}%` }}
            className="h-2 bg-[#F54703] rounded absolute left-0"
          ></div>
          <div
            className="bg-[#F54703] w-4 h-4 rounded-full shadow-sm absolute cursor-pointer"
            style={{
              left: `${progressTime}%`,
              transform: "translateX(-50%)",
            }}
            onMouseDown={handleMouseDown}
          ></div>
        </div>
      </div>

      <div className="ml-2 text-start text-sm text-[#F54703] select-none">
        {formatTime(elapsedTime)}
      </div>
    </div>
  );
};

