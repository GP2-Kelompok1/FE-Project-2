import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { MdEdit } from 'react-icons/md'
import { MdDeleteForever } from 'react-icons/md'

const User = () => {
  const [row, setRows] = useState([]);
  const [cookies, removeCookie] = useCookies();
  const navi = useNavigate();
  const handleLogout = () => {
    removeCookie("Username", { path: "/" });
    removeCookie("Pass", { path: "/" });
    navi("/");
  };

  const getRows = () => {
    axios
      .get(
        `https://virtserver.swaggerhub.com/FEBRYANZAINAL/Immersive-Dashboard-OpenAPI/1.0.0/users?limit=10&offset=1`
      )
      .then((res) => {
        console.log(res.data.data);
        setRows(res.data.data);
      });
  };

  // console.log("ini data dari api",row)
  useEffect(() => getRows(), []);
  return (
    <div className="flex flex-row bg-alta-white w-screen h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="w-full h-full bg-alta-light">
        <NavBar user={cookies.Username} logout={handleLogout} />
        <div className="bg-alta-white h-5/6 m-5">
          <div className="">
            <div className="flex flex-row-reverse mx-16">
            <div className="rounded-box my-10">
                  <button className="btn btn-primary">Add New</button>
                </div>
                <div className="my-10">
                <button className="mx-1 bg-slate-200 btn btn-ghost btn-box ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
                </div>
                  <div className="form-control my-10">
                    <input
                      type="text"
                      placeholder="Search"
                      className="input input-bordered"
                    />
                  </div>
           
                </div>
                </div>
            <div className="my-10 mx-16 rounded-box min-h">
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <thead>
                    <tr className="text-center">
                      <th>NO</th>
                      <th>FULL NAME</th>
                      <th>EMAIL</th>
                      <th>TEAM</th>
                      <th>ROLE</th>
                      <th>STATUS</th>
                      <th>EDIT</th>
                      <th>DELETE</th>
                    </tr>
                  </thead>
                  {row.map((item) => {
                    return (
                      <tbody className="text-center">
                        <tr className="hover">
                          <th>{item.id}</th>
                          <td>{item.full_name}</td>
                          <td>{item.email}</td>
                          <td>{item.team.team_name}</td>
                          <td>{item.role}</td>
                          <td>{item.status}</td>
                          <td><button><MdEdit/></button></td>
                          <td><button><MdDeleteForever/></button></td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              </div>
            </div>
            <div className="p-5">
                    <p className="text-center pt-5">Showing 1 to 10</p>
                  </div>
            <div className="btn-group flex  place-items-center justify-center">
              <button className="btn bg-white text-black ">Prev</button>
              <button className="btn bg-white border-none text-black">
                          1
                        </button>
              <button className="btn bg-white border-none text-black">
                          2
              </button>
              <button className="btn bg-white border-none text-black">
                          3
                        </button>
              <button className="btn bg-white border-none text-black">
                          4
              </button>
              <button className="btn bg-white border-none text-black">
                          5
              </button>
              
              <button className="btn bg-white text-black">Next</button>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default User;
