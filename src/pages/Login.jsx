import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, signInWithGoogle } from "../auth/Firebase";
import Appbar from "../components/Appbar";
import Navbar from "../components/Navbar";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password, navigate);
  };
  return (
    <>
      <Appbar />
      <div className="d-flex login-container  ">
        <div className="login-image d-none d-md-block "></div>

        <div className=" form-container container d-flex justify-content-center align-items-center flex-column">
          <h5 className="display-4 mt-4 login-title">Login</h5>
          <form className="w-100 form-login login-form" onSubmit={handleSubmit}>
            <div className="mb-3 text-center">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="email"
                placeholder="Enter your email.."
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3 text-center">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password.."
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center ">
              <button type="submit" className="btn btn-primary btn-login ">
                Submit
              </button>
            </div>
            <div className="text-center ">
              <button
                type="submit"
                className="btn btn-primary btn-login mt-3 "
                onClick={() => signInWithGoogle(navigate)}
              >
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
