// rrd imports
import { redirect } from "react-router-dom";

// library
import { toast } from "react-toastify";

// helpers
import { deleteItem, fetchData } from "../helpers";

export async function deleteAccountAction() {
  const userName = fetchData("userName");
  const users = fetchData("users") ?? [];
  const newUsers = users.filter(user => user !== userName);
  localStorage.setItem("users", JSON.stringify(newUsers));

  // delete the user data
  deleteItem({
    key: "userName",
  });
  deleteItem({
    key: "budgets",
  });
  deleteItem({
    key: "expenses",
  });
  toast.success("You’ve deleted your account!");
  // return redirect
  return redirect("/");
}
