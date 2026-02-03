import { memo } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedSection } from "@/components/custom/AnimatedSection"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export const Contact = memo(() => {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 top-[750vh] lg:top-[330vh] w-[calc(100vw-3rem)] lg:w-[40vw] text-center"
      style={{ pointerEvents: 'auto' }}
    >
      <AnimatedSection direction="up">
        <GlassCard variant="prominent">
          <div className="flex justify-center mb-2">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </div>
          <h2 className="m-0 text-2xl font-[family-name:var(--font-display)] font-semibold text-white tracking-tight">
            Let&apos;s talk
          </h2>
          <p className="mt-4 text-[15px] text-white/60 leading-relaxed font-[family-name:var(--font-display)] font-light max-w-sm mx-auto">
            Open to impactful tooling, developer experience, and web platform work.
          </p>
          <Button
            asChild
            className="mt-6 bg-white/[0.08] border border-white/[0.15] text-white hover:bg-white/[0.18] hover:border-white/[0.30] backdrop-blur-sm shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300 font-[family-name:var(--font-display)] tracking-wide h-11 px-6 rounded-xl"
          >
            <a href="mailto:hernan.s.chalco@gmail.com">
              <Mail className="w-4 h-4 mr-2 opacity-70" />
              Get in Touch
            </a>
          </Button>
        </GlassCard>
      </AnimatedSection>
    </div>
  );
});

Contact.displayName = "Contact";
