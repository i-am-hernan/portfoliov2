import { memo } from "react";

export const Hero = memo(() => {
  return (
    <div
      className="w-[100%] text-center lg:mt-[15vh] mt-[25vh] select-none"
      style={{ pointerEvents: 'auto' }}
    >
      <span>
        <h1 className="text-[8vw] leading-none text-white drop-shadow-lg">
          I am Hernan
        </h1>
        <h2 className="text-[1.3vw] text-white/80 drop-shadow-md mt-2">
          I bridge business and engineering.
        </h2>
      </span>
    </div>
  );
});

Hero.displayName = "Hero";
