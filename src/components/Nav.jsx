// rrd imports
import { Form, NavLink, useSubmit } from "react-router-dom";

// library
import { ArrowRightOnRectangleIcon, TrashIcon } from "@heroicons/react/24/solid";

// assets
import logomark from "../assets/logomark.svg";
import { useState } from "react";
import ConfirmDialog from "./ConfirmDialog";

const Nav = ({ userName }) => {
  const submit = useSubmit();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const confirmLogout = () => {
    submit(null, { method: "post", action: "logout" });
    setShowLogoutModal(false);
  };

  const confirmDelete = () => {
    submit(null, { method: "post", action: "delete-account" });
    setShowDeleteModal(false);
  };

  return (
    <nav>
      <NavLink to="/" aria-label="Go to home">
        <img src={logomark} alt="" height={30} />
        <span>HomeBudget</span>
      </NavLink>
      {userName && (
        <div className="flex-sm">
          <button
            className="btn btn--warning"
            onClick={() => setShowLogoutModal(true)}
          >
            <span>Logout</span>
            <ArrowRightOnRectangleIcon width={20} />
          </button>

          <button
            className="btn btn--warning"
            onClick={() => setShowDeleteModal(true)}
          >
            <span>Delete Account</span>
            <TrashIcon width={20} />
          </button>

          <ConfirmDialog
            open={showLogoutModal}
            title="Confirm Logout"
            message="Are you sure you want to log out?"
            onConfirm={confirmLogout}
            onCancel={() => setShowLogoutModal(false)}
            confirmText="Logout"
          />

          <ConfirmDialog
            open={showDeleteModal}
            title="Delete Account"
            message="Are you sure? This will permanently delete your user profile and all associated data."
            onConfirm={confirmDelete}
            onCancel={() => setShowDeleteModal(false)}
            confirmText="Delete Account"
            confirmStyle="warning"
          />
        </div>
      )}
    </nav>
  );
};
export default Nav;
