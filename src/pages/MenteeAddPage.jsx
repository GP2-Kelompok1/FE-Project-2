import React from 'react';
import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

function MenteeAddPage() {
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
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className=" mt-10 ">
      <div className="w-full bg-white py-8 px-6 shadow rounded-lg sm:px-10">
        <h2 className="my-5 text-[#17345F] font-bold">Mentee Data</h2>
        <form className="mb-0 my-2 mx-3 " action="#" method="POST " onSubmit={() => handleSubmit()}>
          <div className="grid grid-rows-10 grid-flow-col">
            <label className="label text-sm font-medium text-gray-700">
              <h5 className="label-text font-semibold">Name</h5>
              <input type="text" placeholder="Name" value={username} onChange={(e) => setUser(e.target.value)} className="w-3/4 input input-bordered focus:bg-[#F8F8F8] opacity-50 text-sm" />
            </label>
          </div>
          <div className="grid grid-rows-10 grid-flow-col">
            <label className="label">
              <h5 className="label-text font-semibold">Address</h5>
              <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} className="w-3/4 input input-bordered focus:bg-[#F8F8F8] opacity-50 text-sm" />
            </label>
          </div>
          <div className="grid grid-rows-10 grid-flow-col">
            <label className="label">
              <h5 className="label-text font-semibold">Home Address</h5>
              <input type="text" placeholder="Home Address" value={homeaddress} onChange={(e) => setHomeAddress(e.target.value)} className="w-3/4 input input-bordered focus:bg-[#F8F8F8] opacity-50 text-sm" />
            </label>
          </div>
          <div className="grid grid-rows-10 grid-flow-col">
            <label className="label">
              <h5 className="label-text font-semibold">Email</h5>
              <input type="email" placeholder="Email" value={username} onChange={(e) => setUser(e.target.value)} className="w-3/4 input focus:bg-[#F8F8F8] opacity-50 input-bordered text-sm" />
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

          <h2 className="my-5 text-[#17345F] font-bold">Emergency Data</h2>
          <div className="grid grid-rows-10 grid-flow-col">
            <label className="label">
              <h5 className="label-text font-semibold">Name</h5>
              <input type="text" placeholder="Emergency name" value={emergencyname} onChange={(e) => setEmergencyName(e.target.value)} className="w-3/4 input input-bordered text-sm focus:bg-[#F8F8F8] opacity-50" />
            </label>
          </div>
          <div className="grid grid-rows-10 grid-flow-col">
            <label className="label">
              <h5 className="label-text font-semibold">Phone</h5>
              <input type="number" placeholder="Phone Number" value={emergencyphone} onChange={(e) => setEmergencyPhone(e.target.value)} className="w-3/4 input input-bordered text-sm focus:bg-[#F8F8F8] opacity-50" />
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
          <h2 className="my-5 text-[#17345F] font-bold">Education Data</h2>
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
              <input type="text" placeholder="Educational Background" value={majortype} onChange={(e) => setMajorType(e.target.value)} className="w-3/4 focus:bg-[#F8F8F8] opacity-50 input input-bordered text-sm" />
            </label>
          </div>
          <div className="grid grid-rows-10 grid-flow-col">
            <label className="label">
              <h5 className="label-text font-semibold">Graduate</h5>
              <input type="date" onChange={(e) => setDate(e.target.value)} className="w-3/4  input input-bordered text-sm focus:bg-[#F8F8F8] opacity-50" />
            </label>
          </div>
          <div>
            <button type="submit" className="w-1/12 m-12  py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#17345F] hover:bg-blue-800 focus:outoptionne-none focus:ring-2  focus:ring-blue-500">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MenteeAddPage;
