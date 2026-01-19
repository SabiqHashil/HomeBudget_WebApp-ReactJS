# Maintenance and Extension Guidelines

This guide is intended for developers who wish to maintain or add new features to the HomeBudget WebApp.

## 📏 Coding Standards

- **Functional Components**: Use React functional components with Hooks.
- **Data Fetching**: Use React Router `loaders` for fetching data and `actions` for mutations. Avoid `useEffect` for data loading where possible.
- **Styling**: Prefer extending `src/index.css` over adding new stylesheets for small components. Use CSS variables for colors.
- **Naming Conventions**:
    - Components: PascalCase (e.g., `BudgetCard.jsx`).
    - Helpers/Actions: camelCase (e.g., `formatCurrency`).
    - CSS Classes: snake-case or kebab-case.

## 🏗️ How to Add a New Feature

### 1. Define the Data Requirement
Update `src/helpers.js` to include any new storage keys or retrieval logic needed.

### 2. Create the UI Component
Add a new component in `src/components/`. Ensure it is atomic and accepts props for its data.

### 3. Register the Route
Update `src/App.jsx` to define the new route, and create a corresponding page component in `src/pages/`.

### 4. Implement Loaders/Actions
Implement the `loader` for data fetching and `action` for any form submissions inside the page component or a dedicated file in `src/actions/`.

## 🧪 Future Enhancements (Roadmap)

- **Automated Testing**: Implement Vitest and React Testing Library for unit and integration tests.
- **Data Export**: Allow users to export their data as JSON or CSV.
- **Dark Mode**: Implement a theme toggle using CSS variables.
- **Charts and Graphs**: Integrate a library like Chart.js or Recharts for better visualization of spending.
- **Backend Sync**: Optional feature to sync data to a cloud database (Supabase or Firebase).

## 🛠️ Build and Deployment

The project is configured for deployment on platforms like Vercel or Netlify.
- **Build Command**: `npm run build`
- **Output Directory**: `dist/`
- **Server Configuration**: Ensure your deployment platform is configured to serve `index.html` for all routes (SPA fallback).
