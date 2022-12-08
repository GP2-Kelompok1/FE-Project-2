import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { MdEdit } from 'react-icons/md'
import { HiOutlineSelector } from 'react-icons/hi'
import { BiDetail } from 'react-icons/bi'
import { MdDeleteForever } from 'react-icons/md'

const MenteeList = () => {
  const [row, setRows] = useState([]);
  const [loading,setLoading] = useState(false)
  const [cookies, removeCookie] = useCookies();
  const [filter,setFilter]= useState("All Class")
  const [filterStatus,setFilterStatus] = useState("All Status")
  const [filterCate,setFilterCate] = useState("All Category")
  const navi = useNavigate();
  const handleLogout = () => {
    removeCookie("Username", { path: "/" });
    removeCookie("Pass", { path: "/" });
    navi("/");
  };

  const getRows = () => {
    axios
      .get(
        `https://virtserver.swaggerhub.com/FEBRYANZAINAL/Immersive-Dashboard-OpenAPI/1.0.0/mentees?limit=10&offset=`
      )
      .then((res) => {
        setLoading(true)
      
        setRows(res.data.data);
      });
  };

  // console.log("ini data dari api",row)
  useEffect(() => getRows(), []);

  return (
    <div className="flex flex-row bg-alta-white w-full h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="w-full h-full bg-alta-light">
        <NavBar user={cookies.Username} logout={handleLogout} page={"Mentee List"} />
        <div className="bg-alta-white h-5/6 m-5">
          <div>
          <div className="flex flex-row-reverse mx-16">
            <div className="rounded-box my-10">
            <label htmlFor="my-modal-4" className="btn bg-alta-dark">ADD NEW</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-4" className="modal-toggle" />
<label htmlFor="my-modal-4" className="modal cursor-pointer">
  <label className="modal-box relative" htmlFor="">
   
  </label>
</label>
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
               <div className="border-b-2"></div>
            <div className="grid justify-end">
              <div className="mr-20 mt-5">
                <div className=" dropdown dropdown-bottom  rounded-box text-alta-dark">
                  <label tabIndex={0} className=" bg-white text-alta-dark m-1 btn hover:text-white hover:bg-alta-dark ">
                    {filter} <HiOutlineSelector className="mx-1"/>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 bg-base-100 rounded-box w-52">
                    <li>
                      <a onClick={()=>setFilter("ALL CLASS")}>ALL CLASS</a>
                    </li>
                    <li>
                      <a onClick={()=>setFilter("QE 7")}>QE 7</a>
                    </li>
                    <li>
                      <a onClick={()=>setFilter("BE 6")}>BE 6</a>
                    </li>
                    <li>
                      <a onClick={()=>setFilter("FE 8")}>FE 8</a>
                    </li>
                  </ul>
                </div>
                <div className="mx-2 dropdown dropdown-bottom  rounded-box text-alta-dark">
                  <label tabIndex={0} className="btn bg-white text-alta-dark m-1 hover:text-white hover:bg-alta-dark">
                    {filterStatus} <HiOutlineSelector className="mx-1"/>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                      <a onClick={()=>setFilterStatus("All Status")}>All Status</a>
                    </li>
                    <li>
                      <a onClick={()=>setFilterStatus("Placement")}>Placement</a>
                    </li>
                    <li>
                      <a onClick={()=>setFilterStatus("Active")}>Active</a>
                    </li>
                    <li>
                      <a onClick={()=>setFilterStatus("Eliminate")}>Eliminate</a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown dropdown-bottom  rounded-box text-alta-dark">
                  <label tabIndex={0} className="btn bg-white text-alta-dark m-1 hover:text-white hover:bg-alta-dark">
                    {filterCate} <HiOutlineSelector className="mx-1"/>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                     <li>
                      <a onClick={()=>setFilterCate("All Category")}>All Category</a>
                    </li>
                    <li>
                      <a onClick={()=>setFilterCate("Informatics")}>Informatics</a>
                    </li>
                    <li>
                      <a onClick={()=>setFilterCate("Non-Informatics")}>Non-Informatics</a>
                    </li>
                  </ul>
                </div>
                <div className="left-2 dropdown rounded-box">
                  <button className="btn bg-alta-dark">Filter</button>
                </div>
              </div>
            </div>

            <div className="my-10 mx-16 rounded-box min-h">
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <thead>
                    <tr className="text-center text-alta-dark">
                      <th>NO</th>
                      <th>NAMA</th>
                      <th>CLASS</th>
                      <th>STATUS</th>
                      <th>CATEGORY</th>
                      <th>GENDER</th>
                      <th>DETAIL</th>
                      <th>EDIT</th>
                      <th>DELETE</th>
                    </tr>
                  </thead>
                  {row && loading === true ? row.map((item) => {
                    return (
                      <tbody className="text-center">
                        <tr className="hover text-alta-dark">
                          <th>{item.id}</th>
                          <td>{item.full_name}</td>
                          <td>{item.class_name}</td>
                          <td>{item.status}</td>
                          <td>{item.education_type}</td>
                          <td>{item.gender}</td>
                          <td><button onClick={()=>navi("/mentee/log")}><BiDetail/></button></td>
                          <td><button onClick={()=>navi("/mentee/detail")}><MdEdit /></button></td>
                          <td><button><MdDeleteForever/></button></td>
                        </tr>
                      </tbody>
                    );
                  }) : <div><h1>Memuat......</h1></div>
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
    </div>
  );
};

export default MenteeList;
