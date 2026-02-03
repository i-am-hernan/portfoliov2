import { memo } from "react"
import { ProjectCard } from "./ProjectCard"
import { AnimatedSection } from "@/components/custom/AnimatedSection"

const projects = [
  {
    title: "checkoutlab.dev",
    href: "https://checkoutlab.dev",
    description: "Rapid prototyping sandbox for Adyen payment flows.",
    technologies: ["TypeScript", "React", "Next.js", "Tailwind"],
    image: "/img/dev-illustration.png",
  },
  {
    title: "LLM Browser Extension",
    href: "https://github.com/i-am-hernan/llm-chrome-extension",
    description: "Chrome extension that leverages large language models to enhance web browsing.",
    technologies: ["TypeScript", "Next.js", "D3.js", "Tailwind"],
    image: "/img/llm-browser-extension.png",
  },
  {
    title: "sdkexplorer.com",
    href: "https://sdkexplorer.com",
    description: "Browse Adyen Web SDK configuration options.",
    technologies: ["TypeScript", "React", "Node.js", "Material UI"],
    image: "/img/sdk-explorer.png",
  }
]

export const Projects = memo(() => {
  return (
    <div
      className="absolute left-6 right-6 lg:left-[calc((100vw-80rem)/2)] lg:right-[calc((100vw-80rem)/2)] top-[280vh] lg:top-[160vh]"
      style={{ pointerEvents: 'auto' }}
    >
      <AnimatedSection direction="right">
        <div className="flex items-center gap-3 mb-8 justify-end">
          <div className="w-1 h-6 rounded-full bg-gradient-to-b from-white/60 to-white/10" />
          <h2 className="m-0 text-2xl font-[family-name:var(--font-display)] font-semibold text-white tracking-tight">
            Projects
          </h2>
        </div>
      </AnimatedSection>
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
          >
            <AnimatedSection
              direction={index % 2 === 0 ? "right" : "left"}
              delay={index * 150}
              className="w-full lg:w-[40vw]"
            >
              <ProjectCard {...project} />
            </AnimatedSection>
          </div>
        ))}
      </div>
    </div>
  );
});

Projects.displayName = "Projects";
