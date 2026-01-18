// rrd imports
import { Link, useFetcher } from "react-router-dom";

// library import
import { TrashIcon } from "@heroicons/react/24/solid";

// helper imports
import {
  formatCurrency,
  formatDateToLocaleString,
  getAllMatchingItems,
} from "../helpers";
import { useState } from "react";
import ConfirmDialog from "./ConfirmDialog";

const ExpenseItem = ({ expense, showBudget }) => {
  const fetcher = useFetcher();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const budget = getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: expense.budgetId,
  })[0];

  const confirmDelete = () => {
    fetcher.submit(
      { _action: "deleteExpense", expenseId: expense.id },
      { method: "post" }
    );
    setShowDeleteModal(false);
  };

  return (
    <>
      <td>{expense.name}</td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{formatDateToLocaleString(expense.createdAt)}</td>
      {showBudget && (
        <td>
          <Link
            to={`/budget/${budget.id}`}
            style={{
              "--accent": budget.color,
            }}
          >
            {budget.name}
          </Link>
        </td>
      )}
      <td>
        <button
          className="btn btn--warning"
          aria-label={`Delete ${expense.name} expense`}
          onClick={() => setShowDeleteModal(true)}
        >
          <TrashIcon width={20} />
        </button>

        <ConfirmDialog
          open={showDeleteModal}
          title="Delete Expense"
          message={`Are you sure you want to delete the expense "${expense.name}"?`}
          onConfirm={confirmDelete}
          onCancel={() => setShowDeleteModal(false)}
          confirmText="Delete"
          confirmStyle="warning"
        />
      </td>
    </>
  );
};
export default ExpenseItem;
