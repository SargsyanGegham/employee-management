// Code Style Snapshot Example
// This file demonstrates the code style guidelines from code-style.prompt.md

import React, { useState, useMemo } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { Employee } from '@/features/employees/types/employee.types';

// Interface for component props (no any types)
interface EmployeeCardProps {
  employee: Employee;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

// Arrow function component (as per guidelines)
const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee, onEdit, onDelete }) => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.employees);

  // useMemo for expensive computations (performance guideline)
  const displayName = useMemo(() => {
    return `${employee.name} - ${employee.position}`;
  }, [employee.name, employee.position]);

  // No try-catch in component (error handling at service layer)
  const handleEdit = () => {
    onEdit(employee.id);
  };

  const handleDelete = () => {
    onDelete(employee.id);
  };

  return (
    <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 1, mb: 2 }}>
      <Typography variant="h6">{displayName}</Typography>
      <Typography variant="body2" color="text.secondary">
        {employee.email}
      </Typography>
      <Typography variant="body2">
        Salary: ${employee.salary?.toLocaleString() || 'N/A'}
      </Typography>

      <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
        <Button
          variant="outlined"
          size="small"
          onClick={handleEdit}
          disabled={loading}
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={handleDelete}
          disabled={loading}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
};

// Default export (as per guidelines)
export default EmployeeCard;