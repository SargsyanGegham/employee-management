# ⚡ VS Code Snippets - Fastest Way to Use Prompts

**FASTEST way to work**: Type 2-3 letters → Get prompt instantly → Tab to customize fields

---

## 🚀 Setup (1 Minute)

### Step 1: Open VS Code Snippets

- **VS Code** → Preferences (⌘, or Ctrl+,)
- Search: `snippets`
- Click: **Preferences: Configure User Snippets**
- Select: **markdown** (or create new)

### Step 2: Import Snippets

Copy everything from `.vscode/snippets.json` into your markdown snippets file.

### Step 3: Restart VS Code

Close and reopen VS Code

**Done!** You now have instant prompts! ⚡

---

## ⌨️ Available Snippets (Type These)

| Type This | What It Does                                    | Time |
| --------- | ----------------------------------------------- | ---- |
| `empc`    | **New Component** - Create component with tests | 1s   |
| `empb`    | **Bug Fix** - Fix a bug                         | 1s   |
| `empf`    | **New Feature** - Add feature                   | 1s   |
| `empt`    | **Tests** - Write tests                         | 1s   |
| `emps`    | **Storybook** - Create stories                  | 1s   |
| `empr`    | **Code Review** - Review code                   | 1s   |
| `emprd`   | **Redux Debug** - Debug Redux                   | 1s   |
| `empa`    | **Architecture** - Explain how it works         | 1s   |
| `empp`    | **Performance** - Optimize performance          | 1s   |
| `emprf`   | **Refactor** - Refactor code                    | 1s   |

---

## ⚡ How to Use (Super Fast)

### Example 1: Create a Component

1. **Type:** `empc`
2. **Press:** Tab (or Enter)
3. **See:** Full prompt template
4. **Tab through:** Replace `${ComponentName}`, `${What does it do}`, etc.
5. **Done:** Copy-paste into Claude

**Total time: 5 seconds**

### Example 2: Fix a Bug

1. **Type:** `empb`
2. **Press:** Tab
3. **Tab through:** Fill in bug details
4. **Done:** Copy to Claude

**Total time: 5 seconds**

---

## 🎯 Most Used (Memorize These 3)

```
empc  →  New Component (most common)
empb  →  Bug Fix
empf  →  New Feature
```

**Just these 3 will handle 80% of your work!**

---

## 📋 Where to Use Snippets

Open any file and type:

- `.tsx` file? → Add snippet to comments or new file
- `.md` file? → Type snippet directly
- Chat/Claude prompt? → Type snippet then copy output
- Terminal? → Create temp file, add snippet, copy

**Easiest:** Create temp markdown file in VS Code:

```
1. File → New File
2. Type: temp.md
3. Type: empc
4. Fill in fields
5. Copy to Claude
```

---

## 🔧 Keyboard Shortcuts (Optional Power-Up)

### Speed Up Even MORE with Keybindings

Edit `.vscode/keybindings.json`:

```json
[
  {
    "key": "ctrl+alt+c",
    "command": "editor.action.insertSnippet",
    "args": { "snippet": "empc" },
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+alt+b",
    "command": "editor.action.insertSnippet",
    "args": { "snippet": "empb" },
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+alt+f",
    "command": "editor.action.insertSnippet",
    "args": { "snippet": "empf" },
    "when": "editorTextFocus"
  }
]
```

**Now you can:**

- Press `Ctrl+Alt+C` → Instant component prompt
- Press `Ctrl+Alt+B` → Instant bug fix prompt
- Press `Ctrl+Alt+F` → Instant feature prompt

---

## 💡 Pro Tips

### Tip 1: Open Snippet Definition

Want to see full snippet?

- `Ctrl+Space` while typing → Shows snippet description
- Shows what fields you'll fill in

### Tip 2: Tab Navigation

- Press **Tab** to jump between `${1:field}`, `${2:field}`, etc.
- Press **Shift+Tab** to go back
- Type to replace field

### Tip 3: Multiple Cursors

