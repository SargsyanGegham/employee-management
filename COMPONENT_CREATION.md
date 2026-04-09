# Component Creation Guide

Complete workflow for creating new components with tests, documentation, and best practices.

---

## 📋 Component Creation Checklist

Every new component must have:

- ✅ TypeScript interfaces (no `any` types)
- ✅ JSDoc comments explaining purpose and usage
- ✅ Unit tests (Jest) or E2E tests (Playwright)
- ✅ Storybook story (if reusable)
- ✅ No new dependencies added (use existing utils)

---

## 🤖 Claude AI Prompt for Component Creation

### When Requesting a New Component from Claude

```
I need to create a new [ComponentName] component for [feature/section].

Requirements:
- Purpose: [What does it do]
- Props: [List all props and types]
- Reusable: Yes/No
- Testing: Jest/Playwright/Both

Requirements:
✓ Use TypeScript (no any types)
✓ Write JSDoc comments
✓ Include unit tests with Jest
✓ Use existing utils (don't add dependencies)
✓ Follow Material-UI patterns from CODE.md
✓ Use Redux patterns from CLAUDE.md if needed
✓ [Add to Storybook if reusable]

Reference:
- Component patterns: CODE.md → Component Architecture
- TypeScript patterns: CODE.md → TypeScript Best Practices
- Project structure: CLAUDE.md → Project Structure
```

### Example Prompts

**Simple Reusable Component:**

```
Create a [FormField] component for the employee-management project.

- Props: label (string), error (boolean), helperText (string), value (string), onChange (function)
- Must be reusable across forms
- Add JSDoc comments
- Write Jest tests
- Add to Storybook

Follow Material-UI TextField patterns.
No new dependencies needed.
```

**Complex Feature Component:**

```
Build an [EmployeeImportDialog] component.

- Handles CSV file upload
- Validates data with Zod schema
- Dispatches Redux actions
- Shows progress
- Has cancel/submit buttons

Requirements:
- Full TypeScript types (no any)
- JSDoc for all functions
- Jest tests for validation logic
- Playwright E2E test for user flow
- Use existing Redux pattern from CLAUDE.md
```

**Dialog Component:**

```
Create a [ConfirmationDialog] component.

- Generic reusable dialog
- Props: title, message, onConfirm, onCancel
- Add to Storybook with different states
- JSDoc comments
- Jest unit tests

Use MUI Dialog component.
No new dependencies.
```

---

## 📐 Component Template Structure

### Basic Component Layout

````typescript
/**
 * [ComponentName] Component
 *
 * @description [What this component does]
 * @example
 * ```tsx
 * <ComponentName prop1="value" onChange={handleChange} />
 * ```
 */

import React from 'react';
import { Box } from '@mui/material';

/**
 * Props for ComponentName component
 */
interface ComponentNameProps {
  /** Description of prop1 */
  prop1: string;
  /** Description of prop2 - optional */
  prop2?: boolean;
  /** Callback when value changes */
  onChange?: (value: string) => void;
}

/**
 * ComponentName implementation
 *
 * @param props - Component props
 * @returns Rendered component
 */
export const ComponentName: React.FC<ComponentNameProps> = ({
  prop1,
  prop2 = false,
  onChange,
}) => {
  return (
    <Box>
      {prop1}
    </Box>
  );
};

export default ComponentName;
````

---

## 🧪 Testing Template

### Jest Unit Test

```typescript
/**
 * ComponentName.test.tsx
 * Unit tests for ComponentName component
 */

import { render, screen, fireEvent } from '@testing-library/react';
import { ComponentName } from './ComponentName';

describe('ComponentName', () => {
  it('should render with provided prop', () => {
    render(<ComponentName prop1="test value" />);
    expect(screen.getByText('test value')).toBeInTheDocument();
  });

  it('should call onChange callback when value changes', () => {
    const handleChange = jest.fn();
    render(<ComponentName prop1="test" onChange={handleChange} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'new value' } });

    expect(handleChange).toHaveBeenCalled();
  });

  it('should use default value for optional prop2', () => {
    const { container } = render(<ComponentName prop1="test" />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
```

### Playwright E2E Test

```typescript
/**
 * ComponentName.e2e.ts
 * End-to-end tests for ComponentName user flow
 */

import { test, expect } from "@playwright/test";

test.describe("ComponentName", () => {
  test("should interact correctly", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/...");

    const input = page.locator("input");
    await input.fill("test value");

    const button = page.locator("button");
    await button.click();

    await expect(page.locator("text=Success")).toBeVisible();
  });
});
```

