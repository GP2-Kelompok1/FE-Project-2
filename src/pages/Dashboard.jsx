import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import NavBar from "../components/NavBar";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "List Mentee",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Active",
      data: labels.map(() => Math.random() * 10),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Registered",
      data: labels.map(() => Math.random() * 10),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Graduate",
      data: labels.map(() => Math.random() * 10),
      borderColor: "rgba(255, 255, 0, 1)",
      backgroundColor: "rgba(255, 255, 0, 1)",
    },
  ],
};

const Dashboard = () => {
  const [mentees, setMentees] = useState([]);
  const [cookies, removeCookie] = useCookies("Username");
  const [activeCounter, setActiveCounter] = useState([]);
  const [placementCounter, setPlacementCounter] = useState("");
  const [interviewCounter, setInterviewCounter] = useState("");
  const navi = useNavigate();
  const handleLogout = () => {
    removeCookie("Token");
    removeCookie("Username");
    navi("/");
  };

  const getAllMentees = async () => {
    await axios
      .get(`http://34.87.101.252:80/mentees`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NzA2NzcxMTAsInJvbGUiOiJkZWZhdWx0IiwidXNlcklkIjoxfQ.c5PgNg1TvnPaaULdExj1m9YdllIf4h-Av7-wlEK4M-o`,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        // setMentees(res.data.data);
        handleCounter(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCounter = (res) => {
    res.data.data.map((data) => {
      if (data.status === "Active") {
        setActiveCounter((activeCounter) => [...activeCounter, data]);
      }
      if (data.status === "Placement") {
        setPlacementCounter((placementCounter) => [...placementCounter, data]);
      }

      if (data.status === "Interview") {
        setInterviewCounter((interviewCounter) => [...interviewCounter, data]);
      }
    });
  };

  console.log(activeCounter);

  useEffect(() => {
    getAllMentees();
  }, []);

  return (
    <div className="flex flex-row w-full 2xl:w-screen h-full 2xl:h-screen bg-alta-white">
      <div>
        <Sidebar />
      </div>
      <div className="w-full h-full">
        <NavBar
          user={cookies.Username}
          logout={handleLogout}
          page="Dashboard"
        />
        <div>
          <div className="text-black flex flex-col xl:flex-row pt-5 w-full">
            <div className="w-full xl:w-1/3 px-10 h-48 xl:h-72 mb-5 xl:mb-0">
              <div className="bg-white drop-shadow-xl lg:h-full border-t-8 border-alta-dark ">
                <p className="text-center pt-5">Mentee Active</p>
                <p className="text-center pt-10 text-7xl pb-6 xl:pt-20 xl:text-9xl text-alta-dark ">
                  {activeCounter.length / 2}
                </p>
              </div>
            </div>
            <div className="w-full xl:w-1/3 px-10 h-48 xl:h-72 mb-5 xl:mb-0">
              <div className="bg-white drop-shadow-xl h-full border-t-8 border-alta-dark ">
                <p className="text-center pt-5">Mentee Placement</p>
                <p className="text-center pt-10 text-7xl pb-6 xl:pt-20 xl:text-9xl text-alta-dark ">
                  {placementCounter.length / 2}
                </p>
              </div>
            </div>
            <div className="w-full xl:w-1/3 px-10 h-48 xl:h-72 mb-5 xl:mb-0">
              <div className="bg-white drop-shadow-xl h-full border-t-8 border-alta-dark ">
                <p className="text-center pt-5">Mentee Interview</p>
                <p className="text-center pt-10 text-7xl pb-6 xl:pt-20 xl:text-9xl text-alta-dark ">
                  {interviewCounter.length / 2}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-fit pb-10">
          <Line
            options={options}
            data={data}
            width={300}
            height={400}
            className="p-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
