import React from "react";
import { Drawer, Box } from "@mui/material";
import NavLinks from "./NavLinks";

const Sidebar = ({ isDrawerOpen, drawerClose }) => {
  return (
    <Drawer anchor="left" open={isDrawerOpen} onClose={drawerClose}>
      <Box sx={{ width: "400px", height: "100vh", bgcolor: "#efefef" }}>
        <NavLinks drawerClose={drawerClose} />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
