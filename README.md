# HomeBudget WebApp

A comprehensive, user-friendly budgeting application built with **React** and **Vite**. Manage your budgets and track expenses with ease, all stored locally for privacy.

[![Page](https://img.shields.io/badge/Live-Demo-brightgreen)](https://home-budget-web.vercel.app/)

## 🚀 Overview

HomeBudget is a modern web application designed to help users take control of their personal finances. It allows users to create multiple budgets, track expenses against those budgets, and visualize their spending habits.

### Key Features
- **User Dashboard**: Personalized experience with user name persistence.
- **Budget Management**: Create, view, and delete budgets with custom names and amounts.
- **Expense Tracking**: Add expenses directly to specific budgets.
- **Data Persistence**: All data is stored in your browser's `localStorage`.
- **Responsive Design**: Works seamlessly across mobile and desktop devices.
- **Modern UI**: Clean interface built with Vanilla CSS and Heroicons.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://reactjs.org/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router v6](https://reactrouter.com/) (using Loaders and Actions)
- **Icons**: [Heroicons](https://heroicons.com/)
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/)
- **Styling**: Vanilla CSS

## 📁 Project Structure

```text
src/
├── actions/      # React Router Actions for data mutations
├── assets/       # Static assets (images, icons)
├── components/   # Reusable UI components
├── layouts/      # Main application layouts
├── pages/        # Route components (Dashboard, Budget, Expenses)
├── helpers.js    # Utility functions and localStorage logic
├── App.jsx       # Route definitions
└── main.jsx      # Application entry point
```

## ⚙️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.0.0 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SabiqHashil/HomeBudget_WebApp-ReactJS.git
   ```
2. Navigate to the project directory:
   ```bash
   cd HomeBudget_WebApp-ReactJS
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📖 Documentation

For more detailed technical information, please refer to the following:

- [Architecture Overview](docs/architecture.md)
- [Dependency Guide](docs/dependencies.md)
- [Frontend Design](docs/frontend.md)
- [Data & Storage Schema](docs/data_management.md)
- [Development Guidelines](docs/guidelines.md)

## 🛡️ Security & Privacy

This application uses **Browser Local Storage** exclusively. No data is sent to any external server. Your financial information stays on your device.

## 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details.
