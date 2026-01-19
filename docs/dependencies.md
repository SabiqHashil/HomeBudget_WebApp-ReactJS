# Dependencies and Tooling

This project uses a curated set of dependencies to maintain a lightweight and efficient codebase.

## 📦 Dependencies

| Package | Version | Purpose |
| :--- | :--- | :--- |
| **react** | `^18.2.0` | Core UI library. |
| **react-dom** | `^18.2.0` | React's DOM-specific methods. |
| **react-router-dom** | `^6.8.0` | Handles routing, data loading, and mutations. |
| **react-toastify** | `^9.1.1` | Provides non-intrusive toast notifications. |
| **@heroicons/react** | `^2.0.14` | SVG icons for the UI. |

## 🛠️ Dev Dependencies

| Package | Version | Purpose |
| :--- | :--- | :--- |
| **vite** | `^4.1.0` | Next-generation frontend build tool. |
| **@vitejs/plugin-react-swc** | `^3.0.0` | Fast React refresh using SWC. |
| **@types/react** | `^18.0.27` | Type definitions for React. |
| **@types/react-dom** | `^18.0.10` | Type definitions for React DOM. |

## 📈 Maintenance & Upgrades

### Upgrading Dependencies
To keep the project secure and performant, regularly check for updates:
```bash
npm outdated
```
Update specific packages:
```bash
npm update <package-name>
```

### Dependency Roles
- **Vite & SWC**: Chosen for their superior performance and developer experience compared to Create React App.
- **React Router v6**: Used specifically for its data management capabilities (Loaders/Actions), keeping the UI components clean and focused on rendering.
- **Vanilla CSS**: Used to maintain a tiny bundle size and full control over styling without the overhead of heavy frameworks.
