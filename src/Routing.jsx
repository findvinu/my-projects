import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/my-projects" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};
