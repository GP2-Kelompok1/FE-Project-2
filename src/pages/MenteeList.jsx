import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

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
      <div className="w-screen h-full bg-alta-light">
        <NavBar user={cookies.Username} logout={handleLogout} />
        <div className="bg-alta-white h-5/6 m-5">
          <div>
            <div className="grid justify-end">
              <div className=" mx-16">
                <div className=" dropdown dropdown-bottom  rounded-box">
                  <label tabIndex={0} className="btn bg-white text-black m-1">
                    All Class
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
                    All Status
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
                    All Category
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

            <div className="my-10 mx-16 rounded-box   min-h-screen">
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <thead>
                    <tr>
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
                      <tbody className="">
                        <tr className="hover">
                          <th>{item.id}</th>
                          <td>{item.full_name}</td>
                          <td>{item.class_name}</td>
                          <td>{item.status}</td>
                          <td>{item.education_type}</td>
                          <td>{item.gender}</td>
                          <td>icon details</td>
                          <td>icon edit</td>
                          <td>icon delete</td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              </div>
            </div>
            <div className="btn-group flex  place-items-center justify-center">
              <button className="btn bg-white text-black ">Prev</button>
              <p className="mx-10">1 2 3 4 5 </p>
              <button className="btn bg-white text-black">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenteeList;
