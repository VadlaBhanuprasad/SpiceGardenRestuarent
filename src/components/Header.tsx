import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search, Heart } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Reservations', href: '#reservations' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-xl py-3 border-b border-gray-100' 
        : 'bg-white/90 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`font-serif font-bold text-secondary-900 transition-all duration-300 ${
              isScrolled ? 'text-2xl' : 'text-3xl'
            }`}>
              Bella Vista
            </h1>
            <p className="text-xs text-primary-600 font-medium tracking-wider">FINE DINING</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-secondary-700 hover:text-primary-600 transition-all duration-300 font-medium py-2 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex p-2 text-secondary-700 hover:text-primary-600 transition-colors duration-200 hover:bg-primary-50 rounded-full">
              <Search className="w-5 h-5" />
            </button>
            
            <button className="hidden md:flex p-2 text-secondary-700 hover:text-primary-600 transition-colors duration-200 hover:bg-primary-50 rounded-full">
              <Heart className="w-5 h-5" />
            </button>

            <button
              onClick={onCartOpen}
              className="relative p-2 text-secondary-700 hover:text-primary-600 transition-all duration-200 hover:bg-primary-50 rounded-full group"
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cartItemsCount > 99 ? '99+' : cartItemsCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-secondary-700 hover:text-primary-600 transition-colors duration-200 hover:bg-primary-50 rounded-full"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-secondary-200 bg-white/95 backdrop-blur-sm rounded-lg mt-2">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-secondary-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 font-medium py-3 px-4 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;