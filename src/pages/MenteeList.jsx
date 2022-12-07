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
        `https://virtserver.swaggerhub.com/FEBRYANZAINAL/Immersive-Dashboard-OpenAPI/1.0.0/mentees?limit=10&offset=`
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
          <div>
            <div className="grid justify-end">
              <div className=" mx-16 my-10">
                <div className=" dropdown dropdown-bottom  rounded-box">
                  <label tabIndex={0} className="btn bg-white text-black m-1">
                    All Class <HiOutlineSelector className="mx-1"/>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>QE 7</a>
                    </li>
                    <li>
                      <a>BE 6</a>
                    </li>
                    <li>
                      <a>FE 8</a>
                    </li>
                  </ul>
                </div>
                <div className="mx-2 dropdown dropdown-bottom  rounded-box">
                  <label tabIndex={0} className="btn bg-white text-black m-1">
                    All Status <HiOutlineSelector className="mx-1"/>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Placement</a>
                    </li>
                    <li>
                      <a>Active</a>
                    </li>
                    <li>
                      <a>Eliminate</a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown dropdown-bottom  rounded-box">
                  <label tabIndex={0} className="btn bg-white text-black m-1">
                    All Category <HiOutlineSelector className="mx-1"/>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Informatics</a>
                    </li>
                    <li>
                      <a>Non-Informatics</a>
                    </li>
                  </ul>
                </div>
                <div className="left-2 dropdown rounded-box">
                  <button className="btn btn-primary">Filter</button>
                </div>
              </div>
            </div>

            <div className="my-10 mx-16 rounded-box min-h">
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <thead>
                    <tr className="text-center">
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
                  {row.map((item) => {
                    return (
                      <tbody className="text-center">
                        <tr className="hover">
                          <th>{item.id}</th>
                          <td>{item.full_name}</td>
                          <td>{item.class_name}</td>
                          <td>{item.status}</td>
                          <td>{item.education_type}</td>
                          <td>{item.gender}</td>
                          <td><button onClick={()=>navi("/mentee/detail")}><BiDetail/></button></td>
                          <td><button><MdEdit /></button></td>
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
    </div>
  );
};

export default MenteeList;
