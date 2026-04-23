# Employee Management System — Claude Code Guide

## Project Overview

A modern Employee Management Dashboard built with:
- **Next.js 16** (App Router)
- **Redux Toolkit** for state management
- **Material-UI (MUI)** for responsive UI and DataGrid
- **json-server** for mock API development
- **TypeScript** for type safety
- **React Hook Form** for form handling
- **Zod** for validation

**Repo:** [SargsyanGegham/employee-management](https://github.com/SargsyanGegham/employee-management)

---

## Running the App

```bash
npm run dev  # Starts Next.js (port 3000) + json-server (port 4000)
npm run build
npm start
npm run lint
```

### Test Credentials
- Email: `admin@test.com`
- Password: `123456`

---

## Project Structure

```
src/
├── app/              # Next.js App Router (layouts, pages, API routes)
├── features/         # Feature modules (employees, auth)
├── redux/            # Redux store, slices, async thunks
├── providers/        # Context providers (Redux, Theme, Auth)
├── hooks/            # Custom hooks
├── lib/              # Utilities (axios, error handling)
└── components/       # Reusable UI components
```

---

## Key Patterns & Architecture

### Redux Store
- State managed via **Redux Toolkit slices**
- Async operations via **createAsyncThunk**
- All state normalized and accessible via hooks

### API Layer
- Axios instance configured in `lib/`
- Mock API endpoints: `/employees`, `/users` (json-server on port 4000)
- No production API yet (use this structure when adding)

### Authentication
- Middleware-based route protection
- Login state persisted in Redux
- Protected routes redirect to login if not authenticated

### Forms
- **React Hook Form** + **Zod** for validation
- Modal dialogs for add/edit employee
- Form state separate from Redux store

### UI
- **Material-UI DataGrid** for employee list (sortable, paginated)
- **MUI components** for consistent styling
- Responsive design for mobile & desktop
- Theme provider configured in providers

---

## Common Tasks

### Adding a New Feature
1. Create a Redux slice in `src/redux/`
2. Define async thunks for API calls
3. Create components in `src/features/` or `src/components/`
4. Add routes in `src/app/` if needed
5. Wire up state with hooks

### Modifying Employee CRUD
- Slices: `src/redux/employees.ts`
- Components: `src/features/employees/`
- API calls use axios configured in `src/lib/`

### Adding Authentication
- Current: Middleware in app directory
- Extend or modify: `src/features/auth/`
- Update Redux slice if adding new auth logic

### Styling
- Material-UI theming in providers
- Tailwind CSS available but MUI is primary
- Keep styles in component files or theme

---

## Important Notes

- **Development only:** Passwords stored in plain text (`db.json`), not production-ready
- **json-server:** Auto-started with dev script via `concurrently`
- **TypeScript:** Strict mode enabled — maintain type safety
- **API:** Mock API (json-server) — structure ready for real backend swap
- **Mobile:** Responsive by default — test on multiple screen sizes

---

## Preferences & Conventions

- Use **Redux Toolkit slices** for state
- Use **MUI components** over custom styling where possible
- Use **TypeScript** for all new code
- Keep forms in modals/separate components (don't mix with list views)
- API calls in Redux thunks, not directly in components
