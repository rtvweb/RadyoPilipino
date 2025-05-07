import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Stations', href: '/stations' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-gradient-to-r from-red-600 via-yellow-500 to-green-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 text-white font-bold text-2xl">
            Radyo Pilipino
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-lg font-medium border-b-2 transition-all ${
                  isActive(item.href)
                    ? 'border-white text-white'
                    : 'border-transparent text-white hover:border-white/50 hover:text-white/90'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;
