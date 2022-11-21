import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from "./pages/login/login";
import Register from "./pages/register/register";

const RoutesLBQ = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesLBQ;
