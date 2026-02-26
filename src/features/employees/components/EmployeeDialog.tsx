// Mark this component as a Client Component for Next.js
'use client';

import { Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material';
import EmployeeForm from './EmployeeForm';
import { EmployeeFormValues } from '../types/employee.types';

/**
 * Props interface for the EmployeeDialog component
 * @property {boolean} open - Controls dialog visibility
 * @property {function} onClose - Callback function when dialog is closed
 * @property {function} onSubmit - Callback function when form is submitted
 * @property {EmployeeFormValues} [initialValues] - Initial form values for editing mode
 * @property {string} title - Dialog title text
 * @property {boolean} [isLoading] - Loading state to disable form interactions
 */
interface EmployeeDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: EmployeeFormValues) => void;
  initialValues?: EmployeeFormValues;
  title: string;
  isLoading?: boolean;
}

/**
 * Employee dialog component that wraps the employee form in a modal dialog
 * Provides a consistent layout for both add and edit operations
 * @param {EmployeeDialogProps} props - Component props
 * @returns {JSX.Element} Material-UI Dialog containing employee form
 */
export default function EmployeeDialog({
  open,
  onClose,
  onSubmit,
  initialValues,
  title,
  isLoading,
}: EmployeeDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      
      <DialogContent>
        <DialogContentText sx={{ mb: 2 }}>
          Please fill in the employee details below.
        </DialogContentText>
        
        <EmployeeForm
          initialValues={initialValues}
          onSubmit={onSubmit}
          onCancel={onClose}
          isLoading={isLoading}
        />
      </DialogContent>
    </Dialog>
  );
}