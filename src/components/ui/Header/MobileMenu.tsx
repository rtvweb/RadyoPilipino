import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { MenuItem } from '../../../types/navigation';

interface MobileMenuProps {
  navigation: MenuItem[];
  isMenuOpen: boolean;
  isStationsOpen: boolean;
  toggleStationsMenu: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isActive: (path: string) => boolean;
  isSubmenuItemActive: (path: string) => boolean;
}

const MobileMenu = ({
  navigation,
  isMenuOpen,
  isStationsOpen,
  toggleStationsMenu,
  isActive,
  isSubmenuItemActive
}: MobileMenuProps) => {
  if (!isMenuOpen) return null;

  return (
    <div className="md:hidden" id="mobile-menu">
      <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-r from-red-600 via-yellow-500 to-green-500">
        {navigation.map((item) => (
          <div key={item.name}>
            {item.hasSubmenu ? (
              <>
                <button
                  onClick={toggleStationsMenu}
                  className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.href)
                      ? 'bg-white/20 text-white'
                      : 'text-white hover:bg-white/10 hover:text-white'
                  }`}
                  aria-expanded={isStationsOpen}
                >
                  {item.name}
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${isStationsOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {isStationsOpen && item.submenu && (
                  <div className="pl-4 mt-1 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                          isSubmenuItemActive(subItem.href)
                            ? 'bg-white/30 text-white'
                            : 'text-white hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <span className="mr-3">{subItem.icon}</span>
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.href)
                    ? 'bg-white/20 text-white'
                    : 'text-white hover:bg-white/10 hover:text-white'
                }`}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;