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
          "inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium tracking-wide",
          "bg-white/[0.08] border border-white/[0.12]",
          "text-white/80 hover:bg-white/[0.15] hover:text-white hover:border-white/[0.22]",
          "shadow-[0_2px_8px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.06)]",
          "transition-all duration-300",
          "font-[family-name:var(--font-geist-mono)] uppercase tracking-widest text-[10px]",
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
