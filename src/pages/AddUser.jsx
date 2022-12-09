import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import NavBar from '../components/NavBar';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { Radio, useSelect } from '@material-tailwind/react';

function AddUser() {
  const [cookies, removeCookie] = useCookies();
  const navi = useNavigate();
  const handleLogout = () => {
    removeCookie('Username', { path: '/' });
    removeCookie('Pass', { path: '/' });
    navi('/');
  };
  const [username, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');
  const [role, setRole] = useState('');
  const [gender, setGender] = useState('');
  const [team_id, setTeamId] = useState('');

  const handleSubmit = (event) => {
    axios
      .post(
        `http://34.87.101.252:80/users`,
        {
          full_name: username,
          email: email,
          password: phone,
          team_id: 1,
          role: 'default',
          status: 'active',
          permission: 'superuser',
        },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NzA2NzcxMTAsInJvbGUiOiJkZWZhdWx0IiwidXNlcklkIjoxfQ.c5PgNg1TvnPaaULdExj1m9YdllIf4h-Av7-wlEK4M-o`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      });

    event.preventDefault();
  };

  return (
    <div className="flex flex-row bg-alta-white w-screen h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="w-full h-full bg-alta-light">
        <NavBar user={cookies.Username} logout={handleLogout} page="Add user" />
        <div className="bg-alta-white h-5/6 m-5">
          <div>
            <div className=" mt-10 ">
              <div className="w-full bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                <h3 className="my-5 text-alta-dark font-bold">User Data</h3>
                <form onSubmit={() => handleSubmit()} className="mb-0 my-2 mx-3 " action="#" method="POST ">
                  <div className="grid grid-rows-10 grid-flow-col">
                    <label className="label text-sm font-medium text-gray-700 flex-col sm:flex-row ">
                      <h5 className="label-text font-semibold lg:justify-start">Name</h5>
                      <input type="text" placeholder="Name" value={username} onChange={(e) => setUser(e.target.value)} className="w-3/4 input input-bordered focus:bg-[#F8F8F8] opacity-50 text-sm" />
                    </label>
                  </div>

                  <div className="grid grid-rows-10 grid-flow-col">
                    <label className="label">
                      <h5 className="label-text font-semibold">Email</h5>
                      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-3/4 input focus:bg-[#F8F8F8] opacity-50 input-bordered text-sm" />
                    </label>
                  </div>
                  <div className="grid grid-rows-10 grid-flow-col my-2 text-sm ">
                    <label className="mt-2 my-2 font-semibold">Gender</label>
                    <div className="mt-2">
                      <Radio value="female" name="gender" label="Female" className="mx-2 mt-1" onChange={(e) => setGender(e.target.value)} />
                    </div>
                    <div className="mt-2">
                      <Radio value="male" name="gender" label="Male" className="mx-2 mt-1" onChange={(e) => setGender(e.target.value)} />
                    </div>
                  </div>

                  <div className="grid grid-rows-10 grid-flow-col">
                    <label className="label">
                      <h5 className="label-text font-semibold">Phone</h5>
                      <input type="number" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-3/4 input focus:bg-[#F8F8F8] opacity-50 input-bordered text-sm" />
                    </label>
                  </div>
                  <div className="bg-white w-full py-2 flex items-center justify-between rounded text-sm font-semibold">
                    Team
                    <select value={team_id} onChange={(e) => setTeamId(e.target.value)} className=" w-3/4 h-10 text-sm rounded-lg md:text-md focus:bg-[#F8F8F8] opacity-50 ">
                      <option label="1" className="p-2 text-sm hover:bg-sky-500 hover:text-white">
                        Academic
                      </option>
                      <option label="2" className="p-2 text-sm hover:bg-sky-500 hover:text-white">
                        People
                      </option>
                      <option label="3" className="p-2 text-sm hover:bg-sky-500 hover:text-white">
                        Placement
                      </option>
                      <option label="4" className="p-2 text-sm hover:bg-sky-500 hover:text-white">
                        Admission
                      </option>
                    </select>
                  </div>

                  <div className="bg-white w-full py-2 flex items-center justify-between rounded text-sm font-semibold">
                    Role
                    <select className=" w-3/4 h-10 text-sm rounded-lg md:text-md focus:bg-alta-dark opacity-50">
                      <option name={role} onChange={(e) => setRole(e.target.value)} className="p-2 text-sm hover:bg-sky-500 hover:text-white">
                        Default
                      </option>
                      <option name={role} onChange={(e) => setRole(e.target.value)} className="p-2 text-sm hover:bg-sky-500 hover:text-white">
                        Admin
                      </option>
                    </select>
                  </div>
                  <div className="grid grid-rows-10 grid-flow-col my-2 text-sm ">
                    <label className="mt-2 my-2 font-semibold">Status</label>
                    <div className="mt-2">
                      <Radio value="active" name={status} onChange={(e) => setStatus(e.target.value)} label="Active" className="mx-2 mt-1" />
                    </div>
                    <div className="mt-2">
                      <Radio value="non_active" name={status} onChange={(e) => setStatus(e.target.value)} label="Non-Active" className="mx-2 mt-1" />
                    </div>
                  </div>
                  <div className="flex justify-end items-end">
                    <button
                      type="submit"
                      className=" sm:w-1/12 m-12  py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-alta-dark hover:bg-blue-800 focus:outoptionne-none focus:ring-2  focus:ring-blue-500"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
