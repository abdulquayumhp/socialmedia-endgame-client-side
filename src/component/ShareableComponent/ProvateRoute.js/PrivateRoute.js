import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ContextAuth } from "../../../AuthContext/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(ContextAuth);
  const location = useLocation();

  if (loading) {
    return;
  }
  if (user?.uid) {
    return children;
  }
  return <Navigate to="/SignIn" state={{ from: location }} />;
};

export default PrivateRoute;
