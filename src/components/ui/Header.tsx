import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Radio, Tv } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStationsOpen, setIsStationsOpen] = useState(false);
 const stationsMenuRef = useRef<HTMLDivElement>(null);
const stationsButtonRef = useRef<HTMLButtonElement>(null);
  
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

  // Handle clicks outside the stations dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        stationsMenuRef.current && 
        !stationsMenuRef.current.contains(event.target as Node) &&
        stationsButtonRef.current &&
        !stationsButtonRef.current.contains(event.target as Node)
      ) {
        setIsStationsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigation = [
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
const toggleStationsMenu: React.MouseEventHandler<HTMLButtonElement> = (e) => {
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
            {navigation.map((item) => (
              item.hasSubmenu ? (
                <div key={item.name} className="relative group">
                  <button
                    ref={stationsButtonRef}
                    onClick={toggleStationsMenu}
                    className={`flex items-center text-base lg:text-lg font-medium border-b-2 transition-all ${
                      isActive(item.href)
                        ? 'border-white text-white'
                        : 'border-transparent text-white hover:border-white/50 hover:text-white/90'
                    }`}
                    aria-expanded={isStationsOpen}
                    aria-haspopup="true"
                  >
                    {item.name}
                    <ChevronDown 
                      size={16} 
                      className={`ml-1 transition-transform ${isStationsOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  {/* Desktop dropdown */}
                  <div
                    ref={stationsMenuRef}
                    className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 transform transition-all origin-top-left
                      ${isStationsOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                  >
                    {item.submenu.map((subItem) => (
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
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base lg:text-lg font-medium border-b-2 transition-all ${
                    isActive(item.href)
                      ? 'border-white text-white'
                      : 'border-transparent text-white hover:border-white/50 hover:text-white/90'
                  }`}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
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

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
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
                    
                    {/* Mobile submenu */}
                    {isStationsOpen && (
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
      )}
    </header>
  );
};

export default Header;