# How to Use Snapshots

Snapshots are **reference implementations** that demonstrate the coding guidelines from our prompts. They serve as templates and examples for your development work.

## 📋 What Are Snapshots?

- **Live Examples**: Working code that follows all guidelines from the corresponding prompt
- **Templates**: Copy-paste starting points for new components/features
- **Reference**: Quick way to check if your code follows team standards

## 🚀 How to Use Snapshots

### 1. **Find the Right Snapshot**

Look in `src/prompts/` for snapshot files (`.snapshot.tsx`, `.snapshot.ts`, etc.)

### 2. **Use as Template**

```bash
# Copy a snapshot as starting point for new component
cp src/prompts/code-style.snapshot.tsx src/components/NewComponent.tsx
```

### 3. **Reference Implementation**

- Compare your code against the snapshot
- Ensure you follow all patterns shown
- Use it to validate your approach

### 4. **Key Patterns Demonstrated**

#### Code Style Snapshot (`code-style.snapshot.tsx`)

- ✅ Arrow function components
- ✅ Default exports
- ✅ Proper TypeScript interfaces (no `any`)
- ✅ useMemo for performance
- ✅ No try-catch in components
- ✅ Material-UI styling patterns
- ✅ Redux integration patterns

### 5. **Integration with Development**

#### With Claude Code

- Claude Code automatically reads `.claude.md` and follows guidelines
- Snapshots provide concrete examples for AI suggestions

#### With VS Code

- After running `setup-prompts.bat`, prompts are available
- Snapshots show how to implement the guidelines

### 6. **Workflow Example**

```typescript
// ❌ Don't do this (violates guidelines)
const BadComponent = function(props: any) {  // any type, function declaration
  try {
    // logic
  } catch (e) {
    // error handling in component
  }
  return <div />;
}

// ✅ Do this (follows snapshot pattern)
interface GoodComponentProps {
  data: SomeType;
}

const GoodComponent: React.FC<GoodComponentProps> = ({ data }) => {
  // Error handling at service layer, not here
  const processedData = useMemo(() => processData(data), [data]);

  return (
    <Box>
      {/* Material-UI components */}
    </Box>
  );
};

export default GoodComponent;  // Default export
```

## 📁 Snapshot Files

| Prompt                 | Snapshot                  | Purpose                                  |
| ---------------------- | ------------------------- | ---------------------------------------- |
| `code-style.prompt.md` | `code-style.snapshot.tsx` | React component following all guidelines |

## 🔄 Keeping Snapshots Updated

- Snapshots should be updated when guidelines change
- Use snapshots as the "source of truth" for implementations
- Team reviews should reference snapshots

## 💡 Pro Tips

- **Start with snapshots** for new components
- **Reference snapshots** during code reviews
- **Update snapshots** when discovering better patterns
- **Use snapshots** to onboard new team members

Snapshots ensure consistency and provide quick reference for implementing team standards!
