import React from "react";

const NavBar = ({ user, logout }) => {
  return (
    <div className="navbar bg-alta-light text-alta-dark">
      <div className="flex flex-1">
        <a className="btn btn-ghost normal-case text-xl bg-alta-blue">
          Immersive Dashboard
        </a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost avatar">
            <h2 className="bg-alta-blue">Welcome,{user}</h2>
          </label>

          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a onClick={logout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
