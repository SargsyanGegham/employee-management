# Prompt Commands Guide

This guide covers all available commands for managing and using the project's prompts system.

## 🚀 Available Commands

### Setup Commands

```bash
# Initial setup - link VS Code prompts to project
npm run prompts:setup
# or
./setup-prompts.bat
```

### Information Commands

```bash
# List all prompt files
npm run prompts:list

# Open prompts folder in VS Code
npm run prompts:open

# Validate prompts exist
npm run prompts:validate

# Display code style guidelines
npm run code:style
```

### Development Commands

```bash
# Create new prompt from template
npm run prompts:new
# Then edit the created file
```

## 📋 Command Reference

| Command                    | Description                     | When to Use             |
| -------------------------- | ------------------------------- | ----------------------- |
| `npm run prompts:setup`    | Link VS Code to project prompts | After clone/pull        |
| `npm run prompts:list`     | Show all prompt files           | Check available prompts |
| `npm run prompts:open`     | Open prompts in VS Code         | Edit/view prompts       |
| `npm run prompts:validate` | Verify prompt files exist       | CI/CD checks            |
| `npm run code:style`       | Display coding guidelines       | Quick reference         |
| `npm run prompts:new`      | Create new prompt template      | Add new guidelines      |

## 🔧 Manual Commands

### Creating New Prompts

```bash
# Copy existing prompt as template
cp src/prompts/code-style.prompt.md src/prompts/new-feature.prompt.md

# Edit the new prompt
code src/prompts/new-feature.prompt.md
```

### Creating Snapshots

```bash
# Copy snapshot as template for new component
cp src/prompts/code-style.snapshot.tsx src/components/NewComponent.tsx

# Edit the component
code src/components/NewComponent.tsx
```

### VS Code Integration

```bash
# After setup, prompts are available in VS Code
# Access via: Ctrl+Shift+P → "Prompts: Create New Prompt"
```

## 📁 File Structure

```
src/prompts/
├── code-style.prompt.md      # Main coding guidelines
├── code-style.config.json    # Prompt configuration
├── code-style.snapshot.tsx   # Example implementation
├── snapshots-usage.md        # How to use snapshots
└── [new-prompts...]
```

## 🔄 Workflow Commands

### Daily Development

```bash
# Start development with prompts linked
npm run prompts:setup  # One time
npm run dev           # Start coding
```

### Adding New Guidelines

```bash
# Create new prompt
npm run prompts:new
# Edit the created file
code src/prompts/new-feature.prompt.md

# Create corresponding snapshot
cp src/prompts/code-style.snapshot.tsx src/prompts/new-feature.snapshot.tsx
# Implement example
code src/prompts/new-feature.snapshot.tsx

# Update config
code src/prompts/new-feature.config.json
```

### Team Onboarding

```bash
# New team member setup
git pull
npm install
npm run prompts:setup
npm run prompts:list
npm run code:style
```

## ⚡ Quick Access

### View Guidelines Quickly

```bash
npm run code:style
```

### Open All Prompts

```bash
npm run prompts:open
```

### Validate Setup

```bash
npm run prompts:validate
```

## 🔗 Integration

- **Claude Code**: Automatically reads `.claude.md`
- **VS Code**: Prompts linked via symlink after setup
- **Git**: All prompts version controlled
- **CI/CD**: Can validate with `npm run prompts:validate`

Use these commands to efficiently manage your team's coding standards and ensure consistent development practices!