---

## 📚 Storybook Story Template

### Component Story

```typescript
/**
 * ComponentName.stories.tsx
 * Storybook stories for ComponentName component
 */

import type { Meta, StoryObj } from "@storybook/react";
import { ComponentName } from "./ComponentName";

/**
 * ComponentName component stories
 *
 * Used to showcase different states and usage patterns
 */
const meta: Meta<typeof ComponentName> = {
  component: ComponentName,
  title: "Components/ComponentName",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default story showing normal usage
 */
export const Default: Story = {
  args: {
    prop1: "Example Value",
    prop2: false,
  },
};

/**
 * Story showing error state
 */
export const WithError: Story = {
  args: {
    prop1: "Example Value",
    prop2: true,
  },
};

/**
 * Story showing with callback
 */
export const Interactive: Story = {
  args: {
    prop1: "Click me",
    onChange: (value) => console.log("Changed:", value),
  },
};
```

---

## 🎨 Material-UI Component Integration

### Using MUI Components

```typescript
import { TextField, Button, Box, Dialog, DialogTitle } from '@mui/material';

/**
 * FormField component using MUI TextField
 */
interface FormFieldProps {
  /** Field label */
  label: string;
  /** Current value */
  value: string;
  /** Error state */
  error?: boolean;
  /** Helper text for errors */
  helperText?: string;
  /** Change handler */
  onChange: (value: string) => void;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  error = false,
  helperText,
  onChange,
}) => {
  return (
    <TextField
      label={label}
      value={value}
      error={error}
      helperText={helperText}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
    />
  );
};
```

---

## 🔄 Redux-Connected Component

### Component with Redux Integration

```typescript
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { someAction } from '@/redux/slices/someSlice';

/**
 * EmployeeList component connected to Redux
 *
 * Manages fetching and displaying employees from Redux store
 */
interface EmployeeListProps {
  /** Optional: filter employees by department */
  department?: string;
}

export const EmployeeList: React.FC<EmployeeListProps> = ({ department }) => {
  const dispatch = useAppDispatch();
  const { employees, loading, error } = useAppSelector(
    (state) => state.employees
  );

  React.useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {employees
        .filter((emp) => !department || emp.department === department)
        .map((emp) => (
          <div key={emp.id}>{emp.name}</div>
        ))}
    </div>
  );
};
```

---

## 📦 Using Existing Utils (No New Dependencies)

### Existing Utilities Available

**From `src/lib/utils/`:**

- `errorHandler.ts` - Error handling and formatting
- `index.ts` - Common utilities

**From `src/hooks/`:**

- `useDebounce.ts` - Debounce hook for search
- `useRedux.ts` - Typed Redux hooks

**From `src/lib/style/`:**

- `theme.ts` - MUI theme and styling utilities

### Example: Using Existing Utils

```typescript
import { useDebounce } from '@/hooks/useDebounce';
import { handleError } from '@/lib/utils/errorHandler';

/**
 * SearchComponent with debounce (no new dependencies needed)
 */
interface SearchComponentProps {
  onSearch: (query: string) => void;
}

export const SearchComponent: React.FC<SearchComponentProps> = ({
  onSearch,
}) => {
  const [query, setQuery] = React.useState('');
  const debouncedQuery = useDebounce(query, 300);

  React.useEffect(() => {
    if (debouncedQuery) {
      try {
        onSearch(debouncedQuery);
      } catch (error) {
        const message = handleError(error);
        console.error(message);
      }
    }
  }, [debouncedQuery, onSearch]);

  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
    />
  );
};
```

---

## ✨ Step-by-Step Component Creation

### Step 1: Plan the Component

```
Questions to ask:
1. What does this component do?
2. What props does it need?
3. Is it reusable or feature-specific?
4. Does it interact with Redux?
5. Does it need form validation?
6. What MUI components should it use?
```

### Step 2: Request from Claude

Use the prompt template from section "🤖 Claude AI Prompt for Component Creation"

### Step 3: Structure the File

```typescript
// 1. JSDoc comments at top
// 2. Imports
// 3. Interface definitions
// 4. Component implementation
// 5. Export default
```

### Step 4: Add TypeScript Types

```typescript
// ✅ DO - Strong typing
interface Props {
  name: string;
  age: number;
}

// ❌ DON'T - Weak typing
interface Props {
  data: any;
}
```

