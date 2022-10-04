import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../auth/Firebase";
import Appbar from "../components/Appbar";

import Navbar from "../components/Navbar";

const Register = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();

  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = `${firstName} ${lastName}`;
    signUp(email, password, navigate, displayName);
  };

  return (
    <>
      <Appbar />
      <div className="d-flex login-container  ">
        <div className="login-image d-none d-md-block"></div>

        <div className=" form-container container d-flex justify-content-center align-items-center flex-column">
          <h5 className="display-4 mt-4 login-title">Register</h5>
          <form className="w-100  form-login" onSubmit={handleSubmit}>
            <div className="mb-3 text-center">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                aria-describedby="firstName"
                placeholder="Enter your first name.."
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-3 text-center">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                aria-describedby="lastName"
                placeholder="Enter your last name.."
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-3 text-center">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email adress.."
                required
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
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
