import { memo } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { GlassBadge } from "@/components/ui/glass-badge"
import { AnimatedSection } from "@/components/custom/AnimatedSection"
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
    <div
      className="absolute right-6 lg:right-[calc((100vw-80rem)/2)] top-[100vh] w-[calc(100vw-3rem)] lg:w-[40vw]"
      style={{ pointerEvents: 'auto' }}
    >
      <AnimatedSection direction="right">
        <GlassCard>
          <h2 className="m-0 text-2xl font-bold text-white">About</h2>
          <p className="mt-4 text-base text-white/85 leading-relaxed">
            I lead and ship internal and client-facing tools that make complex web integrations
            fast, reliable, and intuitive.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <GlassBadge key={tech}>{tech}</GlassBadge>
            ))}
          </div>
          <div className="mt-6">
            <Image
              src="/img/profile-img.jpg"
              alt="Profile photo"
              width={600}
              height={800}
              className="rounded-xl opacity-90 w-full h-auto"
            />
          </div>
        </GlassCard>
      </AnimatedSection>
    </div>
  );
});

About.displayName = "About";
