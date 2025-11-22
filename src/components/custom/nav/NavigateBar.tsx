import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"

import Link from "next/link"

export const NavigateBar = () => {
  const projects = [{
    title: "checkout lab",
    href: "https://github.com/i-am-hernan/checkoutlab",
    description: "Build your own custom Adyen payment form with our sandbox."
  },
  {
    title: "SDK Explorer",
    href: "https://github.com/i-am-hernan/sdkexplorer",
    description: "Explore the Adyen client SDK using the SDK Explorer"
  }]
  return (
    <div className="w-screen sticky top-0 z-50">
      <div className="w-full flex justify-end border-b border-white font-semibold shadow-2xl/20 inset-shadow-current/15 backdrop-blur-sm inset-shadow-sm cursor-pointer transition duration-300">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="p-2 text-[13px] text-background font-bold">projects</NavigationMenuTrigger>
              <NavigationMenuContent className="grid gap-2">
                {projects.map((project, i) => {
                  return (
                    <div key={i}>
                      <Link href={project.href}>
                        <div className="text-[12px]">{project.title}</div>
                        <p className="text-background text-sm">{project.description}</p>
                      </Link>
                    </div>
                  )
                })}
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="h-[13px]">
              <Separator orientation="vertical" className="bg-background text-background" />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="p-2 text-[13px] text-background font-bold" href="/about">about</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="h-[13px]">
              <Separator orientation="vertical" className="bg-background text-background" />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="p-2 text-[13px] text-background font-bold" href="/career">career</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
} 
