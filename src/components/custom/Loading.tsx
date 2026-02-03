"use client";

import { useEffect, useState, useRef } from "react";

interface LoadingProps {
  onComplete?: () => void;
}

export const Loading = ({ onComplete }: LoadingProps) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const hasStarted = useRef(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    let current = 0;
    const interval = setInterval(() => {
      current += 1.5;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => setFadeOut(true), 300);
        setTimeout(() => onCompleteRef.current?.(), 900);
      } else {
        setProgress(current);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-night-sky transition-opacity duration-600 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icons/golden-gate-bridge.svg"
        alt="Golden Gate Bridge"
        className="w-[120px] md:w-[160px] opacity-80"
      />

      <div className="mt-8 flex flex-col items-center gap-3">
        <p className="text-white/40 text-xs font-[family-name:var(--font-geist-mono)] tracking-[0.3em] uppercase">
          Loading
        </p>
        <div className="w-32 h-px bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-white/30 via-white/60 to-white/30"
            style={{ width: `${progress}%`, transition: 'width 0.05s linear' }}
          />
        </div>
      </div>
    </div>
  );
};
