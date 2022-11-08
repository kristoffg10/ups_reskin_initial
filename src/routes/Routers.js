import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import RegisterDealer from "../pages/registration/dealer/RegistrationDealer";
import RegisterRetailer from "../pages/registration/retailer/RegistrationRetailer";
import HelpPage from "../pages/HelpPage";
import Dashboard from "../pages/Dashboard";
import LayoutMiddleContent from "../components/Layout/LayoutMiddleContent";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/help" element={<HelpPage/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/registerDealer" element={<RegisterDealer />} />
      <Route path="/registerRetailer" element={<RegisterRetailer />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/layoutMiddle" element={<LayoutMiddleContent />} />
    </Routes>
  );
};

export default Routers;
