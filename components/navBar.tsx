'use client'
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
  
const NavBar = () => {
    return (
        <div className="bg-slate-800 h-10 flex content-end justify-end  ">
            <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                Tus Planillas
               
                </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList>
                <NavigationMenuItem>
                <NavigationMenuTrigger>Version Pro</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
            </NavigationMenu>

        </div>
    )
}

export default NavBar;