### Step 5: Write JSDoc Comments

````typescript
/**
 * ComponentName - Brief description
 *
 * @description Longer description of what it does
 * @example
 * ```tsx
 * <ComponentName prop="value" />
 * ```
 */
````

### Step 6: Create Tests

```ts
// ComponentName.test.tsx
// Add unit tests to verify component behavior
```

### Step 7: Add to Storybook (if Reusable)

```typescript
// ComponentName.stories.tsx
// Add stories for visual development
```

### Step 8: Commit

```bash
git add src/components/ComponentName.tsx
git add src/components/ComponentName.test.tsx
git add src/components/ComponentName.stories.tsx
git commit -m "feat(components): add ComponentName component with tests and stories"
```

---

## 📝 Component File Naming

```
src/
├── components/                # Shared reusable components
│   ├── Button.tsx            # Component
│   ├── Button.test.tsx       # Unit test
│   └── Button.stories.tsx    # Storybook story
│
└── features/[feature]/components/   # Feature-specific components
    ├── EmployeeTable.tsx
    ├── EmployeeTable.test.tsx
    └── EmployeeTable.stories.tsx
```

---

## 🔍 JSDoc Examples

### Simple Component

```typescript
/**
 * Badge component for displaying status
 *
 * @param props - Component props
 * @returns Badge element
 */
```

### Complex Component

````typescript
/**
 * EmployeeForm Component
 *
 * @description Form for creating/editing employee records.
 * Includes validation with Zod schema.
 *
 * @param {Object} props
 * @param {Employee} props.initialData - Pre-fill form with data
 * @param {Function} props.onSubmit - Callback on form submission
 * @param {boolean} props.isLoading - Loading state for submit button
 *
 * @example
 * ```tsx
 * <EmployeeForm
 *   initialData={employee}
 *   onSubmit={handleSubmit}
 *   isLoading={false}
 * />
 * ```
 *
 * @returns Rendered form component
 */
````

### Function within Component

```typescript
/**
 * Validates employee email uniqueness
 *
 * @param email - Email to validate
 * @param excludeId - Employee ID to exclude from check
 * @returns Promise resolving to validation result
 */
const validateEmail = async (
  email: string,
  excludeId?: number
): Promise<boolean> => {
  // Implementation
  return true;
};
```

---

## ⚠️ Common Mistakes to Avoid

### DON'T

```typescript
// ❌ Don't use any
const handleChange = (event: any) => {};

// ❌ Don't skip JSDoc
export const MyComponent = () => {};

// ❌ Don't skip tests
// Only component file, no .test.tsx

// ❌ Don't add unnecessary dependencies
// npm install custom-lib instead of using existing utils

// ❌ Don't hardcode values
<Button color="primary">Submit</Button>

// ❌ Don't skip Storybook for reusable components
// Create component but don't add .stories.tsx
```

### DO

```typescript
// ✅ Do use strong types
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {};

// ✅ Do add JSDoc
/**
 * MyComponent - Does something useful
 */
export const MyComponent = () => {};

// ✅ Do write tests
// Both .test.tsx file exists and tests are comprehensive

// ✅ Do use existing utils
import { useDebounce } from '@/hooks/useDebounce';

// ✅ Do use constants
const PRIMARY_COLOR = 'primary';
<Button color={PRIMARY_COLOR}>Submit</Button>

// ✅ Do add Storybook for reusable
// Create .stories.tsx with multiple story variants
```

---

## 🚀 Quick Reference

| Want to...        | File                        | Command               |
| ----------------- | --------------------------- | --------------------- |
| Create component  | `ComponentName.tsx`         | N/A                   |
| Write tests       | `ComponentName.test.tsx`    | `npm run test:jest`   |
| Create story      | `ComponentName.stories.tsx` | `npm run storybook`   |
| View in Storybook | `.stories.tsx`              | http://localhost:6006 |
| Verify types      | `.tsx`                      | `npm run lint`        |
| Create docs       | JSDoc comments              | N/A                   |

---

## 📚 Template Summary

**Always include:**

1. ✅ JSDoc comments with description and example
2. ✅ TypeScript interfaces (no `any`)
3. ✅ Unit tests
4. ✅ Storybook story (if reusable)
5. ✅ Use existing utils (no new deps)

---

_Last Updated: 2026-04-10_
_Reference: CLAUDE.md for architecture, CODE.md for standards_
