import api from '@/lib/api/axios';
import { Employee } from '@/features/employees/types';

export const employeeService = {
  getAll: () => api.get<Employee[]>('/employees'),
  create: (data: Omit<Employee, 'id'>) => api.post<Employee>('/employees', data),
  update: (id: number, data: Partial<Employee>) => api.put<Employee>(`/employees/${id}`, data),
  delete: (id: number) => api.delete(`/employees/${id}`),
};