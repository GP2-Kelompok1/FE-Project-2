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
  const [loading,setLoading] = useState(false)
  const navi = useNavigate();
  const handleLogout = () => {
    removeCookie("Username", { path: "/" });
    removeCookie("Pass", { path: "/" });
    navi("/");
  };

  const getRows = async() => {
    await axios
      .get(
        `http://34.87.101.252:80/users`
    ,{headers:{
        Authorization : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NzA2NzcxMTAsInJvbGUiOiJkZWZhdWx0IiwidXNlcklkIjoxfQ.c5PgNg1TvnPaaULdExj1m9YdllIf4h-Av7-wlEK4M-o`
      }})
      .then((res) => {
        setLoading(true)
   
        setRows(res.data.data);
      });
  };


  // console.log("ini data dari api",row)
  useEffect(() => {getRows()}, []);
  return (
    <div className="flex flex-row bg-alta-white w-full h-full">
      <div>
        <Sidebar />
      </div>
      <div className="w-full h-full bg-alta-light">
        <NavBar user={cookies.Username} logout={handleLogout} page={"User List"}/>
        <div className="bg-alta-white h-5/6 m-5">
          <div className="">
            <div className="flex flex-row-reverse mx-16">
            <div className="rounded-box my-10">
                  <button className="btn bg-alta-dark">Add New</button>
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
                <div className="border-b-2"></div>
            <div className="my-10 mx-16 rounded-box min-h">
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <thead>
                    <tr className="text-center text-alta-dark">
                      <th>ID</th>
                      <th>FULL NAME</th>
                      <th>EMAIL</th>
                      <th>TEAM</th>
                      <th>ROLE</th>
                      <th>STATUS</th>
                      <th>EDIT</th>
                      <th>DELETE</th>
                    </tr>
                  </thead>
                  {row && loading===true ? row.map((item) => {
                    return (
                      <tbody className="text-center text-alta-dark">
                        <tr className="hover">
                          <th>{item.id}</th>
                          <td>{item.full_name}</td>
                          <td>{item.email}</td>
                          <td>{item.team_id}</td>
                          <td>{item.role}</td>
                          <td>{item.status}</td>
                          <td><button onClick={()=>navi("/add/user")}><MdEdit/></button></td>
                          <td><button><MdDeleteForever/></button></td>
                        </tr>
                      </tbody>
                    );
                  }): <div><h1>Memuat.....</h1></div>
                }
                </table>
              </div>
            </div>
            <div className="p-5">
                    <p className="text-center pt-5 text-alta-dark">Showing 1 to 10</p>
                  </div>
                  <div className="btn-group flex  place-items-center justify-center gap-2">
              <button className="btn hover:text-white hover:bg-alta-dark bg-white text-alta-dark ">Prev</button>
              <button className="bg-white hover:text-white hover:bg-alta-dark border text-black btn-circle border-alta-dark">
                          1
                        </button>
              <button className="border-none  bg-white hover:text-white hover:bg-alta-dark btn-circle  ">
                          2
              </button>
              <button className="border-none  bg-white hover:text-white hover:bg-alta-dark btn-circle">
                          3
                        </button>
              <button className="border-none  bg-white hover:text-white hover:bg-alta-dark btn-circle">
                          4
              </button>
              <button className="border-none  bg-white hover:text-white hover:bg-alta-dark btn-circle">
                          5
              </button>
              
              <button className="btn hover:text-white hover:bg-alta-dark bg-white text-alta-dark">Next</button>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default User;
