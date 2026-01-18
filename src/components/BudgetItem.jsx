// rrd imports
import { Form, Link, useSubmit } from "react-router-dom";

// library imports
import { BanknotesIcon, TrashIcon } from "@heroicons/react/24/outline";

// helper functions
import {
  calculateSpentByBudget,
  formatCurrency,
  formatPercentage,
} from "../helpers";
import { useState } from "react";
import ConfirmDialog from "./ConfirmDialog";

const BudgetItem = ({ budget, showDelete = false }) => {
  const { id, name, amount, color } = budget;
  const spent = calculateSpentByBudget(id);
  const submit = useSubmit();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const confirmDelete = () => {
    submit(null, { method: "post", action: "delete" });
    setShowDeleteModal(false);
  };

  return (
    <div
      className="budget"
      style={{
        "--accent": color,
      }}
    >
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Budgeted</p>
      </div>
      <progress max={amount} value={spent}>
        {formatPercentage(spent / amount)}
      </progress>
      <div className="progress-text">
        <small>{formatCurrency(spent)} spent</small>
        <small>{formatCurrency(amount - spent)} remaining</small>
      </div>
      {showDelete ? (
        <div className="flex-sm">
          <button
            className="btn"
            onClick={() => setShowDeleteModal(true)}
          >
            <span>Delete Budget</span>
            <TrashIcon width={20} />
          </button>

          <ConfirmDialog
            open={showDeleteModal}
            title="Delete Budget"
            message="Are you sure you want to permanently delete this budget?"
            onConfirm={confirmDelete}
            onCancel={() => setShowDeleteModal(false)}
            confirmText="Delete Budget"
          />
        </div>
      ) : (
        <div className="flex-sm">
          <Link to={`/budget/${id}`} className="btn">
            <span>View Details</span>
            <BanknotesIcon width={20} />
          </Link>
        </div>
      )}
    </div>
  );
};
export default BudgetItem;
