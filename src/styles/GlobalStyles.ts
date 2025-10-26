import  { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: #1f2937;
    background-color: #fefefe;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    line-height: 1.2;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .section-padding {
    padding: 100px 0;
  }

  /* Custom animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInRight {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideInLeft {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -200px 0;
    }
    100% {
      background-position: calc(200px + 100%) 0;
    }
  }

  .animate-fade-in {
    animation: fadeIn 0.6s ease-out;
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out;
  }

  .animate-slide-in-right {
    animation: slideInRight 0.3s ease-out;
  }

  .animate-slide-in-left {
    animation: slideInLeft 0.3s ease-out;
  }

  .animate-scale-in {
    animation: scaleIn 0.4s ease-out;
  }

  .animate-bounce {
    animation: bounce 2s infinite;
  }

  .animate-pulse {
    animation: pulse 2s infinite;
  }

  .animate-shimmer {
    animation: shimmer 2s infinite;
  }

  /* Smooth transitions for all interactive elements */
  button, a, input, select, textarea {
    transition: all 0.3s ease;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #d97706, #f59e0b);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #b45309, #d97706);
  }

  @media (max-width: 768px) {
    .section-padding {
      padding: 80px 0;
    }
    
    .container {
      padding: 0 15px;
    }
  }

  /* Focus styles for accessibility */
  button:focus,
  a:focus,
  input:focus,
  select:focus,
  textarea:focus {
    outline: 2px solid #d97706;
    outline-offset: 2px;
  }

  /* Reduced motion for users who prefer it */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export const theme = {
  colors: {
    primary: '#d97706',
    primaryDark: '#b45309',
    secondary: '#1f2937',
    accent: '#dc2626',
    light: '#fef7ee',
    white: '#ffffff',
    gray: '#6b7280',
    lightGray: '#e5e7eb',
    dark: '#111827',
    success: '#16a34a',
    warning: '#f59e0b',
    danger: '#dc2626'
  },
  fonts: {
    primary: "'Inter', sans-serif",
    secondary: "'Playfair Display', serif"
  },
  shadows: {
    light: '0 4px 15px rgba(0,0,0,0.1)',
    medium: '0 8px 25px rgba(0,0,0,0.15)',
    heavy: '0 15px 35px rgba(0,0,0,0.2)'
  },
  transitions: {
    fast: '0.2s ease',
    medium: '0.3s ease',
    slow: '0.5s ease'
  }
};