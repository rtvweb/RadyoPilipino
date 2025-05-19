import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import { navigationItems } from '../../../constants/navigation';
import DesktopNavItem from './DesktopNavItem';
import DesktopDropdownNavItem from './DesktopDropdownNavItem';
import MobileMenu from './MobileMenu';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStationsOpen, setIsStationsOpen] = useState(false);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsStationsOpen(false);
  }, [location.pathname]);
  
  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isActive = (path: string): boolean => {
    if (path === '#') {
      return location.pathname.startsWith('/stations');
    }
    return location.pathname === path;
  };

  const isSubmenuItemActive = (path: string): boolean => {
    return location.pathname === path;
  };

  // Toggle stations submenu
  const toggleStationsMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsStationsOpen((prev) => !prev);
  };

  return (
    <header className="bg-gradient-to-r from-red-600 via-yellow-500 to-green-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex-shrink-0 text-white font-bold text-xl md:text-2xl" 
            aria-label="Radyo Pilipino Home"
          >
            Radyo Pilipino
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            {navigationItems.map((item) => (
              item.hasSubmenu ? (
                <DesktopDropdownNavItem
                  key={item.name}
                  item={item}
                  isActive={isActive(item.href)}
                  isSubmenuItemActive={isSubmenuItemActive}
                />
              ) : (
                <DesktopNavItem
                  key={item.name}
                  item={item}
                  isActive={isActive(item.href)}
                />
              )
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu
        navigation={navigationItems}
        isMenuOpen={isMenuOpen}
        isStationsOpen={isStationsOpen}
        toggleStationsMenu={toggleStationsMenu}
        isActive={isActive}
        isSubmenuItemActive={isSubmenuItemActive}
      />
    </header>
  );
};

export default Header;