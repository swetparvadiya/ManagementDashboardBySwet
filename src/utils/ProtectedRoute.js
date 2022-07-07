import React from "react";
import { Route } from "react-router";
import { useSelector } from "react-redux";


const ProtectedRoute = ({ component: Component }) => {


  const user = useSelector((state) => state.auth.value);


  return (
    <Route
      render={(props) => {
        if (user) {
          return <Component {...props} />;
        } else {
          return ;
        }
      }}
    />
  );
};

export default ProtectedRoute;
