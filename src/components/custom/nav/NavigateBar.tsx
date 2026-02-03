"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useCallback } from "react"

export const NavigateBar = () => {
  const projects = [
    {
      title: "Checkout Lab",
      href: "https://github.com/i-am-hernan/checkoutlab",
      description: "Build your own custom Adyen payment form with our sandbox.",
    },
    {
      title: "SDK Explorer",
      href: "https://github.com/i-am-hernan/sdkexplorer",
      description: "Explore the Adyen client SDK using the SDK Explorer.",
    },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/i-am-hernan", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/hernanchalco", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hernan.s.chalco@gmail.com", label: "Email" },
  ]

  // drei's ScrollControls uses a custom scroll container, not the window.
  // Find it and scroll to a percentage of its total scrollable height.
  const scrollToSection = useCallback((fraction: number) => {
    const containers = document.querySelectorAll('div');
    for (const container of containers) {
      const style = window.getComputedStyle(container);
      if (
        (style.overflowY === 'auto' || style.overflowY === 'scroll') &&
        container.scrollHeight > container.clientHeight
      ) {
        const maxScroll = container.scrollHeight - container.clientHeight;
        container.scrollTo({ top: maxScroll * fraction, behavior: 'smooth' });
        return;
      }
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex items-center justify-between rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/[0.10] px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)]">
          {/* Top edge highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          {/* Logo / Name */}
          <Link href="/" className="hover:opacity-80 transition-opacity">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/golden-gate-bridge-2.svg" alt="Home" className="w-8 h-8" />
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white/70 hover:bg-white/[0.08] hover:text-white data-[state=open]:bg-white/[0.08] text-sm font-[family-name:var(--font-display)] font-medium tracking-wide">
                    Projects
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] rounded-xl p-2 min-w-[280px] shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                    {projects.map((project) => (
                      <Link
                        key={project.title}
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="block rounded-lg p-3 hover:bg-white/[0.08] transition-all duration-200"
                      >
                        <div className="text-sm font-[family-name:var(--font-display)] font-medium text-white">
                          {project.title}
                        </div>
                        <p className="mt-1 text-xs text-white/50 leading-relaxed font-[family-name:var(--font-display)] font-light">
                          {project.description}
                        </p>
                      </Link>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <button
                      onClick={() => scrollToSection(0.26)}
                      className="bg-transparent text-white/70 hover:bg-white/[0.08] hover:text-white px-4 py-2 text-sm font-[family-name:var(--font-display)] font-medium rounded-lg transition-all duration-200 tracking-wide cursor-pointer"
                    >
                      About
                    </button>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <button
                      onClick={() => scrollToSection(0.85)}
                      className="bg-transparent text-white/70 hover:bg-white/[0.08] hover:text-white px-4 py-2 text-sm font-[family-name:var(--font-display)] font-medium rounded-lg transition-all duration-200 tracking-wide cursor-pointer"
                    >
                      Contact
                    </button>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Separator */}
            <div className="h-5 w-px bg-white/[0.12] mx-3" />

            {/* Social Links */}
            <div className="flex items-center gap-0.5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="p-2 text-white/50 hover:text-white hover:bg-white/[0.08] rounded-lg transition-all duration-200"
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
