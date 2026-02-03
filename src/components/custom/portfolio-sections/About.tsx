import { memo } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { GlassBadge } from "@/components/ui/glass-badge"
import { AnimatedSection } from "@/components/custom/AnimatedSection"
import { SectionWrapper } from "./SectionWrapper"
import Image from "next/image"

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "NoSQL",
  "SQL",
  "TypeScript",
  "Material-UI",
  "Tailwind",
]

export const About = memo(() => {
  return (
    <SectionWrapper
      className="absolute left-6 lg:left-[calc((100vw-80rem)/2)] top-[120vh] lg:top-[112vh] w-[calc(100vw-3rem)] lg:w-[55vw]"
    >
      <AnimatedSection direction="left">
        <GlassCard className="p-0 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left: text + badges */}
            <div className="flex-1 p-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 rounded-full bg-gradient-to-b from-white/60 to-white/10" />
                <h2 className="m-0 text-2xl font-[family-name:var(--font-display)] font-semibold text-white tracking-tight">
                  About
                </h2>
              </div>
              <p className="mt-4 text-[15px] text-white/70 leading-relaxed font-[family-name:var(--font-display)] font-light">
                I lead and ship internal and client-facing tools that make complex web integrations
                fast, reliable, and intuitive.
              </p>
              <div className="mt-5 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
              <div className="mt-5 flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <GlassBadge key={tech}>{tech}</GlassBadge>
                ))}
              </div>
            </div>
            {/* Right: profile image */}
            <div className="relative lg:w-[45%] min-h-[420px] bg-white/[0.03]">
              <Image
                src="/img/profile-img.jpg"
                alt="Profile photo"
                fill
                className="object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/[0.04] to-transparent lg:block hidden" />
            </div>
          </div>
        </GlassCard>
      </AnimatedSection>
    </SectionWrapper>
  );
});

About.displayName = "About";
