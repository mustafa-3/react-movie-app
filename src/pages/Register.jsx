import React from "react";

const Register = () => {
  return (
    <div className="d-flex login-container  ">
      
      <div className="login-image d-none d-md-block"></div>
      
      <div className=" form-container container d-flex justify-content-center align-items-center flex-column">
      <h5 className="display-4 mt-4 login-title">Register</h5>
        <form className="w-100  form-login">
          <div className="mb-3 text-center">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              aria-describedby="emailHelp"
              placeholder="Enter your first name.."
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
              aria-describedby="emailHelp"
              placeholder="Enter your last name.."
            />
          </div>
          <div className="mb-3 text-center">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email adress.."
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
  );
};

export default Register;