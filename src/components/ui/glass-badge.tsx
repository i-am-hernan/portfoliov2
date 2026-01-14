import * as React from "react"
import { cn } from "@/lib/utils"

interface GlassBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
}

const GlassBadge = React.forwardRef<HTMLSpanElement, GlassBadgeProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
          "bg-white/15 border border-white/20",
          "text-white/90 hover:bg-white/25",
          "transition-colors duration-200",
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)
GlassBadge.displayName = "GlassBadge"

export { GlassBadge }
