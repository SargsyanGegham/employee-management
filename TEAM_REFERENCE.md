# Team Development Reference Guide

Quick reference for all team documentation and development workflows.

---

## 📚 Documentation Files Overview

### 1. **CLAUDE.md** - Project Architecture & Workflows

**Read first for:**

- Overall project overview
- Technology stack explanation
- Directory structure and organization
- Authentication flow
- Redux state management
- Common workflows (add/edit/delete employees)
- Next steps and TODOs

**When to reference:**

- Understanding how the app works
- Setting up a new feature
- Debugging architecture issues

---

### 2. **CODE.md** - Code Standards & Best Practices

**Read for:**

- TypeScript best practices
- Redux patterns and examples
- Material-UI conventions
- Component structure guidelines
- Error handling strategies
- Testing approaches
- Performance tips
- Common mistakes to avoid

**When to reference:**

- Before writing code
- During code review
- When seeing TypeScript errors
- Learning project conventions

---

### 3. **COMPONENT_CREATION.md** - Component Development Guide

**Read for:**

- Component creation workflow
- TypeScript interfaces (no `any`)
- JSDoc comment templates
- Jest unit test examples
- Playwright E2E test examples
- Storybook story templates
- Redux-connected component patterns
- Using existing utils (no new dependencies)

**When to reference:**

- Creating a new component
- Writing component tests
- Adding to Storybook
- Requesting component from Claude

---

### 4. **COMMIT_PROMPTS.md** - Commit Message Guidelines

**Read for:**

- Commit message format and examples
- Type of changes (feat, fix, refactor, etc.)
- Commit templates for different scenarios
- Best practices for clear messages
- How to link to GitHub issues

**When to reference:**

- Before committing code
- When writing PR descriptions
- During code review

---

### 5. **TEAM_REFERENCE.md** - Quick Navigation

**Use for:**

- Finding which file to read
- Quick decision trees
- Common team scenarios

---

### 6. **PROMPTS.md** - Copy-Paste Claude Prompts

**Use for:**

- Ready-to-use prompts for Claude AI
- Creating components, fixing bugs, adding features
- Copy & customize for different scenarios
- Quick reference templates

**When to reference:**

- When asking Claude for help
- Need specific prompt templates
- Want to save time copying prompts

---

## 🎯 Quick Decision Tree

### "I want to add a new feature"

1. Read: **CLAUDE.md** → Common Workflows section
2. Read: **CODE.md** → Component Architecture
3. Code following: **CODE.md** → Code Standards
4. Commit using: **COMMIT_PROMPTS.md** → Feature Template

### "I need to create a new component"

1. Read: **COMPONENT_CREATION.md** → Component Creation Checklist
2. Use Claude prompt: **COMPONENT_CREATION.md** → Claude AI Prompt
3. Follow template: **COMPONENT_CREATION.md** → Component Template Structure
4. Write tests: **COMPONENT_CREATION.md** → Testing Template
5. Add to Storybook: **COMPONENT_CREATION.md** → Storybook Story Template
6. Check: No `any` types, JSDoc comments added, tests included
7. Commit: **COMMIT_PROMPTS.md** → Feature Template

### "I found a bug and need to fix it"

1. Read: **CLAUDE.md** → Architecture section (understand structure)
2. Debug using: **CODE.md** → Debugging Tips
3. Fix following: **CODE.md** → Code Standards
4. Commit using: **COMMIT_PROMPTS.md** → Bug Fix Template

### "I need to refactor code"

1. Check: **CODE.md** → Common Mistakes to Avoid
2. Refactor following: **CODE.md** → Code Standards
3. Test: Run `npm run lint` and `npm run test:jest`
4. Commit using: **COMMIT_PROMPTS.md** → Refactoring Template

### "I'm stuck and need help from Claude"

1. Gather context from relevant doc (CLAUDE.md or CODE.md)
2. For components: **COMPONENT_CREATION.md** → Claude AI Prompt
3. Include file references in your prompt
4. Share result with team if useful

### "I'm new to the project"

1. Read: **GETTING_STARTED.md** (quick start)
2. Read: **CLAUDE.md** (entire file)
3. Read: **CODE.md** (entire file)
4. Skim: **COMMIT_PROMPTS.md** (commit examples)
5. Reference: **COMPONENT_CREATION.md** (when creating first component)
6. Setup: Run `npm install` and `npm run dev`

---

## 💬 Common Team Prompts

### For Claude AI - Bug Investigation

```
I'm working on the employee-management project.

Issue: [Describe problem]

Please investigate by reading the relevant code files.
Follow patterns from CODE.md and architecture from CLAUDE.md.
```

### For Claude AI - New Feature

