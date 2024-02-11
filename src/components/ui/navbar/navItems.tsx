import { NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger } from './Navigation-menu';

import React from 'react';
import s from './Navbar.module.css';

// components/navItems.tsx

export const navItems = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
  },
  {
    id: 'about',
    label: 'About',
    href: '/about',
  },
  {
    id: 'shop',
    label: 'Shop',
    href: '/shop',
  },
  {
    id: 'artists',
    label: 'Artists',
    href: '/artists',
  },
  {
    id: 'gallery',
    label: 'Gallery',
    href: '/gallery',
  },
  {
    id: 'events',
    label: 'Events',
    href: '/events',
  },
  {
    id: 'community',
    label: 'Community',
    href: '/community',
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '/contact',
  },
  // Add more items as needed
];

export const renderNavItems = () => {
  return navItems.map((item) => (
    <NavigationMenuItem key={item.id} className={s.navItem}>
      <NavigationMenuLink href={item.href} className={s.link}>
        <NavigationMenuTrigger className={s.trigger}>{item.label}</NavigationMenuTrigger>
      </NavigationMenuLink>
    </NavigationMenuItem>
  ));
};

