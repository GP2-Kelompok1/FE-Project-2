import React from 'react';
import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import Sidebar from '../components/Sidebar';
import NavBar from '../components/NavBar';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

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
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="flex flex-row bg-alta-white w-screen h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="w-full h-full bg-alta-light">
        <NavBar user={cookies.Username} logout={handleLogout} />
        <div className="bg-alta-white h-5/6 m-5">
          <div>
            <div className=" mt-10 ">
              <div className="w-full bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                <h2 className="my-5 text-[#17345F] font-bold">User Data</h2>
                <form className="mb-0 my-2 mx-3 " action="#" method="POST " onSubmit={() => handleSubmit()}>
                  <div className="grid grid-rows-10 grid-flow-col">
                    <label className="label text-sm font-medium text-gray-700">
                      <h5 className="label-text font-semibold">User Name</h5>
                      <input type="text" placeholder="Name" value={username} onChange={(e) => setUser(e.target.value)} className="w-3/4 input input-bordered focus:bg-[#F8F8F8] opacity-50 text-sm" />
                    </label>
                  </div>

                  <div className="grid grid-rows-10 grid-flow-col">
                    <label className="label">
                      <h5 className="label-text font-semibold">Email</h5>
                      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-3/4 input focus:bg-[#F8F8F8] opacity-50 input-bordered text-sm" />
                    </label>
                  </div>
                  <div className="grid grid-rows-10 grid-flow-col my-2 text-sm">
                    <label className="mt-2 col-form-label font-semibold">Gender</label>
                    <div className="mt-2">
                      {' '}
                      Female
                      <input type="radio" className="mx-2 mt-1" name="isyes" value="1"></input>
                    </div>
                    <div className=" mt-2">
                      {' '}
                      Male
                      <input type="radio" className="mx-2 mt-1" name="isyes" value="0"></input>
                    </div>
                  </div>
                  <div className="grid grid-rows-10 grid-flow-col">
                    <label className="label">
                      <h5 className="label-text font-semibold">Phone</h5>
                      <input type="number" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-3/4 input focus:bg-[#F8F8F8] opacity-50 input-bordered text-sm" />
                    </label>
                  </div>
                  <div className="bg-white w-full py-2 flex items-center justify-between rounded text-sm font-semibold">
                    Team
                    <select className=" w-3/4 h-10 text-sm rounded-lg md:text-md focus:bg-[#F8F8F8] opacity-50">
                      <option className="p-2 text-sm hover:bg-sky-500 hover:text-white">Academic</option>
                      <option className="p-2 text-sm hover:bg-sky-500 hover:text-white">People</option>
                      <option className="p-2 text-sm hover:bg-sky-500 hover:text-white">Placement</option>
                      <option className="p-2 text-sm hover:bg-sky-500 hover:text-white">Admission</option>
                    </select>
                  </div>
                  <div className="bg-white w-full py-2 flex items-center justify-between rounded text-sm font-semibold">
                    Role
                    <select className=" w-3/4 h-10 text-sm rounded-lg md:text-md focus:bg-[#F8F8F8] opacity-50">
                      <option className="p-2 text-sm hover:bg-sky-500 hover:text-white">Default</option>
                      <option className="p-2 text-sm hover:bg-sky-500 hover:text-white">Admin</option>
                    </select>
                  </div>
                  <div className="grid grid-rows-10 grid-flow-col my-2 text-sm ">
                    <label className="mt-2 my-2 font-semibold">Status</label>
                    <div className="mt-2 mx-2">
                      {' '}
                      Active
                      <input type="radio" className="mx-2 mt-1" name="isyes" value="1"></input>
                    </div>
                    <div className=" mt-2">
                      {' '}
                      Non-Active
                      <input type="radio" className="mx-2 mt-1" name="isyes" value="0"></input>
                    </div>
                  </div>
                  <button type="submit" className="w-1/6 m-12  py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#17345F] hover:bg-blue-800 focus:outoptionne-none focus:ring-2  focus:ring-blue-500">
                    Save
                  </button>
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
