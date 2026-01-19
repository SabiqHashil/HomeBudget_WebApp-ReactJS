# Frontend Documentation

This document provides details on the frontend implementation, including component organization, styling, and design principles.

## 🎨 UI & Design System

The application uses a clean, modern aesthetic with a focus on usability and clarity.

### Design Principles
- **Clarity**: High contrast and clear typography.
- **Responsiveness**: The layout adjusts fluidly to mobile and tablet screens.
- **Visual Feedback**: Real-time notifications via `react-toastify` and dynamic budget progress bars.
- **Color Coding**: Budgets are assigned random but persistent HSL colors for easy identification.

### CSS Strategy
- **Vanilla CSS**: The app uses a single main stylesheet (`src/index.css`) and a specific dialog stylesheet (`src/dialog.css`).
- **Variables**: CSS variables are used for primary colors and spacing to ensure consistency.

## 🧱 Component Architecture

The `src/components/` directory contains atomic and molecular components designed for reuse.

### Key Components
| Component | Description |
| :--- | :--- |
| **BudgetCard** | Displays budget info, progress bar, and "View Details" action. |
| **AddBudgetForm** | A controlled form for creating new budgets. |
| **AddExpenseForm** | A dynamic form for adding expenses relative to budgets. |
| **Table** | A data table for listing expenses with formatting for currency and dates. |
| **Intro** | The landing component for first-time users to set up their profile. |
| **Nav** | The main navigation bar with user profile and logout actions. |

## 🧭 Routing & Layouts

- **`src/layouts/Main.jsx`**: The root layout wrapper containing the navigation and main content area.
- **`src/pages/`**:
    - **Dashboard**: The primary overview page for the user.
    - **BudgetPage**: A detailed view of a single budget and its associated expenses.
    - **ExpensesPage**: A high-level view of all expenses across all budgets.
    - **Error**: A graceful fallback for invalid routes or application crashes.

## 🖼️ Assets

- **Location**: `src/assets/`
- **Contents**: Includes icons, logo, and other static media.
- **Usage**: Managed via standard ECMA imports (e.g., `import logomark from "../assets/logomark.svg"`).
