import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Employee } from '@/features/employees/types';
import { addEmployee, deleteEmployee, fetchEmployees, updateEmployee } from '../thunks/employeeThunks';

/**
 * Employee state interface defining the structure of employees in Redux store
 * @property {Employee[]} list - Array of employee objects
 * @property {boolean} loading - Loading state indicator for async operations
 * @property {string | null} error - Error message if any operation fails
 */
interface EmployeeState {
  list: Employee[];
  loading: boolean;
  error: string | null;
}

// Initial state for employee slice
const initialState: EmployeeState = {
  list: [],
  loading: false,
  error: null,
};

/**
 * Redux slice for employee management
 * Handles synchronous actions and async thunk states for CRUD operations
 */
const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    // Clear any error messages from the state
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle fetch employees thunk states
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmployees.fulfilled, (state, action: PayloadAction<Employee[]>) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      
      // Handle add employee success
      .addCase(addEmployee.fulfilled, (state, action: PayloadAction<Employee>) => {
        state.list.push(action.payload);
      })
      
      // Handle update employee success
      .addCase(updateEmployee.fulfilled, (state, action: PayloadAction<Employee>) => {
        const index = state.list.findIndex(emp => emp.id === action.payload.id);
        if (index !== -1) state.list[index] = action.payload;
      })
      
      // Handle delete employee success
      .addCase(deleteEmployee.fulfilled, (state, action: PayloadAction<number>) => {
        state.list = state.list.filter(emp => emp.id !== action.payload);
      });
  },
});

export const { clearError } = employeeSlice.actions;
export default employeeSlice.reducer;