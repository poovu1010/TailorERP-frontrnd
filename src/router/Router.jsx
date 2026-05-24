import React, { useContext } from "react";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Register from "../pages/Auth/Register";
import Signup from "../pages/Auth/Signup";

import AuthDetails from "../context/AuthContext";

import ContentLayout from "../Layout/ContentLayout";
// import DashBoard from "../pages/DashBoard";
import DashboardGrid from "../pages/DashBoard";

import AuthLayout from "../Layout/AuthLayout";

const Router = () => {
  const { authData } = useContext(AuthDetails);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Auth" element={<AuthLayout />}>
          <Route index element={<Register />} />
          <Route path="login" element={<Signup />} />
        </Route>

        <Route path="/Dashboard" element={<ContentLayout />}>
          <Route index element={<DashboardGrid />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
