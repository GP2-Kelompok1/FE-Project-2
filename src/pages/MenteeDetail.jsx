import React from 'react';
import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import Sidebar from '../components/Sidebar';
import NavBar from '../components/NavBar';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function MenteeDetail() {
  const [cookies, removeCookie] = useCookies();
  const navi = useNavigate();
  const handleLogout = () => {
    removeCookie('Username', { path: '/' });
    removeCookie('Pass', { path: '/' });
    navi('/');
  };
  const [username, setUser] = useState('');
  const [address, setAddress] = useState('');
  const [homeaddress, setHomeAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [emergencyname, setEmergencyName] = useState('');
  const [emergencyphone, setEmergencyPhone] = useState('');
  const [emergencystatus, setEmergencyStatus] = useState('');
  const [edutype, setEduType] = useState('');
  const [majortype, setMajorType] = useState('');
  const [graduate, setGraduate] = useState('');
  const [date, setDate] = useState('');

  const [showMenteeDetail, setMenteeDetail] = useState(false);
  const handleOnClose = () => setMenteeDetail(false);
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
                <h2 className="my-5 text-[#17345F] font-bold">Mentee Data</h2>
                <form className="mb-0 my-2 mx-3 " action="#" method="POST " onSubmit={() => handleSubmit()}>
                  <div className="grid grid-rows-10 grid-flow-col">
                    <label className="label text-sm font-medium text-gray-700">
                      <h5 className="label-text font-semibold">Name</h5>
                      <input type="text" placeholder="Almira Mahsa" value={username} onChange={(e) => setUser(e.target.value)} className="w-3/4 input input-bordered focus:bg-[#F8F8F8] opacity-50 text-sm" />
                    </label>
                  </div>
                  <div className="grid grid-rows-10 grid-flow-col">
                    <label className="label">
                      <h5 className="label-text font-semibold">Address</h5>
                      <input type="text" placeholder="Taman Tiara Regency" value={address} onChange={(e) => setAddress(e.target.value)} className="w-3/4 input input-bordered focus:bg-[#F8F8F8] opacity-50 text-sm" />
                    </label>
                  </div>
                  <div className="grid grid-rows-10 grid-flow-col">
                    <label className="label">
                      <h5 className="label-text font-semibold">Home Address</h5>
                      <input type="text" placeholder="Ploso Timur, Surabaya" value={homeaddress} onChange={(e) => setHomeAddress(e.target.value)} className="w-3/4 input input-bordered focus:bg-[#F8F8F8] opacity-50 text-sm" />
                    </label>
                  </div>
                  <div className="grid grid-rows-10 grid-flow-col">
                    <label className="label">
                      <h5 className="label-text font-semibold">Email</h5>
                      <input type="email" placeholder="almiramahsa9@gmail.com" value={username} onChange={(e) => setUser(e.target.value)} className="w-3/4 input focus:bg-[#F8F8F8] opacity-50 input-bordered text-sm" />
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
                      <input type="number" placeholder="085646087878" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-3/4 input focus:bg-[#F8F8F8] opacity-50 input-bordered text-sm" />
                    </label>
                  </div>
                  <div className="bg-white w-full py-2 flex items-center justify-between rounded text-sm font-semibold">
                    Class
                    <select className=" w-3/4 h-10 text-sm rounded-lg md:text-md focus:bg-[#F8F8F8] opacity-50">
                      <option className="p-2 text-sm hover:bg-sky-500 hover:text-white">Frontend Engineering</option>
                      <option className="p-2 text-sm hover:bg-sky-500 hover:text-white">Backend Engineering</option>
                      <option className="p-2 text-sm hover:bg-sky-500 hover:text-white">Quality Engineering</option>
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
                  <h2 className="mt-10 mb-5 text-[#17345F] font-bold">Emergency Data</h2>
                  <div className="grid grid-rows-10 grid-flow-col">
                    <label className="label">
                      <h5 className="label-text font-semibold">Name</h5>
                      <input type="text" placeholder="Loid Roger" value={emergencyname} onChange={(e) => setEmergencyName(e.target.value)} className="w-3/4 input input-bordered text-sm focus:bg-[#F8F8F8] opacity-50" />
                    </label>
                  </div>
                  <div className="grid grid-rows-10 grid-flow-col">
                    <label className="label">
                      <h5 className="label-text font-semibold">Phone</h5>
                      <input type="number" placeholder="0812345678" value={emergencyphone} onChange={(e) => setEmergencyPhone(e.target.value)} className="w-3/4 input input-bordered text-sm focus:bg-[#F8F8F8] opacity-50" />
                    </label>
                  </div>
                  <div className="">
                    <div className="bg-white w-full flex items-center justify-between rounded font-semibold">
                      Status
                      <select className=" w-3/4 h-12  rounded-lg md:text-md text-sm focus:bg-[#F8F8F8] opacity-50">
                        <option className="text-sm ">Orangtua</option>
                        <option className="p-2 text-sm hover:bg-sky-500 hover:text-white">Kerabat Dekat</option>
                        <option className="p-2 text-sm hover:bg-sky-500 hover:text-white">Saudara Kandung</option>
                        <option className="p-2 text-sm hover:bg-sky-500 hover:text-white">Kerabat Dekat</option>
                      </select>
                    </div>
                  </div>
                  <h2 className="mt-10 mb-5 text-[#17345F] font-bold">Education Data</h2>
                  <div className="grid grid-rows-10 grid-flow-col my-2 text-sm ">
                    <label className="mt-2 my-2 mr-5 font-semibold">Type</label>
                    <div className="mt-2">
                      {' '}
                      Informatics
                      <input type="radio" className="mx-2 mt-1" name="isyes" value="1"></input>
                    </div>
                    <div className=" mt-2">
                      {' '}
                      Non-Informatics
                      <input type="radio" className="mx-2 mt-1" name="isyes" value="0"></input>
                    </div>
                  </div>
                  <div className="grid grid-rows-10 grid-flow-col text-sm ">
                    <label className="label">
                      <h5 className="label-text font-semibold">Education</h5>
                      <input type="text" placeholder="Informatics" value={majortype} onChange={(e) => setMajorType(e.target.value)} className="w-3/4 focus:bg-[#F8F8F8] opacity-50 input input-bordered text-sm" />
                    </label>
                  </div>
                  <div className="grid grid-rows-10 grid-flow-col">
                    <label className="label">
                      <h5 className="label-text font-semibold">Graduate</h5>
                      <input type="date" onChange={(e) => setDate(e.target.value)} className="w-3/4  input input-bordered text-sm focus:bg-[#F8F8F8] opacity-50" />
                    </label>
                  </div>
                  <div className="flex flex-col justify-end items-end">
                    <label htmlFor="my-modal-6" className="btn m-10 bg-alta-dark text-sm hover:bg-blue-800 focus:outoptionne-none focus:ring-2  focus:ring-blue-500">
                      Edit Data
                    </label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                      <div className="modal-box">
                        <div className="bg-white p-5 rounded w-4/5">
                          <h1 className="mb-5 font-semibold jutify-content-center text-center text-xl text-alta-dark ">Add New Mentee Data</h1>

                          <div className="flex flex-col justify-items-center">
                            <input type="text" className="border border-alta-dark p-2 rounded mb-5" placeholder="name" />
                            <input type="text" className="border border-alta-dark p-2 rounded mb-5" placeholder="address" />
                            <input type="text" className="border border-alta-dark p-2 rounded mb-5" placeholder="home address" />
                            <input type="text" className="border border-alta-dark p-2 rounded mb-5" placeholder="email@example.com" />{' '}
                            <input type="text" className="border border-alta-dark p-2 rounded mb-5" placeholder="email@example.com" />
                            <input type="text" className="border border-alta-dark p-2 rounded mb-5" placeholder="Phone" /> <input type="text" className="border border-alta-dark p-2 rounded mb-5" placeholder="email@example.com" />
                          </div>
                        </div>
                        <div className="modal-action flex flex-col justify-center items-center ">
                          <label htmlFor="my-modal-6" className="btn bg-alta-dark hover:bg-blue-800 focus:outoptionne-none focus:ring-2  focus:ring-blue-500">
                            Save
                          </label>
                        </div>
                      </div>
                    </div>
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

export default MenteeDetail;
