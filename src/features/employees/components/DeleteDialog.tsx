// Mark this component as a Client Component for Next.js
'use client';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';

/**
 * Props interface for the DeleteDialog component
 * @property {boolean} open - Controls dialog visibility
 * @property {function} onClose - Callback function when dialog is closed (cancel)
 * @property {function} onConfirm - Callback function when delete is confirmed
 * @property {boolean} [isLoading] - Loading state to disable buttons during deletion
 */
interface DeleteDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isLoading?: boolean;
}

/**
 * Delete confirmation dialog component
 * Provides a warning message and confirmation options before deleting an employee
 * @param {DeleteDialogProps} props - Component props
 * @returns {JSX.Element} Confirmation dialog with cancel and delete actions
 */
export default function DeleteDialog({ open, onClose, onConfirm, isLoading }: DeleteDialogProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Delete</DialogTitle>
      
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this employee? This action cannot be undone.
        </DialogContentText>
      </DialogContent>
      
      <DialogActions>
        <Button onClick={onClose} disabled={isLoading}>
          Cancel
        </Button>
        
        <Button 
          onClick={onConfirm} 
          color="error" 
          variant="contained" 
          disabled={isLoading}
        >
          {isLoading ? 'Deleting...' : 'Delete'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}