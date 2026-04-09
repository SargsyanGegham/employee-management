# Quick Copy-Paste Prompts for Claude

Use these prompts when working with Claude on the employee-management project.
Just copy, paste, and customize!

---

## 🆕 Creating a New Component

### Copy This Prompt:

```
I'm working on the employee-management project.

I need to create a new [ComponentName] component.

Requirements:
- Purpose: [What does it do]
- Props: [List props]
- Reusable: Yes/No

Requirements (must follow):
✓ Use TypeScript (no any types)
✓ Write JSDoc comments
✓ Write Jest tests
✓ Add to Storybook (if reusable)
✓ Use existing utils (no new dependencies)
✓ Follow MUI patterns

Reference: COMPONENT_CREATION.md for templates and examples
```

### Quick Replace Fields:

- `[ComponentName]` → e.g., "SearchBox", "FormField", "ConfirmDialog"
- `[What does it do]` → e.g., "Search employees by name/email"
- `[List props]` → e.g., "query: string, onSearch: (query: string) => void, placeholder?: string"
- `Yes/No` → Will this be used in multiple places?

---

## 🐛 Fixing a Bug

### Copy This Prompt:

```
I'm working on the employee-management project.

I found a bug: [Describe the problem]

Affected file: [File path or component name]
Expected behavior: [What should happen]
Actual behavior: [What's happening instead]

Please help me fix it following:
- CODE.md code standards
- CLAUDE.md architecture patterns
- TypeScript best practices (no any)

Provide the fix with explanation.
```

### Quick Replace Fields:

- `[Describe the problem]` → e.g., "DataGrid sorting not working"
- `[File path]` → e.g., "src/features/employees/components/EmployeeTable.tsx"
- `[What should happen]` → e.g., "Clicking column header sorts data"
- `[What's happening instead]` → e.g., "Nothing happens when I click"

---

## ✨ Adding a New Feature

### Copy This Prompt:

```
I'm working on the employee-management project.

I need to add [Feature name] to [Component/Section].

Requirements:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

Please implement following patterns:
✓ Redux thunks for API calls (CLAUDE.md)
✓ Zod validation for forms (CODE.md)
✓ Material-UI components (CODE.md)
✓ TypeScript types (no any)
✓ JSDoc comments
✓ Jest tests
✓ Use existing utils

Reference: COMPONENT_CREATION.md for component structure
```

### Quick Replace Fields:

- `[Feature name]` → e.g., "bulk import", "email validation", "export to CSV"
- `[Component/Section]` → e.g., "EmployeeTable", "dashboard/employees page"
- `[Requirements]` → List what needs to work

---

## 📝 Code Review Request

### Copy This Prompt:

```
I'm working on the employee-management project.

Can you review this code?

[Paste your code here]

Check for:
✓ TypeScript type safety (no any types)
✓ Redux best practices (CLAUDE.md)
✓ Material-UI patterns (CODE.md)
✓ Component structure (COMPONENT_CREATION.md)
✓ JSDoc documentation
✓ Test coverage
✓ Common mistakes (CODE.md section)

Suggest improvements if needed.
```

---

## 🔍 Debugging Redux Issue

### Copy This Prompt:

```
I'm working on the employee-management project.

I have a Redux state issue.

Problem: [Describe what's wrong]

What I see in Redux DevTools: [State output or screenshot]
What I expected: [What should happen]
What's actually happening: [What happens instead]

Code snippet:
[Paste relevant code]

Use debugging tips from CODE.md and Redux patterns from CLAUDE.md.

Help me debug this.
```

---

## 🧪 Writing Tests

### Copy This Prompt:

```
I'm working on the employee-management project.

I need to write tests for: [Component/Function]

What it does: [Brief description]

Test cases needed:
- [Test case 1]
- [Test case 2]
- [Test case 3]

Should I use:
- Jest (unit tests)
- Playwright (E2E tests)
- Both

Reference: COMPONENT_CREATION.md for test templates
```

---

## 🎨 Adding to Storybook

### Copy This Prompt:

