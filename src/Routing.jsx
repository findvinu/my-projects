import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import ReactProjects from "./pages/ReactProjects";
import JSProjects from "./pages/JSProjects";
import TSProjects from "./pages/TSProjects";
import NodeProjects from "./pages/NodeProjects";
import HtmlProjects from "./pages/HtmlProjects";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/react-projects" element={<ReactProjects />} />
      <Route path="/js-projects" element={<JSProjects />} />
      <Route path="/ts-projects" element={<TSProjects />} />
      <Route path="/node-projects" element={<NodeProjects />} />
      <Route path="/html-projects" element={<HtmlProjects />} />
    </Routes>
  );
};
