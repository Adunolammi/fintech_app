import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-4 py-2 rounded-full font-medium transition-all duration-200 text-sm';
  
  const variants = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-700',
    outline: 'border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50',
    secondary: 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;