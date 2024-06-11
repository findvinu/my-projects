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
      <Route path="/my-projects/" element={<Dashboard />} />
      <Route path="/my-projects/profile" element={<Profile />} />
      <Route path="/my-projects/react-projects" element={<ReactProjects />} />
      <Route path="/my-projects/js-projects" element={<JSProjects />} />
      <Route path="/my-projects/ts-projects" element={<TSProjects />} />
      <Route path="/my-projects/node-projects" element={<NodeProjects />} />
      <Route path="/my-projects/html-projects" element={<HtmlProjects />} />
      <Route path="*" element={<div>Not Found Page</div>} />
    </Routes>
  );
};
