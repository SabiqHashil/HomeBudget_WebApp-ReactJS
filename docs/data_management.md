# Data & Storage Management

This document details the data schema and the helper functions used to manage persistent state in `localStorage`.

## 🗄️ Storage Schema (localStorage)

All data is stored in the user's browser under the following keys:

### User Data
- **`userName`**: (String) The current user's name.
- **`users`**: (Array<String>) A list of all user names registered in this browser.

### Application Data (Keyed per user)
Data is prefixed with the user's name to provide simple isolation: `key_${userName}`.

#### Budget Object
```json
{
  "id": "uuid",
  "name": "String",
  "createdAt": "Timestamp (Number)",
  "amount": "Number",
  "color": "String (HSL)"
}
```

#### Expense Object
```json
{
  "id": "uuid",
  "name": "String",
  "createdAt": "Timestamp (Number)",
  "amount": "Number",
  "budgetId": "Foreign Key (budget.id)"
}
```

## 🛠️ Helper Utilities (`src/helpers.js`)

The app uses a set of pure functions and side-effect utility functions to manage data.

### Core Functions
- **`fetchData(key)`**: Retrieves and parses JSON data from `localStorage`. Handles user-prefixing automatically.
- **`getAllMatchingItems({category, key, value})`**: A filter utility for retrieving related data (e.g., all expenses for a budget ID).
- **`deleteItem({key, id})`**: Deletes a specific item or an entire collection.
- **`createBudget({name, amount})`**: Handles ID generation, color assignment, and persistence for new budgets.
- **`createExpense({name, amount, budgetId})`**: Handles expense persistence and links it to a budget.

### Formatting Utilities
- **`formatCurrency(amount)`**: Formats numbers to INR (₹) currency strings.
- **`formatDateToLocaleString(epoch)`**: Converts timestamps to localized date strings.
- **`formatPercentage(amount)`**: Formats decimals to percentage strings.

## 🔄 Data Migration
The `migrateData()` function handles legacy storage formats (converting non-prefixed keys to the new user-prefixed format) to ensure backward compatibility for returning users.
