// Mark this component as a Client Component for Next.js
'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Stack } from '@mui/material';
import { employeeSchema, EmployeeFormValues } from '../types/employee.types';
import Input from '@/components/Input';
import Button from '@/components/Button';

/**
 * Props interface for the EmployeeForm component
 * @property {EmployeeFormValues} [initialValues] - Initial form values for editing mode
 * @property {function} onSubmit - Callback function when form is submitted with valid data
 * @property {function} onCancel - Callback function when cancel button is clicked
 * @property {boolean} [isLoading] - Loading state to disable form interactions
 */
interface EmployeeFormProps {
  initialValues?: EmployeeFormValues;
  onSubmit: (data: EmployeeFormValues) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

/**
 * Employee form component for creating and editing employee records
 * Uses react-hook-form with zod validation for type-safe form handling
 * @param {EmployeeFormProps} props - Component props
 * @returns {JSX.Element} Form with employee fields and validation
 */
export default function EmployeeForm({
  initialValues = { name: '', email: '', position: '', salary: 0 },
  onSubmit,
  onCancel,
  isLoading = false,
}: EmployeeFormProps) {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EmployeeFormValues>({
    resolver: zodResolver(employeeSchema),
    defaultValues: initialValues,
  });

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
      <Stack spacing={3}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Name"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
              disabled={isLoading}
            />
          )}
        />
        
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Email"
              type="email"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
              disabled={isLoading}
            />
          )}
        />
        
        <Controller
          name="position"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Position"
              fullWidth
              error={!!errors.position}
              helperText={errors.position?.message}
              disabled={isLoading}
            />
          )}
        />
        
        <Controller
          name="salary"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Salary"
              type="number"
              fullWidth
              error={!!errors.salary}
              helperText={errors.salary?.message}
              disabled={isLoading}
              onChange={(e) => field.onChange(Number(e.target.value))}
            />
          )}
        />
        
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button onClick={onCancel} disabled={isLoading}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" disabled={isLoading}>
            {isLoading ? 'Saving...' : 'Save'}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}