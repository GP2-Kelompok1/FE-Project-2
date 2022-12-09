import React from "react";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Radio } from "@material-tailwind/react";
import axios from "axios";
import { useSelect } from "@material-tailwind/react";
function MenteeDetail() {
  const [cookies, removeCookie] = useCookies();
  const navi = useNavigate();
  const handleLogout = () => {
    removeCookie("Username", { path: "/" });
    removeCookie("Pass", { path: "/" });
    navi("/");
  };
  const [username, setUser] = useState("");
  const [address, setAddress] = useState("");
  const [homeaddress, setHomeAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emergencyname, setEmergencyName] = useState("");
  const [emergencyphone, setEmergencyPhone] = useState("");
  const [emergencystatus, setEmergencyStatus] = useState("");
  const [edutype, setEduType] = useState("");
  const [selects, setSelects] = useState("");
  const [graduate, setGraduate] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [telegram, setTelegram] = useState("");
  const [educationmajor, setEducationMajor] = useState("");
  const [institution, setInstitution] = useState("");
  const [degree, setDegree] = useState("");
  const [menteestatus, setMenteeStatus] = useState("");
  const [id, setId] = useState();

  const handleSubmit = (event) => {
    axios
      .get(
        `http://34.87.101.252:80/mentees`,
        {
          mentee_name: username,
          class_id: id,
          email: email,
          phone: phone,
          current_address: address,
          home_address: homeaddress,
          telegram: telegram,
          gender: gender,
          status: menteestatus,
          education_type: edutype,
          education_major: educationmajor,
          education_graduate: "2022",
          education_institution: institution,
          emergency_name: emergencyname,
          emergency_phone: emergencyphone,
          emergency_status: emergencystatus,
        },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NzA3MzU5NzgsInJvbGUiOiJkZWZhdWx0IiwidXNlcklkIjoxfQ.3jpYCkt5MrAYBEkQjWhRwnlPj9S4VifA03DoeU1_trk`,
          },
        }
      )
      .then((response) => {
        console.log(response.data.data);
      });

    event.preventDefault();
  };

  return (
    <div className="flex flex-row bg-alta-white w-full h-full">
      <div>
        <Sidebar />
      </div>
      <div className="w-full bg-alta-light">
        <NavBar
          user={cookies.Username}
          logout={handleLogout}
          page="Mentee Detail"
        />
        <div className="grid">
          <div className="flex justify-start items-start sm:mt-5">
            <AiOutlineArrowLeft size={20} className="ml-5" />
            <button
              onClick={() => navi(-1)}
              className="text-md font-medium text-alta-dark hover:text-blue-800 mx-5 "
            >
              Back
            </button>
          </div>
        </div>
        <div className="bg-alta-white h-5/6 m-5">
          <div>
            <div className=" mt-10 ">
              <div className="w-full bg-white py-8 px-6 shadow rounded-lg sm:px-10 ">
                <h2 className="my-5 text-alta-dark font-bold text-xl">
                  Mentee Data
                </h2>

                <form
                  onSubmit={() => handleSubmit()}
                  className="mb-0 my-2 mx-3 "
                  action="#"
                  method="POST "
                >
                  <div className="grid grid-rows-10 grid-flow-col">
                    <label className="label text-sm font-medium text-gray-700 ">
                      <h5 className="label-text font-semibold flex-col sm:flex-row text-alta-dark">
                        Name
                      </h5>
                      <input
                        type="text"
                        placeholder="Almira Mahsa"
                        value={username}
                        onChange={(e) => setUser(e.target.value)}
                        className="w-3/4 input input-bordered focus:bg-[#F8F8F8] opacity-50 text-sm"
                      />
                    </label>
                  </div>
                  <div className="grid grid-rows-10 grid-flow-col">
                    <label className="label text-sm font-medium text-gray-700 ">
                      <h5 className="label-text font-semibold flex-col sm:flex-row text-alta-dark">
                        Mentee Id
                      </h5>
                      <input
                        type="number"
                        placeholder="29"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        className="w-3/4 input input-bordered focus:bg-[#F8F8F8] opacity-50 text-sm"
                      />
                    </label>
                  </div>
                  <div className="grid grid-rows-10 grid-flow-col">
                    <label className="label text-sm font-medium text-gray-700 ">
                      <h5 className="label-text font-semibold flex-col sm:flex-row text-alta-dark">
                        Mentee Status
                      </h5>
                      <input
                        type="text"
                        placeholder="Placement"
                        value={menteestatus}
                        onChange={(e) => setMenteeStatus(e.target.value)}
                        className="w-3/4 input input-bordered focus:bg-[#F8F8F8] opacity-50 text-sm"
                      />
                    </label>
                  </div>
                  <div className="grid grid-rows-10 grid-flow-col">
                    <label className="label">
                      <h5 className="label-text font-semibold text-alta-dark">
                        Address
                      </h5>
                      <input
                        type="text"
                        placeholder="Surabaya"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-3/4 input input-bordered focus:bg-[#F8F8F8] opacity-50 text-sm"
                      />
                    </label>
                  </div>
                  <div className="grid grid-rows-10 grid-flow-col">
                    <label className="label">
                      <h5 className="label-text font-semibold">Home Address</h5>
                      <input
                        type="text"
                        placeholder="Surabaya"
                        value={homeaddress}
                        onChange={(e) => setHomeAddress(e.target.value)}
                        className="w-3/4 input input-bordered focus:bg-[#F8F8F8] opacity-50 text-sm"
                      />
                    </label>
                  </div>
                  <div className="grid grid-rows-10 grid-flow-col">
                    <label className="label">
                      <h5 className="label-text font-semibold">Email</h5>
                      <input
                        type="email"
                        placeholder="Almira@mail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-3/4 input focus:bg-[#F8F8F8] opacity-50 input-bordered text-sm"
                      />
                    </label>
                  </div>
                  <div className="grid grid-rows-10 grid-flow-col my-2 text-sm ">
                    <label className="mt-2 my-2 font-semibold">Gender</label>
                    <div className="mt-2">
                      <Radio
                        value="female"
                        name="gender"
                        label="Female"
                        className="mx-2 mt-1"
                        onChange={() => setGender(e.target.value)}
                      />
                    </div>
                    <div className="mt-2">
                      <Radio
                        value="male"
                        name="gender"
                        label="Male"
                        className="mx-2 mt-1"
                        onChange={(e) => setGender(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-rows-10 grid-flow-col">
                    <label className="label">
                      <h5 className="label-text font-semibold">Phone Number</h5>
                      <input
                        type="number"
                        placeholder="085646087878"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-3/4 input focus:bg-[#F8F8F8] opacity-50 input-bordered text-sm"
                      />
                    </label>
                  </div>
                  <div className="grid grid-rows-10 grid-flow-col">
                    <label className="label">
                      <h5 className="label-text font-semibold">Telegram</h5>
                      <input
                        type="text"
                        placeholder="Almiramm"
                        value={telegram}
                        onChange={(e) => setTelegram(e.target.value)}
                        className="w-3/4 input focus:bg-[#F8F8F8] opacity-50 input-bordered text-sm"
                      />
                    </label>
                  </div>
                  <div className="bg-white w-full py-2 flex items-center justify-between rounded text-sm font-semibold">
                    Class
                    <select
                      value={selects}
                      onChange={(e) => setSelects(e.target.value)}
                      className=" w-3/4 h-10 text-sm rounded-lg md:text-md focus:bg-[#F8F8F8] opacity-50 "
                    >
                      <option
                        className="p-2 text-sm hover:bg-sky-500 hover:text-white"
                        label="FE"
                      >
                        Frontend Engineer
                      </option>
                      <option
                        className="p-2 text-sm hover:bg-sky-500 hover:text-white"
                        label="BE"
                      >
                        Backend Engineer
                      </option>
                      <option
                        className="p-2 text-sm hover:bg-sky-500 hover:text-white"
                        label="QA"
                      >
                        Quality Assurance
                      </option>
                    </select>
                  </div>
                  <div className="grid grid-rows-10 grid-flow-col my-2 text-sm ">
                    <label className="mt-2 my-2 font-semibold">Status</label>
                    <div className="mt-2">
                      <Radio
                        value="active"
                        name="status"
                        label="Active"
                        className="mx-2 mt-1"
                        onChange={(e) => setStatus(e.target.value)}
                      />
                    </div>
                    <div className="mt-2">
                      <Radio
                        value="non_active"
                        name="status"
                        label="Non- Active"
                        className="mx-2 mt-1"
                        onChange={(e) => setStatus(e.target.value)}
                      />
                    </div>
                  </div>
                  <h2 className="mt-10 mb-5 my-5 text-[#17345F] font-bold text-xl">
                    Emergency Data
                  </h2>
                  <div className="grid grid-rows-10 grid-flow-col text-alta-dark">
                    <label className="label">
                      <h5 className="label-text font-semibold">Nurii</h5>
                      <input
                        type="text"
                        placeholder="Emergency name"
                        value={emergencyname}
                        onChange={(e) => setEmergencyName(e.target.value)}
                        className="w-3/4 input input-bordered text-sm focus:bg-[#F8F8F8] opacity-50"
                      />
                    </label>
                  </div>
                  <div className="grid grid-rows-10 grid-flow-col">
                    <label className="label">
                      <h5 className="label-text font-semibold">081234567</h5>
                      <input
                        type="number"
                        placeholder="Phone Number"
                        value={emergencyphone}
                        onChange={(e) => setEmergencyPhone(e.target.value)}
                        className="w-3/4 input input-bordered text-sm focus:bg-[#F8F8F8] opacity-50"
                      />
                    </label>
                  </div>

                  <div className="bg-white w-full py-2 flex items-center justify-between rounded text-sm font-semibold">
                    Emergency Status
                    <select
                      value={emergencystatus}
                      onChange={(e) => setEmergencyStatus(e.target.value)}
                      className=" w-3/4 h-10 text-sm rounded-lg md:text-md focus:bg-[#F8F8F8] opacity-50 "
                    >
                      <option
                        className="p-2 text-sm hover:bg-sky-500 hover:text-white"
                        label=" Orangtua"
                      >
                        Orangtua
                      </option>
                      <option
                        className="p-2 text-sm hover:bg-sky-500 hover:text-white"
                        label="Saudara Kandung"
                      >
                        Saudara Kandung
                      </option>
                      <option
                        className="p-2 text-sm hover:bg-sky-500 hover:text-white"
                        label="Kerabat Dekat"
                      >
                        Kerabat Dekat
                      </option>
                    </select>
                  </div>

                  <h2 className="mt-10 mb-10  text-[#17345F] font-bold text-xl">
                    Education Data
                  </h2>
                  <div className="grid grid-rows-10 grid-flow-col my-2 text-sm ">
                    <label className="mt-2 my-2 font-semibold">
                      Background
                    </label>
                    <div className="mt-2">
                      <Radio
                        value="informatics"
                        name="eduType"
                        label="Informatics"
                        className="mx-2 mt-1"
                        onChange={(e) => setEduType(e.target.value)}
                      />
                    </div>
                    <div className="mt-2">
                      <Radio
                        value="non_informatics"
                        name="eduType"
                        label="Non-Informatics"
                        onChange={(e) => setEduType(e.target.value)}
                        className="mx-2 mt-1"
                      />
                    </div>
                  </div>

                  <div className="bg-white w-full py-2 flex items-center justify-between rounded text-sm font-semibold">
                    Education Degree
                    <select
                      value={degree}
                      onChange={(e) => setDegree(e.target.value)}
                      className=" w-3/4 h-10 text-sm rounded-lg md:text-md focus:bg-[#F8F8F8] opacity-50 "
                    >
                      <option
                        className="p-2 text-sm hover:bg-sky-500 hover:text-white"
                        label=" SMA/SMK"
                      >
                        SMA/SMK
                      </option>
                      <option
                        className="p-2 text-sm hover:bg-sky-500 hover:text-white"
                        label="Sarjana"
                      >
                        Sarjana
                      </option>
                      <option
                        className="p-2 text-sm hover:bg-sky-500 hover:text-white"
                        label="Magister"
                      >
                        Magister
                      </option>
                    </select>
                  </div>

                  <div className="grid grid-rows-10 grid-flow-col">
                    <label className="label">
                      <h5 className="label-text font-semibold">
                        Education Background
                      </h5>
                      <input
                        type="text"
                        placeholder="Geomatics"
                        value={educationmajor}
                        onChange={(e) => setEducationMajor(e.target.value)}
                        className="w-3/4 input input-bordered focus:bg-[#F8F8F8] opacity-50 text-sm"
                      />
                    </label>
                  </div>
                  <div className="grid grid-rows-10 grid-flow-col">
                    <label className="label">
                      <h5 className="label-text font-semibold">
                        Education Institute
                      </h5>
                      <input
                        type="text"
                        placeholder="ITS Surabaya"
                        value={institution}
                        onChange={(e) => setInstitution(e.target.value)}
                        className="w-3/4 input input-bordered focus:bg-[#F8F8F8] opacity-50 text-sm"
                      />
                    </label>
                  </div>

                  <div className="grid grid-rows-10 grid-flow-col">
                    <label className="label">
                      <h5 className="label-text font-semibold">Graduate</h5>
                      <input
                        type="text"
                        value={graduate}
                        placeholder="2022"
                        onChange={(e) => setGraduate(e.target.value)}
                        className="w-3/4  input input-bordered text-sm focus:bg-[#F8F8F8] opacity-50"
                      />
                    </label>
                  </div>
                  <div className="grid">
                    <div className="flex justify-end items-end">
                      <button
                        type="submit"
                        className=" sm:w-1/12 m-12  py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-alta-dark hover:bg-blue-800 focus:outoptionne-none focus:ring-2  focus:ring-blue-500"
                      >
                        Edit
                      </button>
                      <button
                        htmlFor="my-modal-4"
                        type="submit"
                        className=" sm:w-1/12 m-12  py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-alta-dark hover:bg-blue-800 focus:outoptionne-none focus:ring-2  focus:ring-blue-500"
                      >
                        Edit
                      </button>
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
