import { Link } from 'react-router-dom';
import { MenuItem } from '../../../types/navigation';

interface DesktopNavItemProps {
  item: MenuItem;
  isActive: boolean;
}

const DesktopNavItem = ({ item, isActive }: DesktopNavItemProps) => {
  return (
    <Link
      to={item.href}
      className={`text-base lg:text-lg font-medium border-b-2 transition-all ${
        isActive
          ? 'border-white text-white'
          : 'border-transparent text-white hover:border-white/50 hover:text-white/90'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {item.name}
    </Link>
  );
};

export default DesktopNavItem;