```
I'm working on the employee-management project.

I need to create Storybook stories for: [ComponentName]

Component does: [What it is]

Story variants needed:
- [Variant 1] (Default/Normal state)
- [Variant 2] (Error state)
- [Variant 3] (Loading state)
- [Variant 4] (Interactive example)

Reference: COMPONENT_CREATION.md → Storybook Story Template

Show multiple stories with different prop combinations.
```

---

## 🔗 Redux Integration

### Copy This Prompt:

```
I'm working on the employee-management project.

I need to integrate Redux for: [What feature]

Current plan:
- API endpoint: [Which endpoint]
- Redux slice: [Which slice or new slice]
- Thunk action: [What action]
- Component: [Which component uses it]

Follow patterns from:
- CLAUDE.md → State Management
- CODE.md → Redux Patterns

Help me set up the Redux thunk and integrate it in the component.
```

---

## 📚 Understanding Architecture

### Copy This Prompt:

```
I'm working on the employee-management project.

Can you explain how [Feature/Component] works?

Show me:
1. Data flow (where data comes from)
2. State management (how Redux is involved)
3. Component hierarchy (which components are involved)
4. API calls (which endpoints are used)

Reference: CLAUDE.md for architecture context
```

---

## 🚀 Performance Issue

### Copy This Prompt:

```
I'm working on the employee-management project.

I'm experiencing a performance issue: [Describe problem]

Details:
- Where it happens: [Component/Page]
- When it happens: [Condition]
- How it affects user: [Impact]
- Attempted fixes: [What you tried]

Use performance tips from CODE.md.

Help me optimize this.
```

---

## 🛠️ Refactoring Code

### Copy This Prompt:

```
I'm working on the employee-management project.

I want to refactor: [Component/Code]

Current issue: [What's wrong with it]
Goal: [What should improve]
Constraints: [Any limitations]

Follow patterns from:
- CODE.md → Code Standards
- CLAUDE.md → Architecture

Suggest a refactoring approach.
```

---

## 💡 When Creating Commits

### Copy This Prompt:

```
I just [did something] in the employee-management project.

What I changed: [Brief description]

Write a commit message following:
- Type: feat/fix/refactor/test/docs/chore
- Scope: [Which part: employees, auth, etc.]
- Format from: COMMIT_PROMPTS.md

Include a commit body explaining why (not what).
```

---

## ⚡ Quick Reference Shortcuts

Instead of copying full prompts, you can use **short versions**:

### For Components:

```
employee-management | new component: [ComponentName]

Props: [list props]
Tests: Yes (JSDoc + Jest)
Storybook: Yes (if reusable)
```

### For Bugs:

```
employee-management | bug: [Component] - [Problem]

File: [path]
```

### For Features:

```
employee-management | feature: [Name] in [Component]

Requirements: [list]
```

---

## 📌 Pro Tips for Using Prompts

### Tip 1: Reference the Docs

Instead of pasting full context, just say:

```
"Follow patterns from CLAUDE.md and CODE.md"
```

### Tip 2: Be Specific with File Paths

Always include `src/features/employees/...` so Claude knows exactly where

### Tip 3: Include Error Messages

If there's an error, copy the exact error message

### Tip 4: Show Before/After

For refactoring: show current code and explain desired outcome

### Tip 5: Ask for Specific Output

```
"Provide the code, tests, and Storybook story"
```

---

## 🎯 Prompt Template (Generic)

When none of the above fit:

```
I'm working on the employee-management project.

[What you need]

Context:
- File/Component: [reference]
- What I've tried: [attempts]
- Error/Issue: [details]

Follow: [Which docs: CLAUDE.md, CODE.md, COMPONENT_CREATION.md]

Help me with: [Specific request]
```

---

## ✅ Best Practices

1. **Always mention**: "employee-management project"
2. **Always reference**: Which doc has the pattern (CLAUDE.md, CODE.md, etc.)
3. **Be specific**: File paths, component names, exact errors
4. **Show your work**: What you tried, what failed
5. **Request format**: Code + tests + comments, etc.

---

_Last Updated: 2026-04-10_
_Copy these prompts to use with Claude for consistent, high-quality results_
