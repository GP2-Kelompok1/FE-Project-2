import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
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

const baseUrl = `https://virtserver.swaggerhub.com/FEBRYANZAINAL/Immersive-Dashboard-OpenAPI/1.0.0/`;
const endPoint = baseUrl + `mentees?limit=10&offset=1`;
import NavBar from "../components/NavBar";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [mentees, setMentees] = useState([]);

  const getAllMentees = () => {
    axios
      .get(endPoint)
      .then((response) => {
        setMentees(response.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllMentees();
  }, []);

  console.log(mentees);
  const [cookies, removeCookie, setCookie] = useCookies();
  const navi = useNavigate();
  const handleLogout = () => {
    removeCookie("Username", { path: "/" });
    removeCookie("Pass", { path: "/" });
    navi("/");
  };
  return (
    <div className="flex flex-row w-screen h-screen bg-alta-white">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <NavBar user={cookies.Username} logout={handleLogout} />
        <div>
          <div className="text-black flex flex-row pt-5">
            <div className="w-1/3 px-10 h-72">
              <div className="bg-white drop-shadow-xl h-full border-t-8 border-alta-dark ">
                <p className="text-center pt-5">Mentee Active</p>
                <div className="h-52">
                  <ul className="h-full overflow-y-auto overflow-x-hidden">
                    {mentees?.map((mentee) => {
                      if (mentee.status === "On Class") {
                        return (
                          <div className="flex flex-row">
                            <li className="mx-5">
                              <p>{mentee.full_name}</p>
                            </li>
                          </div>
                        );
                      }
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-1/3 px-10 h-72">
              <div className="bg-white drop-shadow-xl h-full border-t-8 border-alta-dark ">
                <p className="text-center pt-5">Mentee Placement</p>
                <div className="h-52">
                  <ul className="h-full overflow-y-auto overflow-x-hidden"></ul>
                </div>
              </div>
            </div>
            <div className="w-1/3 px-10 h-72">
              <div className="bg-white drop-shadow-xl h-full border-t-8 border-alta-dark ">
                <p className="text-center pt-5">Mentee Feedback</p>
                <div className="h-52">
                  <ul className="p-5 h-full overflow-y-auto overflow-x-hidden"></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
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
