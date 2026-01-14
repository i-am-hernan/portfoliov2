import * as React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: "default" | "subtle" | "prominent"
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const variantClasses = {
      default: "bg-white/10 backdrop-blur-sm border-white/20",
      subtle: "bg-white/5 border-white/10",
      prominent: "bg-white/15 backdrop-blur-sm border-white/30",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border p-6 shadow-xl",
          "transition-all duration-300 ease-out",
          "hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/10",
          "hover:bg-white/15 hover:border-white/40",
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
GlassCard.displayName = "GlassCard"

export { GlassCard }
