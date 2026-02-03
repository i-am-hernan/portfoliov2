"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Mail, Menu, X, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { useCallback, useState, useEffect } from "react"

// Scroll fractions for each section (desktop / mobile)
// Desktop: 6 pages (~500vh scrollable), Mobile: 10 pages (~900vh scrollable)
// Fractions = section position / max scrollable distance
const SCROLL_POSITIONS = {
  about: { desktop: 0.22, mobile: 0.13 },
  experience: { desktop: 0.38, mobile: 0.34 },
  contact: { desktop: 0.95, mobile: 0.95 },
}

export const NavigateBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

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
  const scrollToSection = useCallback((section: keyof typeof SCROLL_POSITIONS) => {
    const fraction = isMobile ? SCROLL_POSITIONS[section].mobile : SCROLL_POSITIONS[section].desktop
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
  }, [isMobile]);

  const handleMobileNavClick = (section: keyof typeof SCROLL_POSITIONS) => {
    setMobileMenuOpen(false)
    scrollToSection(section)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 py-3 lg:py-4">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex items-center justify-between rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/[0.10] px-4 lg:px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)]">
          {/* Top edge highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          {/* Logo / Name */}
          <Link href="/" className="hover:opacity-80 transition-opacity">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/golden-gate-bridge-2.svg" alt="Home" className="w-8 h-8" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
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
                      onClick={() => scrollToSection('about')}
                      className="bg-transparent text-white/70 hover:bg-white/[0.08] hover:text-white px-4 py-2 text-sm font-[family-name:var(--font-display)] font-medium rounded-lg transition-all duration-200 tracking-wide cursor-pointer"
                    >
                      About
                    </button>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <button
                      onClick={() => scrollToSection('experience')}
                      className="bg-transparent text-white/70 hover:bg-white/[0.08] hover:text-white px-4 py-2 text-sm font-[family-name:var(--font-display)] font-medium rounded-lg transition-all duration-200 tracking-wide cursor-pointer"
                    >
                      Experience
                    </button>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <button
                      onClick={() => scrollToSection('contact')}
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

          {/* Mobile: Social Links + Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Social Links (mobile) */}
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

            {/* Separator */}
            <div className="h-5 w-px bg-white/[0.12] mx-1" />

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/70 hover:text-white hover:bg-white/[0.08] rounded-lg transition-all duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`lg:hidden mt-2 overflow-hidden transition-all duration-300 ease-out ${
            mobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/[0.10] shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)] p-4 pb-6">
            {/* Section Links */}
            <div className="space-y-1">
              <button
                onClick={() => handleMobileNavClick('about')}
                className="w-full text-left text-white/70 hover:text-white hover:bg-white/[0.08] px-4 py-3 rounded-xl text-sm font-[family-name:var(--font-display)] font-medium tracking-wide transition-all duration-200"
              >
                About
              </button>
              <button
                onClick={() => handleMobileNavClick('experience')}
                className="w-full text-left text-white/70 hover:text-white hover:bg-white/[0.08] px-4 py-3 rounded-xl text-sm font-[family-name:var(--font-display)] font-medium tracking-wide transition-all duration-200"
              >
                Experience
              </button>
              <button
                onClick={() => handleMobileNavClick('contact')}
                className="w-full text-left text-white/70 hover:text-white hover:bg-white/[0.08] px-4 py-3 rounded-xl text-sm font-[family-name:var(--font-display)] font-medium tracking-wide transition-all duration-200"
              >
                Contact
              </button>
            </div>

            {/* Divider */}
            <div className="my-3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Projects Section */}
            <div className="px-4 py-2">
              <span className="text-xs text-white/40 font-[family-name:var(--font-geist-mono)] uppercase tracking-wider">
                Projects
              </span>
            </div>
            <div className="space-y-1">
              {projects.map((project) => (
                <Link
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl hover:bg-white/[0.08] transition-all duration-200"
                >
                  <div className="text-sm font-[family-name:var(--font-display)] font-medium text-white">
                    {project.title}
                  </div>
                  <p className="mt-1 text-xs text-white/50 leading-relaxed font-[family-name:var(--font-display)] font-light">
                    {project.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
