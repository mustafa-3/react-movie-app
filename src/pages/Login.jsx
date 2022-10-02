import React from "react";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="d-flex login-container  ">
        <div className="login-image d-none d-md-block "></div>

        <div className=" form-container container d-flex justify-content-center align-items-center flex-column">
          <h5 className="display-4 mt-4 login-title">Login</h5>
          <form className="w-100 form-login login-form">
            <div className="mb-3 text-center">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your email.."
              />
            </div>
            <div className="mb-3 text-center">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter your password.."
              />
            </div>
            <div className="text-center ">
              <button type="submit" className="btn btn-primary btn-login ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
