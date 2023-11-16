import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./appRoutes";
import Home from "../pages/Home/Home";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Profile from "../pages/profile/Profile";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path={AppRoutes.BASE_URL} element={<Home />} />
      <Route path={AppRoutes.HOME} element={<Home />} />
      <Route path={AppRoutes.REGISTER} element={<Register />} />
      <Route path={AppRoutes.LOGIN} element={<Login />} />
      <Route path={AppRoutes.PROFILE} element={<Profile />} />
    </Routes>
  );
};

export default CustomRoutes;