```
I need to add [feature] to the employee-management app.

Requirements: [List requirements]

Please help me implement this following:
- Redux patterns from CLAUDE.md → State Management
- Code standards from CODE.md
- File structure from CLAUDE.md → Project Structure
```

### For Claude AI - Code Review

```
Can you review this code for the employee-management project?

[Paste code]

Check for:
- TypeScript type safety (CODE.md section)
- Redux best practices (CODE.md section)
- Material-UI patterns (CODE.md section)
- Common mistakes (CODE.md section)
```

### For Claude AI - Debugging

```
I'm debugging a Redux state issue in employee-management.

Problem: [Describe issue]
Current code: [Show relevant code]

Use debugging tips from CODE.md and Redux info from CLAUDE.md.
```

---

## 🔄 Standard Workflow

### 1. Start a Feature

```bash
# Create feature branch
git checkout -b feat/feature-name

# Reference: CLAUDE.md → Git Workflow
```

### 2. Implement Code

```bash
# Follow standards from CODE.md
# Use patterns from CLAUDE.md

# Check code quality
npm run lint

# Run tests
npm run test:jest
```

### 3. Commit Changes

```bash
# Use template from COMMIT_PROMPTS.md
# Follow format: type(scope): description

git add .
git commit -m "feat(scope): add feature description"

# Reference issue if applicable
# Example: "Closes #123"
```

### 4. Push and Create PR

```bash
git push origin feat/feature-name

# Create PR with description from COMMIT_PROMPTS.md template
```

### 5. Code Review

```
Check against CODE.md standards
Reference COMMIT_PROMPTS.md for commit message quality
```

---

## 📁 File Location Map

```
employee-management/
├── CLAUDE.md              ← Architecture & workflows
├── CODE.md                ← Code standards & patterns
├── COMMIT_PROMPTS.md      ← Commit message guide
├── TEAM_REFERENCE.md      ← This file (you are here)
├── README.md              ← Setup instructions
├── src/                   ← Source code (see CLAUDE.md)
└── ...
```

---

## 🚀 Getting Started Checklist

New team member should:

- [ ] Clone repository
- [ ] Run `npm install`
- [ ] Read CLAUDE.md (30 min)
- [ ] Read CODE.md (30 min)
- [ ] Skim COMMIT_PROMPTS.md (10 min)
- [ ] Run `npm run dev` and explore app
- [ ] Try making a small change and committing following COMMIT_PROMPTS.md
- [ ] Create first PR!

---

## ❓ FAQ

### Q: Which file do I read for Redux?

**A:** CLAUDE.md → State Management section (overview)
Then CODE.md → Redux Patterns (examples)

### Q: I don't know the project structure

**A:** Read CLAUDE.md → Project Structure

### Q: My commit message format is wrong

**A:** Reference COMMIT_PROMPTS.md → Commit Message Format

### Q: I'm making the same TypeScript mistake repeatedly

**A:** Check CODE.md → Common Mistakes to Avoid

### Q: How do I add a new API endpoint?

**A:** CLAUDE.md → Common Tasks → Adding a CRUD endpoint

### Q: What should my PR description include?

**A:** COMMIT_PROMPTS.md → PR Description Template

### Q: How do I test my new feature?

**A:** CODE.md → Testing Practices section

---

## 🎓 Learning Order

**Day 1 (Setup):**

1. Install project and run it
2. Read CLAUDE.md architecture section
3. Explore codebase with understanding

**Day 2 (Development):**

1. Read CODE.md standards
2. Make first code change
3. Reference CODE.md while coding

**Day 3 (Workflow):**

1. Read COMMIT_PROMPTS.md
2. Create first PR with proper commit message
3. Review CODE.md during code review feedback

**Ongoing:**

1. Reference docs as questions arise
2. Share useful patterns with team
3. Update docs with new learnings

---

## 📞 Support

**Questions about...**

- **Project architecture?** → Check CLAUDE.md
- **Code style/standards?** → Check CODE.md
- **How to commit?** → Check COMMIT_PROMPTS.md
- **How to get started?** → Check this file
- **Something not covered?** → Ask team lead or create discussion

---

## 🔗 External Links

- **Repository:** https://github.com/SargsyanGegham/employee-management
- **Local Dev:** http://localhost:3000
- **Mock API:** http://localhost:4000
- **Storybook:** http://localhost:6006

---

## ✨ Pro Tips

1. **Keep docs open while coding** - Refer to CODE.md for patterns
2. **Use commit message templates** - Copy from COMMIT_PROMPTS.md
3. **Check relevant section before asking** - 99% of answers are in these docs
4. **Update docs when you learn something new** - Help future team members
5. **Share useful Claude prompts** - Add to COMMIT_PROMPTS.md → Claude Prompts

---

_Last Updated: 2026-04-10_
_For questions or updates, reach out to the team lead._
