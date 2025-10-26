import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search, Heart } from 'lucide-react';
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  Navigation,
  NavLink,
  HeaderActions,
  ActionButton,
  CartBadge,
  MobileMenuButton,
  MobileMenu,
  MobileNavLink
} from './Header.styles';

interface HeaderProps {
  cartItemsCount: number;
  onCartOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <HeaderContent>
        <Logo>
          <h1>Spice Garden</h1>
          <p>AUTHENTIC INDIAN CUISINE</p>
        </Logo>

        <Navigation>
          {navItems.map((item) => (
            <NavLink 
              key={item.name} 
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              {item.name}
            </NavLink>
          ))}
        </Navigation>

        <HeaderActions>
          <ActionButton>
            <Search size={20} />
          </ActionButton>
          
          <ActionButton>
            <Heart size={20} />
          </ActionButton>

          <ActionButton onClick={onCartOpen}>
            <ShoppingBag size={20} />
            {cartItemsCount > 0 && (
              <CartBadge>
                {cartItemsCount > 99 ? '99+' : cartItemsCount}
              </CartBadge>
            )}
          </ActionButton>

          <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        </HeaderActions>

        <MobileMenu isOpen={isMenuOpen}>
          {navItems.map((item) => (
            <MobileNavLink
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              {item.name}
            </MobileNavLink>
          ))}
        </MobileMenu>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;