import { memo } from "react";

export const Hero = memo(() => {
  return (
    <div
      className="w-[100%] text-center lg:mt-[15vh] mt-[25vh] select-none"
      style={{ pointerEvents: 'auto' }}
    >
      <span>
        <p className="text-sm tracking-[0.4em] uppercase text-white/50 font-[family-name:var(--font-geist-mono)] mb-4">
          Software Engineer
        </p>
        <h1 className="text-[9vw] leading-[0.9] text-white font-[family-name:var(--font-display)] font-light text-glow">
          I am Hernan
        </h1>
        <h2 className="text-[1.4vw] text-white/60 mt-4 font-[family-name:var(--font-display)] font-light tracking-wide">
          I bridge business and engineering.
        </h2>
        <div className="mt-6 mx-auto w-12 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </span>
    </div>
  );
});

Hero.displayName = "Hero";
