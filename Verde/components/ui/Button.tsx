
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', variant = 'primary', ...props }) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-green-600 focus:ring-green-500',
    secondary: 'bg-green-100 text-green-800 hover:bg-green-200 focus:ring-green-500',
    outline: 'bg-transparent border border-primary text-primary hover:bg-green-50 focus:ring-green-500',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
