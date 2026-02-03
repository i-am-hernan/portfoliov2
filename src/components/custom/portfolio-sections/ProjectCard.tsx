import { GlassCard } from "@/components/ui/glass-card"
import { GlassBadge } from "@/components/ui/glass-badge"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  href: string
  description: string
  technologies: string[]
  image?: string
}

export const ProjectCard = ({ title, href, description, technologies, image }: ProjectCardProps) => {
  return (
    <GlassCard className="group p-0 overflow-hidden">
      <div className="flex">
        {image && (
          <div className="relative w-1/2 min-h-[240px] bg-white/[0.03]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/[0.02]" />
            <Image
              src={image}
              alt={`${title} illustration`}
              fill
              className="object-contain opacity-80"
            />
          </div>
        )}
        <div className={`flex flex-col justify-center p-8 ${image ? 'w-1/2' : 'w-full'}`}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-lg font-[family-name:var(--font-display)] font-semibold text-white hover:text-white/80 transition-colors tracking-tight"
          >
            {title}
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
          </a>
          <p className="mt-3 text-white/60 text-sm leading-relaxed font-[family-name:var(--font-display)] font-light">
            {description}
          </p>
          <div className="mt-4 h-px bg-gradient-to-r from-white/10 to-transparent w-2/3" />
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <GlassBadge key={tech}>{tech}</GlassBadge>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  )
}
