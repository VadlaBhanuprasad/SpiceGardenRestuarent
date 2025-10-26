import styled from 'styled-components';

export const HeroSection = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #1a1a1a 0%, #2c1810 100%);
`;

export const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(44, 24, 16, 0.7) 100%);
    z-index: 2;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: slowZoom 20s ease-in-out infinite;
  }

  @keyframes slowZoom {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  color: white;
  max-width: 900px;
  padding: 0 20px;
  animation: fadeInUp 1s ease-out;

  @keyframes fadeInUp {
    from {
      transform: translateY(60px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const HeroTitle = styled.h1`
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 4.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  animation: fadeInUp 1s ease-out 0.2s both;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  
  .highlight {
    background: linear-gradient(135deg, #d97706, #f59e0b, #fbbf24);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 3s ease-in-out infinite;
  }

  @keyframes shimmer {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  line-height: 1.6;
  animation: fadeInUp 1s ease-out 0.4s both;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const HeroActions = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 4rem;
  animation: fadeInUp 1s ease-out 0.6s both;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #d97706, #f59e0b);
  color: white;
  padding: 16px 32px;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.medium};
  box-shadow: 0 4px 15px rgba(217, 119, 6, 0.3);
  
  &:hover {
    background: linear-gradient(135deg, #b45309, #d97706);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(217, 119, 6, 0.4);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const SecondaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: white;
  padding: 16px 32px;
  border: 2px solid white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.medium};
  backdrop-filter: blur(10px);
  
  &:hover {
    background: white;
    color: #1a1a1a;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const HeroFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  animation: fadeInUp 1s ease-out 0.8s both;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const FeatureCard = styled.div`
  text-align: center;
  padding: 2rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all ${props => props.theme.transitions.medium};
  
  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  }
`;

export const FeatureIcon = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #d97706, #f59e0b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transition: all ${props => props.theme.transitions.medium};
  
  ${FeatureCard}:hover & {
    transform: scale(1.15) rotate(5deg);
    box-shadow: 0 8px 20px rgba(217, 119, 6, 0.4);
  }
`;

export const FeatureTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  color: white;
  font-weight: 600;
`;

export const FeatureDescription = styled.p`
  font-size: 1rem;
  opacity: 0.9;
  color: white;
  line-height: 1.5;
`;