# Employee Management Application - Code Documentation

## Overview

This is a modern employee management application built with Next.js 16, TypeScript, and Material-UI. The application provides a complete CRUD interface for managing employee records with authentication, responsive design, and comprehensive testing.

## Architecture & Tech Stack

### Core Framework

- **Next.js 16.1.6** - React meta-framework with App Router
- **React 19.2.3** - UI library with Server Components support
- **TypeScript 5** - Type-safe development

### State Management & Forms

- **Redux Toolkit 2.11.2** - Predictable state container
- **React-Redux 9.2.0** - Redux React bindings
- **React Hook Form 7.71.2** - Lightweight form management
- **Zod 4.3.6** - Runtime schema validation

### UI & Styling

- **Material-UI (MUI) 7.3.8** - Component library
- **MUI X Data Grid 8.27.3** - Advanced data table
- **Emotion 11.14.x** - CSS-in-JS styling
- **Tailwind CSS 4** - Utility-first CSS framework

### API & Development Tools

- **Axios 1.13.5** - HTTP client with interceptors
- **json-server 1.0.0-beta.9** - Mock REST API
- **Storybook 10.2.17** - Component development
- **Jest 30.3.0** & **Vitest 4.1.0** - Testing frameworks
- **Playwright 1.58.2** - E2E testing

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Home/redirect page
│   ├── login/page.tsx           # Login page
│   └── dashboard/employees/     # Protected employee management
├── components/                  # Shared UI components
│   ├── Button.tsx              # Reusable button component
│   ├── Input.tsx               # Form input component
│   └── Button.test.tsx          # Component unit tests
├── features/                    # Feature-based modules
│   ├── auth/                    # Authentication feature
│   │   ├── components/
│   │   │   └── loginForm.tsx   # Login form component
│   │   ├── services/
│   │   │   └── authService.ts  # Auth API service
│   │   └── types/
│   │       └── index.ts        # Auth type definitions
│   └── employees/               # Employee management feature
│       ├── components/          # Employee UI components
│       │   ├── EmployeeTable.tsx    # Main data grid
│       │   ├── EmployeeForm.tsx     # Employee form
│       │   ├── EmployeeDialog.tsx   # Add/edit modal
│       │   └── DeleteDialog.tsx     # Delete confirmation
│       ├── services/
│       │   └── employeeService.ts   # Employee API service
│       ├── types/
│       │   ├── employee.types.ts    # Employee types
│       │   └── index.ts            # Type exports
├── providers/                   # React context providers
│   ├── AuthProvider.tsx        # Authentication context
│   ├── ReduxProvider.tsx       # Redux store provider
│   └── ThemeProvider.tsx       # MUI theme provider
├── redux/                       # State management
│   ├── store.ts                # Redux store configuration
│   ├── rootReducer.ts          # Root reducer combination
│   ├── slices/
│   │   └── employeeSlice.ts    # Employee state slice
│   └── thunks/
│       └── employeeThunks.ts   # Async action creators
├── lib/                         # Shared utilities
│   ├── api/
│   │   └── axios.ts            # Axios instance config
│   ├── auth/                   # Auth utilities (empty)
│   ├── style/
│   │   └── theme.ts            # MUI theme configuration
│   └── utils/
│       ├── errorHandler.ts     # Error handling utilities
│       └── index.ts            # Utility exports
├── hooks/                       # Custom React hooks
│   ├── useDebounce.ts          # Debounce hook for search
│   └── useRedux.ts             # Typed Redux hooks
└── types/                       # Global type definitions
    └── index.ts                # Global types
