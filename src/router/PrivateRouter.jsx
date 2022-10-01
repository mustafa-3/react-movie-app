import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const [currentUser, setCurrentUser] = useState(true);
  return currentUser ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRouter;
