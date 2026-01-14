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
    { icon: Linkedin, href: "https://linkedin.com/in/hernan", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@hernan.dev", label: "Email" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 shadow-xl">
          {/* Logo / Name */}
          <Link
            href="/"
            className="text-white font-semibold text-lg hover:text-white/80 transition-colors"
          >
            hernan
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white/90 hover:bg-white/10 hover:text-white data-[state=open]:bg-white/10 text-sm font-medium">
                    Projects
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-2 min-w-[280px]">
                    {projects.map((project) => (
                      <Link
                        key={project.title}
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="block rounded-md p-3 hover:bg-white/10 transition-colors"
                      >
                        <div className="text-sm font-medium text-white">
                          {project.title}
                        </div>
                        <p className="mt-1 text-xs text-white/70 leading-relaxed">
                          {project.description}
                        </p>
                      </Link>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#about"
                    className="bg-transparent text-white/90 hover:bg-white/10 hover:text-white px-4 py-2 text-sm font-medium rounded-md transition-colors"
                  >
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#contact"
                    className="bg-transparent text-white/90 hover:bg-white/10 hover:text-white px-4 py-2 text-sm font-medium rounded-md transition-colors"
                  >
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Separator */}
            <div className="h-6 w-px bg-white/20 mx-2" />

            {/* Social Links */}
            <div className="flex items-center gap-1">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-md transition-colors"
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
