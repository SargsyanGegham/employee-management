'use client';

import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';

// Input component props
type InputProps = {
  label: string;                 // Field label
  placeholder?: string;          // Optional placeholder
  errorMessage?: string;         // Optional error text
} & TextFieldProps

// Reusable Input
const Input: React.FC<InputProps> = ({ label, placeholder, errorMessage, ...rest }) => {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      error={!!errorMessage}
      helperText={errorMessage}
      fullWidth
      {...rest} // Spread other TextField props like type, value, onChange
    />
  );
};

export default Input;