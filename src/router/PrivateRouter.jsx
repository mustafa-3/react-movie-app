import React, { useContext, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

const PrivateRouter = () => {
  const { currentUser } = useContext(AuthContext);
  // const [currentUser, setCurrentUser] = useState(true);
  return currentUser ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRouter;
