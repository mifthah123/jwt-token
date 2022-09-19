import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Admin from "./Admin";
import Users from "./Users";
import "./App.css";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Users /> },
    { path: "/admin", element: <Admin /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
