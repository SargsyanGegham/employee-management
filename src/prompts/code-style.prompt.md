# Code Style Guidelines

## TypeScript Best Practices
- **Avoid `any` type**: Always use proper TypeScript types. If unsure, use `unknown` or define interfaces.
- **Strict typing**: Enable strict mode in tsconfig.json and avoid type assertions unless absolutely necessary.

## Error Handling
- **No try-catch blocks in components**: Handle errors at the service/API layer or use error boundaries for React components.
- **Centralized error handling**: Use Redux or context for global error states, display via snackbars or alerts.

## Package Management
- **No deprecated packages**: Regularly audit dependencies and update/remove deprecated packages.
- **Prefer built-in or custom utilities**: For small utilities (under 50 lines), create your own instead of adding npm packages.
  - Examples: simple debounce, formatters, validators
  - Only add npm packages for complex functionality or widely-used libraries

## React Component Patterns
- **Use arrow functions for components**: Always define components as arrow functions for consistency.
  ```tsx
  const MyComponent = () => {
    // component logic
  };
  ```
- **Default exports**: Use default exports for components and main modules.
  ```tsx
  export default MyComponent;
  ```
- **Named exports for utilities**: Use named exports for hooks, utilities, and types.

## Code Organization
- **Feature-based structure**: Organize code by features, not by type.
- **Single responsibility**: Each file/component should have one clear purpose.
- **Consistent naming**: Use PascalCase for components, camelCase for variables/functions.

## Performance
- **Memoization**: Use React.memo, useMemo, useCallback appropriately but not excessively.
- **Lazy loading**: Implement code splitting for large components.

## Styling
- **Consistent UI library**: Stick to Material-UI components and theming.
- **Responsive design**: Always consider mobile/tablet/desktop breakpoints.

## Testing
- **Unit tests**: Write tests for utilities and complex logic.
- **Integration tests**: Test component interactions and API calls.

## Git Practices
- **Meaningful commits**: Use conventional commit format.
- **Feature branches**: Create branches for new features/fixes.