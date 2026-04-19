# Employee Management System

A modern **Employee Management Dashboard** built with **Next.js 16 (App Router)**, **Redux Toolkit**, **Material-UI**, and **json-server**.
The application supports full CRUD operations, authentication, protected routes, and a responsive Material-UI interface.

📦 **GitHub Repository:** [SargsyanGegham/employee-management](https://github.com/SargsyanGegham/employee-management)

---

## 🚀 Features

- 🔐 **Authentication** – Login system with route protection (middleware-based)
- 📋 **Employee Management** – Full CRUD (Create, Read, Update, Delete)
- 📊 **MUI DataGrid** – Sorting, pagination, and clean tabular UI
- 🎨 **Material-UI (MUI)** – Modern and responsive UI with theming
- ⚡ **Redux Toolkit** – Centralized state management with async thunks
- 🔄 **Mock API** – `json-server` for rapid development (auto-started with dev script)
- ✅ **TypeScript** – End-to-end type safety
- 📱 **Responsive Design** – Optimized for desktop and mobile

---

## 📋 Prerequisites

- **Node.js** v18+
- **npm** (recommended) or **yarn**

---

## 🛠️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/SargsyanGegham/employee-management.git
cd employee-management
```

### 2️⃣ Install dependencies

```bash
npm install
```

---

## 🏃 Running the Application

Start both the Next.js app and the mock API with a single command:

```bash
npm run dev
```

- Next.js app: [http://localhost:3000](http://localhost:3000)
- Mock API (`json-server`): [http://localhost:4000](http://localhost:4000)

### Mock API Endpoints

- `GET /employees` – fetch all employees
- `GET /employees/:id` – fetch a single employee
- `POST /employees` – add a new employee
- `PUT /employees/:id` – update an employee
- `DELETE /employees/:id` – delete an employee
- `GET /users` – retrieve users for authentication

> **Note:** No need to start the mock API separately — the dev script handles it automatically using `concurrently`.

---

## 🔑 Login Credentials

Use the following credentials to access the dashboard:

| Email                                   | Password | Role          |
| --------------------------------------- | -------- | ------------- |
| [admin@test.com](mailto:admin@test.com) | 123456   | Administrator |

---

## 📁 Project Structure (Highlights)

```
employee-management/
├── src/
│   ├── app/           # Next.js App Router (pages, layouts, API routes)
│   ├── features/      # Feature-based modules (employees, auth)
│   ├── redux/         # Redux store and slices
│   ├── providers/     # Context providers (Redux, Theme, Auth)
│   ├── hooks/         # Custom hooks (e.g., useRedux)
│   ├── lib/           # Utilities (axios instance, error handler)
│   └── components/    # Reusable UI components
├── public/            # Static assets
├── db.json            # Mock database for json-server
└── package.json
```

---

## 📝 Development Guidelines & Prompts

This project includes coding guidelines and prompts to ensure consistency across the team.

### Setup Prompts Integration

After cloning the repository, run the setup script to integrate prompts with your VS Code:

```bash
# Windows
setup-prompts.bat

# Or manually:
# Copy files from src/prompts/ to %APPDATA%\Code\User\prompts\
```

### Available Prompts

- **Code Style Guidelines** (`src/prompts/code-style.prompt.md`) - Comprehensive coding standards
- **Code Style Snapshot** (`src/prompts/code-style.snapshot.tsx`) - Example implementation
- **Snapshots Usage Guide** (`src/prompts/snapshots-usage.md`) - How to use snapshots effectively

### Using Snapshots

Snapshots are **reference implementations** that demonstrate our coding guidelines:

1. **Copy as template**: Use snapshots as starting points for new components
2. **Reference during development**: Compare your code against snapshots
3. **Validate implementations**: Ensure code follows team standards

Example:

```bash
# Start new component from snapshot
cp src/prompts/code-style.snapshot.tsx src/components/MyComponent.tsx
```

See `src/prompts/snapshots-usage.md` for detailed usage instructions.

### Available Commands

```bash
# Setup prompts integration
npm run prompts:setup

# List all prompts
npm run prompts:list

# Open prompts in VS Code
npm run prompts:open

# View code style guidelines
npm run code:style
```

See `src/prompts/commands.md` for complete command reference.

### AI Assistant Integration

- **Claude Code**: Automatically reads `.claude.md` for project-specific instructions
- **VS Code Prompts**: Available in VS Code user prompts after setup

### Key Guidelines

- Use arrow functions for React components
- Prefer default exports for components
- Avoid `any` types and deprecated packages
- Create custom utilities instead of adding small npm packages
- Handle errors at service layer, not in components

---

1. Open [http://localhost:3000](http://localhost:3000) – you will be redirected to the login page.
2. Enter credentials: `admin@test.com / 123456`.
3. After login, you can:
   - View employees in the DataGrid (sorting and pagination enabled)
   - Add a new employee using the **Add Employee** button
   - Edit an employee by clicking the **edit** icon
   - Delete an employee (confirmation dialog appears)

4. Log out using the **Logout** button in the header.

---

## ⚡ Technologies Used

- **Next.js 16** – App Router, layouts
- **Material-UI (MUI)** – Responsive UI and DataGrid
- **Redux Toolkit** – State management
- **json-server** – Mock API for development
- **TypeScript** – Type safety
- **Axios** – HTTP client

---

## 📌 Notes

- This project is **for development and learning purposes**.
- Passwords are stored in plain text in the mock API (`db.json`) — do **not use this in production**.
- The app is fully responsive and works on mobile and desktop devices.
