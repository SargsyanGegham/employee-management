import { z } from 'zod';

export const employeeSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  position: z.string().min(1, 'Position is required'),
  salary: z.number().positive('Salary must be positive'),
});

export type EmployeeFormValues = z.infer<typeof employeeSchema>;

export interface Employee extends EmployeeFormValues {
  id: number;
}