When tabbing through fields, you can edit all instances if they have the same `${X}` number

### Tip 4: Combine with Temp File

```
1. Ctrl+N → New File
2. Ctrl+Shift+S → Save as temp.md
3. empc + Tab → Fill snippet
4. Select all (Ctrl+A)
5. Copy (Ctrl+C)
6. Paste in Claude
```

---

## 🎓 What Each Snippet Does

### `empc` - New Component

```
✅ Create new component
✅ Add TypeScript types
✅ Write JSDoc
✅ Include Jest tests
✅ Add to Storybook
✅ No new dependencies
```

### `empb` - Bug Fix

```
✅ Describe bug
✅ Show affected file
✅ Expected vs actual
✅ Follow project patterns
```

### `empf` - New Feature

```
✅ Feature name
✅ Component location
✅ Requirements list
✅ Redux/validation/MUI patterns
✅ Tests included
```

### `empt` - Tests

```
✅ Component/function to test
✅ What it does
✅ Test cases
✅ Jest or Playwright
```

### `emps` - Storybook

```
✅ Component name
✅ What it does
✅ Story variants
✅ Multiple examples
```

### `empr` - Code Review

```
✅ Paste code
✅ Check types
✅ Redux patterns
✅ MUI patterns
✅ Tests
✅ Common mistakes
```

### `emprd` - Redux Debug

```
✅ Problem description
✅ Redux state output
✅ Expected vs actual
✅ Code snippet
```

### `empa` - Architecture

```
✅ Feature/component name
✅ Data flow
✅ Redux involvement
✅ Component hierarchy
✅ API calls
```

### `empp` - Performance

```
✅ Performance issue
✅ Where it happens
✅ When it happens
✅ Impact
✅ What you tried
```

### `emprf` - Refactor

```
✅ Code to refactor
✅ Current issues
✅ Goals
✅ Constraints
```

---

## 🔄 Workflow Example: Create SearchBox Component

**Time: 30 seconds**

```
1. VS Code → New file: temp.md
2. Type: empc [Enter]
3. Tab → Type: SearchBox
4. Tab → Type: Search employees by name/email
5. Tab → Type: query: string, onSearch, placeholder?: string
6. Tab → Type: Yes (reusable across forms)
7. Select all (Ctrl+A)
8. Copy (Ctrl+C)
9. Paste in Claude
10. Claude creates component with tests + Storybook
```

**Result:** Full component with tests in 1 minute!

---

## 📖 Quick Reference Card

```
SNIPPETS FOR EMPLOYEE-MANAGEMENT

empc  |  Create new component
empb  |  Fix a bug
empf  |  Add new feature
empt  |  Write tests
emps  |  Create Storybook story
empr  |  Review code
emprd |  Debug Redux
empa  |  Understand architecture
empp  |  Fix performance
emprf |  Refactor code

Setup: .vscode/snippets.json
Docs: PROMPTS.md
Status: READY TO USE ✅
```

---

## ✅ Checklist

- [ ] Opened VS Code Preferences → Snippets
- [ ] Selected markdown snippets
- [ ] Copied content from `.vscode/snippets.json`
- [ ] Pasted into markdown snippets file
- [ ] Restarted VS Code
- [ ] Tested: Type `empc` and press Tab
- [ ] Created temp.md file to practice
- [ ] Ready to use snippets!

---

## 🚀 You're Ready!

Now use this workflow:

```
Task          Snippet    Time
────────────────────────────
New component → empc  →  5s
Bug fix       → empb  →  5s
New feature   → empf  →  5s
Write tests   → empt  →  5s
Debug Redux   → emprd →  5s

Result: 25x faster than copy-pasting! ⚡
```

---

## 🎯 Next Steps

1. **Setup snippets NOW** (1 minute)
2. **Test with `empc`** (create component)
3. **Share with team** (commit to git)
4. **Use daily** (fastest workflow ever)

**See you in Claude!** 🚀

---

_For full prompts, see PROMPTS.md_
_For component templates, see COMPONENT_CREATION.md_
