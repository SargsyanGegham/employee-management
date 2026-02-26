// Mark this component as a Client Component for Next.js
'use client';

import { useState, useEffect, useMemo } from 'react';
import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import { Box, Snackbar, Alert, TextField, InputAdornment, useMediaQuery, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { clearError } from '@/redux/slices/employeeSlice';
import { addEmployee, deleteEmployee, fetchEmployees, updateEmployee } from '@/redux/thunks/employeeThunks';
import EmployeeDialog from './EmployeeDialog';
import { Employee, EmployeeFormValues } from '../types/employee.types';
import DeleteDialog from './DeleteDialog';
import Button from '@/components/Button';
import { useDebounce } from '@/hooks/useDebounce';

/**
 * Employee table component that displays employees in a data grid
 * Provides CRUD operations through dialogs and handles loading/error states
 * Includes search functionality with debounce to filter employees by name, email, or position
 * Responsive columns that adapt to different screen sizes
 * @returns {JSX.Element} Employee management interface with data grid and action dialogs
 */
export default function EmployeeTable() {
  const dispatch = useAppDispatch();
  const { list: employees, loading, error } = useAppSelector((state) => state.employees);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState<number | null>(null);
  const [formLoading, setFormLoading] = useState(false);
  
  const [searchInput, setSearchInput] = useState('');
  const debouncedSearch = useDebounce(searchInput, 300);

  // Fetch employees on component mount
  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  /**
   * Filters employees based on debounced search query
   * Searches across name, email, and position fields
   * @returns {Employee[]} Filtered employee list
   */
  const filteredEmployees = useMemo(() => {
    if (!debouncedSearch.trim()) return employees;
    
    const query = debouncedSearch.toLowerCase().trim();
    return employees.filter((employee) => 
      employee.name.toLowerCase().includes(query) ||
      employee.email.toLowerCase().includes(query) ||
      employee.position.toLowerCase().includes(query)
    );
  }, [employees, debouncedSearch]);

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

  /**
   * Clears search input
   */
  const handleClearSearch = () => {
    setSearchInput('');
  };

  // Responsive column definitions based on screen size
  const columns: GridColDef[] = useMemo(() => {
    // Base columns that always show
    const baseColumns: GridColDef[] = [
      { 
        field: 'id', 
        headerName: 'ID', 
        width: isMobile ? 60 : 90,
        flex: isMobile ? 0.5 : undefined
      },
      { 
        field: 'name', 
        headerName: 'Name', 
        width: isMobile ? 120 : (isTablet ? 150 : 200),
        flex: isMobile ? 1 : undefined
      },
    ];

    // Add email for tablet and desktop
    if (!isMobile) {
      baseColumns.push({ 
        field: 'email', 
        headerName: 'Email', 
        width: isTablet ? 150 : 200,
        flex: isTablet ? 1 : undefined
      });
    }

    // Add position for tablet and desktop
    if (!isMobile) {
      baseColumns.push({ 
        field: 'position', 
        headerName: 'Position', 
        width: isTablet ? 150 : 200,
        flex: isTablet ? 1 : undefined
      });
    }

    // Add salary for desktop only
    if (!isMobile && !isTablet) {
      baseColumns.push({ 
        field: 'salary', 
        headerName: 'Salary', 
        width: 130, 
        type: 'number' 
      });
    }

    // Actions column always shows
    baseColumns.push({
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: isMobile ? 80 : 100,
      flex: isMobile ? 0.5 : undefined,
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
    });

    return baseColumns;
  }, [isMobile, isTablet]);

  return (
    <Box sx={{ height: isMobile ? 400 : 500, width: '100%' }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between', 
        alignItems: isMobile ? 'stretch' : 'center', 
        gap: 2,
        mb: 2 
      }}>
        <Button variant="contained" onClick={handleAdd} fullWidth={isMobile}>
          Add Employee
        </Button>
        
        <TextField
          placeholder={isMobile ? "Search..." : "Search by name, email, or position..."}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          size="small"
          sx={{ width: isMobile ? '100%' : 300 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
            endAdornment: searchInput ? (
              <InputAdornment position="end">
                <Box
                  component="span"
                  onClick={handleClearSearch}
                  sx={{ 
                    cursor: 'pointer',
                    color: 'text.secondary',
                    '&:hover': { color: 'text.primary' }
                  }}
                >
                  ✕
                </Box>
              </InputAdornment>
            ) : null
          }}
        />
      </Box>

      {debouncedSearch && (
        <Box sx={{ mb: 1, color: 'text.secondary' }}>
          Found {filteredEmployees.length} employee{filteredEmployees.length !== 1 ? 's' : ''}
        </Box>
      )}

      <DataGrid
        rows={filteredEmployees}
        columns={columns}
        loading={loading}
        pageSizeOptions={isMobile ? [5, 10] : [5, 10, 20]}
        initialState={{
          pagination: { paginationModel: { pageSize: isMobile ? 5 : 10 } },
        }}
        density={isMobile ? 'compact' : 'standard'}
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