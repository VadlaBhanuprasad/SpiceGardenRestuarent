import React from 'react';
import { ChefHat, Clock, Award, ArrowDown } from 'lucide-react';
import {
  HeroSection,
  HeroBackground,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroActions,
  PrimaryButton,
  SecondaryButton,
  HeroFeatures,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription
} from './Hero.styles';

const Hero: React.FC = () => {
  const handleScrollToMenu = () => {
    const menuSection = document.querySelector('#menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToReservations = () => {
    const reservationsSection = document.querySelector('#reservations');
    if (reservationsSection) {
      reservationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection id="home">
      <HeroBackground>
        <img
          src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Authentic Indian Restaurant Interior"
        />
      </HeroBackground>

      <HeroContent>
        <HeroTitle>
          Welcome to <span className="highlight">Spice Garden</span>
        </HeroTitle>
        
        <HeroSubtitle>
          Experience the authentic flavors of India in an atmosphere of warmth and tradition. 
          Where every dish tells a story of heritage, spices, and culinary mastery.
        </HeroSubtitle>

        <HeroActions>
          <PrimaryButton onClick={handleScrollToMenu}>
            Explore Our Menu
            <ArrowDown size={20} />
          </PrimaryButton>
          <SecondaryButton onClick={handleScrollToReservations}>
            Reserve Your Table
          </SecondaryButton>
        </HeroActions>

        <HeroFeatures>
          <FeatureCard>
            <FeatureIcon>
              <ChefHat size={24} color="white" />
            </FeatureIcon>
            <FeatureTitle>Master Chefs</FeatureTitle>
            <FeatureDescription>Authentic Indian chefs with generations of culinary expertise</FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>
              <Clock size={24} color="white" />
            </FeatureIcon>
            <FeatureTitle>Fresh Spices</FeatureTitle>
            <FeatureDescription>Premium spices imported directly from India every month</FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>
              <Award size={24} color="white" />
            </FeatureIcon>
            <FeatureTitle>30+ Years</FeatureTitle>
            <FeatureDescription>Three decades of serving authentic Indian cuisine</FeatureDescription>
          </FeatureCard>
        </HeroFeatures>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;