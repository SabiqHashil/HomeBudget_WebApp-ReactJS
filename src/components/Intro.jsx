import { Form } from "react-router-dom";

// library
import { UserPlusIcon, UserIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";

// assets
import illustration from "../assets/illustration.jpg";

// helpers
import { fetchData } from "../helpers";
import { useState } from "react";

const Intro = () => {
  const existingUsers = fetchData("users") ?? [];
  const [selectedUser, setSelectedUser] = useState(existingUsers[0] || "");

  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent">Your Money</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom. Start your
          journey today.
        </p>

        {existingUsers.length > 0 && (
          <div className="existing-users">
            <h2>Select User</h2>
            <Form method="post" className="flex-sm">
              <input type="hidden" name="_action" value="loginUser" />
              <div className="select-group">
                <select
                  name="userName"
                  value={selectedUser}
                  onChange={(e) => setSelectedUser(e.target.value)}
                  required
                >
                  {existingUsers.map((user) => (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="btn btn--details">
                <span>Login</span>
                <ArrowRightOnRectangleIcon width={20} />
              </button>
            </Form>
            <p className="or">or create new</p>
          </div>
        )}

        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name?"
            aria-label="Your Name"
            autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Person with money" width={600} />
    </div>
  );
};
export default Intro;
