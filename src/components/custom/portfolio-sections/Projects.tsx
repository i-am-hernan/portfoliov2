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
    title: "sdkexplorer.com",
    href: "https://sdkexplorer.com",
    description: "Browse Adyen Web SDK configuration options.",
    technologies: ["TypeScript", "React", "Node.js", "Material UI"],
    image: "/img/dev-illustration.png",
  },
]

export const Projects = memo(() => {
  return (
    <div
      className="absolute left-6 right-6 lg:left-[calc((100vw-80rem)/2)] lg:right-[calc((100vw-80rem)/2)] top-[250vh]"
      style={{ pointerEvents: 'auto' }}
    >
      <AnimatedSection direction="up">
        <h2 className="m-0 text-2xl font-bold text-white mb-6 drop-shadow-md">
          Projects
        </h2>
      </AnimatedSection>
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
          >
            <AnimatedSection
              direction={index % 2 === 0 ? "left" : "right"}
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
