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
          <div className="relative w-1/2 min-h-[220px] bg-white/5">
            <Image
              src={image}
              alt={`${title} illustration`}
              fill
              className="object-contain opacity-90"
            />
          </div>
        )}
        <div className={`flex flex-col justify-center p-6 ${image ? 'w-1/2' : 'w-full'}`}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-lg font-semibold text-white hover:text-white/80 transition-colors"
          >
            {title}
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <p className="mt-2 text-white/80 text-sm leading-relaxed">
            {description}
          </p>
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
