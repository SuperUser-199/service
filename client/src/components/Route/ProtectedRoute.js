import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";


const ProtectedRoute = ({ component: Component }) => {
  const { isAuthenticated, loading ,user} = useSelector((state) => state.user);
  if (loading === undefined || loading === true) return <></>;
  // if(user && user.address === undefined) return <Navigate to="/setupprofile" />;

  return isAuthenticated === true ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
