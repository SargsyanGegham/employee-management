# Employee Management System

A modern **Employee Management Dashboard** built with **Next.js 16 (App Router)**, **Redux Toolkit**, **Material-UI**, and **json-server**.
The application supports full CRUD operations, authentication, protected routes, and a responsive Material-UI interface.

🔗 **Live Demo:** Coming Soon
📦 **GitHub Repository:** [SargsyanGegham/employee-management](https://github.com/SargsyanGegham/employee-management)

---

## 🚀 Features

* 🔐 **Authentication** – Login system with route protection (middleware-based)
* 📋 **Employee Management** – Full CRUD (Create, Read, Update, Delete)
* 📊 **MUI DataGrid** – Sorting, pagination, and clean tabular UI
* 🎨 **Material-UI (MUI)** – Modern and responsive UI with theming
* ⚡ **Redux Toolkit** – Centralized state management with async thunks
* 🔄 **Mock API** – `json-server` for rapid development (auto-started with dev script)
* ✅ **TypeScript** – End-to-end type safety
* 📱 **Responsive Design** – Optimized for desktop and mobile

---

## 📋 Prerequisites

* **Node.js** v18+
* **npm** (recommended) or **yarn**

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

* Next.js app: [http://localhost:3000](http://localhost:3000)
* Mock API (`json-server`): [http://localhost:4000](http://localhost:4000)

### Mock API Endpoints

* `GET /employees` – fetch all employees
* `GET /employees/:id` – fetch a single employee
* `POST /employees` – add a new employee
* `PUT /employees/:id` – update an employee
* `DELETE /employees/:id` – delete an employee
* `GET /users` – retrieve users for authentication

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
├── middleware.ts      # Next.js middleware for route protection
└── package.json
```

---

## 🧪 Testing the Application

1. Open [http://localhost:3000](http://localhost:3000) – you will be redirected to the login page.
2. Enter credentials: `admin@test.com / 123456`.
3. After login, you can:

   * View employees in the DataGrid (sorting and pagination enabled)
   * Add a new employee using the **Add Employee** button
   * Edit an employee by clicking the **edit** icon
   * Delete an employee (confirmation dialog appears)
4. Log out using the **Logout** button in the header.

---

## ⚡ Technologies Used

* **Next.js 16** – App Router, layouts, middleware
* **Material-UI (MUI)** – Responsive UI and DataGrid
* **Redux Toolkit** – State management
* **json-server** – Mock API for development
* **TypeScript** – Type safety
* **Axios** – HTTP client

---

## 📌 Notes

* This project is **for development and learning purposes**.
* Passwords are stored in plain text in the mock API (`db.json`) — do **not use this in production**.
* The app is fully responsive and works on mobile and desktop devices.
