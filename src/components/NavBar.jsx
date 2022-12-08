import React from "react";

const NavBar = ({ user, logout, page }) => {
  return (
    <div className="navbar bg-alta-light text-alta-dark bg-white shadow-xl">
      <div className="flex flex-col xl:flex-row xl:justify-between w-full  xl:p-5">
        <div className="text-start w-full pt-3">
          <h2 className="font-bold text-xl">Immersive Dashboard</h2>
          <p>{page}</p> 
        </div>
        <div className="w-full text-start xl:text-end">
          <div className="dropdown xl:dropdown-end">
            <label tabIndex={0} className="btn btn-ghost avatar p-0">
              <h2 className="bg-alta-blue">Welcome,{user}</h2>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52"
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
    </div>
  );
};

export default NavBar;
