import styled from 'styled-components';

export const HeaderContainer = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)'};
  backdrop-filter: blur(15px);
  border-bottom: ${props => props.isScrolled ? '1px solid #e9ecef' : 'none'};
  transition: all ${props => props.theme.transitions.medium};
  padding: ${props => props.isScrolled ? '12px 0' : '18px 0'};
  box-shadow: ${props => props.isScrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none'};
  animation: slideDown 0.6s ease-out;

  @keyframes slideDown {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Logo = styled.div`
  animation: fadeInLeft 0.8s ease-out;
  
  h1 {
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 2.2rem;
    color: #d97706;
    margin: 0;
    transition: all ${props => props.theme.transitions.medium};
    background: linear-gradient(135deg, #d97706, #f59e0b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  p {
    font-size: 0.7rem;
    color: #dc2626;
    letter-spacing: 2px;
    margin: 0;
    font-weight: 600;
    text-transform: uppercase;
  }

  @keyframes fadeInLeft {
    from {
      transform: translateX(-30px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 2.5rem;
  animation: fadeInUp 0.8s ease-out 0.2s both;
  
  @media (max-width: 768px) {
    display: none;
  }

  @keyframes fadeInUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.secondary};
  font-weight: 500;
  position: relative;
  padding: 8px 0;
  transition: all ${props => props.theme.transitions.medium};
  cursor: pointer;
  
  &:hover {
    color: #d97706;
    transform: translateY(-2px);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #d97706, #f59e0b);
    transition: width ${props => props.theme.transitions.medium};
  }
  
  &:hover::after {
    width: 100%;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  animation: fadeInRight 0.8s ease-out 0.4s both;

  @keyframes fadeInRight {
    from {
      transform: translateX(30px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  color: ${props => props.theme.colors.secondary};
  transition: all ${props => props.theme.transitions.fast};
  position: relative;
  
  &:hover {
    background: linear-gradient(135deg, #fef3c7, #fed7aa);
    color: #d97706;
    transform: scale(1.1);
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -2px;
  right: -2px;
  background: linear-gradient(135deg, #dc2626, #ef4444);
  color: white;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: ${props => props.theme.colors.secondary};
  transition: all ${props => props.theme.transitions.fast};
  
  &:hover {
    color: #d97706;
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(15px);
  border-top: 1px solid ${props => props.theme.colors.lightGray};
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  transform: translateY(${props => props.isOpen ? '0' : '-100%'});
  opacity: ${props => props.isOpen ? '1' : '0'};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all ${props => props.theme.transitions.medium};
  
  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileNavLink = styled.a`
  display: block;
  padding: 18px 20px;
  text-decoration: none;
  color: ${props => props.theme.colors.secondary};
  font-weight: 500;
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
  transition: all ${props => props.theme.transitions.fast};
  cursor: pointer;
  
  &:hover {
    background: linear-gradient(135deg, #fef3c7, #fed7aa);
    color: #d97706;
    transform: translateX(10px);
  }
  
  &:last-child {
    border-bottom: none;
  }
`;