```

## Key Features

### Authentication System

- Email/password login with form validation
- Session persistence via localStorage
- Protected routes with automatic redirects
- Global authentication context

### Employee Management

- **CRUD Operations**: Create, Read, Update, Delete employees
- **Data Grid**: Responsive table with sorting/filtering
- **Search**: Debounced search across name, email, position
- **Forms**: Modal dialogs for add/edit with validation
- **Confirmation**: Delete confirmation dialog

### User Interface

- Fully responsive design (mobile/tablet/desktop)
- Material-UI components with custom theming
- Loading states and error handling
- Snackbar notifications for user feedback

## State Management

### Redux Store Structure

The application uses Redux Toolkit for predictable state management:

```typescript
// Employee state slice
interface EmployeeState {
  list: Employee[]; // Employee records
  loading: boolean; // Async operation indicator
  error: string | null; // Error message storage
}
```

### Async Thunks

Employee operations are handled by async thunks in `employeeThunks.ts`:

- `fetchEmployees()` - Load all employees
- `addEmployee(data)` - Create new employee
- `updateEmployee({id, data})` - Update existing employee
- `deleteEmployee(id)` - Remove employee

Each thunk properly handles pending/fulfilled/rejected states for loading and error management.

## API Integration

### Axios Configuration

The app uses a configured Axios instance (`lib/api/axios.ts`):

```typescript
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000",
  headers: { "Content-Type": "application/json" },
});
```

### Employee Service

API calls are abstracted in `employeeService.ts`:

```typescript
export const employeeService = {
  getAll: () => api.get("/employees"),
  create: (data) => api.post("/employees", data),
  update: (id, data) => api.put(`/employees/${id}`, data),
  delete: (id) => api.delete(`/employees/${id}`),
};
```

### Error Handling

- Centralized error parsing utility
- Redux rejection handling
- Component-level error display via Snackbar

## Component Architecture

### Feature-Based Organization

Components are organized by feature (auth, employees) with clear separation:

- **Components**: UI components specific to the feature
- **Services**: API communication layer
- **Types**: TypeScript definitions

### Shared Components

Reusable components in `/components`:

- `Button.tsx` - Custom button with variants
- `Input.tsx` - Form input wrapper

### Custom Hooks

- `useDebounce` - Search input debouncing
- `useRedux` - Typed Redux hooks

## Authentication Flow

1. User submits credentials on login page
2. `authService.login()` validates against `/users` endpoint
3. User data stored in AuthProvider context and localStorage
4. Protected routes check authentication status
5. Unauthenticated users redirected to `/login`

## Testing Strategy

### Unit Testing (Jest)

- Component testing with Testing Library
- Redux slice and thunk testing
- Utility function testing

### Component Testing (Vitest + Storybook)

- Isolated component development
- Visual regression testing
- Interaction testing

### E2E Testing (Playwright)

- Full user journey testing
- Login flow validation
- CRUD operation testing

## Development Workflow

### Local Development

```bash
npm run dev          # Start Next.js + json-server + Storybook
npm run storybook    # Component development
npm run test:jest    # Unit tests
npm run test:e2e     # E2E tests
```

### Build & Deployment

```bash
npm run build        # Production build
npm start           # Production server
```

## Configuration

### Environment Variables

- `NEXT_PUBLIC_API_URL` - API base URL (defaults to localhost:4000)

### Database

- Mock data stored in `db.json`
- json-server provides REST endpoints
- Perfect for development without backend setup

## Key Design Patterns

### Separation of Concerns

- Clear boundaries between UI, business logic, and data
- Feature-based folder organization
- Service layer abstraction

### Type Safety

- TypeScript throughout the application
- Zod schemas for runtime validation
- Auto-inferred Redux types

### Performance

- Debounced search to reduce API calls
- Efficient data grid rendering
- Lazy loading ready with Next.js

### Developer Experience

- Hot reload during development
- Comprehensive testing setup
- Storybook for component isolation
- ESLint and TypeScript for code quality

## Future Enhancements

- Real backend API integration
- Advanced filtering and sorting
- Employee photo upload
- Role-based permissions
- Audit logging
- Export functionality
- Advanced search with filters

---

## 👥 Team Development Guidelines

### Onboarding New Team Members

Each team member should:

1. Clone the repository: `git clone https://github.com/SargsyanGegham/employee-management.git`
2. Install dependencies: `npm install`
3. Read **CLAUDE.md** and **CODE.md** for project context
4. Use VS Code with ESLint + Prettier extensions
5. Start dev server: `npm run dev`

### Working with Claude AI on This Project

**When asking Claude for help, reference this file:**

```
"I'm working on the employee-management project.
Please help me with [task].
Refer to CLAUDE.md and CODE.md for project context."
```

**Common Claude prompts for this project:**

1. **Bug Fix:**

   ```
   I found a bug in [component/feature].
   Can you investigate the code and provide a fix?
   Follow the Redux/TypeScript patterns from this project.
   ```

2. **New Feature:**

   ```
   Add [feature] following the project's patterns:
   - Redux thunks for async API calls
   - Zod for validation
   - Material-UI for components
   ```

3. **Code Review:**
   ```
   Review this code for:
   - Type safety (no `any`)
   - Redux best practices
   - Material-UI conventions
   - Test coverage
   ```

### Code Review Checklist

Before submitting a PR, ensure:

- ✅ `npm run lint` passes (no errors/warnings)
- ✅ `npm run test:jest` passes
- ✅ TypeScript types are correct (no `any`)
- ✅ Redux patterns followed (thunks for side effects)
- ✅ Zod validation used for forms
- ✅ Material-UI components used consistently
- ✅ Descriptive commit message follows format
- ✅ No console.log statements left

### Commit Message Format

```
type(scope): subject

Examples:
- feat(auth): implement password reset
- fix(employees): resolve DataGrid sorting bug
- refactor(redux): extract API calls to service layer
- test(form): add EmployeeForm validation tests
- docs(readme): update installation instructions
```

### PR Description Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Refactoring
- [ ] Documentation

## How to Test

1. Step 1
2. Step 2
3. ...

## Screenshots (if applicable)

[Add screenshots here]

## Related Issues

Fixes #123
```

### Team Communication

- **Questions about architecture?** → Check CLAUDE.md
- **Code style questions?** → Check CODE.md
- **Need to add a feature?** → Use the "Adding a CRUD endpoint" workflow from CLAUDE.md
- **Debugging issues?** → Check "Debugging Tips" section in this file

### Performance Standards

- DataGrid should load <500ms
- Search queries debounced (300ms)
- No memory leaks in components
- Redux state normalized and efficient

---</content>
<parameter name="filePath">c:\Users\sargs\Videos\employee-management\CODE.md
