# Getting Started Guide

Quick start guide for new team members and collaborators.

---

## 🚀 First 10 Minutes

### 1. Clone & Setup

```bash
git clone https://github.com/SargsyanGegham/employee-management.git
cd employee-management
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

- Next.js: http://localhost:3000
- Mock API: http://localhost:4000
- Storybook: http://localhost:6006

### 3. Login with Test Credentials

```
Email: admin@test.com
Password: 123456
```

### 4. Read Documentation (in order)

1. **README.md** (3 min) - Project overview
2. **CLAUDE.md** (15 min) - Architecture & structure
3. **CODE.md** (15 min) - Coding standards
4. **COMPONENT_CREATION.md** (10 min) - Component guidelines
5. **COMMIT_PROMPTS.md** (5 min) - Commit guidelines
6. **TEAM_REFERENCE.md** (5 min) - Quick reference

---

## 📖 Documentation Guide

| Document              | What It's For             | Read It When            |
| --------------------- | ------------------------- | ----------------------- |
| README.md             | Project overview & setup  | First time setup        |
| CLAUDE.md             | Architecture & workflows  | Understanding project   |
| CODE.md               | Code standards & patterns | Writing code            |
| COMPONENT_CREATION.md | Component development     | Creating new components |
| COMMIT_PROMPTS.md     | Commit message format     | Before committing       |
| TEAM_REFERENCE.md     | Navigation & quick help   | Need to find something  |
| GETTING_STARTED.md    | This file! Quick start    | Just joined team        |

---

## ✅ Development Checklist

Before writing your first lines of code:

- [ ] Repository cloned locally
- [ ] Dependencies installed (`npm install`)
- [ ] Dev server running (`npm run dev`)
- [ ] Can login with test credentials
- [ ] Read CLAUDE.md
- [ ] Read CODE.md
- [ ] Familiar with VS Code ESLint/Prettier setup
- [ ] Created feature branch (`git checkout -b feat/name`)

---

## 💻 Essential Commands

```bash
# Start development
npm run dev

# Check code quality
npm run lint

# Run tests
npm run test:jest

# Build for production
npm run build

# Start production server
npm start

# View components (Storybook)
npm run storybook
```

---

## 🔧 VS Code Setup

1. **Install Extensions:**
   - ESLint (dbaeumer.vscode-eslint)
   - Prettier (esbenp.prettier-vscode)

2. **Settings Automatically Applied:**
   - ESLint auto-fix on save
   - Prettier format on save
   - TypeScript language support

3. **Verify Setup:**
   - Open any `.tsx` file
   - Make a syntax error
   - Should see red squiggly line in editor

---

## 📝 Making Your First Commit

1. **Make code changes following CODE.md**

2. **Check quality:**

   ```bash
   npm run lint
   npm run test:jest
   ```

3. **Create branch if not already:**

   ```bash
   git checkout -b feat/my-feature
   ```

4. **Stage changes:**

   ```bash
   git add .
   ```

5. **Commit with good message (see COMMIT_PROMPTS.md):**

   ```bash
   git commit -m "feat(employees): add search functionality"
   ```

6. **Push:**
   ```bash
   git push origin feat/my-feature
   ```

---

## 🆘 Common Issues & Solutions

### Issue: `npm install` fails

```bash
# Try clearing npm cache
npm cache clean --force

