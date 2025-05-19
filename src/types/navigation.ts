import { ReactNode } from 'react';

export interface SubMenuItem {
  name: string;
  href: string;
  icon: ReactNode;
}

export interface MenuItem {
  name: string;
  href: string;
  hasSubmenu?: boolean;
  submenu?: SubMenuItem[];
}