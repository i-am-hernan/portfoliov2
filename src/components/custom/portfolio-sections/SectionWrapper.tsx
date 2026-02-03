"use client"

import { memo, ReactNode } from "react"

interface SectionWrapperProps {
  children: ReactNode
  className?: string
}

export const SectionWrapper = memo(({
  children,
  className = ""
}: SectionWrapperProps) => {
  return (
    <div className={className} style={{ pointerEvents: 'auto' }}>
      {children}
    </div>
  )
})

SectionWrapper.displayName = "SectionWrapper"
