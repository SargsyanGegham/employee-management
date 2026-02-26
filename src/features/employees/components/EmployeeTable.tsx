// Mark this component as a Client Component for Next.js
'use client';

import { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import { Box, Snackbar, Alert } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { clearError } from '@/redux/slices/employeeSlice';
import { addEmployee, deleteEmployee, fetchEmployees, updateEmployee } from '@/redux/thunks/employeeThunks';
import EmployeeDialog from './EmployeeDialog';
import { Employee, EmployeeFormValues } from '../types/employee.types';
import DeleteDialog from './DeleteDialog';
import Button from '@/components/Button';

/**
 * Employee table component that displays employees in a data grid
 * Provides CRUD operations through dialogs and handles loading/error states
 * @returns {JSX.Element} Employee management interface with data grid and action dialogs
 */
export default function EmployeeTable() {
  const dispatch = useAppDispatch();
  const { list: employees, loading, error } = useAppSelector((state) => state.employees);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState<number | null>(null);
  const [formLoading, setFormLoading] = useState(false);

  // Fetch employees on component mount
  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  /**
   * Opens add employee dialog with empty form
   */
  const handleAdd = () => {
    setEditingEmployee(null);
    setDialogOpen(true);
  };

  /**
   * Opens edit employee dialog with pre-filled form data
   * @param {Employee} employee - Employee data to edit
   */
  const handleEdit = (employee: Employee) => {
    setEditingEmployee(employee);
    setDialogOpen(true);
  };

  /**
   * Opens delete confirmation dialog for selected employee
   * @param {number} id - ID of employee to delete
   */
  const handleDelete = (id: number) => {
    setEmployeeToDelete(id);
    setDeleteDialogOpen(true);
  };

  /**
   * Handles form submission for add/edit operations
   * Dispatches appropriate thunk based on whether editing or adding
   * @param {EmployeeFormValues} values - Form values from employee dialog
   */
  const handleFormSubmit = async (values: EmployeeFormValues) => {
    setFormLoading(true);
    try {
      if (editingEmployee) {
        await dispatch(updateEmployee({ id: editingEmployee.id, data: values })).unwrap();
      } else {
        await dispatch(addEmployee(values)).unwrap();
      }
      setDialogOpen(false);
    } catch {
      // Error is already handled in Redux state via rejected action
    } finally {
      setFormLoading(false);
    }
  };

  /**
   * Handles delete confirmation action
   * Dispatches delete thunk and closes dialog on success
   */
  const handleDeleteConfirm = async () => {
    if (employeeToDelete) {
      setFormLoading(true);
      try {
        await dispatch(deleteEmployee(employeeToDelete)).unwrap();
        setDeleteDialogOpen(false);
      } catch {
        // Error is already handled in Redux state
      } finally {
        setFormLoading(false);
        setEmployeeToDelete(null);
      }
    }
  };

  // Data grid column definitions
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'position', headerName: 'Position', width: 200 },
    { field: 'salary', headerName: 'Salary', width: 130, type: 'number' },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          key='edit'
          label="Edit"
          onClick={() => handleEdit(params.row as Employee)}
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          key="Delete"
          onClick={() => handleDelete(params.id as number)}
        />,
      ],
    },
  ];

  return (
    <Box sx={{ height: 500 }}>
      <Button variant="contained" onClick={handleAdd} sx={{ mb: 2 }}>
        Add Employee
      </Button>

      <DataGrid
        rows={employees}
        columns={columns}
        loading={loading}
        pageSizeOptions={[5, 10, 20]}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
      />

      <EmployeeDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSubmit={handleFormSubmit}
        initialValues={editingEmployee || undefined}
        title={editingEmployee ? 'Edit Employee' : 'Add Employee'}
        isLoading={formLoading}
      />

      <DeleteDialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={handleDeleteConfirm}
        isLoading={formLoading}
      />

      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => dispatch(clearError())}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="error" onClose={() => dispatch(clearError())}>
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
}