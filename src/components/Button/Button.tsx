import React, { forwardRef } from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ 
  children, 
  variant = 'primary', 
  onClick 
}, ref) => {
  return (
    <button 
      className={`custom-button ${variant}`}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </button>
  );
});