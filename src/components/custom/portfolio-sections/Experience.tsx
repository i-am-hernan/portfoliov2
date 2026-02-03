"use client"

import { memo, useState } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedSection } from "@/components/custom/AnimatedSection"
import { SectionWrapper } from "./SectionWrapper"

const experiences = [
  {
    company: "Adyen",
    roles: [
      {
        title: "Senior Implementation Engineer",
        period: "February 2025 – Present",
        description: [
          "Lead engineer for internal and external tooling focused on eCommerce payment integrations.",
          "Maintain and improve developer experience for client-facing tools and documentation."
        ]
      },
      {
        title: "Implementation Engineer",
        period: "October 2021 – February 2025",
        description: [
          "Engineered scalable payment integration solutions for enterprise clients (including Fortune 500), implementing custom features, debugging SDKs, and deploying production-ready code to resolve complex technical challenges."
        ]
      }
    ]
  },
  {
    company: "Quantum Metric",
    roles: [
      {
        title: "Engineer, Customer Success",
        period: "March 2020 – September 2021",
        description: [
          "Built custom JavaScript-based analytics tooling for high-profile clients, enabling real-time business insight generation.",
          "Integrated third-party AI tools including Qualtrics and Dynatrace to enhance operational capabilities."
        ]
      }
    ]
  },
  {
    company: "HCL Technologies",
    roles: [
      {
        title: "Software Engineer",
        period: "October 2018 – March 2020",
        description: [
          "Developed automated system-health checks to reduce unplanned downtime; cut manual QA time by 70 hours per month."
        ]
      }
    ]
  }
]

export const Experience = memo(() => {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = experiences[activeIndex]

  return (
    <SectionWrapper
      className="absolute right-6 lg:right-[calc((100vw-80rem)/2)] top-[305vh] lg:top-[190vh] w-[calc(100vw-3rem)] lg:w-[50vw]"
    >
      <AnimatedSection direction="right">
        <GlassCard className="p-0 overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-[420px]">
            {/* Left: Company tabs */}
            <div className="lg:w-[180px] border-b lg:border-b-0 lg:border-r border-white/[0.08] bg-white/[0.02]">
              <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible">
                {experiences.map((exp, index) => (
                  <button
                    key={exp.company}
                    onClick={() => setActiveIndex(index)}
                    className={`relative px-5 py-4 text-left text-sm font-[family-name:var(--font-display)] transition-all duration-300 whitespace-nowrap lg:whitespace-normal flex-shrink-0 lg:flex-shrink
                      ${activeIndex === index
                        ? 'text-white bg-white/[0.06]'
                        : 'text-white/50 hover:text-white/80 hover:bg-white/[0.03]'
                      }`}
                  >
                    {/* Active indicator - left for desktop */}
                    <span
                      className={`absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/60 to-white/20 transition-opacity duration-300 hidden lg:block
                        ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
                    />
                    {/* Bottom indicator for mobile */}
                    <span
                      className={`absolute left-0 right-0 bottom-0 h-[2px] lg:hidden bg-gradient-to-r from-white/60 to-white/20 transition-opacity duration-300
                        ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
                    />
                    <span className="block font-medium">{exp.company}</span>
                    <span className="block text-[10px] text-white/30 mt-0.5 font-[family-name:var(--font-geist-mono)] tracking-wider uppercase hidden lg:block">
                      {exp.roles[0].period.split('–')[0].trim().split(' ')[1]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Job details */}
            <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-1 h-5 rounded-full bg-gradient-to-b from-white/60 to-white/10" />
                <h2 className="m-0 text-xl lg:text-2xl font-[family-name:var(--font-display)] font-semibold text-white tracking-tight">
                  Experience
                </h2>
              </div>

              <div className="mt-6 lg:mt-8 space-y-8">
                {active.roles.map((role, roleIndex) => (
                  <div key={roleIndex}>
                    {/* Job title */}
                    <h3 className="text-lg font-[family-name:var(--font-display)] font-medium text-white leading-snug">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-white/40 font-[family-name:var(--font-display)]">
                      @ {active.company}
                    </p>

                    {/* Period */}
                    <p className="mt-2 text-xs text-white/50 font-[family-name:var(--font-geist-mono)] tracking-wide">
                      {role.period}
                    </p>

                    {/* Divider */}
                    <div className="mt-4 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

                    {/* Description bullets */}
                    <ul className="mt-4 space-y-3">
                      {role.description.map((item, i) => (
                        <li key={i} className="flex gap-3 text-[14px] lg:text-[15px] text-white/70 leading-relaxed font-[family-name:var(--font-display)] font-light">
                          <span className="text-white/30 mt-1.5 flex-shrink-0">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </AnimatedSection>
    </SectionWrapper>
  );
});

Experience.displayName = "Experience";
