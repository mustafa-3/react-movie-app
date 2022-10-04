import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../auth/Firebase";
import { AuthContext } from "../context/AuthContextProvider";
import { toastWarnNotify } from "../helpers/Toastify";

const Appbar = ({ setQuery, getData, query }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg bg-light  display-6">
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/">
          Movie App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse text-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {!currentUser && (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}

            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
            {currentUser && (
              <li className="nav-item">
                <button
                  className="ms-2 btn btn-primary"
                  onClick={() => logOut()}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
          {currentUser && (
            <h5 className="me-4 display-6">{currentUser.displayName}</h5>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Appbar;
