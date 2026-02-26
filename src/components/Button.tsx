'use client';

import { Button as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material';
import React from 'react';

// Define props for our custom Button
interface ButtonProps extends MUIButtonProps {
  onClick?: () => void;    // Optional click handler
}

// Reusable Button component
const Button: React.FC<ButtonProps> = ({ children, onClick, color = 'primary', variant = 'contained', size = 'medium', ...rest }) => {
  return (
    <MUIButton
      color={color}
      variant={variant}
      size={size}
      onClick={onClick}
      {...rest} // Spread any other MUI props
    >
      {children}
    </MUIButton>
  );
};

export default Button;