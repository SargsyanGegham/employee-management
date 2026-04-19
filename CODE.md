# Employee Management System - Code Documentation

## Overview

This is a Next.js-based employee management application that provides CRUD operations for managing employees. The app uses a mock backend with json-server and includes authentication, responsive design, and modern React patterns.

## Tech Stack

- **Frontend Framework**: Next.js 16 with App Router
- **UI Library**: Material-UI (MUI) v7 with Emotion styling
- **State Management**: Redux Toolkit with RTK Query
- **Forms**: React Hook Form with Zod validation
- **HTTP Client**: Axios
- **Styling**: Tailwind CSS v4
- **Backend Mock**: JSON Server
- **Language**: TypeScript

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── dashboard/
│   │   ├── employees/      # Employee management page
│   │   └── layout.tsx      # Dashboard layout with navigation
│   ├── login/              # Authentication page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page (redirects to dashboard)
├── components/             # Reusable UI components
│   ├── Button.tsx
│   └── Input.tsx
├── features/               # Feature-based organization
│   ├── auth/               # Authentication feature
│   │   ├── components/
│   │   └── services/
│   └── employees/          # Employee management feature
│       ├── components/     # Employee-specific components
│       ├── services/       # API services
│       └── types/          # TypeScript types
├── hooks/                  # Custom React hooks
├── lib/                    # Utility libraries
│   ├── api/                # Axios configuration
│   ├── auth/               # Authentication utilities
│   ├── style/              # Theme configuration
│   └── utils/              # General utilities
├── providers/              # React context providers
├── redux/                  # Redux store configuration
│   ├── slices/             # Redux slices
│   ├── thunks/             # Async thunks
│   └── store.ts
└── types/                  # Global TypeScript types
```

## Key Features

### Authentication

- Simple login system with context-based state management
- Protected routes that redirect unauthenticated users
- Logout functionality

### Employee Management

- **CRUD Operations**: Create, Read, Update, Delete employees
- **Data Grid**: Responsive table with Material-UI DataGrid
- **Search**: Debounced search across name, email, and position
- **Responsive Design**: Adapts to mobile, tablet, and desktop screens
- **Form Validation**: Zod schema validation with React Hook Form
- **Error Handling**: Snackbar notifications for errors

### State Management

- Redux Toolkit for predictable state updates
- Async thunks for API calls
- Centralized error handling

## API Integration

- Axios instance configured in `lib/api/axios.ts`
- Mock API using JSON Server on port 4000
- RESTful endpoints for employee operations

## Development Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server with mock API:

   ```bash
   npm run dev
   ```

   This runs both Next.js dev server and JSON Server concurrently.

3. Build for production:

   ```bash
   npm run build
   ```

4. Start production server:
   ```bash
   npm start
   ```

## Code Quality

- ESLint for code linting
- TypeScript for type safety
- Prettier for code formatting (configured via ESLint)

## Architecture Patterns

### Feature-Based Organization

Code is organized by features (auth, employees) rather than by type, promoting better maintainability and scalability.

### Custom Hooks

Reusable logic extracted into custom hooks (useDebounce, useRedux).

### Provider Pattern

Context providers for theme, auth, and Redux store.

### Separation of Concerns

- Components handle UI logic
- Services handle API calls
- Redux manages global state
- Types define data structures

## Responsive Design

The app uses Material-UI's responsive utilities and custom breakpoints to ensure optimal user experience across devices:

- Mobile: Simplified layout, essential columns only
- Tablet: Additional columns, adjusted spacing
- Desktop: Full feature set with all columns

## Error Handling

- API errors are caught and displayed via Snackbar
- Form validation errors shown inline
- Loading states managed throughout the app

## Future Enhancements

- Real backend API integration
- User roles and permissions
- Employee profile pages
- Advanced filtering and sorting
- Export functionality
- Pagination for large datasets

## Team Integration

### Prompts & Guidelines

- **Prompts Folder**: `src/prompts/` contains team coding guidelines and examples
- **Claude Code**: Reads `.claude.md` automatically for AI-assisted development
- **VS Code Setup**: Run `setup-prompts.bat` to integrate prompts with VS Code user prompts
- **Snapshots**: Example implementations demonstrating best practices

### Development Workflow

1. Pull latest changes
2. Run `setup-prompts.bat` if new prompts are added
3. Follow guidelines in `src/prompts/code-style.prompt.md`
4. Reference snapshots for implementation examples
5. Claude Code will automatically follow project guidelines
