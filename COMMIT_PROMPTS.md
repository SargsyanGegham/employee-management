# Commit Message Prompts & Templates

## 📝 Team Commit Guidelines

This file contains commit message templates and prompts to help the team write clear, consistent commit messages.

---

## 🎯 Commit Message Format

### Standard Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Quick Reference Table

| Type | Usage | Example |
|------|-------|---------|
| `feat` | New feature | `feat(auth): add password reset` |
| `fix` | Bug fix | `fix(employees): resolve sorting issue` |
| `refactor` | Code improvement (no behavior change) | `refactor(redux): extract API calls` |
| `test` | Add/update tests | `test(form): add validation tests` |
| `docs` | Documentation changes | `docs(readme): update setup steps` |
| `style` | Formatting, semicolons, etc | `style(components): add prettier formatting` |
| `chore` | Dependencies, config | `chore(deps): upgrade Material-UI to v7` |
| `perf` | Performance improvement | `perf(datagrid): add virtualization` |

---

## 📋 Commit Message Examples

### Feature Commit
```
feat(employees): add bulk employee import

- Implement CSV file upload
- Parse employee data with validation
- Create employees via batch API call
- Show import progress and results

Closes #456
```

### Bug Fix Commit
```
fix(auth): prevent infinite redirect loop

The router was redirecting unauthenticated users to /login
but then redirecting from /login to /dashboard, causing a loop.

Solution: Check auth state before redirecting in layout middleware.

Fixes #789
```

### Refactoring Commit
```
refactor(api): extract employee API calls to service layer

Before: API calls were mixed with Redux thunks
After: Centralized employeeService handles all API communication

Benefits:
- Easier to test API logic independently
- Simpler thunk implementations
- Reusable service layer for other features
```

### Test Commit
```
test(form): add comprehensive employee form validation

- Test required field validation
- Test email format validation
- Test salary positive number validation
- Test form submission with valid data
- Test error messages display correctly
```

### Documentation Commit
```
docs(develop): add debugging tips and common patterns

Added new sections:
- Redux DevTools debugging workflow
- Material-UI component patterns
- Common TypeScript mistakes to avoid
- Performance optimization checklist
```

---

## 🤖 Claude Prompts for Commits

### After Claude Helps with a Bug Fix
```
I just fixed a bug with Claude's help. Write a commit message for this change:
[Describe the bug and fix]

Follow the format from COMMIT_PROMPTS.md
```

### After Adding a Feature
```
Claude helped me implement a new feature. Here's what was added:
[Feature description]

Write a commit message in the format: feat(scope): description
Include what was done and why.
```

### After Refactoring
```
I refactored the codebase with Claude's guidance. Here's the summary:

Changed: [What changed]
Before: [How it was]
After: [How it is now]
Benefits: [Why this is better]

Write an appropriate refactor commit message.
```

---

## ✨ Best Practices

### ✅ DO

- Use imperative mood: "add feature" not "added feature"
- Keep subject line under 50 characters
- Be specific and descriptive
- Reference issue numbers: `Fixes #123`
- Explain the "why", not just the "what"

### ❌ DON'T

- Use vague messages: "fix stuff", "update code"
- Write in past tense: "fixed" → use "fix"
- Make commits too large (one feature per commit)
- Mix different concerns in one commit
- Write commit body in ALL CAPS

---

## 📚 Commit Message Templates

### Feature Template
```
feat(module): short description

## What
[What was added/implemented]

## Why
[Why was this needed]

## How
[Key implementation details]

## Testing
[How to test this feature]

Closes #[issue_number]
```

### Bug Fix Template
```
fix(module): short description of the bug

## Problem
[What was broken]

## Root Cause
[Why it was happening]

## Solution
[How it was fixed]

## Testing
[How to verify the fix]

Fixes #[issue_number]
```

### Refactoring Template
```
refactor(module): description of refactoring

## Before
[Previous implementation] 

## After
[New implementation]

## Benefits
[Why this is better]

## Breaking Changes
[Any changes that affect other code]

Related to #[issue_number]
```

---

## 🔗 Linking to Issues

### GitHub Format
```
Closes #123          # Closes the issue
Fixes #456           # Same as Closes
Resolves #789        # Same as Closes
Related to #321      # Links without closing
```

### Example
```
feat(auth): add two-factor authentication

Implements TOTP-based 2FA for user accounts.

Closes #234
```

---

## 📊 Commit Message Checklist

Before committing, ensure:

- ✅ Message follows format: `type(scope): subject`
- ✅ Subject is under 50 characters
- ✅ Uses imperative mood (e.g., "add", not "added")
- ✅ Body explains "why" and "how", not just "what"
- ✅ Code passes: `npm run lint`
- ✅ Tests pass: `npm run test:jest`
- ✅ Related issues are referenced
- ✅ No merge conflicts

---

## 🚀 Quick Commit Examples for Team

### Adding Search Feature
```
feat(employees): add debounced employee search

- Add search input field to employee table
- Implement debounce hook to reduce API calls
- Filter employees by name, email, position
- Update API call logic in employeeService

Closes #145
```

### Fixing Delete Bug
```
fix(employees): resolve delete confirmation not showing

User clicks delete but confirmation dialog doesn't appear.
Root cause: DeleteDialog component wasn't being rendered.

Solution: Add DeleteDialog to EmployeeTable component tree.

Fixes #203
```

### Improving Performance
```
perf(datagrid): implement virtual scrolling

Large employee lists were causing performance issues.
Added MUI DataGrid virtualization for better rendering.

Benchmark: Loading 10k employees now takes 200ms (was 2s).
```

### Updating Dependencies
```
chore(deps): upgrade Material-UI to v7.3.8

- Update @mui/material to latest patch
- Update @mui/x-data-grid to match version
- No breaking changes, all tests pass
```

---

## 💡 Using with Your Team

1. **Reference in PRs:**
   ```
   Please follow the format from COMMIT_PROMPTS.md
   ```

2. **During Code Review:**
   ```
   Commit message should be clearer. See COMMIT_PROMPTS.md examples.
   ```

3. **New Team Member Onboarding:**
   ```
   Read COMMIT_PROMPTS.md for our commit message standards
   ```

---

## 📖 Integration with CLAUDE.md

See **CLAUDE.md** sections:
- Git Workflow → for overall git practices
- Commit Message Format → for format reference

---

_Last Updated: 2026-04-10_
_For questions, reference the main CLAUDE.md file._
