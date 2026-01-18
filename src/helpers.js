export const waait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 800));

// colors
const generateRandomColor = () => {
  const existingBudgetLength = fetchData("budgets")?.length ?? 0;
  return `${existingBudgetLength * 34} 65% 50%`;
};

// Local storage
export const fetchData = (key) => {
  const userName = JSON.parse(localStorage.getItem("userName"));
  if (key === "userName" || key === "users") {
    return JSON.parse(localStorage.getItem(key));
  }
  return JSON.parse(localStorage.getItem(`${key}_${userName}`));
};

// Data Migration (Run once on app load if needed)
export const migrateData = () => {
  const users = JSON.parse(localStorage.getItem("users"));
  const legacyBudgets = JSON.parse(localStorage.getItem("budgets"));
  const legacyExpenses = JSON.parse(localStorage.getItem("expenses"));
  const legacyUserName = JSON.parse(localStorage.getItem("userName"));

  // If we have legacy data but no users list, migrate it to the current user
  if (!users && legacyUserName) {
    const newUsers = [legacyUserName];
    localStorage.setItem("users", JSON.stringify(newUsers));

    if (legacyBudgets) {
      localStorage.setItem(`budgets_${legacyUserName}`, JSON.stringify(legacyBudgets));
      localStorage.removeItem("budgets");
    }

    if (legacyExpenses) {
      localStorage.setItem(`expenses_${legacyUserName}`, JSON.stringify(legacyExpenses));
      localStorage.removeItem("expenses");
    }
  }
};

// Get all items from local storage
export const getAllMatchingItems = ({ category, key, value }) => {
  const data = fetchData(category) ?? [];
  return data.filter((item) => item[key] === value);
};

// delete item from local storage
export const deleteItem = ({ key, id }) => {
  const userName = JSON.parse(localStorage.getItem("userName"));
  let storageKey = key;

  if (key !== "userName" && key !== "users") {
    storageKey = `${key}_${userName}`;
  }

  const existingData = fetchData(key);
  if (id) {
    const newData = existingData.filter((item) => item.id !== id);
    return localStorage.setItem(storageKey, JSON.stringify(newData));
  }
  return localStorage.removeItem(storageKey);
};

// create budget
export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor(),
  };
  const existingBudgets = fetchData("budgets") ?? [];
  const userName = JSON.parse(localStorage.getItem("userName"));
  return localStorage.setItem(
    `budgets_${userName}`,
    JSON.stringify([...existingBudgets, newItem])
  );
};

// create expense
export const createExpense = ({ name, amount, budgetId }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    budgetId: budgetId,
  };
  const existingExpenses = fetchData("expenses") ?? [];
  const userName = JSON.parse(localStorage.getItem("userName"));
  return localStorage.setItem(
    `expenses_${userName}`,
    JSON.stringify([...existingExpenses, newItem])
  );
};

// total spent by budget
export const calculateSpentByBudget = (budgetId) => {
  const expenses = fetchData("expenses") ?? [];
  const budgetSpent = expenses.reduce((acc, expense) => {
    // check if expense.id === budgetId I passed in
    if (expense.budgetId !== budgetId) return acc;

    // add the current amount to my total
    return (acc += expense.amount);
  }, 0);
  return budgetSpent;
};

// FORMATTING
export const formatDateToLocaleString = (epoch) =>
  new Date(epoch).toLocaleDateString();

// Formating percentages
export const formatPercentage = (amt) => {
  return amt.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
  });
};

// Format currency
export const formatCurrency = (amt) => {
  return amt.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });
};
