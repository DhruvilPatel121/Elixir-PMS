import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  startIcon,
  endIcon,
  onClick,
  disabled = false,
  fullWidth = false,
  type = 'button',
  children,
  customStyles = {},
  ...props
}) => {
  const getDefaultStyles = () => {
    const baseStyles = {
      textTransform: 'none',
      borderRadius: '4px',
      fontSize: '14px',
    };

    const variantStyles = {
      outlined: {
        border: '1px solid #ddd',
        color: '#666',
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
          borderColor: '#ddd',
        },
      },
      contained: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
      },
      text: {
        color: '#666',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        },
      },
    };

    return {
      ...baseStyles,
      ...(variantStyles[variant] || {}),
      ...customStyles,
    };
  };

  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      type={type}
      sx={getDefaultStyles()}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton