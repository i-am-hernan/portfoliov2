import { memo } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedSection } from "@/components/custom/AnimatedSection"
import { SectionWrapper } from "./SectionWrapper"
import Image from "next/image"

export const Education = memo(() => {
  return (
    <SectionWrapper
      className="absolute left-6 lg:left-[calc((100vw-80rem)/2)] top-[745vh] lg:top-[385vh] w-[calc(100vw-3rem)] lg:w-[45vw]"
    >
      <AnimatedSection direction="left">
        <GlassCard className="p-0 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left: UC Berkeley logo */}
            <div className="relative lg:w-[40%] min-h-[180px] lg:min-h-[220px] bg-white/[0.03] flex items-center justify-center p-8">
              <div className="bg-white rounded-xl p-4">
                <Image
                  src="/img/uc-berkeley.png"
                  alt="UC Berkeley"
                  width={280}
                  height={100}
                  className="object-contain w-full max-w-[220px]"
                />
              </div>
            </div>
            {/* Right: Education details */}
            <div className="flex-1 p-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 rounded-full bg-gradient-to-b from-[#FDB515] to-[#FDB515]/30" />
                <h2 className="m-0 text-2xl font-[family-name:var(--font-display)] font-semibold text-white tracking-tight">
                  Education
                </h2>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-[family-name:var(--font-display)] font-medium text-white">
                  University of California, Berkeley
                </h3>
                <p className="mt-1 text-sm text-white/50 font-[family-name:var(--font-geist-mono)] tracking-wide">
                  Graduated December 2017
                </p>
                <p className="mt-3 text-[15px] text-white/70 leading-relaxed font-[family-name:var(--font-display)] font-light">
                  Bachelor of Arts in Mathematics
                </p>
              </div>
              <div className="mt-5 h-px bg-gradient-to-r from-[#FDB515]/20 via-[#FDB515]/10 to-transparent" />
              <p className="mt-4 text-sm text-white/50 font-[family-name:var(--font-display)] font-light italic">
                Go Bears!
              </p>
            </div>
          </div>
        </GlassCard>
      </AnimatedSection>
    </SectionWrapper>
  );
});

Education.displayName = "Education";
