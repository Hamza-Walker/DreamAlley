import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import * as React from "react"

import { ChevronDownIcon } from "@radix-ui/react-icons"
import { renderNavItems } from './navItems'; // Adjust the import path based on your project structure
import s from './Navbar.module.css'; // Import the CSS Module
import logo from './logo'; 
// Simplified NavigationMenu 

const NavigationMenu = ({ children , className } : { children: React.ReactNode , className: string}) => {
  return (
    <NavigationMenuPrimitive.Root className={className}>
      {children}
    </NavigationMenuPrimitive.Root>
  );
};

const NavigationMenuList = ({ children, className } : { children: React.ReactNode, className: string}) => {
  return (
    <NavigationMenuPrimitive.List className={className}>
      {children}
    </NavigationMenuPrimitive.List>
  );
};

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const NavigationMenuTrigger = ({ children, className } : { children: React.ReactNode , className?:string}) => {
  return (
    <NavigationMenuPrimitive.Trigger className={className}>
      {children}
      {/*<ChevronDownIcon />*/}
    </NavigationMenuPrimitive.Trigger>
  );
};

const NavigationMenuContent = ({ children } : { children : React.ReactNode}) => {
  return (
    <NavigationMenuPrimitive.Content>
      {children}
    </NavigationMenuPrimitive.Content>
  );
};

const NavigationMenuLink = NavigationMenuPrimitive.Link;

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
};


const NavigationMenuComponent = () => {
  return (
    <NavigationMenu className={s.root}>
      <div className={s.nav}>
        <NavigationMenuList className={s.navMenu}>
          {/* Use the renderNavItems function to render the navigation items */}
					{logo()}
					{renderNavItems()}
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
}
  
export default NavigationMenuComponent;
