import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const MenteeLog = () => {
  const [cookies, removeCookie] = useCookies("Username");
  const navi = useNavigate();
  const handleLogout = () => {
    removeCookie("Username");
    removeCookie("Pass", { path: "/" });
    navi("/");
  };

  return (
    <div className="flex flex-row bg-alta-white w-full h-full xl:h-full">
      <div>
        <Sidebar />
      </div>
      <div className="w-full h-full bg-alta-light">
        <NavBar
          user={cookies.Username}
          logout={() => handleLogout()}
          page="Mentee log"
        />
        <div className="bg-alta-white h-max m-5">
          <div className="text-black p-10">
            {/* Data diri mentee */}
            <p className="text-2xl ">Hello Rachman Kamil ! (Kamil)</p>
            <div className="flex flex-col xl:flex-row justify-between pt-2">
              <div className="flex-1">
                <p>Quality Engineer Batch 9</p>
                <p>IPA</p>
                <p>SMA Negeri 4 Surabaya</p>
              </div>
              <div className="pr-40 pt-5 xl:pt-0 flex-auto">
                <p>Phone: 0812345678910</p>
                <p>Discord: brother#123</p>
                <p>Telegram: @ngabers</p>
                <p>Email: ngabers@gmailcom</p>
              </div>
            </div>
            {/* Log Feedback Mentee */}
            <div className="text-alta-dark font-medium">
              <div className="grid justify-items-start xl:justify-items-end pt-5">
                <label
                  htmlFor="my-modal"
                  className="btn bg-alta-dark text-white"
                >
                  ADD NEW LOG
                </label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal text-black">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Add new log</h3>
                    <div className="flex flex-col">
                      <label for="fname">User name:</label>
                      <input type="text" id="fname" name="fname" />
                    </div>
                    <div className="flex justify-between">
                      <div className="m-0 p-0">
                        <label for="fname">User name:</label>
                        <input
                          type="text"
                          id="fname"
                          name="fname"
                          className="basis-1/2"
                        />
                      </div>
                      <div className="p-0">
                        <label for="fname">Date:</label>
                        <input
                          type="date"
                          id="fname"
                          name="fname"
                          className="basis-1/4 w-full"
                        />
                      </div>
                    </div>
                    <div className="pt-2">
                      <label for="text-area">Feedback:</label>
                      <textarea
                        id="w3review"
                        name="w3review"
                        rows="4"
                        cols="50"
                        className="w-full"
                      ></textarea>
                    </div>

                    <div className="modal-action">
                      <label htmlFor="my-modal" className="btn">
                        ADD LOG
                      </label>
                      <label htmlFor="my-modal" className="btn">
                        CANCEL
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ul>
                  <li className="h-2/6 w-full shadow-xl rounded-xl">
                    <div className="flex flex-col xl:flex-row mt-5 p-5">
                      <div className="basis-1/2 pb-2 xl:pb-0">
                        <p>
                          <span className="font-bold">Status:</span> End of
                          Session
                        </p>
                        <p>
                          <span className="font-bold">User:</span> Bagas
                        </p>
                        <p>
                          <span className="font-bold">Date:</span> Sept 29,
                          2022.
                        </p>
                      </div>
                      <div className="xl:border-l-4 xl:pl-10">
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Adipisci, quia laboriosam dolore sed facere
                          accusantium illo dolorem! Laudantium, cum asperiores
                          aspernatur maiores, officia ipsum iusto vero neque eos
                          cumque consequatur.
                        </p>
                        <p className="pt-5">
                          Changed Status: Continue Section 2
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="h-2/6 w-full shadow-xl rounded-xl">
                    <div className="flex flex-col xl:flex-row mt-5 p-5">
                      <div className="basis-1/2 pb-2 xl:pb-0">
                        <p>
                          <span className="font-bold">Status:</span> End of
                          Session
                        </p>
                        <p>
                          <span className="font-bold">User:</span> Bagas
                        </p>
                        <p>
                          <span className="font-bold">Date:</span> Sept 29,
                          2022.
                        </p>
                      </div>
                      <div className="xl:border-l-4 xl:pl-10">
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Adipisci, quia laboriosam dolore sed facere
                          accusantium illo dolorem! Laudantium, cum asperiores
                          aspernatur maiores, officia ipsum iusto vero neque eos
                          cumque consequatur.
                        </p>
                        <p className="pt-5">
                          Changed Status: Continue Section 2
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="h-2/6 w-full shadow-xl rounded-xl">
                    <div className="flex flex-col xl:flex-row mt-5 p-5">
                      <div className="basis-1/2 pb-2 xl:pb-0">
                        <p>
                          <span className="font-bold">Status:</span> End of
                          Session
                        </p>
                        <p>
                          <span className="font-bold">User:</span> Bagas
                        </p>
                        <p>
                          <span className="font-bold">Date:</span> Sept 29,
                          2022.
                        </p>
                      </div>
                      <div className="xl:border-l-4 xl:pl-10">
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Adipisci, quia laboriosam dolore sed facere
                          accusantium illo dolorem! Laudantium, cum asperiores
                          aspernatur maiores, officia ipsum iusto vero neque eos
                          cumque consequatur.
                        </p>
                        <p className="pt-5">
                          Changed Status: Continue Section 2
                        </p>
                      </div>
                    </div>
                  </li>
                  <div>
                    <p className="text-center pt-10">Showing # to #</p>
                  </div>
                  <div className="flex flex-row justify-center pt-3">
                    <div>
                      <button className="pr-2">Prev</button>
                      <div className="btn-group bg-white">
                        <button className="btn bg-white btn-xs border-none">
                          1
                        </button>
                        <button className="btn bg-white btn-xs border-none">
                          2
                        </button>
                        <button className="btn bg-white btn-xs border-none">
                          3
                        </button>
                        <button className="btn bg-white btn-xs border-none">
                          4
                        </button>
                      </div>
                      <button className="pl-2">Next</button>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenteeLog;
