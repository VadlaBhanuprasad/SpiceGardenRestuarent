import styled from 'styled-components';

export const MenuSection = styled.section`
  background: linear-gradient(135deg, #fef7ee 0%, #fff7ed 100%);
  padding: 100px 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #d97706, #f59e0b, #fbbf24);
  }
`;

export const MenuContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
  animation: fadeInUp 0.8s ease-out;

  @keyframes fadeInUp {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const SectionTitle = styled.h2`
  font-size: 3.5rem;
  background: linear-gradient(135deg, #d97706, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, #d97706, #f59e0b);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 1.3rem;
  color: #78716c;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

export const MenuControls = styled.div`
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  margin-bottom: 50px;
  animation: slideInUp 0.8s ease-out 0.2s both;

  @keyframes slideInUp {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const ControlsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  flex: 1;
  max-width: 400px;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 15px 20px 15px 50px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  background: #fafafa;
  
  &:focus {
    outline: none;
    border-color: #d97706;
    background: white;
    box-shadow: 0 0 0 3px rgba(217, 119, 6, 0.1);
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  
  ${SearchInput}:focus + & {
    color: #d97706;
  }
`;

export const FilterControls = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
`;

export const FilterButton = styled.button<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border: 2px solid ${props => props.active ? '#d97706' : '#e5e7eb'};
  background: ${props => props.active ? 'linear-gradient(135deg, #d97706, #f59e0b)' : 'white'};
  color: ${props => props.active ? 'white' : '#374151'};
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  
  &:hover {
    border-color: #d97706;
    background: ${props => props.active ? 'linear-gradient(135deg, #b45309, #d97706)' : 'linear-gradient(135deg, #fef3c7, #fed7aa)'};
    transform: translateY(-2px);
  }
`;

export const SortSelect = styled.select`
  padding: 12px 20px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  background: white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  
  &:focus {
    outline: none;
    border-color: #d97706;
    box-shadow: 0 0 0 3px rgba(217, 119, 6, 0.1);
  }
`;

export const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease-out 0.4s both;
`;

export const CategoryTab = styled.button<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px 25px;
  background: ${props => props.active ? 'linear-gradient(135deg, #d97706, #f59e0b)' : 'white'};
  color: ${props => props.active ? 'white' : '#374151'};
  border: 2px solid ${props => props.active ? '#d97706' : '#e5e7eb'};
  border-radius: 20px;
  cursor: pointer;
  box-shadow: ${props => props.active ? '0 8px 25px rgba(217, 119, 6, 0.3)' : '0 4px 15px rgba(0,0,0,0.1)'};
  transform: ${props => props.active ? 'translateY(-5px)' : 'none'};
  min-width: 120px;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(217, 119, 6, 0.2);
    border-color: #d97706;
    background: ${props => props.active ? 'linear-gradient(135deg, #b45309, #d97706)' : 'linear-gradient(135deg, #fef3c7, #fed7aa)'};
  }

  @media (max-width: 768px) {
    min-width: 100px;
    padding: 15px 20px;
  }
`;

export const CategoryIcon = styled.span`
  font-size: 1.8rem;
  
  ${CategoryTab}:hover & {
    transform: scale(1.2);
  }
`;

export const CategoryName = styled.span`
  font-weight: 600;
  font-size: 0.95rem;
  text-align: center;
`;

export const CategoryCount = styled.span`
  font-size: 0.75rem;
  opacity: 0.8;
`;

export const ResultsCount = styled.div`
  text-align: center;
  margin-bottom: 40px;
  color: #6b7280;
  font-size: 1.1rem;
  font-weight: 500;
  animation: fadeIn 0.5s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  animation: fadeInUp 0.8s ease-out 0.6s both;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

export const MenuItem = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  border: 1px solid #f3f4f6;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    border-color: #d97706;
  }
`;

export const MenuItemImage = styled.div`
  position: relative;
  height: 220px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  ${MenuItem}:hover & img {
    transform: scale(1.08);
  }
`;

export const MenuItemBadges = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Badge = styled.span<{ variant?: 'popular' | 'vegetarian' | 'spicy' | 'new' }>`
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: bold;
  color: white;
  backdrop-filter: blur(10px);
  background: ${props => {
    switch (props.variant) {
      case 'popular': return 'linear-gradient(135deg, #dc2626, #ef4444)';
      case 'vegetarian': return 'linear-gradient(135deg, #16a34a, #22c55e)';
      case 'spicy': return 'linear-gradient(135deg, #ea580c, #f97316)';
      case 'new': return 'linear-gradient(135deg, #7c3aed, #8b5cf6)';
      default: return 'linear-gradient(135deg, #d97706, #f59e0b)';
    }
  }};
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
`;

export const MenuItemInfo = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InfoBadge = styled.div`
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 6px 10px;
  border-radius: 15px;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 4px;
  backdrop-filter: blur(10px);
  font-weight: 600;
`;

export const MenuItemContent = styled.div`
  padding: 25px;
`;

export const MenuItemTitle = styled.h3`
  font-size: 1.4rem;
  color: #1f2937;
  margin-bottom: 12px;
  font-weight: 600;
`;

export const MenuItemDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 15px;
  font-size: 0.95rem;
`;

export const MenuItemDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 0.85rem;
  color: #9ca3af;
  font-weight: 500;
`;

export const MenuItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuItemPrice = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  background: linear-gradient(135deg, #d97706, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const AddToCartButton = styled.button`
  background: linear-gradient(135deg, #d97706, #f59e0b);
  color: white;
  border: none;
  padding: 12px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(217, 119, 6, 0.3);
  
  &:hover {
    background: linear-gradient(135deg, #b45309, #d97706);
    transform: scale(1.15);
    box-shadow: 0 6px 20px rgba(217, 119, 6, 0.4);
  }

  &:active {
    transform: scale(1.05);
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 80px 20px;
  color: #6b7280;
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    color: #374151;
  }
  
  p {
    font-size: 1.1rem;
  }
`;