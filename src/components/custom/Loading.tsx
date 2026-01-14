"use client";

import { useEffect, useState, useRef } from "react";

interface LoadingProps {
  onComplete?: () => void;
}

export const Loading = ({ onComplete }: LoadingProps) => {
  const text = "i am hernan";
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsComplete(true);
        setTimeout(() => {
          onComplete?.();
        }, 500);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#061530]">
      <div className="relative">
        <h1 className="text-5xl md:text-7xl text-white font-[family-name:var(--font-cursive)]">
          {displayedText}
          <span
            className={`inline-block w-[3px] h-[1em] bg-white ml-1 align-middle ${
              isComplete ? "opacity-0" : "animate-pulse"
            }`}
          />
        </h1>
      </div>
    </div>
  );
};
