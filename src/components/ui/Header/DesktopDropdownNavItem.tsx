import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { MenuItem } from '../../../types/navigation';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

interface DesktopDropdownNavItemProps {
  item: MenuItem;
  isActive: boolean;
  isSubmenuItemActive: (path: string) => boolean;
}

const DesktopDropdownNavItem = ({ 
  item, 
  isActive,
  isSubmenuItemActive 
}: DesktopDropdownNavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  // Close menu when clicking outside
  useOutsideClick({
    refs: [menuRef, buttonRef],
    handler: () => setIsOpen(false),
  });

  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(prev => !prev);
  };

  return (
    <div className="relative group">
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className={`flex items-center text-base lg:text-lg font-medium border-b-2 transition-all ${
          isActive
            ? 'border-white text-white'
            : 'border-transparent text-white hover:border-white/50 hover:text-white/90'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.name}
        <ChevronDown 
          size={16} 
          className={`ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      <div
        ref={menuRef}
        className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 transform transition-all origin-top-left
          ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
      >
        {item.submenu?.map((subItem) => (
          <Link
            key={subItem.name}
            to={subItem.href}
            className={`flex items-center px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 ${
              isSubmenuItemActive(subItem.href) ? 'bg-gray-100' : ''
            }`}
          >
            <span className="mr-2 text-red-600">{subItem.icon}</span>
            {subItem.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DesktopDropdownNavItem;