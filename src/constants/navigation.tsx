import { MenuItem } from '../types/navigation';
import { Radio, Tv } from 'lucide-react';

export const navigationItems: MenuItem[] = [
  { name: 'Home', href: '/' },
  { 
    name: 'Stations', 
    href: '#',
    hasSubmenu: true,
    submenu: [
      { name: 'AM Stations', href: '/stations/am', icon: <Radio size={18} /> },
        { name: 'FM Stations', href: '/stations/fm', icon: <Radio size={18} /> },
        { name: 'TV Channels', href: '/stations/tv', icon: <Tv size={18} /> },
    ] 
  },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];