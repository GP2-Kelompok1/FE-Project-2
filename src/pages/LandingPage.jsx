import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

const LandingPage = ({ bckLanding, logo }) => {
  const [cookies, setCookie] = useCookies();
  const navi = useNavigate();
  const [username, setUser] = useState("");
  const [pass, setPass] = useState("");

  // const handleLogin = () =>{
  //   axios({
  //     method: 'post',
  //     url: 'https://virtserver.swaggerhub.com/iffakhry/alta-dashboard/1.0.0/login',
  //     data: {
  //       email: username,
  //       password: pass
  //     }})
  //   .then((response)=>{
  //     console.log("ini test login",response.data)
  //  })
  // }

  // useEffect(
  //   ()=>handleLogin()
  // )

  const handleSubmit = (event) => {
    username ? navi("/dashboard") : alert("Silahkan isi terlebih dahulu");
    setCookie("Username", username, { path: "/" });
    event.preventDefault();
  };

  return (
    <div
      className="container-fluid min-h-screen bg-no-repeat bg-right"
      style={{ backgroundImage: `url(${bckLanding})` }}
    >
      <div
        className="bg-no-repeat bg-right-top mx-10 py-1"
        style={{ backgroundImage: `url(${logo})` }}
      >
        <div className="hero-content text-center py-72">
          <div className=" flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={() => handleSubmit()}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  value={username}
                  onChange={(e) => setUser(e.target.value)}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