# Then reinstall
npm install
```

### Issue: Dev server won't start on port 3000

```bash
# Maybe another app is using the port
# Kill it or use different port
PORT=3001 npm run dev
```

### Issue: json-server fails

```bash
# Ensure db.json exists in root
# Check port 4000 isn't in use
# Restart: npm run dev
```

### Issue: ESLint warnings in editor don't show

```bash
# Restart VS Code completely
# Check ESLint extension is enabled
# Run: npm run lint (in terminal to verify)
```

### Issue: TypeScript errors not showing

```bash
# Restart VS Code
# Clear TypeScript cache: rm -rf node_modules/.cache
# Reinstall: npm install
```

---

## 📚 Project Structure (Quick Overview)

```
src/
├── app/                    # Next.js pages & routes
├── features/               # Feature modules (auth, employees)
├── redux/                  # State management
├── components/             # Shared UI components
├── providers/              # React context providers
├── hooks/                  # Custom React hooks
└── lib/                    # Utilities & config
```

_For detailed breakdown, see CLAUDE.md → Project Structure_

---

## 🎯 Your First Feature (5-Step Guide)

### Step 1: Create Branch

```bash
git checkout -b feat/my-feature
```

### Step 2: Reference Documentation

- Check CLAUDE.md → Common Workflows
- Check CODE.md → Code Standards

### Step 3: Implement Feature

```bash
# Create components in src/features/
# Add Redux thunks if needed
# Add tests
# Follow CODE.md patterns
```

### Step 4: Verify Quality

```bash
npm run lint       # No errors
npm run test:jest  # Tests pass
```

### Step 5: Commit & Push

```bash
git add .
git commit -m "feat(scope): description"  # See COMMIT_PROMPTS.md
git push origin feat/my-feature
```

---

## 🤖 Getting Help from Claude AI

When asking Claude for help on this project, include:

```
I'm working on the employee-management project.

[Your specific question or request]

References:
- Architecture: See CLAUDE.md
- Code patterns: See CODE.md
- Project structure: See CLAUDE.md → Project Structure
```

**Examples:**

1. Bug fix:

```
I found a bug in [component].
See CODE.md for our patterns and CLAUDE.md for architecture.
Can you help me fix it?
```

2. New feature:

```
I need to add [feature].
Please follow patterns from CODE.md and CLAUDE.md.
```

---

## 📊 Project Stats at a Glance

- **Framework:** Next.js 16 with App Router
- **State:** Redux Toolkit
- **UI:** Material-UI v7
- **Language:** TypeScript
- **API:** json-server (mock)
- **Testing:** Jest, Vitest, Playwright
- **Styling:** Emotion + Tailwind CSS

_See CLAUDE.md for full tech stack details_

---

## 🎓 Learning Path

### Week 1

- Set up environment
- Read all documentation
- Explore codebase
- Make small fixes/tweaks

### Week 2

- Implement small feature
- Learn Redux patterns
- Participate in code reviews

### Week 3

- Lead feature development
- Mentor new team members
- Contribute to architecture decisions

---

## 📞 Quick Help Matrix

| I need to...        | Look at           | File     | Section         |
| ------------------- | ----------------- | -------- | --------------- |
| Understand project  | README            | all-docs | Overview        |
| Learn architecture  | CLAUDE.md         | all      | Architecture    |
| Write clean code    | CODE.md           | all      | Code Standards  |
| Write good commits  | COMMIT_PROMPTS.md | all      | Examples        |
| Find documentation  | TEAM_REFERENCE.md | all      | None            |
| Get started quickly | This file         | all      | Getting Started |

---

## ✨ Pro Tips for Success

1. **Read docs before asking** - Most answers are documented
2. **Use TypeScript strictly** - It catches bugs early
3. **Follow Redux patterns** - Makes code predictable
4. **Test your features** - Write tests alongside code
5. **Reference COMMIT_PROMPTS.md** - Good commits = good history
6. **Ask questions** - Team is friendly and helpful
7. **Share knowledge** - Update docs when you learn something

---

## 🚀 Ready to Code?

1. ✅ Setup complete?
2. ✅ Docs read?
3. ✅ Dev server running?

**Then pick a task and start coding!**

If stuck, reference TEAM_REFERENCE.md to find the right documentation.

---

## 📧 Questions?

- Architecture question? → CLAUDE.md
- Code style question? → CODE.md
- Commit format? → COMMIT_PROMPTS.md
- Something else? → TEAM_REFERENCE.md
- Still stuck? → Ask the team!

---

_Last Updated: 2026-04-10_
_Welcome to the employee-management team! 🎉_
