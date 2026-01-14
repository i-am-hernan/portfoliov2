import { memo } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedSection } from "@/components/custom/AnimatedSection"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export const Contact = memo(() => {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 top-[340vh] w-[calc(100vw-3rem)] lg:w-[40vw] text-center"
      style={{ pointerEvents: 'auto' }}
    >
      <AnimatedSection direction="up">
        <GlassCard variant="prominent">
          <h2 className="m-0 text-2xl font-bold text-white">Let&apos;s talk</h2>
          <p className="mt-4 text-base text-white/85 leading-relaxed">
            Open to impactful tooling, developer experience, and web platform work.
          </p>
          <Button
            asChild
            className="mt-6 bg-white/20 border border-white/30 text-white hover:bg-white/30 hover:border-white/40 backdrop-blur-sm"
          >
            <a href="mailto:hernan.s.chalco@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </a>
          </Button>
        </GlassCard>
      </AnimatedSection>
    </div>
  );
});

Contact.displayName = "Contact";
