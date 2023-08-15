import React from 'react';
import {Redirect} from "react-router-dom";

const ProtectedRoute = ({ authenticated, children, location }) => {
  if (!authenticated) {
    return ( <Redirect
    to={{
      pathname: '/login',
      state: { from: location }
    }}
  />
    );
  }

  return children;
};
  
export default ProtectedRoute;

