# Employee Management System - CLAUDE.md

## 📋 Project Overview

**Employee Management Dashboard** - A modern full-stack application for managing employee information with authentication, CRUD operations, and a responsive Material-UI interface.

**Repository:** [SargsyanGegham/employee-management](https://github.com/SargsyanGegham/employee-management)

---

## 🏗️ Architecture

### Tech Stack

- **Framework:** Next.js 16 (App Router)
- **State Management:** Redux Toolkit with async thunks
- **UI Library:** Material-UI (MUI 7.x) with DataGrid
- **Styling:** Emotion CSS-in-JS + Tailwind CSS v4
- **Backend:** json-server (mock API)
- **Language:** TypeScript (full type safety)
- **HTTP Client:** Axios
- **Validation:** Zod
- **Testing:** Jest, Vitest, Playwright, Storybook

### Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Home/landing page
│   ├── login/page.tsx           # Login page
│   └── dashboard/
│       ├── layout.tsx           # Dashboard wrapper
│       └── employees/page.tsx   # Employees management page
│
├── features/                     # Feature-based modules (employees, auth)
│   ├── auth/
│   │   ├── components/          # LoginForm component
│   │   └── services/            # authService (login logic)
│   └── employees/
│       ├── components/          # EmployeeTable, EmployeeDialog, EmployeeForm, DeleteDialog
│       ├── services/            # employeeService (API calls)
│       └── types/               # employee.types.ts (Zod schemas & TypeScript interfaces)
│
├── redux/                        # State management
│   ├── store.ts                 # Redux store config
│   ├── rootReducer.ts           # Combine reducers
│   ├── slices/
│   │   ├── employeeSlice.ts     # Employee slice (state, reducers, actions)
│   │   └── authSlice.ts         # Auth slice (if exists)
│   └── thunks/
│       └── employeeThunks.ts    # Async employee operations
│
├── providers/                    # Context/Provider components
│   ├── ReduxProvider.tsx        # Redux Provider wrapper
│   ├── ThemeProvider.tsx        # MUI Theme Provider
│   └── AuthProvider.tsx         # Auth context (if used)
│
├── hooks/                        # Custom React hooks
│   ├── useRedux.ts              # Redux typed dispatch/selector hook
│   └── useDebounce.ts           # Debounce hook for search
│
├── components/                   # Reusable UI components
│   ├── Button.tsx               # Custom Button component
│   ├── Input.tsx                # Custom Input component
│   ├── Button.stories.tsx       # Storybook stories
│   └── Button.test.tsx          # Jest tests
│
├── lib/                          # Utility libraries
│   ├── api/
│   │   └── axios.ts             # Axios instance with base config
│   ├── utils/
│   │   ├── index.ts             # General utilities
│   │   └── errorHandler.ts      # Error handling utility
│   └── style/
│       └── theme.ts             # MUI theme configuration
│
├── middlewares/                  # Next.js middleware (auth.ts is empty)
│
└── tests/                        # Test files

public/                           # Static assets
db.json                           # Mock database (json-server)
```

---

## 🔐 Authentication Flow

1. **Login Page** (`/login`) - Users enter credentials (admin@test.com / 123456)
2. **AuthService** validates credentials against `db.json` users
3. **Redux authSlice** stores auth state and token
4. **Middleware** (currently empty) should protect routes; currently using client-side checks
5. **Dashboard** (`/dashboard/employees`) accessible only when authenticated

**Default Credentials:**

```
Email: admin@test.com
Password: 123456
```

---

## 📦 State Management (Redux)

### Employee Slice

- **State:** employees array, loading, error states
- **Reducers:** setEmployees, addEmployee, updateEmployee, deleteEmployee
- **Thunks:** fetchEmployees, createEmployee, updateEmployee, deleteEmployee

### Data Flow

1. Components dispatch async thunks (employeeThunks)
2. Thunks make API calls via employeeService
3. Actions update Redux state
4. Components subscribe to state changes via useSelector

---

## 🎨 UI/Components

### Key Components

- **EmployeeTable** - MUI DataGrid with sorting, pagination, edit/delete actions
- **EmployeeDialog** - Modal for create/edit operations
- **EmployeeForm** - Form with Zod validation
- **DeleteDialog** - Confirmation dialog for deletions
- **LoginForm** - Authentication form

### Material-UI Configuration

- DataGrid for tabular data display
- Dialogs for modals
- Buttons, text fields for forms
- Theme provider for consistent styling

---

## 🔌 API Integration

### Mock API (json-server)

- **Base URL:** `http://localhost:4000`
- **Endpoints:**
  - `GET /employees` - Fetch all employees
  - `GET /employees/:id` - Fetch single employee
  - `POST /employees` - Create employee
  - `PUT /employees/:id` - Update employee
  - `DELETE /employees/:id` - Delete employee
  - `GET /users` - Fetch users for login

### Axios Instance

- Located in `src/lib/api/axios.ts`
- Base URL configured
- Request/response interceptors for error handling

---

## ✅ Validation

**Zod Schema** (`src/features/employees/types/employee.types.ts`):

```typescript
employeeSchema = {
  name: required string
  email: valid email address
  position: required string
  salary: positive number
}
```

Form validation uses `@hookform/resolvers` with Zod.

---

## 🧪 Testing Setup

### Frameworks Configured

- **Jest** - Unit tests
- **Vitest** - Faster unit test runner
- **Playwright** - E2E testing (tests/ folder, playwright-report/)
- **Storybook** - Component documentation (stories, custom addon setup)

### Test Files

- `src/components/Button.test.tsx` - Jest example
- `src/components/Button.stories.tsx` - Storybook example

### Running Tests

```bash
npm run test:jest      # Run Jest tests
npm run lint           # Run ESLint
npm run build-storybook  # Build Storybook
```

---

## 🛠️ Development Commands

```bash
npm run dev            # Start Next.js + json-server + Storybook concurrently
npm run build          # Production build
npm run start          # Start production server
npm run lint           # ESLint validation
npm run test:jest      # Run Jest tests
npm run storybook      # Start Storybook dev server
npm run build-storybook # Build Storybook static site
```

---

## 📊 Ports

- **Next.js App:** http://localhost:3000
- **Mock API:** http://localhost:4000
- **Storybook:** http://localhost:6006

---

## 🔧 Code Style & Linting

### ESLint Configuration

- Flat config format (eslint.config.mjs)
- Extends: Next.js core-web-vitals, TypeScript, Storybook
- **Ignores:** playwright-report, node_modules, .storybook, coverage, dist, build

### Prettier Configuration (.prettierrc)

- 2-space indentation
- Double quotes
- 80-char line width
- Trailing commas (ES5)
- Semicolons enabled

### VS Code Settings (.vscode/settings.json)

- Auto-fix ESLint on save
- Auto-format with Prettier on save
- Default formatter: Prettier for TypeScript/JavaScript

---

## 🔍 Common Workflows

### Add a New Employee

1. Click "Add Employee" button on dashboard
2. Fill form with validation (Zod)
3. Submit → Redux thunk creates employee
4. API call to POST /employees
5. Redux updates state
6. Table re-renders

### Edit an Employee

1. Click edit icon on table row
2. Dialog opens with pre-filled form data
3. Modify fields
4. Submit → Redux thunk updates employee
5. PUT /employees/:id called
6. Table updates

### Delete an Employee

1. Click delete icon
2. Confirmation dialog appears
3. Confirm → Redux thunk deletes employee
4. DELETE /employees/:id called
5. Employee removed from table

---

## ⚠️ Important Notes

### Development vs Production

- **db.json** is mock API for development only
- Passwords stored in plain text (dev only)
- Not production-ready as-is

### Known Issues/TODOs

- **Middleware** (`src/middlewares/auth.ts`) is empty - route protection should be implemented here
- **Search functionality** recently added (commit: feat: add search box)
- Consider implementing real backend for production

### Recent Changes

- Added ESLint/Prettier with full configuration
- Configured VS Code settings for linting/formatting
- Ignores list updated to exclude generated files/reports

---

## 📖 Development Guidelines for Claude AI

### Prompts to Use When Requesting Help

**For Bug Fixes:**
```
"Investigate why [feature/component] is [not working/showing error]. 
Read the relevant code, understand the issue, and provide a fix with explanation."
```

**For New Features:**
```
"Add [feature name] to [component/section]. 
Follow the existing patterns: Redux thunks for API calls, Zod for validation, 
MUI components for UI. Ensure TypeScript type safety."
```

**For Code Review:**
```
"Review [file/feature] for: type safety, error handling, Redux state management, 
Material-UI best practices, and test coverage."
```

**For Architecture Questions:**
```
"Explain how [feature] works in this project. Show data flow, state management, 
and component hierarchy."
```

### Code Standards

- **TypeScript:** Full type safety required, no `any` types
- **Redux:** Use thunks for async operations, store data in slices
- **Validation:** Use Zod for form/API validation
- **UI:** Follow Material-UI patterns, consistent with existing components
- **Testing:** Unit tests (Jest), E2E tests (Playwright)
- **Linting:** Run `npm run lint` before commits
- **Formatting:** Prettier auto-formats on save

### Naming Conventions

| Item | Pattern | Example |
|------|---------|---------|
| Components | PascalCase | `EmployeeTable.tsx` |
| Files | kebab-case or PascalCase | `employee.types.ts` or `EmployeeForm.tsx` |
| Functions | camelCase | `fetchEmployees()` |
| Constants | UPPER_SNAKE_CASE | `API_BASE_URL` |
| Redux slices | camelCase | `employeeSlice` |

### Git Workflow

1. Create feature branch: `git checkout -b feat/feature-name`
2. Make changes following code standards
3. Run: `npm run lint` (must pass)
4. Commit with clear message: `"feat: add search functionality"`
5. Push and create PR for review
6. Team reviews, then merge to main

### Common Tasks

**Adding a CRUD endpoint:**
1. Add types in `src/features/[feature]/types/`
2. Create API calls in `src/features/[feature]/services/`
3. Add thunks in `src/redux/thunks/`
4. Update slice in `src/redux/slices/`
5. Create/update component using Redux hooks
6. Add tests for new functionality

**Debugging Tips:**
- Check Redux DevTools extension for state changes
- Use `console.log` with Redux selectors to debug state
- Check browser Network tab for API calls
- Use `npm run lint` to catch TypeScript errors

---

## 🎯 Next Steps (Suggestions)

1. Implement route protection in middleware
2. Add more comprehensive tests
3. Consider extracting employeeService API calls into dedicated API layer
4. Add error boundary components
5. Implement proper error notifications/toasts
6. Add loading skeletons in DataGrid

---

## 👤 Team Context

**Author:** Gegham (Git user)
**Focus Areas:** Full-stack employee management, Redux state management, Material-UI implementation

---

_Last Updated: 2026-04-10_
