"use client"

import { memo } from "react"

interface CableDividerProps {
  number: string
  label: string
  topMobile: string
  topDesktop: string
}

export const CableDivider = memo(({
  number,
  label,
  topMobile,
  topDesktop
}: CableDividerProps) => {
  return (
    <>
      {/* Mobile */}
      <div
        className="absolute left-0 right-0 h-[40px] pointer-events-none lg:hidden"
        style={{ top: topMobile }}
      >
        {/* Main cable line */}
        <div className="absolute top-1/2 left-4 right-[100px] h-px bg-gradient-to-r from-transparent via-white/[0.15] to-white/[0.10]" />

        {/* Left node */}
        <div className="absolute top-1/2 left-[20%] -translate-y-1/2">
          <div className="w-1.5 h-1.5 rounded-full bg-white/20 ring-1 ring-white/10" />
        </div>

        {/* Center node */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-2 h-2 rounded-full bg-white/25 ring-1 ring-white/10 shadow-[0_0_12px_rgba(255,255,255,0.15)]" />
        </div>

        {/* Section label - right side */}
        <div className="absolute top-1/2 right-4 -translate-y-1/2 text-right">
          <span className="block text-[9px] font-[family-name:var(--font-geist-mono)] tracking-[0.25em] text-white/30 uppercase">
            {number}
          </span>
          <span className="block text-[10px] font-[family-name:var(--font-display)] tracking-[0.1em] text-white/20 uppercase mt-0.5">
            {label}
          </span>
        </div>
      </div>

      {/* Desktop */}
      <div
        className="absolute left-0 right-0 h-[50px] pointer-events-none hidden lg:block"
        style={{ top: topDesktop }}
      >
        {/* Main cable line */}
        <div className="absolute top-1/2 left-[8vw] right-[calc(8vw+140px)] h-px bg-gradient-to-r from-transparent via-white/[0.15] to-white/[0.10]" />

        {/* Secondary cable line */}
        <div className="absolute top-1/2 left-[15vw] right-[calc(8vw+160px)] h-px mt-2 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

        {/* Left node */}
        <div className="absolute top-1/2 left-[18vw] -translate-y-1/2">
          <div className="w-2 h-2 rounded-full bg-white/20 ring-1 ring-white/10" />
        </div>

        {/* Center node */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-3 h-3 rounded-full bg-white/25 ring-2 ring-white/10 shadow-[0_0_12px_rgba(255,255,255,0.15)]" />
        </div>

        {/* Right node */}
        <div className="absolute top-1/2 right-[calc(8vw+160px)] -translate-y-1/2">
          <div className="w-2 h-2 rounded-full bg-white/20 ring-1 ring-white/10" />
        </div>

        {/* Section label - right side */}
        <div className="absolute top-1/2 right-[8vw] -translate-y-1/2 text-right">
          <span className="block text-[10px] font-[family-name:var(--font-geist-mono)] tracking-[0.3em] text-white/30 uppercase">
            {number}
          </span>
          <span className="block text-[11px] font-[family-name:var(--font-display)] tracking-[0.15em] text-white/20 uppercase mt-0.5">
            {label}
          </span>
        </div>
      </div>
    </>
  )
})

CableDivider.displayName = "CableDivider"
