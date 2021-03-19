import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate
} from "react-router-dom";
import firebase from "firebase/app"

const ProtectedRoute = ({ component: Component, redirectTo, isAuth, path, ...props }) => {
  var user = firebase.auth().currentUser;
  if (user) {
    isAuth = true
  } else {
    isAuth = false
  }
  
  if(!isAuth) {
      return <Navigate to={redirectTo} />;
  }
  return <Route path={path} element={<Component />} />
};

export default ProtectedRoute;